import * as THREE from 'three';
import { game } from './state.js';
import { Sound } from './audio.js';
import { Garage } from './garage.js';
import { World } from './world.js';
import { PARTS, PART_MAP, TUNE, WRENCHES, JOBS, JOB_MAP, LOCATIONS, clamp, lerp } from './data.js';

const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------------ renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', stencil: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.outputColorSpace = THREE.SRGBColorSpace;
$('scene').appendChild(renderer.domElement);

const sound = new Sound();

// ------------------------------------------------------------------ world & garage
const garage = new Garage(renderer, sound, {
  onSelect: (id) => selectSlot(id),
  onHover: (id, x, y) => showTooltip(id, x, y),
  onHoverEnd: () => hideTooltip(),
  onEmpty: () => { hideTooltip(); }
});

const world = new World(renderer, sound, {
  onPrompt: (text, key) => setPrompt(text, key),
  onJob: (def, stage) => openJob(def, stage),
  onHome: () => openPhone(),
  onToast: (msg, kind) => toast(msg, kind),
  onCrash: (impact) => {
    if (impact > 8) toast('YOU ARE GOING TO FEEL THAT TOMORROW.', 'bad');
  }
});

let scene = 'garage';
let overlay = null;
let selectedSlot = null;
let time = 0;
let hudTimer = 0;
let worldTimer = 0;
let saveTimer = 0;
let titleOrbit = 0;

// ------------------------------------------------------------------ small UI helpers
let toastCount = 0;
function toast(msg, kind = '') {
  const box = document.createElement('div');
  box.className = 'toast ' + kind;
  box.textContent = msg;
  $('toasts').appendChild(box);
  toastCount++;
  while ($('toasts').children.length > 4) $('toasts').firstChild.remove();
  setTimeout(() => {
    box.classList.add('out');
    setTimeout(() => box.remove(), 450);
  }, 3400 + Math.random() * 600);
}

function fadeOut(cb, instant = false) {
  const f = $('fade');
  if (instant) {
    f.classList.add('instant', 'on');
    cb && cb();
    requestAnimationFrame(() => { f.classList.remove('instant'); requestAnimationFrame(() => f.classList.remove('on')); });
    return;
  }
  f.classList.add('on');
  setTimeout(() => {
    cb && cb();
    setTimeout(() => f.classList.remove('on'), 80);
  }, 520);
}

function setPrompt(text, key = 'E') {
  const p = $('prompt');
  if (!text) { p.classList.add('hidden'); return; }
  $('prompt-text').textContent = text;
  p.querySelector('b').textContent = key;
  p.classList.remove('hidden');
}

function showTooltip(id, x, y) {
  const def = PART_MAP[id];
  if (!def || scene !== 'garage' || overlay) { hideTooltip(); return; }
  const st = game.s.parts[id];
  const tt = $('tooltip');
  const status = st.installed ? (st.loose ? 'LEFT LOOSE' : 'TORQUED') : (game.canFit(id) ? 'READY' : 'BLOCKED');
  tt.innerHTML = `<b>${def.name}</b><br><span class="dim">${def.tool ? def.tool + ' MM · ' + def.torque + ' Nm' : 'HAND FIT'} · ${status}</span>`;
  tt.style.left = Math.min(window.innerWidth - 230, x) + 'px';
  tt.style.top = Math.min(window.innerHeight - 80, y) + 'px';
  tt.classList.remove('hidden');
}
function hideTooltip() { $('tooltip').classList.add('hidden'); }

// ------------------------------------------------------------------ HUD
const METER_KEYS = ['hunger', 'thirst', 'fatigue', 'stress', 'hygiene'];
const meterEls = {};
for (const k of METER_KEYS) meterEls[k] = document.querySelector(`.meter[data-key="${k}"]`);

function updateHUD() {
  const s = game.s;
  for (const k of METER_KEYS) {
    const v = s.survival[k];
    const m = meterEls[k];
    if (!m) continue;
    m.querySelector('i').style.transform = `scaleX(${clamp(v / 100, 0, 1)})`;
    const low = (k === 'fatigue' || k === 'stress') ? v > 82 : v < 18;
    m.classList.toggle('low', low);
  }
  $('hud-day').textContent = `DAY ${s.day}`;
  $('hud-time').textContent = game.clockLabel();
  $('hud-cash').textContent = `$${Math.round(s.cash)}`;
  $('hud-cash').style.color = s.cash < 0 ? '#c8482f' : '';
  $('hud-fuel').textContent = `${Math.round(s.tractor.fuel)}%`;
}

// ------------------------------------------------------------------ garage UI
function buildPartsList() {
  const list = $('parts-list');
  list.innerHTML = '';
  PARTS.forEach((def) => {
    const row = document.createElement('div');
    row.className = 'part-row';
    row.dataset.id = def.id;
    row.innerHTML = `<span class="st">·</span><span class="nm">${def.short}</span><span class="sz">${def.tool ? def.tool + 'mm' : 'HAND'}</span>`;
    row.addEventListener('click', () => selectSlot(def.id));
    list.appendChild(row);
  });
}

function refreshGarageUI() {
  const count = game.builtCount();
  $('build-count').textContent = `${String(count).padStart(2, '0')} / 14`;
  for (const def of PARTS) {
    const row = document.querySelector(`.part-row[data-id="${def.id}"]`);
    if (!row) continue;
    const st = game.s.parts[def.id];
    let ch = '·', cls = '';
    if (st.installed && st.loose) { ch = '!'; cls = 'loose'; }
    else if (st.installed) { ch = '✓'; cls = 'done'; }
    else if (st.stripped) { ch = '×'; cls = 'stripped'; }
    else if (!game.canFit(def.id)) { ch = '–'; cls = 'locked'; }
    row.querySelector('.st').textContent = ch;
    row.className = `part-row ${cls}${selectedSlot === def.id ? ' active' : ''}`;
  }
  $('btn-tune').classList.toggle('hidden', count < PARTS.length);
  if (selectedSlot) renderSlotCard(selectedSlot);
}

function selectSlot(id) {
  if (scene !== 'garage' || overlay) return;
  selectedSlot = id;
  garage.select(id);
  garage.inputEnabled = true;
  renderSlotCard(id);
  refreshGarageUI();
  sound.click();
}

