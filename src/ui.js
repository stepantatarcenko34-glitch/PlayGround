import { PART_INFO } from './truck.js'

const $ = id => document.getElementById(id)

const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

export class UI {
  constructor(game, sound) {
    this.game = game
    this.sound = sound
    this.torque = null
    this.panel = null
    this.torqueHold = false
    this.torqueTimer = null
    this.toastTimer = null
    this.subTimer = null
    this.mobile = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
    this.lastObjective = ''
    this.lastPrompt = ''
    this.actionHeld = false
    this.build()
    this.bind()
  }

  build() {
    const surv = $('survival')
    const rows = [
      ['hunger', 'HUNGER'], ['thirst', 'THIRST'], ['fatigue', 'FATIGUE'],
      ['stress', 'STRESS'], ['hygiene', 'HYGIENE']
    ]
    surv.innerHTML = rows.map(([k, l]) =>
      `<div class="meter" data-k="${k}"><span class="ml">${l}</span><div class="mt"><i></i></div><span class="mv">--</span></div>`
    ).join('') + `<div class="meter health" data-k="health"><span class="ml">BODY</span><div class="mt"><i></i></div><span class="mv">--</span></div>`

    const tools = [['HAND', '—'], ['10', 'MM'], ['12', 'MM'], ['14', 'MM'], ['19', 'MM']]
    $('toolbelt').innerHTML = tools.map(([name, sub], i) =>
      `<button class="tool${i === 0 ? ' sel' : ''}" data-tool="${i}"><small>${i + 1}</small><b>${name}</b><span>${sub === '—' ? 'NO SOCKET' : sub}</span></button>`
    ).join('')

    this.overlay = $('overlay')
    this.promptEl = $('prompt')
    this.promptText = $('promptText')
    this.toastEl = $('toast')
    this.subEl = $('subtitle')
    this.toolbelt = $('toolbelt')
    this.manualPanel = $('manualPanel')
    this.boardPanel = $('boardPanel')
    this.storePanel = $('storePanel')
    this.tunePanel = $('tunePanel')
    this.torquePanel = $('torquePanel')
    this.pausePanel = $('pausePanel')
    this.deathPanel = $('deathPanel')
    this.mobileEl = $('mobile')
    this.torqueCanvas = $('torqueCanvas')
    this.tctx = this.torqueCanvas.getContext('2d')
    this.drawGauge(0, 30, 20, true)
  }

  bind() {
    $('startBtn').addEventListener('click', () => { this.sound.init(); this.onStart?.() })

    this.toolbelt.addEventListener('click', e => {
      const b = e.target.closest('[data-tool]')
      if (!b) return
      this.onTool?.(Number(b.dataset.tool))
    })

    this.overlay.addEventListener('click', e => {
      const close = e.target.closest('[data-close]')
      if (close) { this.closePanel(); return }
      const buy = e.target.closest('[data-buy]')
      if (buy) { this.onBuy?.(buy.dataset.buy); return }
      const job = e.target.closest('[data-job]')
      if (job) { this.onAcceptJob?.(job.dataset.job); return }
      const restart = e.target.closest('[data-restart]')
      if (restart) { this.onRestart?.(); return }
      const resume = e.target.closest('[data-resume]')
      if (resume) { this.closePanel(); return }
      const manual = e.target.closest('[data-open-manual]')
      if (manual) { this.openPanel('manual'); return }
      const tuneCrank = e.target.closest('[data-crank]')
      if (tuneCrank) { this.onCrank?.(); return }
      const tuneClose = e.target.closest('[data-tune-close]')
      if (tuneClose) { this.closePanel(); return }
    })
    this.tunePanel.addEventListener('input', e => {
      const input = e.target.closest('input[data-tune]')
      if (!input) return
      const key = input.dataset.tune
      const value = Number(input.value)
      this.game.setTune(key, value)
      this.updateTuneLive()
    })

    // torque gauge input
    this.torqueCanvas.addEventListener('pointerdown', e => { e.preventDefault(); this.startHold() })
    $('torqueHold').addEventListener('pointerdown', e => { e.preventDefault(); this.startHold() })
    window.addEventListener('pointerup', () => { if (this.torque) this.releaseHold() })
    window.addEventListener('pointercancel', () => { if (this.torque) this.releaseHold() })
    window.addEventListener('keydown', e => {
      if (!this.torque) return
      if (e.code === 'Space' || e.code === 'KeyE') { e.preventDefault(); this.startHold() }
    })
    window.addEventListener('keyup', e => {
      if (!this.torque) return
      if (e.code === 'Space' || e.code === 'KeyE') { e.preventDefault(); this.releaseHold() }
    })

    const action = $('actionBtn')
    action.addEventListener('pointerdown', e => {
      e.preventDefault()
      this.actionHeld = true
      this.onAction?.()
    })
    action.addEventListener('pointerup', () => { this.actionHeld = false })
    action.addEventListener('pointercancel', () => { this.actionHeld = false })
    action.addEventListener('pointerleave', () => { this.actionHeld = false })

    // click sound on buttons
    document.addEventListener('click', e => { if (e.target.closest('button')) this.sound.ui() })
  }

