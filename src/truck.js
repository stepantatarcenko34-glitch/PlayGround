import * as THREE from 'three'
import { paintedMetalTexture, rustTexture } from './tex.js'

const paintTex = () => paintedMetalTexture('#52706a', 41)
const rustTex = () => rustTexture(43)

function mat(color, rough = 0.85, metal = 0.1, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...opts })
}

function box(w, h, d, material, x = 0, y = 0, z = 0, parent = null, cast = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material)
  m.position.set(x, y, z)
  m.castShadow = cast; m.receiveShadow = true
  if (parent) parent.add(m)
  return m
}

function cyl(rt, rb, h, seg, material, x = 0, y = 0, z = 0, parent = null) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material)
  m.position.set(x, y, z)
  m.castShadow = true; m.receiveShadow = true
  if (parent) parent.add(m)
  return m
}

export const PART_INFO = {
  battery: { name: 'Battery', tool: 10, bolts: 2, torque: [6, 9], spot: new THREE.Vector3(-0.58, 1.02, 2.12), note: '12V lead-acid. Terminals snug — do not crush the posts.' },
  carb: { name: 'Carburetor', tool: 10, bolts: 2, torque: [12, 16], spot: new THREE.Vector3(0, 1.52, 1.86), note: 'Two-barrel. Mount gasket dry. Throttle linkage must move free.' },
  alternator: { name: 'Alternator', tool: 12, bolts: 2, torque: [20, 26], spot: new THREE.Vector3(0.58, 1.0, 2.28), note: 'Belts should deflect about half an inch. Too tight kills the bearing.' },
  radiator: { name: 'Radiator', tool: 12, bolts: 2, torque: [10, 14], spot: new THREE.Vector3(0, 1.1, 2.52), note: 'Upper and lower hoses. Do not overtighten the plastic tanks.' },
  plugs: { name: 'Spark plugs', tool: 14, bolts: 4, torque: [18, 22], spot: new THREE.Vector3(0, 1.6, 1.58), note: 'Four plugs. Gap 0.035". Hand-thread first, then torque cold.' },
  wheels: { name: 'Wheels', tool: 19, bolts: 4, torque: [88, 104], spot: new THREE.Vector3(0, 0.55, 0.2), note: 'Four wheels. Star-pattern torque. Re-check after the first mile.' }
}

export class Truck {
  constructor() {
    this.group = new THREE.Group()
    this.group.name = 'truck'
    this.parts = {}
    this.mountBoxes = {}
    this.boltMeshes = {}
    this.wheels = []
    this.spin = 0
    this.logs = null
    this.installed = {}
    this.engineRunning = false
    this.exhaust = []
    this.build()
  }