function renderSlotCard(id) {
  const def = PART_MAP[id];
  const st = game.s.parts[id];
  if (!def) return;
  const idx = PARTS.findIndex(p => p.id === id);
  $('slot-card').classList.remove('hidden');
  $('sc-index').textContent = `COMPONENT ${String(idx + 1).padStart(2, '0')} / ${PARTS.length}`;
  $('sc-name').textContent = def.name;
  $('sc-desc').textContent = def.desc;
  $('sc-tool').textContent = def.tool ? `${def.tool} mm` : 'HAND FIT';
  $('sc-torque').textContent = def.torque ? `${def.torque} Nm ±${def.tol}` : '—';
  $('sc-bolts').textContent = def.bolts || '—';

  const status = $('sc-status');
  const fit = $('sc-fit');
  const rep = $('sc-replace');
  fit.classList.remove('hidden');
  rep.classList.add('hidden');
  fit.disabled = false;
  fit.textContent = def.tool ? 'FIT & TORQUE' : 'SEAT COMPONENT';

  if (st.stripped) {
    status.innerHTML = `<span class="bad">THREADS STRIPPED</span><br>This part is scrap. Buy a replacement to continue.`;
    fit.classList.add('hidden');
    rep.classList.remove('hidden');
    $('sc-price').textContent = `$${def.price}`;
  } else if (st.installed && st.loose) {
    status.innerHTML = `<span class="warn">LEFT LOOSE</span><br>It is hanging on. Re-torque it before it lets go at speed.`;
    fit.textContent = 'RE-TORQUE';
  } else if (st.installed) {
    status.innerHTML = `<span class="good">TORQUED${st.perfect ? ' · FACTORY SPEC' : ''}</span><br>${Math.round(st.torque)} Nm. This one is done.`;
    fit.textContent = 'TORQUED ✓';
    fit.disabled = true;
  } else if (!game.canFit(id)) {
    const need = def.requires.map(r => PART_MAP[r].short).join(' + ');
    status.innerHTML = `<span class="bad">WILL NOT SEAT</span><br>${need} has to go in first.`;
    fit.disabled = true;
    fit.textContent = 'BLOCKED';
  } else {
    status.innerHTML = def.tool
      ? `<span class="good">READY TO FIT</span><br>${def.bolts} fastener${def.bolts > 1 ? 's' : ''} · ${def.tool} mm socket · ${def.torque} Nm`
      : `<span class="good">READY TO SEAT</span><br>No fasteners. Line it up and set it down.`;
  }
}

function hideSlotCard() {
  $('slot-card').classList.add('hidden');
  selectedSlot = null;
  refreshGarageUI();
}

$('sc-close').addEventListener('click', () => {
  hideSlotCard();
  garage.deselect();
  sound.click();
});

$('sc-fit').addEventListener('click', () => {
  if (!selectedSlot || overlay) return;
  const id = selectedSlot, def = PART_MAP[id], st = game.s.parts[id];
  if (st.installed && !st.loose) return;
  if (!st.installed && !game.canFit(id)) {
    toast('IT WILL NOT SEAT. SOMETHING ELSE HAS TO GO IN FIRST.', 'bad');
    sound.thunk();
    return;
  }
  if (!def.tool) {
    game.installPart(id, { loose: false, perfect: true, torque: 0 });
    garage.refreshParts();
    sound.clunk();
    toast(`${def.name} SEATED.`, 'good');
    refreshGarageUI();
    renderSlotCard(id);
    if (game.builtCount() === PARTS.length) engineComplete();
    return;
  }
  openTorque(id);
});

$('sc-replace').addEventListener('click', () => {
  if (!selectedSlot) return;
  if (game.replacePart(selectedSlot)) {
    sound.cash();
    garage.refreshParts();
    refreshGarageUI();
    renderSlotCard(selectedSlot);
  }
});

function engineComplete() {
  toast('EVERY COMPONENT IS IN. NOW MAKE IT RUN.', 'good');
  $('btn-tune').classList.remove('hidden');
  sound.beep(true);
}

// ------------------------------------------------------------------ torque minigame
let tq = null;

function wrenchIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M15 3a5 5 0 0 0-4.8 6.4L3 16.6V21h4.4l7.2-7.2A5 5 0 0 0 21 9l-3 3-3-3 3-3a5 5 0 0 0-3-3Z"/></svg>`;
}

function openTorque(id) {
  const def = PART_MAP[id], st = game.s.parts[id];
  if (!def || !def.tool) return;
  tq = {
    id, def, mode: st.installed ? 'retorque' : 'install',
    max: def.torque * 1.6, value: 0, holding: false,
    boltsLeft: def.bolts, wrench: null, lastRatchet: 0, closed: false
  };
  overlay = 'torque';
  garage.inputEnabled = false;
  hideTooltip();
  $('tq-name').textContent = def.name;
  $('tq-spec').textContent = `${def.torque} Nm ±${def.tol}`;
  $('tq-bolts').textContent = def.bolts;
  $('tq-log').className = 'tq-log';
  $('tq-log').textContent = 'SELECT A WRENCH AND TIGHTEN.';
  $('tq-leave').classList.add('hidden');
  $('tq-hold').classList.remove('active');
  $('tq-hold').querySelector('.hp-label').textContent = 'HOLD TO TIGHTEN';
  $('tq-value').textContent = '0';
  const row = $('wrench-row');
  row.innerHTML = '';
  for (const size of WRENCHES) {
    const b = document.createElement('button');
    b.className = 'wrench';
    b.innerHTML = `${wrenchIcon()}<span>${size}</span>`;
    b.addEventListener('click', () => {
      if (!tq) return;
      tq.wrench = size;
      row.querySelectorAll('.wrench').forEach(w => w.classList.remove('sel'));
      b.classList.add('sel');
      sound.click();
      tqLog(`${size} MM SELECTED.`);
    });
    row.appendChild(b);
  }
  buildTorqueGauge(def);
  $('torque').classList.remove('hidden');
  sound.click();
}

function tqLog(text, kind = '') {
  const el = $('tq-log');
  el.className = 'tq-log ' + kind;
  el.textContent = text;
}