  setStartVisible(v) {
    $('start').classList.toggle('hidden', !v)
  }

  showGame() {
    this.setStartVisible(false)
    $('hud').classList.remove('hidden')
    $('cinematic').classList.add('off')
    setTimeout(() => $('cinematic').classList.add('hidden'), 900)
    if (this.mobile) {
      this.mobileEl.classList.remove('hidden')
      document.body.classList.add('mobile')
    }
    this.subtitle('HOLLOW CREEK · 17:40\nBring the dead back to life.', 4600)
  }

  subtitle(text, ms = 3800) {
    this.subEl.textContent = text
    this.subEl.classList.add('on')
    clearTimeout(this.subTimer)
    this.subTimer = setTimeout(() => this.subEl.classList.remove('on'), ms)
  }

  toast(text, tone = '') {
    this.toastEl.textContent = text
    this.toastEl.className = `toast on ${tone}`
    clearTimeout(this.toastTimer)
    this.toastTimer = setTimeout(() => this.toastEl.classList.remove('on'), 4200)
  }

  selectTool(i) {
    this.toolbelt.querySelectorAll('.tool').forEach((b, j) => b.classList.toggle('sel', i === j))
  }

  setPrompt(text, { blocked = false, key = 'E', hold = 0, progress = 0 } = {}) {
    if (!text) {
      if (this.lastPrompt) { this.promptEl.classList.remove('on', 'holding', 'blocked') }
      this.lastPrompt = ''
      $('actionBtn').textContent = 'E'
      return
    }
    if (text !== this.lastPrompt) {
      this.promptText.textContent = text
      this.lastPrompt = text
    }
    this.promptEl.classList.add('on')
    this.promptEl.classList.toggle('blocked', blocked)
    this.promptEl.classList.toggle('holding', hold > 0)
    this.promptEl.querySelector('.key').textContent = key
    this.promptEl.querySelector('.holdbar i').style.width = `${Math.min(100, progress * 100)}%`
    $('actionBtn').textContent = hold > 0 ? 'HOLD' : key
  }

