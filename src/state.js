import { PARTS, PART_MAP, TUNE, SURVIVAL_DECAY, JOB_MAP, clamp } from './data.js';

const SAVE_KEY = 'hardstart.save.v1';

function freshParts() {
  const o = {};
  for (const p of PARTS) o[p.id] = { installed: false, torque: 0, loose: false, stripped: false, perfect: false };
  return o;
}

export function createState() {
  return {
    version: 1,
    started: false,
    mode: 'title',
    cash: 40,
    day: 1,
    minutes: 6 * 60 + 40,
    health: 100,
    survival: { hunger: 68, thirst: 62, fatigue: 28, stress: 22, hygiene: 58 },
    parts: freshParts(),
    tune: { mixture: TUNE.mixture.start, valve: TUNE.valve.start, timing: TUNE.timing.start, running: false, started: false, quality: 0 },
    tractor: { fuel: 68, damage: 0, atHome: true },
    job: null,
    jobsDone: 0,
    stats: { bolts: 0, stripped: 0, loose: 0, distance: 0, earned: 0, crashes: 0, nearMisses: 0 },
    cause: '',
    lastSaved: 0
  };
}

class GameState {
  constructor() {
    this.s = createState();
    this.onDeath = null;
    this.onChange = null;
    this.onToast = null;
    this._acc = 0;
  }

  reset() {
    this.s = createState();
    this.save();
    this.changed();
  }

  changed() { if (this.onChange) this.onChange(); }
  toast(msg, kind = '') { if (this.onToast) this.onToast(msg, kind); }