function polar(cx, cy, r, deg) {
  const a = deg * Math.PI / 180;
  return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
}
function arcPath(cx, cy, r, a0, a1) {
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

const GAUGE = { cx: 160, cy: 152, r: 112, start: 150, sweep: 240 };
const angleFor = (v, max) => GAUGE.start + clamp(v / max, 0, 1) * GAUGE.sweep;

function buildTorqueGauge(def) {
  const { cx, cy, r, start, sweep } = GAUGE;
  const max = def.torque * 1.6;
  const aSpec0 = angleFor(def.torque - def.tol, max);
  const aSpec1 = angleFor(def.torque + def.tol, max);
  const aRed = angleFor(def.torque + def.tol * 1.5, max);
  let ticks = '';
  for (let i = 0; i <= 8; i++) {
    const v = (max / 8) * i;
    const a = start + (i / 8) * sweep;
    const [x1, y1] = polar(cx, cy, r - 16, a);
    const [x2, y2] = polar(cx, cy, r - 6, a);
    const [tx, ty] = polar(cx, cy, r - 32, a);
    ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(233,226,210,.25)" stroke-width="1.5"/>`;
    ticks += `<text x="${tx}" y="${ty + 3}" fill="#615b50" font-family="IBM Plex Mono, monospace" font-size="8" text-anchor="middle">${Math.round(v)}</text>`;
  }
  const [nx, ny] = polar(cx, cy, r - 20, start);
  const svg = $('tq-svg');
  svg.innerHTML = `
    <path d="${arcPath(cx, cy, r, start, start + sweep)}" stroke="#2b271f" stroke-width="17" fill="none"/>
    <path d="${arcPath(cx, cy, r, aSpec0, aSpec1)}" stroke="#8db268" stroke-width="17" fill="none"/>
    <path d="${arcPath(cx, cy, r, aRed, start + sweep)}" stroke="#c8482f" stroke-width="17" fill="none"/>
    ${ticks}
    <line id="tq-needle" x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="#e9e2d2" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="7" fill="#d2601f"/>
    <circle cx="${cx}" cy="${cy}" r="3" fill="#171510"/>
  `;
}

function updateTorqueNeedle() {
  if (!tq) return;
  const a = angleFor(tq.value, tq.max);
  const [x, y] = polar(GAUGE.cx, GAUGE.cy, GAUGE.r - 20, a);
  const n = $('tq-needle');
  if (n) { n.setAttribute('x2', x.toFixed(2)); n.setAttribute('y2', y.toFixed(2)); }
  $('tq-value').textContent = Math.round(tq.value);
}

function tqStart() {
  if (!tq || tq.holding || tq.closed) return;
  if (!tq.wrench) {
    tqLog('PICK A WRENCH FIRST.', 'warn');
    sound.beep(false);
    return;
  }
  if (tq.wrench !== tq.def.tool) {
    sound.slip();
    tqLog(`WRONG FIT — ${tq.def.tool} MM NEEDED. THE JAWS SLIP.`, 'bad');
    game.s.survival.stress = clamp(game.s.survival.stress + 2, 0, 100);
    return;
  }
  tq.holding = true;
  $('tq-hold').classList.add('active');
  sound.ratchet();
  tq.lastRatchet = time;
}

function tqEnd() {
  if (!tq || !tq.holding) return;
  tq.holding = false;
  $('tq-hold').classList.remove('active');
  tqJudge();
}

function tqJudge() {
  const def = tq.def;
  const v = tq.value;
  const spec = def.torque, tol = def.tol;
  if (v < spec - tol) {
    tqLog(`LOOSE — ${Math.round(v)} Nm. UNDER-TORQUED. GO AGAIN.`, 'warn');
    sound.beep(false);
    tq.value = 0;
    updateTorqueNeedle();
    $('tq-leave').classList.remove('hidden');
    return;
  }
  if (v > spec + tol * 1.5) {
    tqStripped();
    return;
  }
  tq.boltsLeft--;
  if (tq.boltsLeft > 0) {
    sound.ratchet();
    tqLog(`${tq.boltsLeft} FASTENER${tq.boltsLeft > 1 ? 'S' : ''} LEFT.`, 'good');
    tq.value = 0;
    updateTorqueNeedle();
    $('tq-leave').classList.add('hidden');
    return;
  }
  finishTorque(v, Math.abs(v - spec) <= tol * 0.4);
}

function finishTorque(value, perfect) {
  if (!tq) return;
  const id = tq.id, def = tq.def;
  game.installPart(id, { loose: false, perfect, torque: value });
  garage.refreshParts();
  sound.clunk();
  toast(`${def.name} TORQUED · ${Math.round(value)} Nm${perfect ? ' · FACTORY SPEC' : ''}`, perfect ? 'good' : '');
  const keep = id;
  closeTorque();
  refreshGarageUI();
  renderSlotCard(keep);
  if (game.builtCount() === PARTS.length) engineComplete();
}

function tqStripped() {
  if (!tq) return;
  const id = tq.id, def = tq.def;
  tq.holding = false;
  $('tq-hold').classList.remove('active');
  game.stripPart(id);
  garage.refreshParts();
  sound.slip();
  setTimeout(() => sound.backfire(), 100);
  tqLog(`STRIPPED THREAD — ${Math.round(tq.value)} Nm. ${def.name} IS SCRAP.`, 'bad');
  $('tq-leave').classList.add('hidden');
  tq.value = tq.max;
  updateTorqueNeedle();
  const keep = id;
  setTimeout(() => {
    if (overlay === 'torque') closeTorque();
    refreshGarageUI();
    renderSlotCard(keep);
    toast('THREADS STRIPPED. BUY A REPLACEMENT.', 'bad');
  }, 1300);
}

function leaveLoose() {
  if (!tq || tq.mode !== 'install') return;
  const id = tq.id, def = tq.def;
  game.installPart(id, { loose: true, perfect: false, torque: tq.value });
  garage.refreshParts();
  toast(`${def.name} LEFT LOOSE. IT WILL COME BACK TO BITE YOU.`, 'warn');
  const keep = id;
  closeTorque();
  refreshGarageUI();
  renderSlotCard(keep);
  if (game.builtCount() === PARTS.length) engineComplete();
}

function closeTorque() {
  if (tq) tq.closed = true;
  tq = null;
  $('torque').classList.add('hidden');
  if (overlay === 'torque') overlay = null;
  if (scene === 'garage') garage.inputEnabled = true;
}

$('tq-hold').addEventListener('pointerdown', (e) => { e.preventDefault(); tqStart(); });
window.addEventListener('pointerup', () => { if (tq && tq.holding) tqEnd(); });
$('tq-cancel').addEventListener('click', () => { closeTorque(); sound.click(); });
$('tq-leave').addEventListener('click', leaveLoose);

// ------------------------------------------------------------------ tuning
let knobsBuilt = false;
let tuningDrag = null;

function buildTuning() {
  const wrap = $('knobs');
  wrap.innerHTML = '';
  const configs = [
    { k: 'mixture', sub: 'LEAN — RICH', fmt: v => Math.round(v) },
    { k: 'valve', sub: 'TIGHT — LOOSE', fmt: v => v.toFixed(3) },
    { k: 'timing', sub: 'RETARD — ADVANCE', fmt: v => v.toFixed(1) + '°' }
  ];
  for (const c of configs) {
    const t = TUNE[c.k];
    const unit = document.createElement('div');
    unit.className = 'knob-unit';
    unit.innerHTML = `
      <div class="knob-label">${t.label}</div>
      <div class="knob" data-k="${c.k}"><div class="ind"></div><div class="cap"></div></div>
      <div class="knob-read"><button data-d="-1">−</button><span id="kv-${c.k}">0</span><button data-d="1">+</button></div>
      <div class="knob-sub">${c.sub}</div>`;
    wrap.appendChild(unit);
    const knob = unit.querySelector('.knob');
    knob.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      tuningDrag = { k: c.k, y: e.clientY, start: game.s.tune[c.k], id: e.pointerId };
      knob.setPointerCapture(e.pointerId);
    });
    knob.addEventListener('pointermove', (e) => {
      if (!tuningDrag || tuningDrag.k !== c.k) return;
      const range = t.max - t.min;
      let v = tuningDrag.start + ((tuningDrag.y - e.clientY) / 160) * range;
      v = clamp(v, t.min, t.max);
      const step = t.step || 1;
      v = Math.round(v / step) * step;
      setTune(c.k, v);
    });
    const end = () => { tuningDrag = null; };
    knob.addEventListener('pointerup', end);
    knob.addEventListener('pointercancel', end);
    unit.querySelectorAll('.knob-read button').forEach(btn => {
      btn.addEventListener('click', () => {
        const d = parseInt(btn.dataset.d, 10);
        const step = t.step || (t.max - t.min) / 50;
        setTune(c.k, clamp(game.s.tune[c.k] + d * step * 2, t.min, t.max));
        sound.click();
      });
    });
  }
  knobsBuilt = true;
}