  updateHUD(view) {
    const s = this.game.state
    const meters = s.meters
    for (const k of ['hunger', 'thirst', 'fatigue', 'stress', 'hygiene', 'health']) {
      const el = document.querySelector(`.meter[data-k="${k}"]`)
      const v = k === 'health' ? s.health : meters[k]
      el.querySelector('.mt i').style.width = `${Math.max(0, Math.min(100, v))}%`
      el.querySelector('.mv').textContent = Math.round(v)
      el.classList.toggle('low', v < 25)
    }
    $('money').textContent = `$${s.money.toLocaleString('en-US')}`
    $('clock').textContent = this.game.clockLabel()
    if (view.pos) {
      const x = view.pos.x, z = view.pos.z
      let place = 'HOLLOW CREEK <span>/</span> GARAGE'
      if (Math.hypot(x - 64, z - 37) < 26) place = 'MILLER FARM <span>/</span> WOODLOT'
      else if (Math.hypot(x + 58, z - 37) < 26) place = 'HOLLOW CREEK <span>/</span> STORE'
      else if (x < -10 || x > 10 || z < -7 || z > 7) place = 'HOLLOW CREEK <span>/</span> THE ROAD'
      if (place !== this.lastPlace) {
        document.querySelector('.place').innerHTML = place
        this.lastPlace = place
      }
    }
    const obj = this.game.objectiveText()
    if (obj !== this.lastObjective) {
      $('objective').textContent = obj
      this.lastObjective = obj
    }
    const h = ((view.heading % 360) + 360) % 360
    const card = CARDINALS[Math.round(h / 45) % 8]
    const cardEl = document.querySelector('#compass .card')
    if (cardEl) cardEl.textContent = card
    $('hdr').textContent = `${String(Math.round(h)).padStart(3, '0')}°`
    const target = this.game.jobTarget()
    let jd = ''
    if (target && view.pos) {
      const d = Math.round(Math.hypot(target.x - view.pos.x, target.z - view.pos.z))
      jd = `◆ ${target.label.toUpperCase()} · ${d}m`
    }
    $('jobDist').textContent = jd
    const sp = $('speedo')
    if (view.driving) {
      sp.classList.remove('hidden')
      sp.querySelector('.spd b').textContent = Math.round(Math.abs(view.speed) * 2.236)
      sp.querySelector('.gear').textContent = view.vehicle === 'moped' ? 'MOPED · 49CC' : 'THE PATIENT · 4.6L'
      $('fuelBar').querySelector('i').style.width = `${Math.max(0, s.fluids.fuel)}%`
    } else sp.classList.add('hidden')
    $('lowHealth').classList.toggle('on', s.health < 28)
    document.body.classList.toggle('driving', !!view.driving)
  }

  openPanel(name) {
    this.closePanel(true)
    this.panel = name
    if (name === 'manual') this.renderManual()
    if (name === 'board') this.renderBoard()
    if (name === 'store') this.renderStore()
    if (name === 'tune') this.renderTune()
    if (name === 'pause') this.renderPause()
    const map = { manual: this.manualPanel, board: this.boardPanel, store: this.storePanel, tune: this.tunePanel, pause: this.pausePanel, death: this.deathPanel, torque: this.torquePanel }
    const el = map[name]
    if (el) el.classList.remove('hidden')
    this.overlay.classList.remove('hidden')
    this.overlay.classList.toggle('torquing', name === 'torque')
    document.body.classList.add('panel-open')
    this.onPanelOpen?.(name)
  }

  closePanel(silent = false) {
    if (!this.panel) {
      this.overlay.classList.add('hidden')
      return
    }
    const map = { manual: this.manualPanel, board: this.boardPanel, store: this.storePanel, tune: this.tunePanel, pause: this.pausePanel, death: this.deathPanel, torque: this.torquePanel }
    const el = map[this.panel]
    if (el) el.classList.add('hidden')
    this.panel = null
    this.overlay.classList.add('hidden')
    this.overlay.classList.remove('torquing')
    document.body.classList.remove('panel-open')
    if (!silent) this.onPanelClose?.()
    if (this.mobile && this.panel !== 'death') this.mobileEl.classList.remove('hidden')
  }

  closeIf(name) { if (this.panel === name) this.closePanel() }

