import * as THREE from 'three'
import { World } from './world.js'
import { Game } from './game.js'
import { UI } from './ui.js'
import { Input } from './input.js'
import { Sound } from './audio.js'
import { PART_INFO } from './truck.js'

const $ = id => document.getElementById(id)
const stage = $('stage')

// ---------------------------------------------------------------- renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', stencil: false })
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.3
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
stage.appendChild(renderer.domElement)
renderer.domElement.setAttribute('aria-label', 'Bare Metal game view')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(64, window.innerWidth / window.innerHeight, 0.04, 360)
camera.rotation.order = 'YXZ'

const sound = new Sound()
const game = new Game(sound)
const world = new World(scene, renderer)
const ui = new UI(game, sound)
game.attachUI(ui)
const input = new Input(stage)

// ---------------------------------------------------------------- state
const clock = new THREE.Clock()
let mode = 'title'
let paused = false
let current = null
let holdKey = ''
let holdProgress = 0
let tool = 0
const tools = [null, 10, 12, 14, 19]
const player = {
  pos: new THREE.Vector3(2.35, 1.62, 4.45),
  yaw: 0.46,
  pitch: -0.1,
  bob: 0,
  stepDist: 0
}
let vehicle = null
let speed = 0
let heading = 0
let cameraLook = 0
let titleTime = 0
let jobPrompt = null
let saveAccum = 0
let introShown = false

const raycaster = new THREE.Raycaster()
raycaster.far = 3.4
const screenCenter = new THREE.Vector2(0, 0)
const tmpV = new THREE.Vector3()
const tmpV2 = new THREE.Vector3()

// ---------------------------------------------------------------- startup
ui.onStart = startGame
ui.onTool = i => {
  tool = tools[i] ?? 0
  ui.selectTool(i)
  if (mode === 'walk') ui.toast(i === 0 ? 'Empty hands.' : `${tools[i]}mm socket.`, '')
}
ui.onAction = () => doAction()
ui.onManual = () => toggleManual()
ui.onEscape = () => escape()
input.onAction = () => doAction()
input.onTool = i => ui.onTool(i)
input.onManual = () => toggleManual()
input.onEscape = () => escape()
ui.onBuy = id => {
  const res = game.buy(id)
  ui.toast(res.msg, res.ok ? 'good' : 'bad')
  ui.renderStore()
  updateHUD()
}
ui.onAcceptJob = id => {
  const res = game.acceptJob(id)
  if (!res.ok) { ui.toast(res.msg, 'bad'); return }
  ui.closePanel()
  syncMarkers()
  updateHUD()
}
ui.onCrank = () => {
  const res = game.startEngine()
  ui.updateTuneLive()
  ui.toast(res.msg, res.running ? 'good' : 'bad')
  if (res.running) {
    game.s.meters.stress = Math.max(0, game.s.meters.stress - 8)
    sound.revEngine(game.idleRpm(), 0.2)
    syncEngineSound()
  } else {
    game.s.meters.stress = Math.min(100, game.s.meters.stress + 4)
    sound.error()
  }
  updateHUD()
}
ui.onTorqueRelease = value => {
  const t = ui.torque
  if (!t) return
  const result = game.applyTorque(t.part, t.index, value)
  ui.torqueResult(result, value)
  syncBolts(t.part)
  if (result === 'good') {
    setTimeout(() => {
      const next = game.nextBolt(t.part)
      if (next >= 0 && game.s.parts[t.part]) startTorque(t.part, next)
      else finishPart(t.part)
    }, 1250)
  } else if (result === 'loose') {
    setTimeout(() => {
      if (mode === 'walk' || mode === 'drive') startTorque(t.part, t.index)
    }, 1400)
  } else {
    setTimeout(() => {
      if (ui.panel === 'torque') ui.hideTorque()
      ui.toast('Stripped thread. A bolt kit from the parts terminal will fix it.', 'bad')
      game.s.meters.stress = Math.min(100, game.s.meters.stress + 8)
    }, 1700)
  }
}
ui.onPanelOpen = name => {
  if (name !== 'torque') {
    paused = true
    input.releaseLock()
  }
  if (name === 'death') paused = true
}
ui.onPanelClose = () => {
  if (mode === 'walk' || mode === 'drive') {
    paused = false
    if (!input.coarse) input.requestLock()
  }
}
ui.onRestart = () => {
  game.wipe()
  location.reload()
}