function tuneFmt(k, v) {
  if (k === 'mixture') return Math.round(v);
  if (k === 'valve') return v.toFixed(3);
  return v.toFixed(1) + '°';
}

function setTune(k, v) {
  const t = TUNE[k];
  v = clamp(v, t.min, t.max);
  if (t.step) v = Math.round(v / t.step) * t.step;
  game.s.tune[k] = v;
  const q = game.tuneQuality();
  game.s.tune.quality = q;
  updateKnobVisual(k);
  updateTuneQuality();
  if (game.s.tune.running) {
    const rpm = idleRpm(q);
    sound.setEngine(rpm, 0.12);
  }
  game.save();
}

function idleRpm(q) {
  return 790 + (100 - q) * 5.4 + Math.sin(time * 13) * (100 - q) * 0.8 + Math.sin(time * 31) * 5;
}

function updateKnobVisual(k) {
  const t = TUNE[k];
  const v = game.s.tune[k];
  const frac = (v - t.min) / (t.max - t.min);
  const angle = -135 + frac * 270;
  const knob = document.querySelector(`.knob[data-k="${k}"]`);
  if (knob) knob.querySelector('.ind').style.transform = `translateX(-50%) rotate(${angle}deg)`;
  const read = $(`kv-${k}`);
  if (read) read.textContent = tuneFmt(k, v);
}

function updateTuneQuality() {
  const q = game.tuneQuality();
  game.s.tune.quality = q;
  const el = $('tach-quality');
  el.textContent = `IDLE QUALITY ${Math.round(q)}`;
  el.className = q >= 85 ? 'good' : q >= 42 ? '' : 'bad';
}

function openTuning() {
  if (overlay) return;
  if (game.builtCount() < PARTS.length) {
    const missing = PARTS.filter(p => !game.s.parts[p.id].installed).map(p => p.short);
    toast(`ENGINE INCOMPLETE — ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '…' : ''}`, 'bad');
    sound.thunk();
    return;
  }
  if (!knobsBuilt) buildTuning();
  overlay = 'tune';
  garage.inputEnabled = false;
  hideTooltip();
  game.s.tune.running = false;
  game.s.tune.quality = game.tuneQuality();
  for (const k of ['mixture', 'valve', 'timing']) updateKnobVisual(k);
  updateTuneQuality();
  buildTach();
  setTachNeedle(0);
  $('rpm-val').textContent = '0';
  $('tune-state').textContent = 'ENGINE OFF';
  $('tune-state').className = 'tune-state';
  $('tune-accept').classList.add('hidden');
  $('tune-hint').textContent = 'SET THE MIXTURE, VALVE LASH AND TIMING. CRANK IT UNTIL IT IDLES CLEAN.';
  $('tune-crank').textContent = 'CRANK ENGINE';
  $('tune-crank').disabled = false;
  $('tune').classList.remove('hidden');
  sound.click();
}

function buildTach() {
  const cx = 170, cy = 165, r = 116, start = 150, sweep = 240;
  const max = 6000;
  let ticks = '';
  for (let i = 0; i <= 12; i++) {
    const v = (max / 12) * i;
    const a = start + (i / 12) * sweep;
    const [x1, y1] = polar(cx, cy, r - 16, a);
    const [x2, y2] = polar(cx, cy, r - 6, a);
    ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(233,226,210,.22)" stroke-width="1.5"/>`;
    if (i % 2 === 0) {
      const [tx, ty] = polar(cx, cy, r - 32, a);
      ticks += `<text x="${tx}" y="${ty + 3}" fill="#615b50" font-family="IBM Plex Mono, monospace" font-size="8" text-anchor="middle">${Math.round(v / 100) / 10}</text>`;
    }
  }
  const [nx, ny] = polar(cx, cy, r - 20, start);
  $('tach-svg').innerHTML = `
    <path d="${arcPath(cx, cy, r, start, start + sweep)}" stroke="#2b271f" stroke-width="16" fill="none"/>
    <path d="${arcPath(cx, cy, r, angleFor(700, max), angleFor(900, max))}" stroke="#8db268" stroke-width="16" fill="none"/>
    <path d="${arcPath(cx, cy, r, angleFor(4500, max), start + sweep)}" stroke="#c8482f" stroke-width="16" fill="none"/>
    ${ticks}
    <line id="tach-needle" x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="#e9e2d2" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="7" fill="#d2601f"/>
    <circle cx="${cx}" cy="${cy}" r="3" fill="#171510"/>
    <text x="${cx}" y="${cy + 34}" fill="#615b50" font-family="IBM Plex Mono, monospace" font-size="7" text-anchor="middle" letter-spacing="2">RPM × 1000</text>`;
  window.__tach = { cx, cy, r, max, start };
}

function setTachNeedle(rpm) {
  const g = window.__tach;
  if (!g) return;
  const a = g.start + clamp(rpm / g.max, 0, 1) * 240;
  const [x, y] = polar(g.cx, g.cy, g.r - 20, a);
  const n = $('tach-needle');
  if (n) { n.setAttribute('x2', x.toFixed(2)); n.setAttribute('y2', y.toFixed(2)); }
}