  build() {
    const g = this.group
    const paint = new THREE.MeshStandardMaterial({ map: paintTex(), color: 0xb9c4bd, roughness: 0.78, metalness: 0.28 })
    const paintDark = new THREE.MeshStandardMaterial({ map: paintTex(), color: 0x7d8a85, roughness: 0.85, metalness: 0.22 })
    const rust = new THREE.MeshStandardMaterial({ map: rustTex(), color: 0x8a7362, roughness: 0.95, metalness: 0.1 })
    const steel = mat(0x777a76, 0.5, 0.75)
    const darkSteel = mat(0x34362f, 0.62, 0.7)
    const rubber = mat(0x181915, 0.95, 0.02)
    const glass = new THREE.MeshStandardMaterial({ color: 0x9eb0aa, roughness: 0.18, metalness: 0.55, transparent: true, opacity: 0.42 })
    const glassDark = new THREE.MeshStandardMaterial({ color: 0x2d3733, roughness: 0.3, metalness: 0.4, transparent: true, opacity: 0.8 })
    const chrome = mat(0xb7b1a2, 0.28, 0.95)
    const black = mat(0x1b1c18, 0.85, 0.2)
    const engineMetal = mat(0x5b5146, 0.68, 0.55)
    const cream = mat(0xd2c5a9, 0.8, 0.05)

    // ---- frame ------------------------------------------------------
    const frame = new THREE.Group(); g.add(frame)
    for (const x of [-0.62, 0.62]) box(0.12, 0.2, 5.0, rust, x, 0.6, -0.1, frame)
    for (const z of [-2.2, -1.0, 0.4, 1.5, 2.45]) box(1.4, 0.12, 0.12, rust, 0, 0.6, z, frame)
    box(1.25, 0.08, 5.0, mat(0x2a2b27, 0.95), 0, 0.72, -0.1, frame)

    // axles + brake drums
    for (const z of [1.55, -1.65]) {
      const axle = cyl(0.075, 0.075, 1.75, 10, darkSteel, 0, 0.47, z, frame)
      axle.rotation.z = Math.PI / 2
      for (const x of [-0.9, 0.9]) {
        const drum = cyl(0.26, 0.26, 0.1, 18, rust, x, 0.47, z, frame)
        drum.rotation.z = Math.PI / 2
        box(0.09, 0.34, 0.34, rust, x + Math.sign(x) * 0.03, 0.47, z, frame)
      }
    }

    // jack stands
    for (const z of [1.55, -1.65]) for (const x of [-0.8, 0.8]) {
      box(0.16, 0.5, 0.22, rust, x, 0.25, z, frame)
      box(0.34, 0.06, 0.4, mat(0x8a4a2b, 0.9, 0.2), x, 0.52, z, frame)
    }

    // ---- cab --------------------------------------------------------
    const cab = new THREE.Group(); g.add(cab)
    box(1.92, 0.78, 1.72, paint, 0, 1.04, 0.42, cab)          // lower cab
    box(1.82, 0.72, 0.22, paint, 0, 1.82, -0.34, cab)          // back panel
    box(1.86, 0.1, 1.42, paintDark, 0, 2.18, 0.36, cab)        // roof
    box(0.12, 0.74, 1.3, paint, -0.89, 1.82, 0.42, cab)        // left pillars
    box(0.12, 0.74, 1.3, paint, 0.89, 1.82, 0.42, cab)
    // windshield, angled
    const ws = box(1.62, 0.78, 0.04, glass, 0, 1.84, 1.03, cab)
    ws.rotation.x = -0.2
    // door glass
    box(0.03, 0.62, 0.98, glassDark, -0.955, 1.84, 0.36, cab)
    box(0.03, 0.62, 0.98, glassDark, 0.955, 1.84, 0.36, cab)
    // rear glass
    box(1.4, 0.5, 0.03, glassDark, 0, 1.86, -0.46, cab)
    // door seams, handles, mirrors
    for (const x of [-0.967, 0.967]) {
      box(0.012, 0.72, 0.9, paintDark, x, 1.06, 0.38, cab)
      box(0.05, 0.05, 0.27, chrome, x + Math.sign(x) * 0.02, 1.24, 0.28, cab)
      const arm = box(0.05, 0.04, 0.22, darkSteel, x + Math.sign(x) * 0.16, 1.55, 0.86, cab)
      arm.rotation.y = Math.sign(x) * 0.15
      box(0.04, 0.18, 0.28, darkSteel, x + Math.sign(x) * 0.28, 1.6, 0.91, cab).rotation.y = Math.sign(x) * 0.15
    }
    // cab floor / step / seat hints
    box(1.7, 0.16, 0.7, black, 0, 0.9, 0.9, cab)
    box(0.56, 0.5, 0.5, mat(0x42382d, 0.9), -0.42, 1.25, 0.25, cab)
    box(0.56, 0.5, 0.5, mat(0x42382d, 0.9), 0.42, 1.25, 0.25, cab)
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.028, 8, 20), black)
    wheel.position.set(-0.42, 1.55, 0.92); wheel.rotation.x = Math.PI / 2.7; cab.add(wheel)
    // rear window grime / sticker
    box(0.22, 0.14, 0.01, cream, 0.45, 1.8, -0.475, cab)

    // ---- engine bay + front clip --------------
    const front = new THREE.Group(); g.add(front)
    for (const x of [-0.91, 0.91]) {
      box(0.2, 0.48, 1.45, paint, x, 0.98, 1.62, front)          // fender tops
      const arch = cyl(0.36, 0.36, 0.12, 16, rust, x, 0.72, 1.55, front)
      arch.rotation.z = Math.PI / 2
    }
    box(1.82, 0.3, 0.22, paintDark, 0, 0.86, 2.38, front)         // valance
    box(1.74, 0.5, 0.14, paint, 0, 1.08, 2.44, front)             // grille surround
    for (let i = -6; i <= 6; i++) box(0.03, 0.4, 0.06, black, i * 0.12, 1.08, 2.5, front)
    for (const x of [-0.66, 0.66]) {
      const lamp = cyl(0.13, 0.13, 0.08, 16, cream, x, 1.1, 2.5, front)
      lamp.rotation.x = Math.PI / 2
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 6, 18), chrome)
      ring.position.set(x, 1.1, 2.52); front.add(ring)
    }
    const bumper = box(2.02, 0.16, 0.18, chrome, 0, 0.78, 2.6, front)
    bumper.castShadow = true
    box(0.55, 0.16, 0.02, cream, 0, 0.78, 2.7, front) // plate blank

    // engine bay cavity
    box(1.5, 0.1, 1.4, black, 0, 0.83, 1.65, front)
    // engine block
    box(0.78, 0.6, 1.0, engineMetal, 0, 1.05, 1.72, front)
    box(0.62, 0.2, 0.9, darkSteel, 0, 1.39, 1.72, front)
    box(0.68, 0.11, 0.82, mat(0x6b5c45, 0.72, 0.5), 0, 1.53, 1.7, front)  // valve cover
    for (let i = 0; i < 4; i++) box(0.04, 0.03, 0.8, rust, -0.28 + i * 0.19, 1.58, 1.7, front)
    for (let i = 0; i < 4; i++) {
      const runner = cyl(0.035, 0.035, 0.34, 8, rust, 0, 1.28, 1.38 + i * 0.18, front)
      runner.rotation.x = Math.PI / 2
    }
    // exhaust manifold
    const exh = cyl(0.05, 0.05, 1.1, 8, rust, 0.47, 0.92, 1.7, front)
    exh.rotation.x = Math.PI / 2
    // pulleys / fan
    for (const [x, y, z, r] of [[0.32, 1.02, 2.28, 0.12], [-0.25, 1.02, 2.28, 0.09], [0, 1.05, 2.3, 0.2]]) {
      const p = cyl(r, r, 0.07, 16, darkSteel, x, y, z, front); p.rotation.x = Math.PI / 2
    }
    // hoses
    const hoseCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.38, 1.3, 2.3), new THREE.Vector3(-0.4, 1.55, 2.2), new THREE.Vector3(-0.1, 1.58, 1.95)
    ])
    const hose = new THREE.Mesh(new THREE.TubeGeometry(hoseCurve, 8, 0.035, 6, false), black)
    front.add(hose)
    // hood, open
    const hoodPivot = new THREE.Group()
    hoodPivot.position.set(0, 1.35, 1.32)
    hoodPivot.rotation.x = -1.24
    const hood = box(1.8, 0.06, 1.3, paint, 0, 0, 0.65, hoodPivot)
    hood.castShadow = true
    box(1.62, 0.02, 1.12, mat(0x35352f, 0.92), 0, -0.042, 0.65, hoodPivot)
    for (const zz of [0.25, 0.65, 1.05]) box(1.5, 0.035, 0.06, darkSteel, 0, -0.06, zz, hoodPivot)
    box(0.1, 0.02, 0.7, mat(0x8d7b5a, 0.95), -0.4, -0.058, 0.65, hoodPivot)
    // prop rod
    const propRod = box(0.03, 0.03, 0.72, steel, -0.55, 0.3, 0.55, g)
    propRod.rotation.x = -0.65
    g.add(hoodPivot)

    // ---- bed --------------------------------------------------------
    const bed = new THREE.Group(); g.add(bed)
    box(1.92, 0.12, 2.1, rust, 0, 0.83, -1.55, bed)               // floor
    for (const x of [-0.94, 0.94]) box(0.08, 0.62, 2.05, paint, x, 1.18, -1.55, bed)
    box(1.92, 0.62, 0.08, paint, 0, 1.18, -2.62, bed)             // tailgate
    box(1.9, 0.08, 0.2, paintDark, 0, 1.5, -2.55, bed)
    // wheel wells in bed
    for (const x of [-0.8, 0.8]) {
      const well = cyl(0.4, 0.4, 0.2, 14, paintDark, x, 0.92, -1.65, bed)
      well.rotation.z = Math.PI / 2
    }
    // tail lights, bumper
    for (const x of [-0.72, 0.72]) box(0.28, 0.14, 0.05, mat(0x7a2218, 0.55, 0.1, { emissive: 0x220604 }), x, 0.95, -2.67, bed)
    box(1.98, 0.14, 0.16, chrome, 0, 0.72, -2.72, bed)

    // ---- wheels -----------------------------------------------------
    const wheelGeo = new THREE.CylinderGeometry(0.43, 0.43, 0.3, 26)
    const rimGeo = new THREE.CylinderGeometry(0.27, 0.27, 0.31, 18)
    const hubGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.33, 12)
    for (const [x, z] of [[-0.94, 1.55], [0.94, 1.55], [-0.94, -1.65], [0.94, -1.65]]) {
      const wg = new THREE.Group()
      wg.position.set(x, 0.43, z)
      wg.rotation.z = Math.PI / 2
      const tire = new THREE.Mesh(wheelGeo, rubber)
      tire.castShadow = true; tire.receiveShadow = true; wg.add(tire)
      const rim = new THREE.Mesh(rimGeo, steel)
      rim.castShadow = true; wg.add(rim)
      const hub = new THREE.Mesh(hubGeo, chrome); wg.add(hub)
      // tread blocks
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * Math.PI * 2
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.31, 0.1), rubber)
        b.position.set(Math.cos(a) * 0.41, 0.15, Math.sin(a) * 0.41)
        b.rotation.y = -a
        wg.add(b)
      }
      wg.visible = false
      g.add(wg)
      this.wheels.push(wg)
    }

    // ---- detail bits -------------------------------------------------
    // fuel filler
    const cap = cyl(0.09, 0.09, 0.05, 12, chrome, 0.78, 1.04, -2.28, g); cap.rotation.x = Math.PI / 2
    // exhaust
    const exhaust = cyl(0.045, 0.045, 2.4, 8, darkSteel, 0.5, 0.4, -1.4, g)
    exhaust.rotation.x = Math.PI / 2
    const tip = cyl(0.055, 0.055, 0.18, 8, chrome, 0.5, 0.4, -2.62, g)
    tip.rotation.x = Math.PI / 2
    // interior dust / blanket
    box(1.2, 0.05, 0.4, mat(0x6d3f2c, 0.95), 0.1, 1.54, 0.1, cab)

    // ---- parts (hidden until installed) ------------------------------
    const partMat = new THREE.MeshStandardMaterial({ color: 0x8d8c82, roughness: 0.55, metalness: 0.65 })

    const battery = new THREE.Group()
    box(0.34, 0.26, 0.22, mat(0x1f2422, 0.7), 0, 0.13, 0, battery)
    box(0.3, 0.05, 0.2, mat(0xb5ac8d, 0.8), 0, 0.27, 0, battery)
    for (const x of [-0.1, 0.1]) cyl(0.022, 0.022, 0.05, 8, chrome, x, 0.3, 0.02, battery)
    box(0.34, 0.05, 0.24, darkSteel, 0, 0.02, 0, battery)
    battery.position.set(-0.58, 0.88, 2.12)
    battery.visible = false
    g.add(battery)
    this.parts.battery = battery

    const carb = new THREE.Group()
    box(0.26, 0.18, 0.2, partMat, 0, 0.1, 0, carb)
    box(0.2, 0.06, 0.14, darkSteel, 0, 0.21, 0, carb)
    const airCleaner = cyl(0.19, 0.19, 0.09, 18, chrome, 0, 0.3, 0, carb)
    const stud = cyl(0.02, 0.02, 0.35, 8, steel, 0.23, 0.05, 0.02, carb)
    carb.position.set(0, 1.6, 1.86)
    carb.visible = false
    g.add(carb)
    this.parts.carb = carb

    const alt = new THREE.Group()
    const altBody = cyl(0.15, 0.15, 0.24, 18, partMat, 0, 0, 0, alt)
    altBody.rotation.z = Math.PI / 2
    for (let i = 0; i < 6; i++) {
      const v = cyl(0.03, 0.03, 0.22, 6, darkSteel, -0.12, 0, 0, alt)
    }
    const pulley = cyl(0.12, 0.12, 0.05, 16, darkSteel, 0.17, 0, 0, alt)
    pulley.rotation.z = Math.PI / 2
    alt.position.set(0.58, 1.0, 2.28)
    alt.visible = false
    g.add(alt)
    this.parts.alternator = alt

    const rad = new THREE.Group()
    box(1.0, 0.54, 0.1, mat(0x3d403c, 0.75, 0.4), 0, 0.3, 0, rad)
    for (let i = 0; i < 14; i++) box(0.015, 0.5, 0.11, darkSteel, -0.45 + i * 0.07, 0.3, 0, rad)
    box(0.88, 0.06, 0.14, rust, 0, 0.56, 0, rad)
    box(0.88, 0.06, 0.14, rust, 0, 0.04, 0, rad)
    const upperHose = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.35, 0.58, 0), new THREE.Vector3(-0.4, 0.72, -0.2), new THREE.Vector3(-0.45, 0.7, -0.55)
    ]), 8, 0.04, 6), black)
    rad.add(upperHose)
    rad.position.set(0, 0.82, 2.52)
    rad.visible = false
    g.add(rad)
    this.parts.radiator = rad

    const plugs = new THREE.Group()
    for (let i = 0; i < 4; i++) {
      const x = -0.27 + i * 0.18
      const body = cyl(0.026, 0.026, 0.13, 8, steel, x, 0.07, 0, plugs)
      const ceramic = cyl(0.035, 0.035, 0.08, 10, cream, x, 0.17, 0, plugs)
      box(0.035, 0.03, 0.035, chrome, x, 0.25, 0, plugs)
      const boot = cyl(0.03, 0.04, 0.08, 8, rubber, x, 0.2, 0, plugs)
    }
    plugs.position.set(0, 1.58, 1.55)
    plugs.visible = false
    g.add(plugs)
    this.parts.plugs = plugs

    // cargo logs
    const logs = new THREE.Group()
    const logMat = new THREE.MeshStandardMaterial({ map: paintedMetalTexture('#6b4c2e', 61), color: 0x9a8a76, roughness: 0.95 })
    const logGeo = new THREE.CylinderGeometry(0.115, 0.115, 1.9, 8)
    for (let i = 0; i < 9; i++) {
      const log = new THREE.Mesh(logGeo, logMat)
      log.rotation.z = Math.PI / 2
      log.position.set((i % 3 - 1) * 0.23, 0.98 + Math.floor(i / 3) * 0.21, -1.55 + (i % 2 ? 0.17 : -0.11))
      log.castShadow = true
      logs.add(log)
    }
    logs.visible = false
    this.logs = logs
    g.add(logs)

    // soft shadow blob
    const blob = new THREE.Mesh(new THREE.CircleGeometry(1.6, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.33, depthWrite: false }))
    blob.rotation.x = -Math.PI / 2
    blob.position.y = 0.02
    blob.scale.set(1, 2.4, 1)
    g.add(blob)

    this.boltMaterialGood = mat(0x9b9c94, 0.35, 0.9)
    this.boltMaterialLoose = mat(0xc29241, 0.4, 0.8)
    this.boltMaterialStrip = mat(0x8c3322, 0.55, 0.6)
  }

  setPart(name, installed) {
    this.installed[name] = installed
    if (name === 'wheels') {
      this.wheels.forEach(w => { w.visible = installed })
    } else if (this.parts[name]) {
      this.parts[name].visible = installed
    }
  }

  setCargo(on) { this.logs.visible = on }

  setRunning(on) { this.engineRunning = on }

  makeBolts(partName, states) {
    const info = PART_INFO[partName]
    const existing = this.boltMeshes[partName] || []
    existing.forEach(b => b.parent?.remove(b))
    const list = []
    const geo = new THREE.CylinderGeometry(0.035, 0.035, 0.035, 6)
    const positions = []
    if (partName === 'wheels') {
      // lugs live on each wheel
      this.wheels.forEach((wg, wi) => {
        for (let i = 0; i < 4; i++) {
          const a = i / 4 * Math.PI * 2 + 0.4
          positions.push({ x: wg.position.x + Math.cos(a) * 0.2, y: 0.43 + Math.sin(a) * 0.2, z: wg.position.z, parent: this.group })
        }
      })
    } else {
      const s = info.spot
      const n = info.bolts
      for (let i = 0; i < n; i++) {
        positions.push({ x: s.x + (i - (n - 1) / 2) * 0.16, y: s.y + 0.14, z: s.z + 0.08, parent: this.group })
      }
    }
    positions.forEach((p, i) => {
      const m = new THREE.Mesh(geo, states?.[i] === 'loose' ? this.boltMaterialLoose : states?.[i] === 'stripped' ? this.boltMaterialStrip : this.boltMaterialGood)
      if (partName === 'wheels') {
        m.position.set(p.x, p.y, p.z)
        m.rotation.z = Math.PI / 2
      } else {
        m.position.set(p.x, p.y, p.z)
      }
      m.visible = this.installed[partName] !== false
      this.group.add(m)
      list.push(m)
    })
    this.boltMeshes[partName] = list
    return list
  }

  update(dt, speed = 0) {
    this.spin += speed * dt * 2.3
    this.wheels.forEach(w => {
      if (w.visible) w.children.forEach(c => { c.rotation.y = this.spin })
    })
    if (this.engineRunning) {
      const feel = Math.min(1, Math.abs(speed) / 8)
      this.group.position.y = Math.sin(performance.now() * 0.05) * 0.0025 * (1 + feel * 4)
      this.group.rotation.z = Math.sin(performance.now() * 0.031) * 0.0008 * (1 + feel * 5)
    } else {
      this.group.rotation.z *= 0.98
    }
  }
}