input.bindJoystick($('joystick'), $('joystick').querySelector('.stick'))
input.onVehicle = () => {
  if (ui.panel) return
  if (mode === 'drive') exitVehicle()
  else if (mode === 'walk' && current?.action === 'enter_truck') enterVehicle('truck')
  else if (mode === 'walk' && current?.action === 'enter_moped') enterVehicle('moped')
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6))
})

// ---------------------------------------------------------------- start
function startGame() {
  const loaded = game.load()
  if (!loaded) game.newGame()
  syncWorldFromState()
  ui.showGame()
  ui.selectTool(0)
  ui.setStartVisible(false)
  mode = 'walk'
  paused = false
  const t = game.s.truck
  const truckInGarage = Math.abs(t.x) < 8.2 && t.z > -5.2 && t.z < 5.2
  if (truckInGarage) {
    player.pos.set(
      Math.max(-6, Math.min(6, t.x + 2.95)),
      1.62,
      Math.max(-4.8, Math.min(5.2, t.z + 5.6))
    )
  } else {
    // the truck is parked out in the valley — wake up at the driver's door
    const hdg = t.heading || 0
    player.pos.set(t.x - Math.cos(hdg) * 3.2, 1.62, t.z + Math.sin(hdg) * 3.2)
  }
  player.yaw = truckInGarage ? 0.58 : Math.atan2(-(t.x - player.pos.x), -(t.z - player.pos.z))
  player.pitch = -0.08
  if (loaded && game.s.engineRunning) {
    ui.subtitle('The Patient is still warm.\nAnother day in Hollow Creek.', 4200)
  }
  input.requestLock()
  startRender()
  updateHUD()
  syncMarkers()
}

function syncWorldFromState() {
  const s = game.s
  for (const [name, info] of Object.entries(PART_INFO)) {
    const installed = !!s.parts[name]
    world.truck.setPart(name, installed)
    if (installed) {
      if (name === 'wheels') world.truck.setPart('wheels', true)
      world.truck.makeBolts(name, s.bolts[name] || [])
    }
    const p = world.pickups[name]
    if (p) {
      const gone = installed || (s.inventory[name] || 0) > 0
      p.taken = gone
      p.group.visible = !gone
    }
  }
  world.truck.group.position.set(s.truck.x, 0, s.truck.z)
  world.truck.group.rotation.y = s.truck.heading || 0
  world.truck.setCargo(!!s.cargo)
  if (s.engineRunning) {
    syncEngineSound()
  }
  syncMarkers()
}

function syncBolts(part) {
  if (game.s.bolts[part]) world.truck.makeBolts(part, game.s.bolts[part])
}

function syncEngineSound() {
  if (game.s.engineRunning) {
    sound.startEngine()
    sound.revEngine(game.idleRpm(), Math.min(1, game.tuneError().total + game.looseBolts() * 0.05))
  } else sound.stopEngine()
}

function syncMarkers() {
  const j = game.jobTarget()
  world.setMarker('miller', !!j && j.id === 'miller')
  world.setMarker('store', !!j && j.id === 'store')
}

// ---------------------------------------------------------------- loop
let running = false
function startRender() {
  if (running) return
  running = true
  renderer.setAnimationLoop(loop)
}

function loop() {
  const dt = Math.min(0.05, clock.getDelta())
  const t = performance.now() / 1000

  if (mode === 'title') updateTitle(dt, t)
  else if (mode === 'dead') { /* keep rendering the dark room */ }
  else if (paused || (ui.panel && ui.panel !== 'torque')) {
    updateWorldAmbient(dt, t)
    ui.tickTorque(dt)
    updateHUD()
  } else {
    if (mode === 'walk') updateWalk(dt, t)
    if (mode === 'drive') updateDrive(dt, t)
    updateWorldAmbient(dt, t)
    ui.tickTorque(dt)
    game.tick(dt)
    if (game.dead) { mode = 'dead'; paused = true }
    updateHUD()
    saveAccum += dt
    if (saveAccum > 8) { saveAccum = 0; game.save() }
    if (ui.panel === 'tune') ui.updateTuneLive()
  }
  renderer.render(scene, camera)
  input.endFrame()
}