function crankEngine() {
  const q = game.tuneQuality();
  game.s.tune.quality = q;
  game.advanceMinutes(3);
  if (q < 42) {
    sound.backfire();
    sound.stopEngine();
    garage.setRunning(false);
    game.s.tune.running = false;
    $('tune-state').textContent = 'STALLED — TOO FAR OUT';
    $('tune-state').className = 'tune-state bad';
    $('tune-hint').textContent = 'IT COUGHS AND DIES. THE MIXTURE, LASH OR TIMING IS WRONG. LISTEN TO IT.';
    $('tune-crank').textContent = 'CRANK AGAIN';
    setTimeout(() => {
      if (overlay !== 'tune' || game.s.tune.running) return;
      $('tune-state').textContent = 'ENGINE OFF';
      $('tune-state').className = 'tune-state';
    }, 1600);
    return;
  }
  game.s.tune.running = true;
  game.s.tune.started = true;
  garage.setRunning(true);
  sound.startEngine(800);
  $('tune-state').textContent = q >= 85 ? 'RUNNING CLEAN' : 'RUNNING ROUGH';
  $('tune-state').className = 'tune-state ' + (q >= 85 ? 'run' : '');
  $('tune-crank').textContent = 'KILL ENGINE';
  $('tune-accept').classList.remove('hidden');
  $('tune-hint').textContent = q >= 85
    ? 'IT SITS AT IDLE. THE NEEDLE IS STEADY. THIS IS AS GOOD AS IT GETS.'
    : 'IT RUNS, BUT IT IS HUNTING. MOVE THE KNOBS AND WATCH THE NEEDLE.';
  toast(q >= 85 ? 'IT RUNS CLEAN. FINALLY.' : 'IT LIVES. ROUGH, BUT ALIVE.', q >= 85 ? 'good' : 'warn');
  game.save();
  game.changed();
}

function killEngine() {
  game.s.tune.running = false;
  garage.setRunning(false);
  sound.stopEngine();
  $('tune-state').textContent = 'ENGINE OFF';
  $('tune-state').className = 'tune-state';
  $('tune-crank').textContent = 'CRANK ENGINE';
}

function closeTuning() {
  if (game.s.tune.running) killEngine();
  overlay = null;
  $('tune').classList.add('hidden');
  if (scene === 'garage') garage.inputEnabled = true;
  refreshGarageUI();
  sound.click();
}

$('tune-close').addEventListener('click', closeTuning);
$('tune-accept').addEventListener('click', closeTuning);
$('tune-crank').addEventListener('click', () => {
  if (game.s.tune.running) killEngine();
  else crankEngine();
});

// ------------------------------------------------------------------ jobs
let jm = null;

function openJob(def, stage) {
  if (overlay) return;
  if (stage === 'drop') {
    game.advanceJob();
    world.setCargo(false);
    sound.cash();
    toast(`DELIVERED — +$${def.pay}`, 'good');
    refreshWorldUI(true);
    return;
  }
  overlay = 'job';
  jm = {
    def, stage, progress: 0, pressure: 0, holding: false, spill: 0,
    mode: def.loadKind, done: false, lastNote: ''
  };
  $('jm-eyebrow').textContent = `JOB · ${def.cargo}`;
  $('jm-title').textContent = def.loadKind === 'pressure' ? 'PUMPING THE TANK' : `LOADING ${def.cargo}`;
  $('jm-desc').textContent = def.desc;
  $('jm-fill').style.width = '0%';
  $('jm-read').textContent = '0%';
  $('jm-note').textContent = def.loadKind === 'pressure' ? 'HOLD TO BUILD PRESSURE' : 'HOLD TO WORK';
  $('jm-pressure-wrap').classList.toggle('hidden', def.loadKind !== 'pressure');
  $('jm-pressure').style.width = '0%';
  $('jm-pval').textContent = 'PRESSURE 0';
  $('jm-hold').classList.remove('active');
  $('jobmodal').classList.remove('hidden');
  if (def.loadKind === 'pressure') sound.pumpStart();
  sound.click();
}

function jmStart() {
  if (!jm || jm.done) return;
  jm.holding = true;
  $('jm-hold').classList.add('active');
  if (jm.mode === 'pressure') sound.pumpSet(0.5);
  else sound.ratchet();
}
function jmEnd() {
  if (!jm) return;
  jm.holding = false;
  $('jm-hold').classList.remove('active');
  if (jm.mode === 'pressure') sound.pumpSet(0.1);
}

function jmComplete() {
  if (!jm || jm.done) return;
  jm.done = true;
  const def = jm.def;
  sound.pumpStop();
  closeJobModal(true);
  if (def.id === 'septic') {
    game.s.cash += def.pay;
    game.s.stats.earned += def.pay;
    game.s.jobsDone++;
    game.s.job = null;
    game.s.survival.hygiene = clamp(game.s.survival.hygiene - 16, 0, 100);
    game.s.survival.stress = clamp(game.s.survival.stress + 10, 0, 100);
    game.save();
    game.changed();
    toast(`TANK EMPTIED — +$${def.pay}. YOU REEK.`, 'good');
    sound.cash();
  } else {
    game.advanceJob();
    sound.cash();
  }
  world.setCargo(true);
  refreshWorldUI(true);
}

function closeJobModal(silent = false) {
  if (!jm) return;
  jm.holding = false;
  sound.pumpStop();
  jm = null;
  $('jobmodal').classList.add('hidden');
  if (overlay === 'job') overlay = null;
  if (!silent) toast('JOB PAUSED.', 'warn');
}

$('jm-hold').addEventListener('pointerdown', (e) => { e.preventDefault(); jmStart(); });
window.addEventListener('pointerup', () => { if (jm && jm.holding) jmEnd(); });
$('jm-abort').addEventListener('click', () => closeJobModal());

// ------------------------------------------------------------------ phone
function atHome() {
  if (scene === 'garage') return true;
  return world.distanceTo(LOCATIONS.home) < 13;
}

function openPhone() {
  if (overlay) return;
  overlay = 'phone';
  populatePhone();
  $('phone').classList.remove('hidden');
  setPrompt(null);
  sound.click();
}

function closePhone() {
  $('phone').classList.add('hidden');
  if (overlay === 'phone') overlay = null;
  sound.click();
}

