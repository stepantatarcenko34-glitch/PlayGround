import { PART_INFO } from './truck.js'

export const SAVE_KEY = 'baremetal.v1'

const STORE = [
  { id: 'boltKit', name: 'Bolt & stud kit', desc: 'Extractor + 6 replacement bolts', price: 6, unit: 'kit' },
  { id: 'oil', name: 'Engine oil', desc: '5 qt, 10W-30. Do not run it dry.', price: 9, unit: 'jug' },
  { id: 'coolant', name: 'Antifreeze', desc: 'Pre-mixed. A dry block cracks.', price: 8, unit: 'jug' },
  { id: 'fuel', name: 'Fuel can', desc: 'Five gallons of regular.', price: 12, unit: 'can' },
  { id: 'water', name: 'Spring water', desc: 'A clean gallon. Drink up.', price: 2, unit: 'gal' },
  { id: 'beans', name: 'Cold beans', desc: 'A can and a fork. Calories.', price: 5, unit: 'can' },
  { id: 'coffee', name: 'Coffee', desc: 'Burnt, black, effective.', price: 3, unit: 'cup' },
  { id: 'cigarettes', name: 'Cigarettes', desc: 'Stress down. Lungs up.', price: 5, unit: 'pack' },
  { id: 'soap', name: 'Lye soap', desc: 'Greaseless hands, briefly.', price: 3, unit: 'bar' }
]

const JOBS = {
  courier: { title: 'Parts run', pay: 35, desc: 'Miller is out of ignition points. Take the crate out to the farm. Moped is fine.', req: 'Any vehicle · one drop' },
  firewood: { title: 'Firewood', pay: 150, desc: "Load the bed at Miller's woodlot, then run it back to the store before dark.", req: 'The truck · bed must be empty' }
}

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const pad = n => String(n).padStart(2, '0')

export class Game {
  constructor(sound) {
    this.sound = sound
    this.ui = null
    this.dead = false
    this.paused = false
    this.newGame()
  }

  newGame() {
    const mix = Math.round((2.1 + Math.random() * 1.1) * 10) / 10
    const timing = Math.round(5 + Math.random() * 7)
    const valve = Math.round((0.22 + Math.random() * 0.05) * 100) / 100
    this.specs = { mix, timing, valve }
    this.state = {
      version: 1,
      money: 42,
      day: 1,
      minutes: 17 * 60 + 40,
      meters: { hunger: 66, thirst: 72, fatigue: 44, stress: 32, hygiene: 58 },
      health: 100,
      parts: { battery: false, carb: false, alternator: false, radiator: false, plugs: false, wheels: false },
      bolts: {},
      inventory: { oil: 1, coolant: 1, fuel: 1, water: 1, beans: 2, coffee: 1, cigarettes: 1, boltKit: 0, soap: 0 },
      fluids: { oil: 0, coolant: 0, fuel: 0 },
      tune: { mix: Math.round((3.7 + Math.random() * 0.6) * 10) / 10, timing: -4, valve: 0.34 },
      engineRunning: false,
      job: null,
      cargo: false,
      truck: { x: 0, z: -0.6, heading: 0 },
      stats: { torques: 0, stripped: 0, loose: 0, crashes: 0, jobs: 0, km: 0 },
      startedAt: 0
    }
    this.dead = false
  }

  attachUI(ui) { this.ui = ui }