export class Moped {
  constructor() {
    this.group = new THREE.Group()
    this.spin = 0
    this.build()
  }
  build() {
    const g = this.group
    const red = new THREE.MeshStandardMaterial({ color: 0x8d3524, roughness: 0.7, metalness: 0.3 })
    const dark = mat(0x22231f, 0.8, 0.3)
    const chrome = mat(0xa9a394, 0.35, 0.9)
    const rubber = mat(0x161713, 0.95)
    // wheels
    this.wheels = []
    for (const z of [-0.62, 0.62]) {
      const w = new THREE.Group()
      w.position.set(0, 0.3, z)
      w.rotation.z = Math.PI / 2
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.09, 20), rubber); w.add(tire)
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.1, 14), chrome); w.add(rim)
      for (let i = 0; i < 5; i++) {
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.11, 0.3), chrome)
        spoke.rotation.y = i / 5 * Math.PI
        w.add(spoke)
      }
      g.add(w); this.wheels.push(w)
    }
    // frame
    box(0.08, 0.1, 1.0, red, 0, 0.56, 0, g).rotation.x = -0.1
    box(0.22, 0.18, 0.42, dark, 0, 0.53, 0.12, g)
    const tank = box(0.24, 0.24, 0.44, red, 0, 0.76, 0.02, g)
    box(0.3, 0.08, 0.45, dark, 0, 0.9, -0.24, g) // seat
    box(0.34, 0.16, 0.35, dark, 0, 0.8, -0.62, g) // rack
    // fork + bars
    for (const x of [-0.08, 0.08]) {
      const fork = box(0.03, 0.6, 0.03, chrome, x, 0.55, 0.62, g)
      fork.rotation.x = 0.22
    }
    box(0.62, 0.035, 0.04, chrome, 0, 0.98, 0.52, g)
    for (const x of [-0.28, 0.28]) box(0.08, 0.05, 0.05, dark, x, 0.98, 0.52, g)
    const head = cyl(0.1, 0.1, 0.08, 14, chrome, 0, 0.87, 0.66, g); head.rotation.x = Math.PI / 2
    box(0.18, 0.14, 0.02, mat(0xe6d6a4, 0.2, 0.2, { emissive: 0x332a12 }), 0, 0.87, 0.71, g)
    // engine / pipe
    box(0.18, 0.2, 0.28, dark, 0, 0.42, 0.18, g)
    const pipe = cyl(0.035, 0.035, 1.0, 8, chrome, 0.13, 0.34, -0.22, g); pipe.rotation.x = Math.PI / 2
    const kick = box(0.03, 0.2, 0.05, chrome, -0.13, 0.4, 0.0, g)
    // mirror
    box(0.02, 0.24, 0.02, chrome, 0.3, 1.1, 0.52, g)
    box(0.12, 0.08, 0.02, chrome, 0.3, 1.22, 0.52, g)
    // kickstand-ish shadow
    const blob = new THREE.Mesh(new THREE.CircleGeometry(0.6, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false }))
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.02; blob.scale.set(0.55, 1.4, 1); g.add(blob)
  }
  update(dt, speed = 0) {
    this.spin += speed * dt * 3
    this.wheels.forEach(w => w.children.forEach(c => { c.rotation.y = this.spin }))
    this.group.rotation.z = THREE.MathUtils.lerp(this.group.rotation.z, speed * 0.006, 0.05)
  }
}