function populatePhone() {
  const home = atHome();
  const jobsBox = $('phone-jobs');
  jobsBox.innerHTML = '';
  for (const def of JOBS) {
    const b = document.createElement('button');
    const active = game.s.job && game.s.job.id === def.id;
    b.className = 'pjob' + (active ? ' active' : '');
    const pickup = LOCATIONS[def.pickup].label;
    const drop = LOCATIONS[def.drop].label;
    b.innerHTML = `<b>${def.name}</b><div class="pay">$${def.pay}</div>
      <span>${pickup} → ${drop}</span><span class="tag">${active ? 'ACTIVE — ' + (game.s.job.stage === 'pickup' ? 'PICKUP' : 'DELIVER') : def.cargo}</span>`;
    b.addEventListener('click', () => {
      if (game.s.job) { toast('FINISH THE JOB YOU ALREADY TOOK.', 'warn'); return; }
      game.acceptJob(def.id);
      sound.beep(true);
      closePhone();
      refreshWorldUI(true);
    });
    jobsBox.appendChild(b);
  }

  const homeBox = $('phone-home');
  homeBox.innerHTML = '';
  const acts = [
    { k: 'eat', label: 'EAT', sub: '$6 · 25m' },
    { k: 'drink', label: 'DRINK', sub: 'FREE · 5m' },
    { k: 'wash', label: 'WASH', sub: '$2 · 20m' },
    { k: 'sleep', label: 'SLEEP', sub: '8 HOURS' }
  ];
  for (const a of acts) {
    const b = document.createElement('button');
    b.innerHTML = `<b>${a.label}</b><span>${a.sub}</span>`;
    b.addEventListener('click', () => {
      if (!home) { toast('YOU ARE NOT HOME.', 'bad'); return; }
      if (a.k === 'sleep') doSleep();
      else { game.action(a.k); sound.click(); }
      populatePhone();
      updateHUD();
    });
    homeBox.appendChild(b);
  }
  if (scene === 'world') {
    const tow = document.createElement('button');
    tow.innerHTML = `<b>TOW HOME</b><span>$30 · 40m</span>`;
    tow.addEventListener('click', () => {
      world.tractor.x = 6; world.tractor.z = 2.5; world.tractor.heading = 0; world.tractor.speed = 0;
      game.s.cash -= 30;
      game.s.tractor.fuel = clamp(game.s.tractor.fuel + 8, 0, 100);
      game.advanceMinutes(40);
      game.save();
      toast('TOWED HOME. THE DRIVER TOOK YOUR LAST $30.', 'warn');
      closePhone();
      updateHUD();
    });
    homeBox.appendChild(tow);

    const garageBtn = document.createElement('button');
    garageBtn.innerHTML = `<b>GARAGE</b><span>${home ? 'ENTER' : 'DRIVE HOME'}</span>`;
    garageBtn.addEventListener('click', () => {
      if (!home) { toast('THE GARAGE IS AT HOME.', 'bad'); return; }
      closePhone();
      showGarage();
    });
    homeBox.appendChild(garageBtn);
  }
  $('phone-foot').textContent = `CASH $${Math.round(game.s.cash)} · DIESEL ${Math.round(game.s.tractor.fuel)}% · ${home ? 'AT HOME' : 'ON THE ROAD'}`;
}

function doSleep() {
  if (!atHome()) { toast('YOU ARE NOT HOME.', 'bad'); return; }
  fadeOut(() => {
    game.action('sleep');
    updateHUD();
    toast('YOU WAKE UP STIFF AND NO LESS BROKE.', '');
  });
}

$('phone-close').addEventListener('click', closePhone);

// ------------------------------------------------------------------ world UI
let compassBuilt = false;
const COMPASS_PX = 4;

function buildCompass() {
  const strip = $('compass-strip');
  strip.innerHTML = '';
  const labels = ['N', 'E', 'S', 'W'];
  for (let d = 0; d <= 720; d += 5) {
    const tick = document.createElement('div');
    tick.className = 'comp-tick' + (d % 45 === 0 ? ' major' : '');
    tick.style.left = (d * COMPASS_PX) + 'px';
    strip.appendChild(tick);
  }
  for (let d = 0; d <= 720; d += 45) {
    const lbl = document.createElement('div');
    const base = d % 360;
    const isCardinal = base % 90 === 0;
    lbl.className = 'comp-lbl' + (base === 0 ? ' n' : '');
    lbl.style.left = (d * COMPASS_PX) + 'px';
    lbl.textContent = isCardinal ? labels[base / 90] : String(base);
    strip.appendChild(lbl);
  }
  strip.style.width = (720 * COMPASS_PX) + 'px';
  compassBuilt = true;
}

let compassMarkers = [];

function refreshWorldUI(force = false) {
  if (scene !== 'world') return;
  if (!compassBuilt) buildCompass();
  const s = game.s;

  // job tracker
  const target = world.getJobTarget();
  const tracker = $('job-tracker');
  if (target) {
    tracker.classList.remove('hidden');
    $('jt-name').textContent = target.def.name;
    $('jt-pay').textContent = `$${target.def.pay}`;
    $('jt-stage').textContent = (target.stage === 'pickup' ? 'PICK UP AT ' : 'DELIVER TO ') + target.loc.label;
    const d = world.distanceTo(target.loc);
    $('jt-distance').textContent = d > 950 ? `${(d / 1000).toFixed(1)} km` : `${Math.round(d)} m`;
    const rel = world.bearingTo(target.loc) * 180 / Math.PI;
    $('jt-arrow').style.transform = `rotate(${-rel}deg)`;
  } else {
    tracker.classList.add('hidden');
  }

  // compass
  const bearing = ((-world.tractor.heading * 180 / Math.PI) % 360 + 360) % 360;
  const w = $('compass').clientWidth || 440;
  const strip = $('compass-strip');
  strip.style.transform = `translateX(${w / 2 - (bearing + 360) * COMPASS_PX}px)`;

  for (const m of compassMarkers) m.el.remove();
  compassMarkers = [];
  const markers = world.getMarkers();
  for (const m of markers) {
    const relRad = world.bearingTo(m);
    let relDeg = -relRad * 180 / Math.PI;
    while (relDeg > 180) relDeg -= 360;
    while (relDeg < -180) relDeg += 360;
    if (Math.abs(relDeg) > 70) continue;
    const el = document.createElement('div');
    el.className = 'comp-mark';
    el.style.left = (w / 2 + relDeg * COMPASS_PX) + 'px';
    el.title = m.label;
    el.style.setProperty('--c', m.color);
    el.style.background = m.color;
    el.style.width = '0';
    el.style.height = '0';
    // small square marker
    el.style.cssText += `;width:7px;height:7px;top:4px;background:${m.color};transform:translateX(-50%) rotate(45deg);`;
    $('compass').appendChild(el);
    compassMarkers.push({ el, m });
  }

  // speed
  const kmh = Math.round(Math.abs(world.tractor.speed) * 3.6);
  $('sp-val').textContent = kmh;
  $('sp-fill').style.width = `${clamp(kmh / 45 * 100, 0, 100)}%`;
  $('sp-fuel').style.transform = `scaleX(${clamp(s.tractor.fuel, 0, 100) / 100})`;
  $('sp-fuel').style.background = s.tractor.fuel < 15 ? '#c8482f' : '#8db268';
}

function updateWorldUI() {
  refreshWorldUI();
}

// ------------------------------------------------------------------ scene flow
function enterGarage() {
  if (scene === 'world') {
    game.s.tractor.pos = { x: world.tractor.x, z: world.tractor.z, heading: world.tractor.heading };
    world.exit();
  }
  scene = 'garage';
  game.s.mode = 'garage';
  garage.inputEnabled = true;
  garage.refreshParts();
  garage.deselect();
  hideSlotCard();
  hideTooltip();
  $('parts-panel').classList.remove('hidden');
  $('garage-hints').classList.remove('hidden');
  $('home-actions').classList.remove('hidden');
  $('world-ui').classList.add('hidden');
  $('slot-card').classList.add('hidden');
  $('topbar').classList.remove('hidden');
  setPrompt(null);
  refreshGarageUI();
  game.save();
}