function updateWorldAmbient(dt, t) {
  world.update(dt, t)
  if (game.s.engineRunning) {
    sound.revEngine(game.idleRpm() + (mode === 'drive' && vehicle === 'truck' ? Math.abs(speed) * 85 : 0), Math.min(1, game.tuneError().total + game.looseBolts() * 0.08))
    if (Math.random() < dt * 14) world.puffExhaust()
  } else if (vehicle === 'truck' && mode === 'drive') {
    sound.revEngine(0, 1)
  }
  if (Math.random() < dt * 0.06 && !ui.panel) {
    // occasional creak / settling
    if (Math.random() > 0.5) sound.burst({ freq: 500 + Math.random() * 600, q: 3, dur: 0.18, gain: 0.012, rate: 0.4 })
  }
}

function updateTitle(dt, t) {
  titleTime += dt
  camera.fov = 56
  camera.updateProjectionMatrix()
  camera.position.set(4.55 + Math.sin(t * 0.08) * 0.18, 2.02 + Math.sin(t * 0.11) * 0.04, 4.7 + Math.cos(t * 0.06) * 0.12)
  camera.lookAt(0.15, 1.18, -0.55)
  world.update(dt, t)
  if (game.s.engineRunning) {} // keep title quiet
}

function updateWalk(dt, t) {
  camera.fov += (64 - camera.fov) * 0.1
  camera.updateProjectionMatrix()
  const look = input.consumeLook()
  if (!ui.panel) {
    player.yaw -= look.x * 0.0022
    player.pitch -= look.y * 0.0022
    player.pitch = Math.max(-1.35, Math.min(1.35, player.pitch))
  }
  const axis = ui.panel ? { x: 0, y: 0 } : input.axis()
  const fatigue = game.s.meters.fatigue
  const sprint = input.sprint() && fatigue < 80 && game.s.meters.stamina !== 0
  const speedWalk = (sprint ? 4.2 : 2.7) * (1 - Math.min(0.35, fatigue / 280)) * (game.s.health < 35 ? 0.72 : 1)
  const forward = tmpV.set(-Math.sin(player.yaw), 0, -Math.cos(player.yaw))
  const right = tmpV2.set(Math.cos(player.yaw), 0, -Math.sin(player.yaw))
  const wish = new THREE.Vector3()
  wish.addScaledVector(forward, -axis.y).addScaledVector(right, axis.x)
  if (wish.lengthSq() > 0) wish.normalize().multiplyScalar(speedWalk * dt)
  const moved = tryMove(wish.x, wish.z)
  const movedLen = Math.hypot(moved.x, moved.z)
  player.stepDist += movedLen
  if (movedLen > 0.0005) {
    player.bob += dt * (sprint ? 10 : 7.2)
    if (player.stepDist > 1.6) { player.stepDist = 0; sound.step(sprint ? 1.4 : 1) }
  } else {
    player.bob *= 0.9
  }
  const bobY = Math.sin(player.bob) * (sprint ? 0.045 : 0.028)
  const bobX = Math.cos(player.bob * 0.5) * 0.018
  camera.position.set(player.pos.x + right.x * bobX, player.pos.y + bobY, player.pos.z + right.z * bobX)
  camera.rotation.set(player.pitch, player.yaw, Math.sin(player.bob * 0.5) * 0.004)

  updateInteractions(dt)
  updateMountHints()
  updateVehicleProximity()
}

function tryMove(dx, dz) {
  const r = 0.26
  let mx = 0, mz = 0
  if (!blockedAt(player.pos.x + dx, player.pos.z, r)) { player.pos.x += dx; mx = dx }
  if (!blockedAt(player.pos.x, player.pos.z + dz, r)) { player.pos.z += dz; mz = dz }
  // keep inside the valley
  player.pos.x = Math.max(-170, Math.min(170, player.pos.x))
  player.pos.z = Math.max(-170, Math.min(170, player.pos.z))
  return { x: mx, z: mz }
}

function blockedAt(x, z, r) {
  for (const c of world.colliders) {
    if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) return true
  }
  for (const tc of world.treeColliders) {
    if ((x - tc.x) ** 2 + (z - tc.z) ** 2 < (tc.r + r) ** 2) return true
  }
  return false
}

