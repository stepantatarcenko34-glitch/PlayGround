// ---------- procedural audio ----------
export class Sound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.engine = null;
    this.wind = null;
    this.pump = null;
    this.muted = false;
    this.ready = false;
  }

  init() {
    if (this.ready) { this.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.85;
      this.master.connect(this.ctx.destination);
      this.noiseBuf = this.makeNoise(2);
      this.ready = true;
      this.startWind();
    } catch (e) { console.warn('audio unavailable', e); }
  }

  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.85, this.ctx.currentTime, 0.05);
    return this.muted;
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      d[i] = last * 3.2;
    }
    return buf;
  }

  // ---------- one-shots ----------
  blip(freq = 440, dur = 0.05, type = 'square', vol = 0.06) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  click() { this.blip(520, 0.03, 'square', 0.035); }
  beep(ok = true) { this.blip(ok ? 760 : 190, 0.1, 'triangle', 0.06); }

  noiseHit(dur = 0.08, freq = 1200, vol = 0.14, q = 1) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t); src.stop(t + dur + 0.02);
  }

  ratchet() {
    if (!this.ready) return;
    for (let i = 0; i < 4; i++) {
      setTimeout(() => this.noiseHit(0.028, 2400 + Math.random() * 800, 0.13, 2), i * 42);
    }
  }

  slip() {
    if (!this.ready) return;
    this.noiseHit(0.14, 3400, 0.12, 6);
    this.blip(110, 0.1, 'sawtooth', 0.03);
  }

  clunk() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.18);
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.3);
    this.noiseHit(0.05, 700, 0.1, 1);
  }

  thunk() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(90, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.2);
    g.gain.setValueAtTime(0.18, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.34);
  }

  backfire() {
    if (!this.ready) return;
    this.noiseHit(0.28, 260, 0.34, 0.7);
    this.noiseHit(0.12, 1600, 0.1, 1.5);
    this.blip(70, 0.3, 'sawtooth', 0.09);
  }

  cash() {
    if (!this.ready) return;
    [880, 1180, 1560].forEach((f, i) => setTimeout(() => this.blip(f, 0.09, 'triangle', 0.05), i * 55));
  }

  pumpStart() {
    if (!this.ready || this.pump) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sawtooth'; o.frequency.value = 62;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 220;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.09, t + 0.2);
    o.connect(f).connect(g).connect(this.master);
    o.start();
    this.pump = { o, g, f };
  }

  pumpSet(load = 1) {
    if (!this.pump) return;
    const t = this.ctx.currentTime;
    this.pump.o.frequency.setTargetAtTime(58 + load * 26, t, 0.08);
    this.pump.f.frequency.setTargetAtTime(180 + load * 420, t, 0.08);
  }

  pumpStop() {
    if (!this.pump) return;
    const { o, g } = this.pump;
    const t = this.ctx.currentTime;
    g.gain.setTargetAtTime(0, t, 0.08);
    o.stop(t + 0.4);
    this.pump = null;
  }

  // ---------- engine ----------
  startEngine(rpm = 800) {
    if (!this.ready || this.engine) { this.setEngine(rpm, 0.2); return; }
    const t = this.ctx.currentTime;
    const o1 = this.ctx.createOscillator();
    const o2 = this.ctx.createOscillator();
    const o3 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    const noise = this.ctx.createBufferSource();
    const nGain = this.ctx.createGain();
    const nFilter = this.ctx.createBiquadFilter();

    o1.type = 'sawtooth'; o1.frequency.value = rpm / 30;
    o2.type = 'square'; o2.frequency.value = rpm / 15;
    o3.type = 'triangle'; o3.frequency.value = rpm / 60;
    filter.type = 'lowpass'; filter.frequency.value = 420; filter.Q.value = 2.2;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.13, t + 0.5);

    noise.buffer = this.noiseBuf; noise.loop = true;
    nFilter.type = 'bandpass'; nFilter.frequency.value = 140; nFilter.Q.value = 0.7;
    nGain.gain.value = 0.035;

    o1.connect(filter); o2.connect(filter); o3.connect(filter);
    filter.connect(gain).connect(this.master);
    noise.connect(nFilter).connect(nGain).connect(this.master);

    o1.start(); o2.start(); o3.start(); noise.start();
    this.engine = { o1, o2, o3, gain, filter, noise, nGain, nFilter };
    this.setEngine(rpm, 0.15);
  }

  setEngine(rpm, load = 0) {
    if (!this.engine || !this.ready) return;
    const t = this.ctx.currentTime;
    const f = Math.max(18, rpm / 30);
    const e = this.engine;
    e.o1.frequency.setTargetAtTime(f, t, 0.06);
    e.o2.frequency.setTargetAtTime(f * 2.01, t, 0.06);
    e.o3.frequency.setTargetAtTime(f * 0.5, t, 0.08);
    e.filter.frequency.setTargetAtTime(260 + load * 900 + rpm * 0.12, t, 0.08);
    e.nGain.gain.setTargetAtTime(0.025 + load * 0.05, t, 0.1);
    e.gain.gain.setTargetAtTime(0.11 + load * 0.06, t, 0.12);
  }

  stopEngine() {
    if (!this.engine || !this.ready) return;
    const e = this.engine;
    const t = this.ctx.currentTime;
    e.gain.gain.setTargetAtTime(0, t, 0.12);
    e.nGain.gain.setTargetAtTime(0, t, 0.12);
    setTimeout(() => {
      try { e.o1.stop(); e.o2.stop(); e.o3.stop(); e.noise.stop(); } catch (err) { /* already stopped */ }
    }, 500);
    this.engine = null;
  }

  // ---------- ambience ----------
  startWind() {
    if (!this.ready || this.wind) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf; src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = 0.45;
    const g = this.ctx.createGain();
    g.gain.value = 0.022;
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.08; lfoGain.gain.value = 0.012;
    lfo.connect(lfoGain).connect(g.gain);
    src.connect(f).connect(g).connect(this.master);
    src.start(); lfo.start();
    this.wind = { src, g, f };
  }

  setWind(level) {
    if (!this.wind) return;
    this.wind.g.gain.setTargetAtTime(0.012 + level * 0.03, this.ctx.currentTime, 0.4);
  }
}