function headOut() {
  if (game.builtCount() < PARTS.length) {
    const missing = PARTS.filter(p => !game.s.parts[p.id].installed).map(p => p.short);
    toast(`NOT YET — ${missing.slice(0, 4).join(', ')} STILL OFF THE CHASSIS.`, 'bad');
    sound.thunk();
    return;
  }
  if (!game.s.tune.started) {
    toast('IT HAS NEVER RUN. TUNE IT FIRST.', 'warn');
    openTuning();
    return;
  }
  showWorld();
}

function showWorld() {
  if (game.builtCount() < PARTS.length) return;
  if (!game.s.tune.started) { openTuning(); return; }
  fadeOut(() => {
    scene = 'world';
    game.s.mode = 'world';
    garage.inputEnabled = false;
    hideSlotCard();
    $('parts-panel').classList.add('hidden');
    $('garage-hints').classList.add('hidden');
    $('home-actions').classList.add('hidden');
    $('slot-card').classList.add('hidden');
    $('world-ui').classList.remove('hidden');
    world.enter();
    refreshWorldUI(true);
    updateHUD();
    game.save();
    toast('THE TRACTOR IS OLDER THAN YOU. GO EASY ON IT.', '');
  });
}

function showGarage() {
  fadeOut(() => {
    enterGarage();
    updateHUD();
    toast('BACK IN THE BAY.', '');
  });
}

// ------------------------------------------------------------------ death & title
game.onDeath = (cause) => {
  world.exit();
  sound.stopEngine();
  overlay = null;
  document.querySelectorAll('.overlay').forEach(o => o.classList.add('hidden'));
  $('world-ui').classList.add('hidden');
  $('parts-panel').classList.add('hidden');
  $('home-actions').classList.add('hidden');
  $('slot-card').classList.add('hidden');
  $('garage-hints').classList.add('hidden');
  $('topbar').classList.add('hidden');
  setTimeout(() => {
    $('death-cause').textContent = cause;
    const s = game.s;
    $('death-stats').innerHTML = `
      <div><span>DAYS</span><b>${s.day}</b></div>
      <div><span>JOBS</span><b>${s.jobsDone}</b></div>
      <div><span>EARNED</span><b>$${Math.round(s.stats.earned)}</b></div>
      <div><span>DRIVEN</span><b>${(s.stats.distance || 0).toFixed(1)} km</b></div>`;
    const epitaphs = {
      STARVATION: 'The chassis is still bare. The fridge is still empty.',
      DEHYDRATION: 'You should have drunk something. Anything.',
      EXHAUSTION: 'You fell asleep standing up. You did not wake up.',
      STRESS: 'The engine was not the only thing that seized.',
      CRASH: 'The tractor walked away. You did not.'
    };
    $('death-epitaph').textContent = epitaphs[cause] || 'The garage door was open all night.';
    $('death').classList.remove('hidden');
    game.save();
  }, 700);
};

function resetWorldRuntime() {
  world.tractor = { x: 6, z: 2.5, heading: 0, speed: 0, steer: 0 };
  world.tractorGroup.position.set(6, 0, 2.5);
  world.tractorGroup.rotation.y = 0;
  world.cameraPos.set(6, 4, 11);
  world.cameraLook.set(6, 1.3, 0);
  world.setCargo(false);
  world.jobMarker.visible = false;
}

function startRun(loaded = false) {
  sound.init();
  sound.setWind(0.15);
  const savedPos = game.s.tractor.pos;
  if (savedPos) {
    world.tractor.x = savedPos.x;
    world.tractor.z = savedPos.z;
    world.tractor.heading = savedPos.heading || 0;
  } else {
    resetWorldRuntime();
  }
  $('title').classList.add('hidden');
  $('death').classList.add('hidden');
  $('topbar').classList.remove('hidden');
  game.s.started = true;
  game.s.mode = 'garage';
  enterGarage();
  updateHUD();
  if (!loaded) {
    toast('DAY 1. A BARE CHASSIS AND A BOX OF PARTS.', '');
    setTimeout(() => toast('CLICK THE ORANGE MARKERS TO WORK. MIND THE TORQUE SPEC.', ''), 1400);
  } else {
    toast('BACK WHERE YOU LEFT IT.', '');
  }
  game.save();
}

$('btn-new').addEventListener('click', () => {
  sound.init();
  game.wipe();
  game.reset();
  resetWorldRuntime();
  fadeOut(() => startRun(false), true);
});

$('btn-continue').addEventListener('click', () => {
  sound.init();
  if (game.load()) {
    resetWorldRuntime();
    fadeOut(() => startRun(true), true);
  } else {
    toast('SAVE COULD NOT BE READ.', 'bad');
  }
});

$('btn-restart').addEventListener('click', () => {
  game.wipe();
  game.reset();
  resetWorldRuntime();
  $('death').classList.add('hidden');
  fadeOut(() => startRun(false), true);
});

if (game.hasSave()) $('btn-continue').classList.remove('hidden');

// ------------------------------------------------------------------ home actions
document.querySelectorAll('.home-btn[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const a = btn.dataset.action;
    if (a === 'sleep') doSleep();
    else { game.action(a); sound.click(); updateHUD(); }
  });
});
$('btn-headout').addEventListener('click', headOut);
$('btn-tune').addEventListener('click', openTuning);

// ------------------------------------------------------------------ keyboard
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'm') { const m = sound.toggleMute(); toast(m ? 'SOUND OFF.' : 'SOUND ON.', ''); return; }
  if (k === ' ' || k === 'arrowup' || k === 'arrowdown' || k === 'arrowleft' || k === 'arrowright') {
    if (overlay || game.s.mode === 'world') e.preventDefault();
  }
  if (overlay === 'torque') {
    if (k === ' ' && !e.repeat) tqStart();
    if (k === 'escape') closeTorque();
    return;
  }
  if (overlay === 'job') {
    if (k === ' ' && !e.repeat) jmStart();
    if (k === 'escape') closeJobModal();
    return;
  }
  if (overlay === 'phone') {
    if (k === 'j' || k === 'escape') closePhone();
    return;
  }
  if (overlay === 'tune') {
    if (k === 'escape') closeTuning();
    return;
  }
  if (game.s.mode === 'world') {
    world.keys[k] = true;
    if (k === 'e') world.interact();
    if (k === 'j' || k === 'h') openPhone();
    if (k === 'escape') setPrompt(null);
  } else if (game.s.mode === 'garage') {
    if (k === 'escape') { hideSlotCard(); garage.deselect(); }
    if (k === 'j') openPhone();
    if (k === 't') openTuning();
  }
});