// ---------------------------------------------------------------- interactions
function updateInteractions(dt) {
  current = null
  if (ui.panel) { ui.setPrompt(''); return }
  raycaster.setFromCamera(screenCenter, camera)
  const hits = raycaster.intersectObjects(world.interactables, false)
  for (const hit of hits) {
    if (hit.distance > 3.4) continue
    const def = hit.object.userData.interact
    if (!def) continue
    const resolved = resolveInteraction(def)
    if (resolved) { current = resolved; break }
  }
  jobPrompt = jobInteraction()
  if (jobPrompt) {
    const held = input.keys.has('KeyE') || ui.actionHeld
    if (jobPrompt.enabled) {
      if (held) {
        holdProgress += dt
        if (holdProgress >= jobPrompt.hold) {
          holdProgress = 0
          completeJobAction(jobPrompt)
        }
      } else holdProgress = 0
    } else holdProgress = 0
    ui.setPrompt(jobPrompt.text, { blocked: !jobPrompt.enabled, hold: jobPrompt.enabled ? jobPrompt.hold : 0, progress: holdProgress / jobPrompt.hold, key: 'E' })
    return
  }
  holdProgress = 0
  if (current) {
    ui.setPrompt(current.blocked ? current.reason : current.text, { blocked: current.blocked })
  } else {
    ui.setPrompt('')
  }
}

function updateMountHints() {
  if (!world.mountHints) return
  for (const [name, sprite] of Object.entries(world.mountHints)) {
    sprite.visible = !game.s.parts[name] && (game.s.inventory[name] || 0) > 0
    if (sprite.visible) sprite.material.opacity = 0.55 + Math.sin(performance.now() * 0.004) * 0.25
  }
}

function updateVehicleProximity() {
  // no-op placeholder; interactions handle entry
}

function resolveInteraction(def) {
  const id = def.id
  const s = game.s
  if (id.startsWith('pickup_')) {
    const part = id.slice(7)
    if (world.pickups[part]?.taken) return null
    return { text: `Pick up ${PART_INFO[part]?.name || def.label}`, action: 'pickup', part, key: 'E' }
  }
  if (id.startsWith('mount_')) {
    const part = id.slice(6)
    const info = PART_INFO[part]
    if (!info) return null
    const inv = s.inventory[part] || 0
    if (!s.parts[part]) {
      if (!inv) return { text: `Install ${info.name}`, blocked: true, reason: `${info.name} is still in the garage.`, action: 'install', part }
      if (tool !== info.tool) return { text: `Install ${info.name}`, blocked: true, reason: `Requires a ${info.tool}mm socket.`, action: 'install', part }
      return { text: `Install ${info.name} · ${info.tool}mm`, action: 'install', part }
    }
    const next = game.nextBolt(part)
    if (next < 0) return { text: `${info.name} · at spec`, action: null }
    const state = s.bolts[part][next]
    const strip = state === 'stripped'
    if (tool !== info.tool) return { text: strip ? 'Replace stripped bolt' : `Re-torque ${info.name}`, blocked: true, reason: `Requires a ${info.tool}mm socket.`, action: 'retorque', part, index: next }
    if (strip && (s.inventory.boltKit || 0) <= 0) return { text: 'Replace stripped bolt', blocked: true, reason: 'No bolt kit. The parts terminal sells them.', action: 'retorque', part, index: next }
    return { text: strip ? 'Replace stripped bolt' : `Torque ${info.name} · bolt ${next + 1}/${info.bolts}`, action: 'retorque', part, index: next }
  }
  switch (id) {
    case 'manual': return { text: 'Read the service log', action: 'manual' }
    case 'board': return { text: 'Check the job board', action: 'board' }
    case 'store': return { text: 'Use the parts terminal', action: 'store' }
    case 'radio': return { text: 'Turn the radio on', action: 'radio' }
    case 'cot': return { text: 'Sleep until morning', action: 'sleep' }
    case 'sink': return { text: 'Wash up / drink from the tap', action: 'sink' }
    case 'food': return { text: 'Eat cold beans', action: 'eat' }
    case 'coffee': return { text: 'Pour coffee', action: 'coffee' }
    case 'cigarettes': return { text: 'Smoke one', action: 'smoke' }
    case 'tune': return { text: 'Tune the engine', action: 'tune' }
    case 'ignition':
    case 'truck_drive':
      if (s.engineRunning) return { text: 'Get into The Patient', action: 'enter_truck' }
      return { text: 'Crank the engine', action: 'crank' }
    case 'moped_drive': return { text: 'Ride the moped', action: 'enter_moped' }
    case 'fuel_tank': {
      if ((s.inventory.fuel || 0) <= 0) return { text: 'Fill the fuel tank', blocked: true, reason: 'No fuel can. Buy one at the parts terminal.', action: 'fuel' }
      return { text: 'Fill the fuel tank · 1 can', action: 'fuel' }
    }
    case 'oil_fill': {
      if ((s.inventory.oil || 0) <= 0) return { text: 'Fill engine oil', blocked: true, reason: 'No oil. Buy a jug at the parts terminal.', action: 'oil' }
      return { text: 'Fill engine oil · 1 jug', action: 'oil' }
    }
    case 'coolant_fill': {
      if ((s.inventory.coolant || 0) <= 0) return { text: 'Fill coolant', blocked: true, reason: 'No antifreeze. Buy a jug at the parts terminal.', action: 'coolant' }
      return { text: 'Fill coolant · 1 jug', action: 'coolant' }
    }
  }
  return null
}

