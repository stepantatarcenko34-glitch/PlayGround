/* Tiny procedural soundscape — no samples, everything synthesized. */
export class Sound {
  constructor() {
    this.ctx = null
    this.master = null
    this.muted = false
    this.engine = null
    this.moped = null
    this.ambient = null
    this.radio = null
    this.radioTimer = 0
    this._lastStep = 0
  }

  init() {
    if (this.ctx) { this.ctx.resume?.(); return }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = this.muted ? 0 : 0.65
    this.master.connect(this.ctx.destination)
    this.noiseBuf = this.makeNoise(2.5)
    this.startAmbient()
  }

  makeNoise(seconds = 1) {
    const ctx = this.ctx
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate)
    const d = buf.getChannelData(0)
    let last = 0
    for (let i = 0; i < d.length; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      d[i] = last * 3.2
    }
    return buf
  }

  setMuted(m) {
    this.muted = m
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.65, this.ctx.currentTime, 0.05)
  }

  startAmbient() {
    if (!this.ctx) return
    const ctx = this.ctx
    const src = ctx.createBufferSource()
    src.buffer = this.noiseBuf; src.loop = true
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'; filter.frequency.value = 340; filter.Q.value = 0.6
    const gain = ctx.createGain(); gain.gain.value = 0.045
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 0.02
    lfo.connect(lfoGain).connect(gain.gain)
    src.connect(filter).connect(gain).connect(this.master)
    src.start(); lfo.start()
    this.ambient = { src, gain }
  }

  // --- one-shots ---------------------------------------------------
  burst({ freq = 800, q = 1, dur = 0.1, gain = 0.2, type = 'bandpass', rate = 1 } = {}) {
    if (!this.ctx) return
    const ctx = this.ctx
    const src = ctx.createBufferSource()
    src.buffer = this.noiseBuf
    src.playbackRate.value = rate
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q
    const g = ctx.createGain()
    const t = ctx.currentTime
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(f).connect(g).connect(this.master)
    src.start(t); src.stop(t + dur + 0.02)
  }

  tone({ freq = 440, dur = 0.2, gain = 0.12, type = 'sine', slide = 0 } = {}) {
    if (!this.ctx) return
    const ctx = this.ctx
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq
    const g = ctx.createGain(); const t = ctx.currentTime
    if (slide) o.frequency.linearRampToValueAtTime(freq + slide, t + dur)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(gain, t + 0.012)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g).connect(this.master)
    o.start(t); o.stop(t + dur + 0.05)
  }

  step(speed = 1) {
    if (!this.ctx) return
    const t = performance.now()
    if (t - this._lastStep < 250 / speed) return
    this._lastStep = t
    this.burst({ freq: 240 + Math.random() * 120, q: 1.4, dur: 0.09, gain: 0.055, rate: 0.7 + Math.random() * 0.2 })
  }

  ratchet() {
    this.burst({ freq: 2100, q: 4, dur: 0.035, gain: 0.1, rate: 1.6 })
    setTimeout(() => this.burst({ freq: 1700, q: 5, dur: 0.03, gain: 0.08, rate: 1.4 }), 42)
  }
  clunk() {
    this.tone({ freq: 92, dur: 0.22, gain: 0.18, type: 'sine', slide: -30 })
    this.burst({ freq: 420, q: 1.2, dur: 0.12, gain: 0.1, rate: 0.6 })
  }
  pickup() { this.clunk(); this.tone({ freq: 520, dur: 0.06, gain: 0.05, type: 'triangle' }) }
  error() {
    this.tone({ freq: 130, dur: 0.16, gain: 0.1, type: 'square' })
    setTimeout(() => this.tone({ freq: 104, dur: 0.18, gain: 0.08, type: 'square' }), 90)
  }
  success() {
    this.tone({ freq: 330, dur: 0.22, gain: 0.08, type: 'triangle' })
    setTimeout(() => this.tone({ freq: 495, dur: 0.32, gain: 0.07, type: 'triangle' }), 140)
  }
  ui() { this.burst({ freq: 900, q: 2, dur: 0.03, gain: 0.045, rate: 1.2 }) }
  wrenchDrop() {
    this.burst({ freq: 1600, q: 6, dur: 0.2, gain: 0.12, rate: 1.1 })
    this.tone({ freq: 220, dur: 0.3, gain: 0.06, type: 'triangle', slide: -60 })
  }
  crash() {
    this.burst({ freq: 150, q: 0.7, dur: 0.5, gain: 0.3, rate: 0.5, type: 'lowpass' })
    this.tone({ freq: 60, dur: 0.5, gain: 0.22, type: 'sine', slide: -20 })
    setTimeout(() => this.burst({ freq: 1200, q: 2, dur: 0.3, gain: 0.1, rate: 0.8 }), 60)
  }
  slurp() {
    this.burst({ freq: 500, q: 0.8, dur: 0.35, gain: 0.08, rate: 0.5 })
    this.tone({ freq: 180, dur: 0.2, gain: 0.04, type: 'sine', slide: 80 })
  }
  eat() {
    this.burst({ freq: 900, q: 1, dur: 0.14, gain: 0.07, rate: 1.2 })
    setTimeout(() => this.burst({ freq: 760, q: 1, dur: 0.14, gain: 0.06, rate: 1.1 }), 130)
  }
  sleep() { this.tone({ freq: 70, dur: 1.6, gain: 0.06, type: 'sine', slide: -20 }) }

  // --- engine ------------------------------------------------------
  startEngine() {
    if (!this.ctx) return
    const ctx = this.ctx
    if (this.engine) return
    const t = ctx.currentTime
    const osc1 = ctx.createOscillator(); osc1.type = 'sawtooth'; osc1.frequency.value = 34
    const osc2 = ctx.createOscillator(); osc2.type = 'square'; osc2.frequency.value = 17
    const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 320; filter.Q.value = 1.5
    const gain = ctx.createGain(); gain.gain.value = 0.0001
    const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 5.5
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 0.025
    lfo.connect(lfoGain).connect(gain.gain)
    const rumble = ctx.createBufferSource(); rumble.buffer = this.noiseBuf; rumble.loop = true
    const rGain = ctx.createGain(); rGain.gain.value = 0.018
    const rFilter = ctx.createBiquadFilter(); rFilter.type = 'lowpass'; rFilter.frequency.value = 180
    rumble.connect(rFilter).connect(rGain).connect(this.master)
    osc1.connect(filter); osc2.connect(filter); filter.connect(gain).connect(this.master)
    osc1.start(); osc2.start(); lfo.start(); rumble.start()
    gain.gain.setTargetAtTime(0.05, t, 0.15)
    this.engine = { osc1, osc2, filter, gain, lfo, rumble, rGain, rpm: 850, rough: 0 }
  }
  stopEngine() {
    if (!this.engine || !this.ctx) return
    const e = this.engine
    const t = this.ctx.currentTime
    e.gain.gain.setTargetAtTime(0.0001, t, 0.15)
    setTimeout(() => {
      try { e.osc1.stop(); e.osc2.stop(); e.lfo.stop(); e.rumble.stop() } catch {}
    }, 500)
    this.engine = null
  }
  revEngine(rpm = 850, rough = 0) {
    if (!this.engine) return
    const e = this.engine
    const t = this.ctx.currentTime
    const f = Math.max(22, rpm / 60 * 3)
    e.osc1.frequency.setTargetAtTime(f, t, 0.08)
    e.osc2.frequency.setTargetAtTime(f * 0.5, t, 0.08)
    e.filter.frequency.setTargetAtTime(260 + rpm * 0.12, t, 0.1)
    e.gain.gain.setTargetAtTime(0.038 + (rpm - 700) / 6000, t, 0.12)
    e.lfo.frequency.setTargetAtTime(3 + rough * 9, t, 0.2)
    if (this.engine.rough !== rough) {
      e.osc1.detune.setTargetAtTime(rough * 35, t, 0.2)
      this.engine.rough = rough
    }
  }
  crank(seconds = 1.8, success = true) {
    if (!this.ctx) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(38, t); o.frequency.linearRampToValueAtTime(55, t + seconds * 0.7)
    const g = ctx.createGain(); g.gain.value = 0.0001
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 480
    o.connect(f).connect(g).connect(this.master)
    g.gain.setTargetAtTime(0.06, t, 0.08)
    this.burst({ freq: 300, q: 1.1, dur: 0.12, gain: 0.2, rate: 0.7 })
    for (let i = 0; i < Math.floor(seconds * 5); i++) {
      setTimeout(() => this.burst({ freq: 280 + Math.random() * 200, q: 2, dur: 0.1, gain: 0.08, rate: 0.6 }), 160 + i * 210)
    }
    setTimeout(() => {
      g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.1)
      o.stop(ctx.currentTime + 0.25)
    }, seconds * 1000)
    if (!success) {
      setTimeout(() => { this.tone({ freq: 86, dur: 0.25, gain: 0.1, type: 'square', slide: -30 }); this.burst({ freq: 200, q: 2, dur: 0.4, gain: 0.12, rate: 0.5 }) }, seconds * 1000)
    }
  }

  // --- moped -------------------------------------------------------
  startMoped() {
    if (!this.ctx || this.moped) return
    const ctx = this.ctx
    const osc = ctx.createOscillator(); osc.type = 'square'; osc.frequency.value = 62
    const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 700
    const gain = ctx.createGain(); gain.gain.value = 0.0001
    const noise = ctx.createBufferSource(); noise.buffer = this.noiseBuf; noise.loop = true
    const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 380; nf.Q.value = 2
    const ng = ctx.createGain(); ng.gain.value = 0.02
    osc.connect(filter).connect(gain).connect(this.master)
    noise.connect(nf).connect(ng).connect(this.master)
    osc.start(); noise.start()
    gain.gain.setTargetAtTime(0.035, ctx.currentTime, 0.1)
    this.moped = { osc, filter, gain, noise, ng }
  }
  revMoped(rpm = 2000) {
    if (!this.moped) return
    const t = this.ctx.currentTime
    this.moped.osc.frequency.setTargetAtTime(48 + rpm * 0.008, t, 0.1)
    this.moped.filter.frequency.setTargetAtTime(500 + rpm * 0.12, t, 0.1)
    this.moped.gain.gain.setTargetAtTime(0.022 + rpm / 160000, t, 0.1)
  }
  stopMoped() {
    if (!this.moped) return
    const m = this.moped
    m.gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.1)
    setTimeout(() => { try { m.osc.stop(); m.noise.stop() } catch {} }, 400)
    this.moped = null
  }

  // --- radio -------------------------------------------------------
  toggleRadio() {
    if (!this.ctx) return false
    if (this.radio) {
      clearInterval(this.radioTimer)
      this.radio.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.1)
      this.radio = null
      return false
    }
    const ctx = this.ctx
    const gain = ctx.createGain(); gain.gain.value = 0.0001
    const filter = ctx.createBiquadFilter(); filter.type = 'bandpass'; filter.frequency.value = 900; filter.Q.value = 0.6
    gain.connect(filter).connect(this.master)
    gain.gain.setTargetAtTime(0.022, ctx.currentTime, 0.4)
    this.radio = { gain }
    const notes = [110, 138.6, 164.8, 196, 164.8, 138.6, 123.5, 146.8]
    let i = 0
    const play = () => {
      if (!this.radio) return
      const t = this.ctx.currentTime
      const o = ctx.createOscillator(); o.type = 'triangle'
      const n = notes[i++ % notes.length] * (i % 16 < 8 ? 1 : 1.5)
      o.frequency.value = n
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.12, t + 0.03)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7)
      o.connect(g).connect(gain)
      o.start(t); o.stop(t + 0.8)
      // crackle
      if (Math.random() > 0.68) this.burst({ freq: 1500, q: 3, dur: 0.04, gain: 0.02, rate: 1.5 })
    }
    this.radioTimer = setInterval(play, 720)
    setTimeout(play, 200)
    return true
  }
}