window.addEventListener('keyup', (e) => {
  const k = e.key.toLowerCase();
  world.keys[k] = false;
  if (k === ' ' && tq && tq.holding) tqEnd();
  if (k === ' ' && jm && jm.holding) jmEnd();
});

window.addEventListener('blur', () => {
  world.keys = {};
  if (tq && tq.holding) tqEnd();
  if (jm && jm.holding) jmEnd();
});

// ------------------------------------------------------------------ mobile controls
(function mobile() {
  const joy = $('joy'), knob = $('joy-knob');
  let joyId = null;
  function move(e) {
    const r = joy.getBoundingClientRect();
    let dx = e.clientX - (r.left + r.width / 2);
    let dy = e.clientY - (r.top + r.height / 2);
    const max = r.width / 2 - 12;
    const len = Math.hypot(dx, dy);
    if (len > max) { dx = dx / len * max; dy = dy / len * max; }
    world.touch.x = clamp(dx / max, -1, 1);
    world.touch.y = clamp(dy / max, -1, 1);
    world.touch.active = true;
    knob.style.transform = `translate(${dx * 0.62}px, ${dy * 0.62}px)`;
  }
  joy.addEventListener('pointerdown', (e) => {
    joyId = e.pointerId;
    joy.setPointerCapture(e.pointerId);
    move(e);
  });
  joy.addEventListener('pointermove', (e) => { if (e.pointerId === joyId) move(e); });
  const stop = () => {
    joyId = null;
    world.touch.active = false;
    world.touch.x = 0; world.touch.y = 0;
    knob.style.transform = 'translate(0,0)';
  };
  joy.addEventListener('pointerup', stop);
  joy.addEventListener('pointercancel', stop);
  $('m-brake').addEventListener('pointerdown', (e) => { e.preventDefault(); world.brakeTouch = true; });
  $('m-brake').addEventListener('pointerup', () => { world.brakeTouch = false; });
  $('m-brake').addEventListener('pointercancel', () => { world.brakeTouch = false; });
  $('m-use').addEventListener('click', () => { if (scene === 'world' && !overlay) world.interact(); });
  $('m-phone').addEventListener('click', () => { if (!overlay) openPhone(); });
})();

// ------------------------------------------------------------------ resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  garage.resize();
  world.resize();
});

window.addEventListener('pagehide', () => { if (game.s.mode !== 'dead') game.save(); });

// ------------------------------------------------------------------ loop
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  time += dt;

  if (game.s.mode === 'title') {
    titleOrbit += dt;
    garage.desired.theta += dt * 0.055;
    garage.update(dt);
    renderer.render(garage.scene, garage.camera);
    return;
  }
  if (game.s.mode === 'dead') {
    garage.update(dt);
    renderer.render(garage.scene, garage.camera);
    return;
  }

  if (!overlay) game.tick(dt);

  if (scene === 'garage') {
    garage.update(dt);
    renderer.render(garage.scene, garage.camera);
  } else {
    if (!overlay) world.update(dt);
    renderer.render(world.scene, world.camera);
  }

  // torque hold
  if (overlay === 'torque' && tq && tq.holding) {
    tq.value = Math.min(tq.max, tq.value + (tq.max / 2.25) * dt * (0.88 + Math.random() * 0.3));
    updateTorqueNeedle();
    if (time - tq.lastRatchet > 0.16) {
      sound.ratchet();
      tq.lastRatchet = time;
    }
    if (tq.value >= tq.max) {
      tq.holding = false;
      $('tq-hold').classList.remove('active');
      tqJudge();
    }
  }

  // job hold
  if (overlay === 'job' && jm && !jm.done) {
    if (jm.mode === 'hold') {
      if (jm.holding) jm.progress = Math.min(100, jm.progress + (dt / jm.def.loadTime) * 100);
      $('jm-note').textContent = jm.holding ? 'KEEP GOING' : 'HOLD TO WORK';
    } else {
      if (jm.holding) jm.pressure = clamp(jm.pressure + 30 * dt, 0, 100);
      else jm.pressure = clamp(jm.pressure - 24 * dt, 0, 100);
      if (jm.pressure >= 38 && jm.pressure <= 82) {
        jm.progress = Math.min(100, jm.progress + (dt / jm.def.loadTime) * 100 * 0.9);
        jm.spill = Math.max(0, jm.spill - dt);
        $('jm-note').textContent = 'GOOD PRESSURE';
      } else if (jm.pressure > 82) {
        jm.spill += dt;
        $('jm-note').textContent = 'EASING OFF…';
        if (jm.spill > 1.1) {
          jm.spill = 0;
          jm.pressure = clamp(jm.pressure - 34, 0, 100);
          jm.progress = Math.max(0, jm.progress - 9);
          game.s.survival.hygiene = clamp(game.s.survival.hygiene - 8, 0, 100);
          sound.noiseHit(0.35, 260, 0.24, 0.7);
          toast('BACKED UP. YOU ARE WEARING IT NOW.', 'bad');
          updateHUD();
        }
      } else {
        $('jm-note').textContent = 'PRESSURE LOW';
      }
      $('jm-pressure').style.width = `${jm.pressure}%`;
      $('jm-pval').textContent = `PRESSURE ${Math.round(jm.pressure)}`;
      sound.pumpSet(jm.pressure / 100);
    }
    $('jm-fill').style.width = `${jm.progress}%`;
    $('jm-read').textContent = `${Math.round(jm.progress)}%`;
    if (jm.progress >= 100) jmComplete();
  }

  // tuning live gauge
  if (overlay === 'tune') {
    if (game.s.tune.running) {
      const q = game.s.tune.quality;
      const rpm = idleRpm(q);
      setTachNeedle(rpm);
      $('rpm-val').textContent = Math.round(rpm / 10) * 10;
      sound.setEngine(rpm, 0.12);
    } else {
      setTachNeedle(0);
      $('rpm-val').textContent = '0';
    }
  }

  hudTimer += dt;
  if (hudTimer > 0.12) { hudTimer = 0; updateHUD(); }
  if (scene === 'world') {
    worldTimer += dt;
    if (worldTimer > 0.1) { worldTimer = 0; refreshWorldUI(); }
  }
  saveTimer += dt;
  if (saveTimer > 20) {
    saveTimer = 0;
    if (game.s.mode === 'world') {
      game.s.tractor.pos = { x: world.tractor.x, z: world.tractor.z, heading: world.tractor.heading };
    }
    game.save();
  }
}

// ------------------------------------------------------------------ boot
buildPartsList();
refreshGarageUI();
updateHUD();
garage.refreshParts();
if (game.hasSave()) $('btn-continue').classList.remove('hidden');
frame();

// init audio on first gesture anywhere
const initAudio = () => { sound.init(); sound.setWind(0.15); window.removeEventListener('pointerdown', initAudio); };
window.addEventListener('pointerdown', initAudio);