  // ---------------- manual ----------------
  renderManual() {
    const sp = this.game.specs
    const rows = Object.entries(PART_INFO).map(([k, p]) =>
      `<tr><td>${p.name}</td><td class="nm">${p.tool} mm</td><td class="nm">${p.torque[0]}–${p.torque[1]} Nm</td><td style="font-size:9px">${p.note}</td></tr>`
    ).join('')
    this.manualPanel.innerHTML = `
      <button class="panel-close" data-close>CLOSE ✕</button>
      <div class="mh">
        <div><span class="tag">SERVICE LOG · UNIT 01</span><h2>THE<br/>PATIENT</h2></div>
        <small>HOLLOW CREEK GARAGE<br/>1974 PICKUP · 4.6L I6<br/>3-SPEED · 2WD<br/>PROP. R. VANCE</small>
      </div>
      <p>Rebuilt from three trucks and a bad memory. Everything below is cold spec. If a bolt is loose it will walk out. If you strip it, you pay for it.</p>
      <h3>Torque, cold</h3>
      <table class="spec">
        <tr><th>COMPONENT</th><th>SOCKET</th><th>SPEC</th><th>NOTE</th></tr>
        ${rows}
      </table>
      <h3>Engine tune</h3>
      <table class="spec">
        <tr><th>SETTING</th><th>VALUE</th><th>SYMPTOM IF WRONG</th></tr>
        <tr><td>Idle mixture</td><td class="nm">${sp.mix.toFixed(1)} turns out</td><td style="font-size:9px">Rich: black smoke. Lean: it hunts and dies.</td></tr>
        <tr><td>Ignition timing</td><td class="nm">${sp.timing}° BTDC</td><td style="font-size:9px">Too far: kicks the starter. Too late: flat and hot.</td></tr>
        <tr><td>Valve lash (cold)</td><td class="nm">${sp.valve.toFixed(2)} mm</td><td style="font-size:9px">Too tight: it hisses and loses compression.</td></tr>
      </table>
      <div class="note">Fluids are not optional. Engine oil, coolant, fuel. A dry crankcase turns a rebuild into scrap.</div>
      <div class="grid2">
        <div><p style="font-size:11px"><b>Start-up order</b><br/>1. Fit every part.<br/>2. Torque every fastener.<br/>3. Fill oil, coolant, fuel.<br/>4. Set the three tune screws.<br/>5. Crank it.</p></div>
        <div class="figure"><span>FIG. 2 — FIRING ORDER 1-5-3-6-2-4</span></div>
      </div>
      <div class="scribble">"If it won't run, it's fuel, spark, air — or you. — Dad"</div>
    `
  }

  // ---------------- board ----------------
  renderBoard() {
    const jobs = this.game.jobs()
    const active = this.game.state.job
    const cards = Object.entries(jobs).map(([id, j]) => {
      const isActive = active?.id === id
      const disabled = active && !isActive
      return `<div class="job-card${isActive ? ' active' : ''}">
        ${isActive ? '<span class="active-tag">IN PROGRESS</span>' : ''}
        <h3>${j.title}</h3>
        <div class="pay">$${j.pay}</div>
        <div class="desc">${j.desc}</div>
        <div class="req">${j.req}</div>
        <button class="btn-small ${isActive || disabled ? 'done' : ''}" data-job="${id}">${isActive ? 'Already taken' : disabled ? 'Busy' : 'Take the job'}</button>
      </div>`
    }).join('')
    this.boardPanel.innerHTML = `
      <button class="panel-close" data-close>CLOSE ✕</button>
      <div class="mh"><div><span class="tag" style="background:#c2542a;color:#f0e4cc">WORK WANTED</span><h2>THE<br/>BOARD</h2></div><small>HOLLOW CREEK<br/>CASH ON DELIVERY<br/>NO CREDIT</small></div>
      <div class="jobs">${cards}</div>
      <div class="board-note">Take one job at a time. Deliver clean and the money is yours.</div>
    `
  }

  // ---------------- store ----------------
  renderStore() {
    const s = this.game.state
    const items = this.game.storeItems().map(i => `
      <div class="store-item">
        <div class="si-name">${i.name}<small>${i.desc.toUpperCase()}</small></div>
        <div class="si-price">$${i.price} / ${i.unit}</div>
        <button data-buy="${i.id}" ${s.money < i.price ? 'disabled' : ''}>BUY</button>
      </div>`).join('')
    this.storePanel.innerHTML = `
      <button class="panel-close" data-close>CLOSE ✕</button>
      <div class="mh"><div><span class="tag" style="background:#3d4a38;color:#c9d8b6">TERMINAL 03</span><h2>PARTS<br/>COUNTER</h2></div><small>HOLLOW CREEK AUTO &amp; FEED<br/>OPEN 06:00–20:00<br/>CASH ONLY</small></div>
      <div class="store-head"><span>STOCK / DELIVERY TO GARAGE</span><span>CREDIT: <b>${s.money < 20 ? 'THIN' : 'FAIR'}</b></span></div>
      ${items}
      <div class="balance"><span>BALANCE</span><b>$${s.money}</b></div>
    `
  }