function doAction() {
  if (mode === 'title' || game.dead) return
  if (ui.panel) {
    return
  }
  if (mode === 'drive') {
    if (jobInteraction()?.enabled) return // hold handled in loop
    exitVehicle()
    return
  }
  if (jobPrompt) return
  if (!current) return
  if (current.blocked) {
    sound.error()
    ui.toast(current.reason || 'Not now.', 'bad')
    game.s.meters.stress = Math.min(100, game.s.meters.stress + 1)
    return
  }
  switch (current.action) {
    case 'pickup': pickupPart(current.part); break
    case 'install': installPart(current.part); break
    case 'retorque': retorque(current.part, current.index); break
    case 'manual': ui.openPanel('manual'); break
    case 'board': ui.openPanel('board'); break
    case 'store': ui.openPanel('store'); break
    case 'tune': ui.openPanel('tune'); break
    case 'radio': {
      const on = sound.toggleRadio()
      ui.toast(on ? 'The radio crackles to life. Something slow and sad.' : 'Radio off.')
      break
    }
    case 'sleep': {
      const msg = game.sleep()
      ui.toast(msg, 'good')
      sound.clunk()
      break
    }
    case 'sink': ui.toast(game.drink(), 'good'); break
    case 'eat': ui.toast(game.eat(), ''); break
    case 'coffee': ui.toast(game.coffee(), ''); break
    case 'smoke': ui.toast(game.smoke(), ''); break
    case 'crank': {
      const res = game.startEngine()
      ui.toast(res.msg, res.running ? 'good' : 'bad')
      if (res.running) {
        syncEngineSound()
        game.s.meters.stress = Math.max(0, game.s.meters.stress - 6)
      } else {
        game.s.meters.stress = Math.min(100, game.s.meters.stress + 5)
        sound.error()
      }
      updateHUD()
      break
    }
    case 'fuel': fillFluid('fuel'); break
    case 'oil': fillFluid('oil'); break
    case 'coolant': fillFluid('coolant'); break
    case 'enter_truck':
      if (!game.wheelsSafe()) { ui.toast('A wheel is loose. Torque the lugs before you drive.', 'bad'); sound.error(); break }
      enterVehicle('truck'); break
    case 'enter_moped': enterVehicle('moped'); break
  }
  updateHUD()
}

function pickupPart(part) {
  if (!world.takePickup(part)) return
  game.givePart(part, 1)
  sound.pickup()
  const info = PART_INFO[part]
  ui.toast(`${info.name} in hand. Needs a ${info.tool}mm socket.`, '')
  game.save()
  updateHUD()
}

function installPart(part) {
  if (part === 'wheels' && !game.hasPart('wheels')) {
    // wheels are a set
  }
  if (!game.installPart(part)) { ui.toast('You do not have that part.', 'bad'); return }
  world.truck.setPart(part, true)
  world.truck.makeBolts(part, game.s.bolts[part])
  sound.clunk()
  ui.toast(`${PART_INFO[part].name} mounted. Torque it to spec.`, '')
  game.save()
  setTimeout(() => { if (game.s.parts[part]) startTorque(part, 0) }, 350)
}

function retorque(part, index) {
  const state = game.s.bolts[part]?.[index]
  if (state === 'stripped') {
    if ((game.s.inventory.boltKit || 0) <= 0) { ui.toast('No bolt kit to replace the stripped stud.', 'bad'); return }
    game.s.inventory.boltKit--
    game.s.bolts[part][index] = null
    syncBolts(part)
    ui.toast('Stud extracted. New bolt threaded in by hand.', 'good')
    sound.ratchet()
  }
  startTorque(part, index)
}