  // ---------------------------------------------------------------
  save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify({ specs: this.specs, state: this.state })) } catch {}
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY)
      if (!raw) return false
      const data = JSON.parse(raw)
      if (!data?.state || data.state.version !== 1) return false
      this.specs = data.specs
      this.state = data.state
      this.dead = this.state.health <= 0
      return !this.dead
    } catch { return false }
  }

  wipe() {
    try { localStorage.removeItem(SAVE_KEY) } catch {}
  }

  get s() { return this.state }

  clockLabel() {
    const m = ((this.s.minutes % 1440) + 1440) % 1440
    return `DAY ${this.s.day} · ${pad(Math.floor(m / 60))}:${pad(Math.floor(m % 60))}`
  }

  clockShort() {
    const m = ((this.s.minutes % 1440) + 1440) % 1440
    return `${pad(Math.floor(m / 60))}:${pad(Math.floor(m % 60))}`
  }

  isNight() {
    const m = ((this.s.minutes % 1440) + 1440) % 1440
    return m < 6 * 60 || m > 20.5 * 60
  }

  advance(minutes) {
    this.s.minutes += minutes
    while (this.s.minutes >= 1440) { this.s.minutes -= 1440; this.s.day++ }
  }

  // ----- survival -------------------------------------------------
  tick(dt) {
    if (this.dead) return
    const minutes = dt * 1.15
    this.advance(minutes)
    const m = this.s.meters
    m.hunger = clamp(m.hunger - 0.115 * minutes, 0, 100)
    m.thirst = clamp(m.thirst - 0.175 * minutes, 0, 100)
    m.fatigue = clamp(m.fatigue + 0.07 * minutes, 0, 100)
    m.hygiene = clamp(m.hygiene - 0.045 * minutes, 0, 100)
    if (m.hygiene < 25) m.stress += 0.02 * minutes
    if (m.fatigue > 75) m.stress += 0.025 * minutes
    m.stress = clamp(m.stress - 0.01 * minutes, 0, 100)

    let dmg = 0
    if (m.hunger <= 0) dmg += 0.28
    if (m.thirst <= 0) dmg += 0.42
    if (m.fatigue >= 100) dmg += 0.15
    if (m.stress >= 100) dmg += 0.1
    if (dmg > 0) this.damage(dmg * dt, 'Your body gives out')

    if (Math.random() < dt * 0.008 && m.hunger < 12) this.sound?.tone({ freq: 70, dur: 0.4, gain: 0.04, type: 'sine' })
    if (this.s.engineRunning && this.s.fluids.fuel > 0) {
      this.s.fluids.fuel = clamp(this.s.fluids.fuel - dt * 0.03, 0, 100)
      if (this.s.fluids.fuel <= 0) {
        this.s.engineRunning = false
        this.sound?.stopEngine()
        this.ui?.toast('The engine coughs dry. Out of fuel.', 'bad')
      }
    }
    if (this.s.engineRunning && this.s.fluids.oil > 0) {
      this.s.fluids.oil = clamp(this.s.fluids.oil - dt * 0.0008, 0, 100)
    }
    this.checkDeath()
  }

  damage(amount, reason) {
    if (this.dead) return
    this.s.health = clamp(this.s.health - amount, 0, 100)
    if (this.s.health <= 0) this.die(reason)
  }

  checkDeath() {
    if (this.s.health <= 0 && !this.dead) this.die('Your body gives out')
  }

  die(reason) {
    if (this.dead) return
    this.dead = true
    this.s.health = 0
    this.s.engineRunning = false
    this.wipe()
    this.sound?.stopEngine()
    this.sound?.stopMoped()
    this.ui?.showDeath(reason || 'The garage keeps its secrets.')
  }

  // ----- parts ----------------------------------------------------
  hasPart(name) { return this.s.parts[name] }

  givePart(name, amount = 1) {
    this.s.inventory[name] = (this.s.inventory[name] || 0) + amount
  }

  installPart(name) {
    if (this.s.parts[name]) return false
    if (!this.s.inventory[name]) return false
    this.s.inventory[name]--
    this.s.parts[name] = true
    this.s.bolts[name] = new Array(PART_INFO[name].bolts).fill(null)
    return true
  }

  torqueSpec(name) {
    return PART_INFO[name].torque
  }

  nextBolt(name) {
    const arr = this.s.bolts[name]
    if (!arr) return -1
    return arr.findIndex(v => v !== 'good')
  }

  applyTorque(name, index, value) {
    const info = PART_INFO[name]
    const [lo, hi] = info.torque
    let result
    if (value < lo) { result = 'loose'; this.s.stats.loose++ }
    else if (value > hi * 1.32) { result = 'stripped'; this.s.stats.stripped++ }
    else { result = 'good'; this.s.stats.torques++ }
    this.s.bolts[name][index] = result
    this.save()
    return result
  }

  looseBolts() {
    let n = 0
    for (const arr of Object.values(this.s.bolts)) for (const v of arr) if (v === 'loose') n++
    return n
  }

  strippedBolts() {
    let n = 0
    for (const arr of Object.values(this.s.bolts)) for (const v of arr) if (v === 'stripped') n++
    return n
  }

  allBoltsGood(name) {
    const arr = this.s.bolts[name] || []
    return arr.length > 0 && arr.every(v => v === 'good')
  }

  wheelsSafe() {
    return this.allBoltsGood('wheels')
  }

  missingParts() {
    return Object.keys(PART_INFO).filter(k => !this.s.parts[k])
  }

  // ----- fluids ---------------------------------------------------
  fill(kind) {
    const inv = this.s.inventory
    if (!inv[kind]) return { ok: false, msg: `No ${kind === 'coolant' ? 'antifreeze' : kind} left. The parts terminal sells more.` }
    inv[kind]--
    this.s.fluids[kind] = 100
    this.advance(6)
    this.save()
    this.sound?.slurp()
    return { ok: true, msg: kind === 'oil' ? 'Oil to the full mark.' : kind === 'coolant' ? 'Coolant topped up.' : 'Tank filled. Smells like money.' }
  }

  // ----- tuning ---------------------------------------------------
  tuneError() {
    const t = this.s.tune, sp = this.specs
    const mix = Math.abs(t.mix - sp.mix) / 1.0
    const timing = Math.abs(t.timing - sp.timing) / 7
    const valve = Math.abs(t.valve - sp.valve) / 0.1
    const avg = (Math.min(1, mix) + Math.min(1, timing) + Math.min(1, valve)) / 3
    return { mix, timing, valve, total: avg, score: clamp(1 - avg, 0, 1) }
  }

  vacuum() {
    const e = this.tuneError()
    return Math.max(3, 19.5 - e.total * 15 + (this.s.engineRunning ? Math.sin(performance.now() * 0.002) * 0.35 : 0))
  }

  idleRpm() {
    const e = this.tuneError()
    return Math.round(820 + e.total * 330 + (this.s.engineRunning ? Math.sin(performance.now() * 0.003) * 35 : 0))
  }

  setTune(key, value) {
    this.s.tune[key] = value
    this.save()
  }

  engineReadiness() {
    const missing = this.missingParts()
    if (missing.length) return { ok: false, msg: `Still missing: ${missing.map(k => PART_INFO[k].name).join(', ')}.` }
    const f = this.s.fluids
    if (f.oil < 12) return { ok: false, msg: 'No oil in the crankcase. It will seize.' }
    if (f.coolant < 12) return { ok: false, msg: 'The radiator is dry. Fill the coolant.' }
    if (f.fuel < 3) return { ok: false, msg: 'The tank is empty. Add fuel.' }
    return { ok: true }
  }

  startEngine() {
    if (this.s.engineRunning) {
      this.s.engineRunning = false
      this.sound?.stopEngine()
      this.save()
      return { running: false, msg: 'Engine off.' }
    }
    const ready = this.engineReadiness()
    if (!ready.ok) return { running: false, msg: ready.msg }
    const e = this.tuneError()
    let score = e.score
    score -= this.looseBolts() * 0.035
    score -= this.strippedBolts() * 0.05
    if (score >= 0.52) {
      this.s.engineRunning = true
      this.sound?.startEngine()
      this.sound?.revEngine(this.idleRpm(), clamp(1 - score, 0, 1))
      this.advance(3)
      this.save()
      const loose = this.looseBolts()
      let msg = 'It catches. Rough, but alive.'
      if (score > 0.82) msg = 'It catches clean. The Patient lives.'
      if (loose) msg += ` ${loose} loose bolt${loose > 1 ? 's' : ''} will come back to bite you.`
      return { running: true, msg, score }
    }
    this.sound?.crank(1.8, false)
    this.advance(4)
    this.save()
    let hint = 'It cranks and cranks, then nothing. Check the service log.'
    if (e.mix > 0.5) hint = 'It coughs black smoke and floods. The mixture is off.'
    else if (e.timing > 0.5) hint = 'It kicks back against the starter. Timing is wrong.'
    else if (e.valve > 0.5) hint = 'It hisses and stumbles. Valves are out of adjustment.'
    return { running: false, msg: hint, score }
  }

  // ----- interactions ---------------------------------------------
  drink() {
    this.s.meters.thirst = clamp(this.s.meters.thirst + 38, 0, 100)
    this.s.meters.hygiene = clamp(this.s.meters.hygiene + 18, 0, 100)
    this.advance(4)
    this.sound?.slurp()
    this.save()
    return 'Cold well water. It tastes like rust and relief.'
  }

  eat() {
    if (this.s.inventory.beans <= 0) return 'No food left. The store sells beans.'
    this.s.inventory.beans--
    this.s.meters.hunger = clamp(this.s.meters.hunger + 34, 0, 100)
    this.s.meters.stress = clamp(this.s.meters.stress - 3, 0, 100)
    this.advance(8)
    this.sound?.eat()
    this.save()
    return 'Cold beans, straight from the can.'
  }

  coffee() {
    if (this.s.inventory.coffee <= 0) return 'The pot is empty.'
    this.s.inventory.coffee--
    this.s.meters.fatigue = clamp(this.s.meters.fatigue - 22, 0, 100)
    this.s.meters.stress = clamp(this.s.meters.stress - 10, 0, 100)
    this.s.meters.thirst = clamp(this.s.meters.thirst + 5, 0, 100)
    this.advance(10)
    this.sound?.slurp()
    this.save()
    return 'Burnt coffee. Your hands stop shaking.'
  }

  smoke() {
    if (this.s.inventory.cigarettes <= 0) return 'No cigarettes left.'
    this.s.inventory.cigarettes--
    this.s.meters.stress = clamp(this.s.meters.stress - 28, 0, 100)
    this.s.health = clamp(this.s.health - 1, 0, 100)
    this.advance(6)
    this.save()
    return 'You smoke by the door. The fields go quiet.'
  }

  sleep() {
    this.s.meters.fatigue = 8
    this.s.meters.hunger = clamp(this.s.meters.hunger - 14, 0, 100)
    this.s.meters.thirst = clamp(this.s.meters.thirst - 16, 0, 100)
    this.s.meters.hygiene = clamp(this.s.meters.hygiene - 8, 0, 100)
    this.s.health = clamp(this.s.health + 8, 0, 100)
    this.advance(8 * 60)
    this.sound?.sleep()
    this.save()
    return 'You sleep on the cot. The garage settles around you.'
  }

  wash() {
    this.s.meters.hygiene = clamp(this.s.meters.hygiene + 55, 0, 100)
    this.s.meters.thirst = clamp(this.s.meters.thirst + 12, 0, 100)
    this.advance(12)
    this.sound?.slurp()
    this.save()
    return 'You scrub the grease off. Mostly.'
  }

  buy(id) {
    const item = STORE.find(i => i.id === id)
    if (!item) return { ok: false, msg: 'Not in stock.' }
    if (this.s.money < item.price) return { ok: false, msg: "You can't afford that." }
    this.s.money -= item.price
    this.s.inventory[id] = (this.s.inventory[id] || 0) + 1
    this.advance(2)
    this.sound?.clunk()
    this.save()
    return { ok: true, msg: `${item.name} bought.` }
  }

  acceptJob(id) {
    if (this.s.job) return { ok: false, msg: 'Finish the job you already took.' }
    if (!JOBS[id]) return { ok: false, msg: 'No such job.' }
    this.s.job = { id, stage: 'to_farm', load: 0 }
    this.sound?.ui()
    this.save()
    this.ui?.toast(id === 'courier' ? 'Parts run taken. Miller farm, east along the road.' : 'Firewood taken. Load at Miller farm, deliver to the store.', 'good')
    return { ok: true }
  }

  jobInfo() { return this.s.job ? { ...this.s.job, ...JOBS[this.s.job.id] } : null }

  completeDelivery() {
    const job = this.s.job
    if (!job) return
    this.s.money += JOBS[job.id].pay
    this.s.stats.jobs++
    this.s.job = null
    this.s.cargo = false
    this.advance(10)
    this.s.meters.stress = clamp(this.s.meters.stress - 12, 0, 100)
    this.sound?.success()
    this.save()
    this.ui?.toast(`${JOBS[job.id].title} paid $${JOBS[job.id].pay}.`, 'good')
  }

  loadCargo() {
    this.s.cargo = true
    this.s.job.stage = 'to_store'
    this.save()
  }

  unloadCargo() {
    this.s.cargo = false
  }

  // ----- objective ------------------------------------------------
  objectiveText() {
    if (this.dead) return ''
    const s = this.s
    if (s.job) {
      const j = this.jobInfo()
      if (j.stage === 'to_farm') return `${j.title}: get to Miller farm.`
      if (j.stage === 'to_store') return `${j.title}: deliver it to Hollow Creek store.`
      return j.title
    }
    if (!s.engineRunning) {
      const missing = this.missingParts()
      if (!s.parts.battery) return 'The Patient is bare. Find the battery and the service log.'
      if (missing.length) return `${missing.length} part${missing.length > 1 ? 's' : ''} still off the truck. The log lists every torque.`
      if (s.fluids.oil < 12 || s.fluids.coolant < 12 || s.fluids.fuel < 3) return 'Fluids first. Oil, coolant, fuel.'
      return 'Tune it, then crank it. The service log has the numbers.'
    }
    return 'The truck runs. Check the job board by the door.'
  }

  storeItems() { return STORE }
  jobs() { return JOBS }

  jobTarget() {
    const j = this.s.job
    if (!j) return null
    if (j.stage === 'to_farm') return { id: 'miller', x: 64, z: 37, label: 'Miller farm' }
    return { id: 'store', x: -58, z: 37, label: 'Hollow Creek store' }
  }

  // ----- death ----------------------------------------------------
  showDeath(reason) {
    this.ui?.showDeath(reason)
  }
}