  // ---------------- tuning ----------------
  renderTune() {
    const t = this.game.state.tune
    this.tunePanel.innerHTML = `
      <button class="panel-close" data-close style="color:rgba(232,221,197,.6);border-color:rgba(232,221,197,.25)">CLOSE ✕</button>
      <div class="mh"><div><span class="tag" style="background:#c2542a;color:#f3e8d2">BAY 01 / DIAGNOSTIC</span><h2>ENGINE<br/>TUNE</h2></div><small>THE PATIENT · 4.6L I6<br/>IDLE / MIXTURE / VALVE LASH<br/>COLD SPEC IN SERVICE LOG</small></div>
      <p class="sub">Set all three. A vacuum gauge is honest — it peaks when the engine is happy. Watch the needle, listen to the idle.</p>
      <div class="tune-body">
        <div>
          <div class="tune-row"><div class="tl"><label>Idle mixture</label><div class="val"><span id="vMix">${t.mix.toFixed(1)}</span><small>TURNS OUT</small></div></div>
            <input type="range" data-tune="mix" min="0" max="6" step="0.1" value="${t.mix}"></div>
          <div class="tune-row"><div class="tl"><label>Ignition timing</label><div class="val"><span id="vTiming">${t.timing}</span><small>° BTDC</small></div></div>
            <input type="range" data-tune="timing" min="-10" max="20" step="1" value="${t.timing}"></div>
          <div class="tune-row"><div class="tl"><label>Valve clearance</label><div class="val"><span id="vValve">${t.valve.toFixed(2)}</span><small>MM COLD</small></div></div>
            <input type="range" data-tune="valve" min="0.1" max="0.4" step="0.01" value="${t.valve}"></div>
        </div>
        <div class="tune-gauges">
          <div class="gauge"><div class="needle" id="vacNeedle"></div><div class="gnum"><span id="vacNum">0.0</span><small>IN-HG VACUUM</small></div></div>
          <div class="gauge"><div class="needle" id="rpmNeedle" style="background:#8d9d72"></div><div class="gnum"><span id="rpmNum">0</span><small>IDLE RPM</small></div></div>
        </div>
      </div>
      <div class="tune-actions">
        <button class="btn-metal" data-crank>CRANK ENGINE</button>
        <button class="btn-ghost" data-tune-close>STEP AWAY</button>
        <div class="tune-status" id="tuneStatus"></div>
      </div>
      <div class="sheet-note">HOLD THE NUMBERS IN YOUR HEAD — THE LOG IS IN THE DESK DRAWER · TAB</div>
    `
    this.updateTuneLive()
  }

  updateTuneLive() {
    if (!this.panel || this.panel !== 'tune') return
    const g = this.game
    const t = g.state.tune
    const vMix = $('vMix'), vTiming = $('vTiming'), vValve = $('vValve')
    if (vMix) vMix.textContent = Number(t.mix).toFixed(1)
    if (vTiming) vTiming.textContent = t.timing
    if (vValve) vValve.textContent = Number(t.valve).toFixed(2)
    const vac = g.vacuum(), rpm = g.idleRpm()
    const vn = $('vacNum'), rn = $('rpmNum')
    if (vn) vn.textContent = vac.toFixed(1)
    if (rn) rn.textContent = rpm
    const vacNeedle = $('vacNeedle'), rpmNeedle = $('rpmNeedle')
    if (vacNeedle) vacNeedle.style.transform = `rotate(${-80 + Math.max(0, Math.min(1, vac / 22)) * 160}deg)`
    if (rpmNeedle) rpmNeedle.style.transform = `rotate(${-80 + Math.max(0, Math.min(1, (rpm - 600) / 900)) * 160}deg)`
    const status = $('tuneStatus')
    if (status) {
      const ready = g.engineReadiness()
      if (g.state.engineRunning) status.textContent = 'ENGINE RUNNING. Fine adjustments live.'
      else if (!ready.ok) status.textContent = ready.msg
      else status.textContent = 'Ready to crank.'
    }
  }