function startTorque(part, index) {
  const info = PART_INFO[part]
  if (!game.s.parts[part]) return
  if (!game.s.bolts[part]) game.s.bolts[part] = new Array(info.bolts).fill(null)
  if (index < 0) return
  if (tool !== info.tool) {
    sound.error()
    ui.toast(`Need a ${info.tool}mm socket.`, 'bad')
    return
  }
  const [lo, hi] = info.torque
  ui.showTorque({ part, label: info.name, lo, hi, index, total: info.bolts })
  if (ui.torque) ui.torque.startedAt = performance.now()
}

function finishPart(part) {
  if (ui.panel === 'torque') ui.hideTorque()
  sound.success()
  const loose = game.s.bolts[part].filter(v => v === 'loose').length
  const strip = game.s.bolts[part].filter(v => v === 'stripped').length
  if (!loose && !strip) ui.toast(`${PART_INFO[part].name} seated at spec.`, 'good')
  else ui.toast(`Done — but ${loose} loose, ${strip} stripped. Fix them.`, 'bad')
  game.save()
  updateHUD()
}

function fillFluid(kind) {
  const res = game.fill(kind)
  ui.toast(res.msg, res.ok ? 'good' : 'bad')
  if (res.ok) sound.slurp()
  updateHUD()
}

function jobInteraction() {
  const j = game.s.job
  if (!j) return null
  const target = game.jobTarget()
  if (!target) return null
  const pos = mode === 'drive' ? world.truck.group.position : player.pos
  if (mode === 'drive' && vehicle === 'moped') {
    // moped position instead
  }
  const p = mode === 'drive' ? (vehicle === 'truck' ? world.truck.group.position : world.truck.group.position) : player.pos
  const px = mode === 'drive' ? (vehicle === 'truck' ? world.truck.group.position.x : world.moped.group.position.x) : player.pos.x
  const pz = mode === 'drive' ? (vehicle === 'truck' ? world.truck.group.position.z : world.moped.group.position.z) : player.pos.z
  const dist = Math.hypot(px - target.x, pz - target.z)
  if (dist > 9) return null
  if (mode !== 'drive') return { text: `Get a vehicle for ${target.label}`, enabled: false, hold: 0, act: 'none' }
  if (Math.abs(speed) > 1.4) return { text: 'Stop the vehicle to load', enabled: false, hold: 0, act: 'none' }
  if (j.id === 'firewood' && vehicle !== 'truck') return { text: 'Firewood needs the truck', enabled: false, hold: 0, act: 'none' }
  if (j.stage === 'to_farm') {
    return { text: j.id === 'courier' ? 'Drop the crate at Miller farm — hold E' : 'Load firewood at Miller farm — hold E', enabled: true, hold: j.id === 'courier' ? 2.6 : 4.2, act: 'load' }
  }
  return { text: 'Unload firewood at the store — hold E', enabled: true, hold: 4.2, act: 'unload' }
}

function completeJobAction(p) {
  const j = game.s.job
  if (!j) return
  if (p.act === 'load') {
    if (j.id === 'courier') {
      game.completeDelivery()
      ui.toast('Crate delivered. Miller pays cash.', 'good')
      sound.success()
      syncMarkers()
    } else {
      game.loadCargo()
      world.truck.setCargo(true)
      sound.clunk()
      ui.toast('Bed loaded. Take it to the store.', 'good')
      syncMarkers()
    }
  } else if (p.act === 'unload') {
    game.unloadCargo()
    world.truck.setCargo(false)
    game.completeDelivery()
    syncMarkers()
    sound.success()
  }
  updateHUD()
}

// ---------------------------------------------------------------- vehicles
function enterVehicle(kind) {
  if (kind === 'truck') {
    if (!game.s.engineRunning) { ui.toast('The engine is dead. Crank it first.', 'bad'); return }
    if (!game.wheelsSafe()) { ui.toast('Wheel nuts are loose. Torque them.', 'bad'); return }
    vehicle = 'truck'
    const t = game.s.truck
    world.truck.group.position.set(t.x, 0, t.z)
    world.truck.group.rotation.y = t.heading || 0
    heading = t.heading || 0
    speed = 0
    syncEngineSound()
  } else {
    vehicle = 'moped'
    heading = world.moped.group.rotation.y
    speed = 0
    sound.startMoped()
  }
  mode = 'drive'
  paused = false
  ui.setPrompt('')
  ui.toast(kind === 'truck' ? 'The Patient. Three gears, no sympathy.' : 'The moped. Two wheels, questionable brakes.', '')
  input.releaseLock()
  document.body.classList.add('driving')
  if (kind === 'moped') world.moped.group.position.set(world.moped.group.position.x, 0, world.moped.group.position.z)
}