  // ---------- time & survival ----------
  clockLabel() {
    const m = Math.floor(this.s.minutes % 1440);
    const h = Math.floor(m / 60), mm = m % 60;
    return `${String(h).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  }

  advanceMinutes(n) {
    this.s.minutes += n;
    while (this.s.minutes >= 1440) { this.s.minutes -= 1440; this.s.day++; }
    // passive survival drain while time passes
    const sv = this.s.survival;
    sv.hunger = clamp(sv.hunger - SURVIVAL_DECAY.hunger * n, 0, 100);
    sv.thirst = clamp(sv.thirst - SURVIVAL_DECAY.thirst * n, 0, 100);
    sv.fatigue = clamp(sv.fatigue + SURVIVAL_DECAY.fatigue * n, 0, 100);
    sv.stress = clamp(sv.stress + SURVIVAL_DECAY.stress * n * (1 + (100 - sv.hygiene) / 180), 0, 100);
    sv.hygiene = clamp(sv.hygiene - SURVIVAL_DECAY.hygiene * n, 0, 100);
    this.changed();
  }

  tick(dt) {
    if (this.s.mode === 'title' || this.s.mode === 'dead') return;
    const minutesPerSecond = 1.1;
    this._acc += dt * minutesPerSecond;
    if (this._acc >= 1) {
      const whole = Math.floor(this._acc);
      this._acc -= whole;
      this.advanceMinutes(whole);
      this.checkVitals(whole);
    }
  }

  checkVitals(mins) {
    const sv = this.s.survival;
    let dmg = 0, cause = '';
    if (sv.hunger <= 0) { dmg += 0.7 * mins; cause = 'STARVATION'; }
    if (sv.thirst <= 0) { dmg += 1.1 * mins; cause = 'DEHYDRATION'; }
    if (sv.fatigue >= 100) { dmg += 0.45 * mins; cause = cause || 'EXHAUSTION'; }
    if (sv.stress >= 100) { dmg += 0.35 * mins; cause = cause || 'STRESS'; }
    if (sv.hunger > 45 && sv.thirst > 45 && sv.fatigue < 45 && sv.stress < 55 && this.s.health < 100) {
      this.s.health = Math.min(100, this.s.health + 0.05 * mins);
    }
    if (dmg > 0) {
      this.s.health -= dmg;
      if (this.s.health <= 0) { this.die(cause); return; }
    }
    if (this.s.health < 30 && Math.random() < 0.004 * mins) {
      this.toast('YOUR HANDS ARE SHAKING.', 'warn');
    }
  }

  // ---------- home actions ----------
  action(kind) {
    const sv = this.s.survival;
    if (kind === 'eat') {
      if (this.s.cash < 6) return this.toast('NO CASH. CHECK THE COUCH CUSHIONS.', 'bad');
      this.s.cash -= 6;
      sv.hunger = clamp(sv.hunger + 38, 0, 100);
      sv.stress = clamp(sv.stress - 4, 0, 100);
      this.advanceMinutes(25);
      this.toast('COLD BEANS. $6 GONE.', 'good');
    } else if (kind === 'drink') {
      sv.thirst = clamp(sv.thirst + 46, 0, 100);
      this.advanceMinutes(5);
      this.toast('TAP WATER. TASTES LIKE RUST.', 'good');
    } else if (kind === 'wash') {
      if (this.s.cash < 2) return this.toast('NO CASH FOR SOAP.', 'bad');
      this.s.cash -= 2;
      sv.hygiene = clamp(sv.hygiene + 55, 0, 100);
      sv.stress = clamp(sv.stress - 8, 0, 100);
      this.advanceMinutes(20);
      this.toast('COLD SHOWER. YOU SMELL ALMOST HUMAN.', 'good');
    } else if (kind === 'sleep') {
      this.sleep(8 * 60);
    }
    this.save();
    this.changed();
  }

  sleep(mins) {
    const sv = this.s.survival;
    this.advanceMinutes(mins);
    sv.fatigue = clamp(sv.fatigue - mins * 0.14, 0, 100);
    sv.stress = clamp(sv.stress - mins * 0.055, 0, 100);
    this.s.health = clamp(this.s.health + mins * 0.03, 0, 100);
    this.toast(`SLEPT ${Math.round(mins / 60)} HOURS.`, 'good');
    this.save();
    this.changed();
  }

  // ---------- garage ----------
  partState(id) { return this.s.parts[id]; }
  builtCount() { return PARTS.filter(p => this.s.parts[p.id].installed).length; }

  canFit(id) {
    const def = PART_MAP[id];
    if (!def) return false;
    if (this.s.parts[id].installed) return false;
    return def.requires.every(r => this.s.parts[r].installed);
  }

  installPart(id, result) {
    const st = this.s.parts[id];
    const def = PART_MAP[id];
    st.installed = true;
    st.loose = result.loose || false;
    st.perfect = result.perfect || false;
    st.torque = result.torque || 0;
    st.stripped = false;
    this.s.stats.bolts += def.bolts || 1;
    if (st.loose) this.s.stats.loose++;
    this.advanceMinutes(def.bolts ? 12 + def.bolts * 4 : 8);
    this.save();
    this.changed();
  }

  stripPart(id) {
    const st = this.s.parts[id];
    st.installed = false;
    st.stripped = true;
    st.loose = false;
    st.torque = 0;
    this.s.stats.stripped++;
    this.s.survival.stress = clamp(this.s.survival.stress + 14, 0, 100);
    this.advanceMinutes(10);
    this.save();
    this.changed();
  }

  replacePart(id) {
    const def = PART_MAP[id];
    const st = this.s.parts[id];
    if (!st.stripped) return false;
    this.s.cash -= def.price;
    st.stripped = false;
    st.installed = false;
    this.advanceMinutes(30);
    if (this.s.cash < 0) this.toast(`REPLACEMENT ON THE TAB. YOU OWE $${Math.abs(this.s.cash)}.`, 'warn');
    else this.toast(`${def.name} REPLACED. $${def.price}.`, 'good');
    this.save();
    this.changed();
    return true;
  }

  reliability() {
    let r = 100;
    for (const p of PARTS) {
      const st = this.s.parts[p.id];
      if (!st.installed) r -= 6;
      else if (st.loose) r -= 14;
      else if (st.perfect) r += 1.5;
    }
    return clamp(r, 0, 100);
  }

  // ---------- tuning ----------
  tuneQuality() {
    const t = this.s.tune;
    const dm = Math.abs(t.mixture - TUNE.mixture.ideal) / TUNE.mixture.tol;
    const dv = Math.abs(t.valve - TUNE.valve.ideal) / TUNE.valve.tol;
    const dt = Math.abs(t.timing - TUNE.timing.ideal) / TUNE.timing.tol;
    return clamp(100 - (dm + dv + dt) * 17, 0, 100);
  }

  idleRpm() {
    const q = this.s.tune.quality;
    return Math.max(0, Math.round(760 + (100 - q) * 5 + Math.sin(Date.now() / 220) * (100 - q) * 0.9));
  }

  // ---------- economy ----------
  addCash(n) {
    this.s.cash += n;
    if (n > 0) this.s.stats.earned += n;
    this.save();
    this.changed();
  }

  // ---------- damage / death ----------
  damage(amount, cause) {
    this.s.health -= amount;
    if (this.s.health <= 0) this.die(cause);
    else this.changed();
  }

  die(cause) {
    if (this.s.mode === 'dead') return;
    this.s.health = 0;
    this.s.cause = cause;
    this.s.mode = 'dead';
    this.wipe();
    if (this.onDeath) this.onDeath(cause);
  }

  // ---------- jobs ----------
  acceptJob(id) {
    const def = JOB_MAP[id];
    if (!def) return;
    this.s.job = { id, stage: 'pickup' };
    this.toast(`JOB TAKEN — ${def.name}`, 'good');
    this.save();
    this.changed();
  }

  advanceJob() {
    if (!this.s.job) return;
    const def = JOB_MAP[this.s.job.id];
    if (this.s.job.stage === 'pickup') {
      this.s.job.stage = 'drop';
      this.toast(`${def.cargo} LOADED. DELIVER TO ${def.drop.toUpperCase()}.`, 'good');
    } else {
      this.s.cash += def.pay;
      this.s.stats.earned += def.pay;
      this.s.jobsDone++;
      this.s.job = null;
      this.s.survival.fatigue = clamp(this.s.survival.fatigue + 9, 0, 100);
      this.s.survival.stress = clamp(this.s.survival.stress - 6, 0, 100);
      this.toast(`DELIVERED. +$${def.pay}`, 'good');
      this.save();
    }
    this.changed();
  }

  // ---------- save ----------
  save() {
    if (this.s.mode === 'dead') return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.s));
    } catch (e) { /* storage full or blocked */ }
  }

  hasSave() {
    try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (!data || data.version !== 1) return false;
      // merge with a fresh state so missing keys are filled
      const base = createState();
      this.s = Object.assign(base, data);
      this.s.parts = Object.assign(freshParts(), data.parts || {});
      this.s.survival = Object.assign(base.survival, data.survival || {});
      this.s.tune = Object.assign(base.tune, data.tune || {});
      this.s.tractor = Object.assign(base.tractor, data.tractor || {});
      this.s.stats = Object.assign(base.stats, data.stats || {});
      this.s.mode = 'garage';
      this.changed();
      return true;
    } catch (e) { return false; }
  }

  wipe() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
  }
}

export const game = new GameState();