  // ---------------- torque ----------------
  showTorque({ part, label, lo, hi, index, total }) {
    this.openPanel('torque')
    this.torquePanel.querySelector('.t-label span:first-child').textContent = `${label.toUpperCase()} · BOLT ${index + 1}/${total}`
    this.torquePanel.querySelector('.t-label span:last-child').textContent = `${lo}–${hi} Nm`
    $('tHint').textContent = this.mobile ? 'HOLD THE BUTTON — RELEASE IN THE GREEN' : 'HOLD LEFT MOUSE / SPACE — RELEASE IN THE GREEN'
    $('torqueHold').style.display = this.mobile ? 'block' : 'none'
    this.torque = { part, lo, hi, index, total, value: 0, max: Math.round(hi * 1.5), holding: false, done: false, tick: 0, startedAt: performance.now() }
    this.torquePanel.classList.remove('holding')
    this.drawGauge(0, lo, hi, true, this.torque.max)
    $('tValue').textContent = '0.0'
    this.torqueTimer = setTimeout(() => {
      if (this.torque && !this.torque.holding && this.torque.value === 0) $('tHint').textContent = 'HOLD TO TORQUE'
    }, 1200)
  }

  startHold() {
    if (!this.torque || this.torque.done) return
    this.torque.holding = true
    this.torquePanel.classList.add('holding')
    $('tHint').textContent = 'KEEP PRESSURE…'
    this.sound.ratchet()
  }

  releaseHold() {
    if (!this.torque || this.torque.done || !this.torque.holding) return
    if (performance.now() - (this.torque.startedAt || 0) < 180) return
    this.torque.holding = false
    this.torque.done = true
    this.torquePanel.classList.remove('holding')
    const value = Math.min(this.torque.max, this.torque.value)
    this.onTorqueRelease?.(value)
  }

  tickTorque(dt) {
    const t = this.torque
    if (!t) return
    if (t.holding) {
      const rate = t.max / 2.7
      t.value += rate * dt * (0.9 + Math.random() * 0.16)
      t.tick += dt
      if (t.tick > 0.3) { t.tick = 0; this.sound.ratchet() }
      if (t.value >= t.max) {
        t.value = t.max
        this.releaseHold()
        return
      }
    }
    this.drawGauge(t.value, t.lo, t.hi, true, t.max)
    $('tValue').textContent = t.value.toFixed(1)
  }

  torqueResult(result, value) {
    if (!this.torque) return
    const t = this.torque
    const hint = $('tHint')
    if (result === 'good') {
      hint.textContent = 'SEATED. THAT ONE WILL HOLD.'
      hint.style.color = '#9dbd82'
    } else if (result === 'loose') {
      hint.textContent = value < t.lo * 0.5 ? 'BARELY SNUG — DO IT AGAIN.' : 'LOOSE. IT WILL WALK OUT. RETRY.'
      hint.style.color = '#d9a441'
    } else {
      hint.textContent = 'STRIPPED THE THREAD. YOU NEED A REPLACEMENT BOLT.'
      hint.style.color = '#c2542a'
      this.sound.wrenchDrop()
    }
    this.drawGauge(value, t.lo, t.hi, false, t.max)
    setTimeout(() => { this.torque = null }, 700)
  }

  hideTorque() {
    clearTimeout(this.torqueTimer)
    this.torque = null
    if (this.panel === 'torque') this.closePanel()
  }