function exitVehicle() {
  if (mode !== 'drive') return
  if (vehicle === 'truck') {
    const t = game.s.truck
    game.s.truck = { x: world.truck.group.position.x, z: world.truck.group.position.z, heading }
    t.x = game.s.truck.x; t.z = game.s.truck.z; t.heading = heading
    const side = new THREE.Vector3(Math.cos(heading), 0, -Math.sin(heading))
    player.pos.set(world.truck.group.position.x - side.x * 1.5, 1.62, world.truck.group.position.z - side.z * 1.5)
    game.save()
  } else {
    player.pos.set(world.moped.group.position.x - 1.0, 1.62, world.moped.group.position.z)
    sound.stopMoped()
  }
  // don't place the player inside a wall
  if (blockedAt(player.pos.x, player.pos.z, 0.26)) {
    player.pos.set(world.truck.group.position.x + 2.2, 1.62, world.truck.group.position.z + 2.5)
  }
  mode = 'walk'
  vehicle = null
  speed = 0
  document.body.classList.remove('driving')
  ui.setPrompt('')
  ui.toast('On foot. The dirt is cold.', '')
}

function updateDrive(dt, t) {
  const axis = input.axis()
  const truck = vehicle === 'truck'
  const maxFwd = truck ? 13.5 : 9.5
  const maxRev = truck ? 4.2 : 2.5
  const accel = truck ? 6.2 : 5.2
  const brake = 9
  const group = truck ? world.truck.group : world.moped.group
  const onRoad = isOnRoad(group.position.x, group.position.z)
  const drag = onRoad ? 0.7 : 2.4

  // throttle / brake
  if (axis.y < -0.1) {
    speed += accel * -axis.y * dt * (truck ? 0.9 : 1.1)
  } else if (axis.y > 0.1) {
    if (speed > 0.2) speed -= brake * axis.y * dt
    else speed -= accel * 0.55 * axis.y * dt
  } else {
    speed -= Math.sign(speed) * drag * dt
  }
  if (!onRoad) speed -= Math.sign(speed) * 1.3 * dt
  speed = Math.max(-maxRev, Math.min(maxFwd, speed))
  if (Math.abs(speed) < 0.03) speed = 0

  // steering
  const steer = axis.x
  const grip = Math.min(1, Math.abs(speed) / 3.2)
  if (Math.abs(speed) > 0.05) {
    heading += steer * (truck ? 1.5 : 2.1) * dt * grip * Math.sign(speed)
  }
  if (!onRoad && Math.abs(speed) > 4) {
    cameraLook = Math.sin(t * 17) * 0.006 * Math.abs(speed) / 5
  } else cameraLook *= 0.9

  // move + collide
  const forward = tmpV.set(Math.sin(heading), 0, Math.cos(heading))
  const nx = group.position.x + forward.x * speed * dt
  const nz = group.position.z + forward.z * speed * dt
  let hit = false
  for (const tc of world.treeColliders) {
    if ((nx - tc.x) ** 2 + (nz - tc.z) ** 2 < (tc.r + (truck ? 1.25 : 0.6)) ** 2) { hit = true; break }
  }
  if (nx < -160 || nx > 160 || nz < -160 || nz > 160) hit = true
  if (hit) {
    if (Math.abs(speed) > 5) {
      sound.crash()
      game.s.meters.stress = Math.min(100, game.s.meters.stress + 9)
      game.s.stats.crashes++
      game.damage(Math.min(30, Math.abs(speed) * 0.9), 'The road took you apart')
      ui.toast('You hit something solid. The frame shudders.', 'bad')
      game.s.meters.fatigue = Math.min(100, game.s.meters.fatigue + 4)
    }
    speed = -speed * 0.16
  } else {
    group.position.x = nx
    group.position.z = nz
  }
  group.rotation.y = heading
  if (truck) {
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -steer * 0.025 * Math.min(1, Math.abs(speed) / 8), 0.08)
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -axis.y * 0.008, 0.08)
    world.truck.group.updateMatrixWorld()
    if (Math.abs(speed) > 0.1) world.truck.update(dt, speed)
    game.s.truck = { x: group.position.x, z: group.position.z, heading }
    game.s.stats.km += Math.abs(speed) * dt / 1000
    sound.revEngine(game.idleRpm() + Math.abs(speed) * 95, Math.min(1, game.tuneError().total + game.looseBolts() * 0.04))
    if (Math.abs(speed) > 2 && Math.random() < dt * 5) world.puffExhaust()
  } else {
    world.moped.update(dt, speed)
    sound.revMoped(1200 + Math.abs(speed) * 190)
    game.s.stats.km += Math.abs(speed) * dt / 1000
  }

  // chase camera
  const dist = truck ? 8.2 : 3.7
  const height = truck ? 3.7 : 2.1
  const camTarget = tmpV2.set(group.position.x - forward.x * dist, height, group.position.z - forward.z * dist)
  if (isInGarage(group.position.x, group.position.z)) {
    camTarget.x = Math.max(-8.2, Math.min(8.2, camTarget.x))
    camTarget.z = Math.max(-5.2, Math.min(5.5, camTarget.z))
    camTarget.y = Math.min(4.1, camTarget.y)
  }
  camera.position.lerp(camTarget, 1 - Math.pow(0.001, dt))
  camera.lookAt(group.position.x + forward.x * 1.6, 1.25 + cameraLook, group.position.z + forward.z * 1.6)
  camera.fov += ((truck ? 62 : 68) - camera.fov) * 0.08
  camera.updateProjectionMatrix()
  jobPrompt = jobInteraction()
  if (jobPrompt) {
    const held = input.keys.has('KeyE') || ui.actionHeld
    if (jobPrompt.enabled) {
      if (held) {
        holdProgress += dt
        if (holdProgress >= jobPrompt.hold) { holdProgress = 0; completeJobAction(jobPrompt) }
      } else holdProgress = 0
    } else { holdProgress = 0; jobPrompt = null }
  }
  if (jobPrompt) {
    ui.setPrompt(jobPrompt.text, { blocked: !jobPrompt.enabled, hold: jobPrompt.enabled ? jobPrompt.hold : 0, progress: holdProgress / jobPrompt.hold })
  } else {
    ui.setPrompt(`Get out · ${onRoad ? 'ON ROAD' : 'OFF ROAD'}`, { key: 'F' })
  }
  updateHUD()
}