  drawGauge(value, lo, hi, live = true, maxOverride = null) {
    const ctx = this.tctx
    const W = 720, H = 420
    ctx.clearRect(0, 0, W, H)
    const cx = W / 2, cy = 334, R = 250
    const max = maxOverride || Math.round(hi * 1.5)
    const ang = v => Math.PI - (v / max) * Math.PI
    // face
    ctx.fillStyle = 'rgba(12,12,10,.7)'
    ctx.beginPath(); ctx.arc(cx, cy, R + 26, Math.PI, 0); ctx.closePath(); ctx.fill()
    // minor ticks
    for (let i = 0; i <= 30; i++) {
      const v = max * i / 30
      const a = ang(v)
      const major = i % 5 === 0
      ctx.strokeStyle = major ? 'rgba(232,221,197,.6)' : 'rgba(232,221,197,.22)'
      ctx.lineWidth = major ? 3 : 1.5
      const r1 = R - (major ? 28 : 16)
      ctx.beginPath()
      ctx.moveTo(cx + Math.cos(a) * r1, cy - Math.sin(a) * r1)
      ctx.lineTo(cx + Math.cos(a) * R, cy - Math.sin(a) * R)
      ctx.stroke()
      if (major) {
        ctx.fillStyle = 'rgba(232,221,197,.55)'
        ctx.font = "500 20px 'IBM Plex Mono', monospace"
        ctx.textAlign = 'center'
        ctx.fillText(String(Math.round(v)), cx + Math.cos(a) * (R - 56), cy - Math.sin(a) * (R - 56) + 7)
      }
    }
    // arc bg
    ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI, 0)
    ctx.strokeStyle = 'rgba(232,221,197,.12)'; ctx.lineWidth = 12; ctx.stroke()
    // green zone
    const stripAt = Math.min(max, hi * 1.32)
    ctx.beginPath(); ctx.arc(cx, cy, R, ang(lo), ang(hi), true)
    ctx.strokeStyle = '#6d8a5c'; ctx.lineWidth = 12; ctx.stroke()
    // amber beyond spec to strip
    ctx.beginPath(); ctx.arc(cx, cy, R, ang(hi), ang(stripAt), true)
    ctx.strokeStyle = '#d9a441'; ctx.lineWidth = 12; ctx.stroke()
    // red past strip
    ctx.beginPath(); ctx.arc(cx, cy, R, ang(stripAt), ang(max), true)
    ctx.strokeStyle = '#8e3a1c'; ctx.lineWidth = 12; ctx.stroke()
    // spec label
    ctx.fillStyle = 'rgba(232,221,197,.4)'
    ctx.font = "400 15px 'IBM Plex Mono', monospace"; ctx.textAlign = 'center'
    ctx.fillText('SPEC', cx, cy - R + 78)
    // needle
    const a = ang(Math.min(value, max))
    const nx = cx + Math.cos(a) * (R - 34), ny = cy - Math.sin(a) * (R - 34)
    ctx.strokeStyle = live ? '#e8ddc5' : '#c2542a'
    ctx.lineWidth = 4; ctx.shadowColor = 'rgba(0,0,0,.7)'; ctx.shadowBlur = 8
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny); ctx.stroke()
    ctx.shadowBlur = 0
    ctx.fillStyle = live ? '#e8ddc5' : '#c2542a'
    ctx.beginPath(); ctx.arc(cx, cy, 14, 0, 7); ctx.fill()
    ctx.fillStyle = '#14130f'; ctx.beginPath(); ctx.arc(cx, cy, 5, 0, 7); ctx.fill()
  }

  // ---------------- pause / death ----------------
  renderPause() {
    const s = this.game.state
    this.pausePanel.innerHTML = `
      <h2>PAUSED</h2>
      <p>The world waits. Your body does not.</p>
      <div class="row">
        <button class="primary" data-resume>Resume</button>
        <button data-open-manual>Service manual</button>
        <button data-restart>Burn it down / restart</button>
      </div>
      <p style="margin-top:20px;font-size:8px;letter-spacing:.14em">DAY ${s.day} · ${this.game.clockShort()} · $${s.money} · ${s.stats.torques} BOLTS SEATED</p>
    `
  }

  showDeath(reason) {
    this.closePanel(true)
    this.mobileEl.classList.add('hidden')
    document.body.classList.remove('panel-open')
    const s = this.game.state
    const days = s.day
    this.deathPanel.innerHTML = `
      <div class="death-mark">HOLLOW CREEK · CORONER'S COPY</div>
      <h2>YOU DIED</h2>
      <p class="epitaph">${reason}<br/>The garage keeps its secrets. The truck stays where it fell.</p>
      <div class="stats">
        <span>DAYS SURVIVED<b>${days}</b></span>
        <span>BOLTS SEATED<b>${s.stats.torques}</b></span>
        <span>JOBS DONE<b>${s.stats.jobs}</b></span>
        <span>MILES<b>${(s.stats.km * 0.621).toFixed(1)}</b></span>
      </div>
      <button data-restart>Start Over</button>
      <small>PERMADEATH · NO SAVE · NO SECOND CHANCE</small>
    `
    this.deathPanel.classList.remove('hidden')
    this.overlay.classList.remove('hidden')
    this.overlay.classList.add('torquing')
    this.panel = 'death'
    this.onPanelOpen?.('death')
  }

  hideStartCinematic() {
    $('cinematic').classList.add('off')
  }
}