function isOnRoad(x, z) {
  if (Math.abs(z - 26) < 4.6 && Math.abs(x) < 155) return true
  if (Math.abs(x) < 4.2 && z > 4 && z < 27) return true
  if (Math.abs(x - 64) < 3.4 && z > 25 && z < 40) return true
  if (Math.abs(x + 58) < 3.4 && z > 25 && z < 40) return true
  return false
}
function isInGarage(x, z) {
  return x > -9 && x < 9 && z > -6 && z < 6
}

// ---------------------------------------------------------------- misc
function updateHUD() {
  const pos = mode === 'drive' ? (vehicle === 'truck' ? world.truck.group.position : world.moped.group.position) : player.pos
  const hdg = mode === 'drive' ? (heading * 180 / Math.PI) : (-player.yaw * 180 / Math.PI + 180)
  ui.updateHUD({ heading: mode === 'drive' ? (heading * 180 / Math.PI) : ((player.yaw * 180 / Math.PI) % 360), pos, driving: mode === 'drive', speed, vehicle })
}

function toggleManual() {
  if (mode === 'title' || game.dead) return
  if (ui.panel === 'manual') ui.closePanel()
  else if (!ui.panel || ui.panel === 'torque') ui.openPanel('manual')
}

function escape() {
  if (game.dead) return
  if (ui.panel) {
    if (ui.panel !== 'death') ui.closePanel()
    return
  }
  if (mode === 'title') return
  ui.openPanel('pause')
}

window.BareMetal = {
  game, world, ui, input, sound,
  get mode() { return mode },
  get current() { return current },
  get player() { return player },
  teleport(x, z, yaw = player.yaw, pitch = -0.08) {
    player.pos.set(x, 1.62, z)
    player.yaw = yaw
    player.pitch = pitch
  },
  face(x, y, z) {
    const dx = x - player.pos.x, dz = z - player.pos.z
    const dist = Math.hypot(dx, dz)
    player.yaw = Math.atan2(-dx, -dz)
    player.pitch = Math.atan2(y - player.pos.y, dist)
  },
  enterVehicle, exitVehicle, startTorque
}

// start the render loop immediately so the title scene is alive
renderer.setAnimationLoop(loop)
