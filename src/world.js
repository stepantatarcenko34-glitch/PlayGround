import * as THREE from 'three'
import {
  concreteTexture, corrugatedTexture, rustTexture, woodTexture, paintedMetalTexture,
  grassTexture, dirtTexture, skyTexture, labelTexture, signTexture, posterTexture
} from './tex.js'
import { Truck, Moped, PART_INFO } from './truck.js'

const TAU = Math.PI * 2
const V3 = (x, y, z) => new THREE.Vector3(x, y, z)
let defaultScene = null

function attach(m, parent) {
  if (parent) parent.add(m)
  else if (defaultScene) defaultScene.add(m)
  return m
}

function mat(color, rough = 0.8, metal = 0.1, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...opts })
}
function box(w, h, d, material, x = 0, y = 0, z = 0, parent = null, cast = true, receive = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material)
  m.position.set(x, y, z)
  m.castShadow = cast; m.receiveShadow = receive
  return attach(m, parent)
}
function cyl(rt, rb, h, seg, material, x = 0, y = 0, z = 0, parent = null) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material)
  m.position.set(x, y, z)
  m.castShadow = true; m.receiveShadow = true
  return attach(m, parent)
}
function plane(w, h, material, x, y, z, rx = -Math.PI / 2, parent = null) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material)
  m.position.set(x, y, z); m.rotation.x = rx
  m.receiveShadow = true
  return attach(m, parent)
}
function tag(lines, x, y, z, scale = 0.5) {
  const t = labelTexture(lines)
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false }))
  s.position.set(x, y, z)
  s.scale.set(scale, scale, 1)
  return s
}

export class World {
  constructor(scene, renderer) {
    this.scene = scene
    this.renderer = renderer
    this.colliders = []
    this.treeColliders = []
    this.interactables = []
    this.markers = {}
    this.pickups = {}
    this.dust = null
    this.exhaust = null
    this.clock = 0
    this.build()
  }

  addCollider(minX, maxX, minZ, maxZ) {
    this.colliders.push({ minX, maxX, minZ, maxZ })
  }

  interact(mesh, def) {
    mesh.userData.interact = def
    this.interactables.push(mesh)
    return mesh
  }

  addHitbox(w, h, d, x, y, z, def, parent = this.scene) {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    )
    m.position.set(x, y, z)
    m.userData.interact = def
    parent.add(m)
    this.interactables.push(m)
    return m
  }

  build() {
    const scene = this.scene
    defaultScene = scene
    scene.background = new THREE.Color(0x9d8f79)
    scene.fog = new THREE.Fog(0x9a9486, 62, 260)

    this.buildSky()
    this.buildLights()
    this.buildGarage()
    this.buildProps()
    this.buildOutside()
    this.buildTruck()
    this.buildParticles()
  }

  buildSky() {
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(320, 32, 20),
      new THREE.MeshBasicMaterial({ map: skyTexture(), side: THREE.BackSide, fog: false, depthWrite: false })
    )
    sky.rotation.y = 1.9
    this.scene.add(sky)
    // low sun disc
    const sun = new THREE.Sprite(new THREE.SpriteMaterial({
      map: radialSprite(0xffe0b0, 0.0), color: 0xffe6bb, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false
    }))
    sun.position.set(150, 42, 210)
    sun.scale.set(90, 90, 1)
    this.scene.add(sun)
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight(0xa8b6c6, 0x4a3a28, 1.35)
    this.scene.add(hemi)
    const amb = new THREE.AmbientLight(0x8a7860, 0.42)
    this.scene.add(amb)
    const sun = new THREE.DirectionalLight(0xffc07a, 3.1)
    sun.position.set(46, 26, 72)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    const c = sun.shadow.camera
    c.left = -34; c.right = 34; c.top = 34; c.bottom = -34; c.near = 1; c.far = 160
    sun.shadow.bias = -0.0008
    sun.shadow.normalBias = 0.035
    this.scene.add(sun)
    this.sun = sun

    const doorFill = new THREE.DirectionalLight(0x9fb8cf, 0.55)
    doorFill.position.set(-12, 8, 30)
    this.scene.add(doorFill)

    // pendant lamps
    this.lamps = []
    const lampMat = mat(0x2f3a33, 0.55, 0.5)
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd7a0 })
    const positions = [[-3.2, -1.6], [0, -1.6], [3.2, -1.6], [0, 2.6], [-5.5, 2.0]]
    positions.forEach(([x, z], i) => {
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.28, 18, 1, true), lampMat)
      shade.position.set(x, 3.62, z); shade.rotation.x = Math.PI
      this.scene.add(shade)
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), bulbMat)
      bulb.position.set(x, 3.48, z)
      this.scene.add(bulb)
      const cord = cyl(0.008, 0.008, 0.9, 4, mat(0x161510, 0.9), x, 4.08, z)
      this.scene.add(cord)
      const light = new THREE.PointLight(0xffb86a, i === 4 ? 22 : 58, 15, 2)
      light.position.set(x, 3.35, z)
      light.castShadow = i === 1
      if (light.castShadow) {
        light.shadow.mapSize.set(512, 512)
        light.shadow.bias = -0.002
      }
      this.scene.add(light)
      this.lamps.push(light)
    })

    // warm bench task lamp
    const benchLight = new THREE.SpotLight(0xffca8a, 46, 7, 0.95, 0.65, 2)
    benchLight.position.set(-5.2, 2.4, -4.9)
    benchLight.target.position.set(-5.0, 1.0, -4.2)
    this.scene.add(benchLight, benchLight.target)

    const doorLight = new THREE.SpotLight(0xaec6d8, 95, 24, 0.72, 0.85, 1.6)
    doorLight.position.set(0.5, 3.2, 9.2)
    doorLight.target.position.set(0, 1.0, -1.2)
    this.scene.add(doorLight, doorLight.target)

    // stove glow
    const stoveGlow = new THREE.PointLight(0xff6a2a, 9, 5, 2)
    stoveGlow.position.set(-8.1, 0.7, -5.2)
    this.scene.add(stoveGlow)
    this.stoveGlow = stoveGlow
  }

  buildGarage() {
    const concrete = new THREE.MeshStandardMaterial({ map: concreteTexture(3), roughness: 0.96, metalness: 0.02, color: 0xb9b3a6 })
    concrete.map.repeat.set(3, 2)
    const wallMat = new THREE.MeshStandardMaterial({ map: corrugatedTexture(8, '#5c5c53'), roughness: 0.88, metalness: 0.18 })
    wallMat.map.repeat.set(4, 1.5)
    const wallMat2 = new THREE.MeshStandardMaterial({ map: corrugatedTexture(19, '#595a52'), roughness: 0.9, metalness: 0.18 })
    wallMat2.map.repeat.set(3, 1.5)
    const wood = new THREE.MeshStandardMaterial({ map: woodTexture(17), roughness: 0.92, metalness: 0.02 })
    wood.map.repeat.set(2, 1)
    const beam = new THREE.MeshStandardMaterial({ map: woodTexture(23, '#4e3c2a'), roughness: 0.95 })
    beam.map.repeat.set(1, 2)
    const dark = mat(0x24251f, 0.9)
    const rust = new THREE.MeshStandardMaterial({ map: rustTexture(27), roughness: 0.9, metalness: 0.25 })

    // floor & apron
    box(18, 0.2, 12, concrete, 0, -0.1, 0, null, false, true)
    box(7.4, 0.12, 5, concrete, 0, -0.04, 8.2, null, false, true)
    box(2.2, 0.05, 3.6, mat(0x3f3b32, 0.95), -3.3, 0.015, 3.6, null, false, true) // old stain patch
    // painted bay line
    box(0.05, 0.012, 4.6, mat(0x494330, 0.98), -2.9, 0.012, -0.6, null, false, false)
    box(0.05, 0.012, 4.6, mat(0x494330, 0.98), 2.9, 0.012, -0.6, null, false, false)

    // walls
    const back = box(18, 4.8, 0.24, wallMat, 0, 2.4, -6, null, false, true)
    const left = box(0.24, 4.8, 12, wallMat2, -9, 2.4, 0, null, false, true)
    const right = box(0.24, 4.8, 12, wallMat2, 9, 2.4, 0, null, false, true)
    // front wall with opening
    box(6.6, 4.8, 0.24, wallMat, -5.7, 2.4, 6, null, false, true)
    box(6.6, 4.8, 0.24, wallMat, 5.7, 2.4, 6, null, false, true)
    box(4.8, 1.45, 0.24, wallMat, 0, 4.08, 6, null, false, true)
    // roof + trusses
    box(18.5, 0.3, 12.4, mat(0x2b2c26, 0.92), 0, 4.85, 0, null, true, true)
    for (let z = -5; z <= 5; z += 2.5) {
      box(18, 0.18, 0.14, beam, 0, 4.5, z)
      for (const x of [-6, -2, 2, 6]) box(0.12, 0.12, 1.4, beam, x, 4.28, z).rotation.x = 0.3
    }
    // wall girts
    for (const y of [0.4, 2.0, 3.6]) {
      box(17.8, 0.14, 0.1, rust, 0, y, -5.86)
      box(0.1, 0.14, 11.8, rust, -8.86, y, 0)
      box(0.1, 0.14, 11.8, rust, 8.86, y, 0)
    }

    // windows, back and right
    const windowPane = new THREE.MeshBasicMaterial({ map: skyTexture(), color: 0xd7b78e, transparent: true, opacity: 0.9 })
    for (const [x, y, z, w, h] of [[-5.2, 2.7, -5.86, 2.3, 1.35], [5.4, 2.7, -5.86, 1.8, 1.2]]) {
      plane(w, h, windowPane, x, y, z, 0)
      const frame = mat(0x2a2923, 0.9)
      box(w + 0.14, 0.08, 0.1, frame, x, y + h / 2, z + 0.02)
      box(w + 0.14, 0.08, 0.1, frame, x, y - h / 2, z + 0.02)
      box(0.08, h, 0.1, frame, x - w / 2, y, z + 0.02)
      box(0.08, h, 0.1, frame, x + w / 2, y, z + 0.02)
      box(0.05, h, 0.06, frame, x, y, z + 0.03)
      box(w, 0.05, 0.06, frame, x, y, z + 0.03)
    }

    // garage door roll + tracks
    const roll = cyl(0.34, 0.34, 4.85, 20, corrugatedDoorMat(), 0, 4.12, 5.9)
    roll.rotation.z = Math.PI / 2
    for (const x of [-2.42, 2.42]) {
      box(0.07, 3.6, 0.1, mat(0x37362f, 0.6, 0.6), x, 2.05, 5.86)
    }
    // threshold
    box(5.0, 0.04, 0.3, mat(0x4a463c, 0.95), 0, 0.02, 5.95, null, false, false)

    // signage
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.0), new THREE.MeshBasicMaterial({ map: signTexture('HOLLOW CREEK', 'GARAGE · REPAIRS · TOWING'), transparent: true }))
    banner.position.set(-5.4, 3.55, -5.82)
    this.scene.add(banner)
    const poster = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.32), new THREE.MeshBasicMaterial({ map: posterTexture(), transparent: true }))
    poster.position.set(3.0, 2.55, -5.85)
    this.scene.add(poster)
    // calendar
    const cal = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.86), new THREE.MeshBasicMaterial({ map: labelTexture(['OCT', '31'], '#e5dcc6'), transparent: true }))
    cal.position.set(1.0, 2.7, -5.84)
    this.scene.add(cal)
    // pegboard
    box(4.6, 1.5, 0.06, mat(0x5f5340, 0.95), -5.0, 2.55, -5.84)
    const pegMat = mat(0x2e2c26, 0.8)
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 4; j++) {
        const p = cyl(0.012, 0.012, 0.03, 6, pegMat, -7.1 + i * 0.38, 1.95 + j * 0.36, -5.8)
        p.rotation.x = Math.PI / 2
      }
    }
    // hanging tools
    const toolSteel = mat(0x8d8e86, 0.35, 0.8)
    for (let i = 0; i < 6; i++) {
      const x = -6.8 + i * 0.6
      const handle = box(0.045, 0.5, 0.03, mat(0x3b2a1c, 0.9), x, 2.35, -5.78)
      const head = box(0.15, 0.05, 0.035, toolSteel, x, 2.62, -5.78)
    }
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.025, 6, 20), mat(0x1f1e19, 0.9))
    coil.position.set(-2.0, 2.5, -5.78); this.scene.add(coil)

    // wall colliders
    this.addCollider(-9.4, 9.4, -6.4, -5.7)
    this.addCollider(-9.4, -8.7, -6.4, 6.4)
    this.addCollider(8.7, 9.4, -6.4, 6.4)
    this.addCollider(-9.4, -2.3, 5.7, 6.4)
    this.addCollider(2.3, 9.4, 5.7, 6.4)
  }

  buildProps() {
    const wood = new THREE.MeshStandardMaterial({ map: woodTexture(31), roughness: 0.9 })
    const rust = new THREE.MeshStandardMaterial({ map: rustTexture(37), roughness: 0.92, metalness: 0.3 })
    const dark = mat(0x25251f, 0.85)
    const steel = mat(0x81837c, 0.42, 0.75)
    const rubber = mat(0x171813, 0.95)

    // ---- workbench along back wall ----
    const benchTop = box(4.8, 0.1, 0.8, wood, -4.9, 0.95, -5.15)
    for (const x of [-7.1, -2.7]) for (const z of [-5.4, -4.9]) box(0.08, 0.95, 0.08, rust, x, 0.47, z)
    box(4.7, 0.04, 0.68, mat(0x3b3429, 0.9), -4.9, 0.35, -5.15, null, false, true)
    box(4.8, 0.12, 0.05, rust, -4.9, 0.68, -4.78)
    this.addCollider(-7.4, -2.4, -5.6, -4.7)
    // vise
    box(0.28, 0.16, 0.3, steel, -6.9, 1.07, -5.15)
    box(0.18, 0.12, 0.12, rust, -6.9, 1.18, -5.0)
    const viseHandle = cyl(0.02, 0.02, 0.45, 6, steel, -6.9, 1.2, -5.15)
    viseHandle.rotation.z = Math.PI / 2
    // grinder
    box(0.25, 0.2, 0.3, mat(0x36423c, 0.7, 0.4), -3.3, 1.12, -5.2)
    const wheel = cyl(0.16, 0.16, 0.05, 16, mat(0x8a8172, 0.9), -3.05, 1.14, -5.2)
    wheel.rotation.z = Math.PI / 2
    // tools on bench
    box(0.5, 0.02, 0.06, steel, -5.4, 1.0, -4.95).rotation.y = 0.3
    box(0.2, 0.03, 0.12, mat(0xc29241, 0.6, 0.5), -4.1, 1.01, -5.05)
    // coffee pot & mug
    const pot = cyl(0.11, 0.09, 0.24, 14, mat(0x2a2b27, 0.6, 0.3), -2.0, 1.12, -5.25)
    box(0.05, 0.1, 0.03, steel, -1.93, 1.15, -5.25)
    cyl(0.05, 0.045, 0.11, 12, mat(0xd8d0bd, 0.8), -1.65, 1.06, -5.0)
    // cigarettes
    box(0.12, 0.05, 0.06, mat(0xb9b09c, 0.9), -0.9, 1.0, -5.2)
    // radio
    const radio = box(0.44, 0.25, 0.18, mat(0x40352b, 0.85), 1.3, 1.08, -5.3)
    box(0.3, 0.14, 0.01, mat(0xb2a98f, 0.7), 1.3, 1.08, -5.2)
    const dial = cyl(0.03, 0.03, 0.02, 10, steel, 1.4, 1.08, -5.19); dial.rotation.x = Math.PI / 2
    this.addHitbox(0.6, 0.5, 0.4, 1.3, 1.1, -5.25, { id: 'radio', verb: 'Turn', label: 'Radio' })
    // manual clipboard
    const clip = box(0.36, 0.02, 0.46, mat(0x9c7c4a, 0.9), -0.6, 1.02, -4.95)
    const paper = box(0.3, 0.01, 0.4, mat(0xe4dbc5, 0.95), -0.6, 1.04, -4.95)
    const clipMetal = box(0.18, 0.04, 0.06, steel, -0.6, 1.07, -5.12)
    this.addHitbox(0.55, 0.4, 0.55, -0.6, 1.05, -4.95, { id: 'manual', verb: 'Read', label: 'Service manual' })

    // ---- parts pickups (tags mark the crates) ----
    const batteryProp = new THREE.Group()
    box(0.38, 0.28, 0.24, mat(0x232824, 0.75), 0, 0.14, 0, batteryProp)
    box(0.34, 0.05, 0.22, mat(0xb5ac8d, 0.8), 0, 0.29, 0, batteryProp)
    for (const x of [-0.11, 0.11]) cyl(0.024, 0.024, 0.06, 8, steel, x, 0.32, 0.03, batteryProp)
    batteryProp.position.set(-4.6, 0.9, 3.55)
    this.scene.add(batteryProp)
    batteryProp.add(tag(['BATTERY'], 0, 0.55, 0))
    this.registerPickup('battery', batteryProp, [-4.6, 0.9, 3.55], 0.75)

    const carbProp = new THREE.Group()
    box(0.3, 0.22, 0.24, steel, 0, 0.11, 0, carbProp)
    box(0.24, 0.08, 0.18, mat(0x33352f, 0.7), 0, 0.26, 0, carbProp)
    const ac = cyl(0.2, 0.2, 0.1, 16, mat(0x9b968a, 0.4, 0.8), 0, 0.36, 0, carbProp)
    carbProp.position.set(-3.3, 1.01, -5.1)
    this.scene.add(carbProp)
    carbProp.add(tag(['CARB'], 0, 0.58, 0))
    this.registerPickup('carb', carbProp, [-3.3, 1.15, -5.1], 0.6)

    // alternator on shelf
    const shelf = new THREE.Group()
    for (const y of [0.35, 1.1, 1.85]) box(0.5, 0.06, 3.4, rust, 0, y, 0, shelf)
    for (const z of [-1.6, 0, 1.6]) for (const x of [-0.22, 0.22]) box(0.06, 1.9, 0.06, rust, x, 0.95, z, shelf)
    shelf.position.set(-8.65, 0, -1.4)
    this.scene.add(shelf)
    this.addCollider(-9.0, -8.3, -3.2, 0.4)
    // shelf clutter
    for (let i = 0; i < 5; i++) {
      const can = cyl(0.1, 0.1, 0.28, 10, mat(0x4c4a3c, 0.8, 0.2), -8.65, 0.52, -2.7 + i * 0.42)
    }
    box(0.3, 0.24, 0.36, mat(0x2f3a33, 0.8), -8.65, 1.27, -2.2)

    const altProp = new THREE.Group()
    const altBody = cyl(0.16, 0.16, 0.26, 16, steel, 0, 0, 0, altProp); altBody.rotation.z = Math.PI / 2
    const altPulley = cyl(0.12, 0.12, 0.05, 14, mat(0x33342f, 0.7), 0.17, 0, 0, altProp); altPulley.rotation.z = Math.PI / 2
    for (let i = 0; i < 6; i++) cyl(0.028, 0.028, 0.23, 6, mat(0x3b3c36, 0.7), -0.14, 0, 0, altProp)
    altProp.position.set(-8.65, 1.35, 0.6)
    this.scene.add(altProp)
    altProp.add(tag(['ALTERNATOR'], 0, 0.45, 0))
    this.registerPickup('alternator', altProp, [-8.6, 1.35, 0.6], 0.8)

    // radiator leaning on wall near shelf
    const radProp = new THREE.Group()
    box(0.95, 1.1, 0.12, mat(0x3b3d38, 0.8, 0.4), 0, 0.55, 0, radProp)
    for (let i = 0; i < 12; i++) box(0.02, 1.02, 0.14, mat(0x2f312c, 0.7), -0.4 + i * 0.073, 0.55, 0, radProp)
    box(0.9, 0.1, 0.18, rust, 0, 1.13, 0, radProp)
    box(0.9, 0.1, 0.18, rust, 0, 0.03, 0, radProp)
    radProp.position.set(-8.6, 0.62, 2.25)
    radProp.rotation.x = -0.16
    this.scene.add(radProp)
    radProp.add(tag(['RADIATOR'], 0, 0.8, 0.2))
    this.registerPickup('radiator', radProp, [-8.4, 1.2, 2.25], 1.2)

    // spark plugs box
    const plugsProp = new THREE.Group()
    box(0.3, 0.16, 0.22, mat(0xb0a284, 0.9), 0, 0.08, 0, plugsProp)
    box(0.26, 0.02, 0.18, mat(0x6b4f33, 0.9), 0, 0.17, 0, plugsProp)
    for (let i = 0; i < 4; i++) {
      const p = cyl(0.035, 0.035, 0.11, 8, steel, -0.09 + i * 0.06, 0.22, 0, plugsProp)
      cyl(0.022, 0.022, 0.08, 8, mat(0xd0c6aa, 0.7), -0.09 + i * 0.06, 0.3, 0, plugsProp)
    }
    plugsProp.position.set(-5.7, 1.01, -5.15)
    this.scene.add(plugsProp)
    plugsProp.add(tag(['PLUGS ×4'], 0, 0.55, 0))
    this.registerPickup('plugs', plugsProp, [-5.7, 1.15, -5.15], 0.6)

    // wheels stack outside
    const wheelsProp = new THREE.Group()
    for (let i = 0; i < 4; i++) {
      const t = cyl(0.43, 0.43, 0.3, 22, rubber, (i % 2) * 0.9, 0.16 + Math.floor(i / 2) * 0.34, 0, wheelsProp)
      t.rotation.z = Math.PI / 2
      const r = cyl(0.24, 0.24, 0.32, 16, steel, (i % 2) * 0.9, 0.16 + Math.floor(i / 2) * 0.34, 0, wheelsProp)
      r.rotation.z = Math.PI / 2
    }
    wheelsProp.position.set(5.7, 0.02, 7.7)
    this.scene.add(wheelsProp)
    wheelsProp.add(tag(['4 WHEELS'], 0.45, 0.95, 0))
    this.registerPickup('wheels', wheelsProp, [5.7, 0.7, 7.7], 1.3)

    // ---- cot ----
    const cot = new THREE.Group()
    box(0.9, 0.1, 2.0, mat(0x5b5e52, 0.9), 0, 0.42, 0, cot)
    for (const x of [-0.4, 0.4]) for (const z of [-0.9, 0.9]) box(0.06, 0.42, 0.06, steel, x, 0.21, z, cot)
    box(0.82, 0.14, 1.85, mat(0x6d4a34, 0.98), 0, 0.53, -0.02, cot)
    box(0.62, 0.12, 0.34, mat(0xcabfa9, 0.98), 0, 0.62, -0.75, cot)
    cot.position.set(8.05, 0, -3.6)
    this.scene.add(cot)
    this.addHitbox(1.2, 0.9, 2.2, 8.05, 0.55, -3.6, { id: 'cot', verb: 'Sleep', label: 'Cot' })
    this.addCollider(7.4, 8.6, -4.8, -2.4)

    // ---- sink ----
    const sink = new THREE.Group()
    box(0.6, 0.15, 0.5, mat(0xc7c2b4, 0.45, 0.5), 0, 0.85, 0, sink)
    box(0.5, 0.15, 0.4, mat(0x54544a, 0.6, 0.4), 0, 0.78, 0, sink)
    const tap = cyl(0.018, 0.018, 0.3, 6, steel, 0, 1.05, -0.18, sink)
    box(0.18, 0.025, 0.025, steel, 0, 1.19, -0.1, sink)
    box(0.55, 0.7, 0.4, mat(0x4b4a40, 0.8), 0, 0.4, 0, sink)
    sink.position.set(8.35, 0, 2.4)
    sink.rotation.y = -Math.PI / 2
    this.scene.add(sink)
    this.addHitbox(0.9, 1.1, 1.0, 8.2, 0.9, 2.4, { id: 'sink', verb: 'Wash up / drink', label: 'Shop sink' })
    this.addCollider(8.0, 8.7, 1.9, 2.9)

    // mirror above sink
    const mirror = box(0.7, 0.55, 0.03, mat(0x7c8a88, 0.2, 0.9), 8.82, 2.0, 2.4)
    mirror.rotation.y = Math.PI / 2

    // ---- office desk / computer (store) ----
    box(2.1, 0.1, 0.8, wood, 6.6, 0.95, -5.2)
    for (const x of [5.7, 7.5]) for (const z of [-5.5, -4.9]) box(0.07, 0.95, 0.07, steel, x, 0.47, z)
    const crt = box(0.5, 0.4, 0.4, mat(0xb3ac9b, 0.8), 6.8, 1.22, -5.25)
    const screen = box(0.4, 0.28, 0.02, mat(0x2e4c3d, 0.4, 0.1, { emissive: 0x1d3a2c, emissiveIntensity: 0.8 }), 6.8, 1.23, -5.04)
    box(0.5, 0.06, 0.3, mat(0xb3ac9b, 0.8), 6.8, 1.0, -5.15)
    box(0.25, 0.02, 0.14, mat(0x34352f, 0.8), 6.8, 1.05, -5.0)
    this.addHitbox(0.7, 0.7, 0.6, 6.8, 1.2, -5.1, { id: 'store', verb: 'Browse', label: 'Parts catalog terminal' })
    this.addCollider(5.6, 7.7, -5.7, -4.7)

    // ---- job board near door (right side) ----
    const board = new THREE.Group()
    box(1.5, 1.1, 0.08, mat(0x6a5335, 0.95), 0, 0, 0, board)
    for (let i = 0; i < 6; i++) {
      const p = box(0.32, 0.22, 0.012, mat(0xd8ceb6, 0.95), -0.45 + (i % 3) * 0.45, 0.22 - Math.floor(i / 3) * 0.32, 0.05, board)
      p.rotation.z = (i % 2 ? -1 : 1) * 0.04
    }
    board.position.set(8.68, 1.75, 4.5)
    board.rotation.y = -Math.PI / 2
    this.scene.add(board)
    this.addHitbox(1.7, 1.3, 0.4, 8.5, 1.75, 4.5, { id: 'board', verb: 'Check', label: 'Job board' })

    // ---- tires, drums, hoist, stove ----
    for (let i = 0; i < 4; i++) {
      const t = cyl(0.42, 0.42, 0.3, 18, rubber, 6.6, 0.17 + i * 0.31, 3.2)
      t.rotation.z = 0
    }
    this.addCollider(6.1, 7.1, 2.7, 3.7)
    for (let i = 0; i < 2; i++) {
      const drum = cyl(0.28, 0.28, 0.85, 16, new THREE.MeshStandardMaterial({ map: rustTexture(51 + i), roughness: 0.9, metalness: 0.3 }), -8.1, 0.43, 3.7 + i * 0.62)
      box(0.02, 0.5, 0.02, mat(0x2c2b25, 0.9), -7.81, 0.43, 3.7 + i * 0.62)
    }
    this.addCollider(-8.5, -7.7, 3.3, 4.7)
    // engine hoist
    const hoist = new THREE.Group()
    box(0.1, 2.0, 0.1, rust, 0, 1.0, 0, hoist)
    box(0.1, 2.0, 0.1, rust, 0.8, 1.0, 0, hoist)
    box(1.0, 0.1, 0.1, rust, 0.4, 2.0, 0, hoist)
    const arm = box(0.12, 0.12, 2.2, rust, 0.4, 2.45, 0.9, hoist); arm.rotation.x = -0.16
    box(0.5, 0.1, 0.1, rust, 0, 0.1, 0, hoist)
    box(0.5, 0.1, 0.1, rust, 0.8, 0.1, 0, hoist)
    const chain = cyl(0.015, 0.015, 0.9, 5, steel, 0.4, 2.0, 1.85, hoist)
    hoist.position.set(6.6, 0, -1.0)
    this.scene.add(hoist)
    this.addCollider(6.1, 7.2, -2.2, -0.3)
    // stove
    box(0.75, 0.8, 0.6, mat(0x282723, 0.85, 0.4), -8.4, 0.4, -5.1)
    box(0.5, 0.25, 0.03, mat(0xd06a2a, 0.4, 0.1, { emissive: 0xd0440a, emissiveIntensity: 1.1 }), -8.05, 0.45, -5.1)
    const flue = cyl(0.1, 0.1, 3.6, 8, mat(0x2b2a24, 0.9), -8.4, 2.3, -5.1)
    // wood pile by stove
    for (let i = 0; i < 7; i++) {
      const log = cyl(0.09, 0.09, 0.7, 7, new THREE.MeshStandardMaterial({ map: woodTexture(70 + i), roughness: 1 }), -7.3, 0.1 + Math.floor(i / 3) * 0.17, -5.45 + (i % 3) * 0.16)
      log.rotation.z = Math.PI / 2
    }

    // parts cart
    const cart = new THREE.Group()
    box(0.9, 0.05, 0.55, steel, 0, 0.86, 0, cart)
    for (const x of [-0.4, 0.4]) for (const z of [-0.22, 0.22]) box(0.04, 0.8, 0.04, steel, x, 0.45, z, cart)
    for (const x of [-0.4, 0.4]) {
      const w = cyl(0.06, 0.06, 0.04, 10, rubber, x, 0.08, 0.25, cart); w.rotation.z = Math.PI / 2
    }
    cart.position.set(-4.6, 0, 3.55)
    this.scene.add(cart)

    // drop light over the engine bay
    const drop = new THREE.Group()
    const dropCord = cyl(0.012, 0.012, 1.75, 5, mat(0x1b1a15, 0.9), 0, 0.88, 0, drop)
    const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.22, 10, 1, true), mat(0x3d3d35, 0.6, 0.5))
    cage.position.set(0, -0.02, 0); drop.add(cage)
    const dlBulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe1ac }))
    dlBulb.position.set(0, -0.02, 0); drop.add(dlBulb)
    const dl = new THREE.PointLight(0xffc37a, 20, 5.5, 2)
    dl.position.set(0, -0.08, 0); drop.add(dl)
    drop.position.set(0.9, 2.35, 1.6)
    this.scene.add(drop)
    const dropSwing = { drop }
    this.dropLight = dropSwing

    // creeper + drain pan + toolbox
    const creeper = new THREE.Group()
    box(0.55, 0.08, 1.15, mat(0x423223, 0.95), 0, 0.12, 0, creeper)
    box(0.42, 0.1, 0.42, mat(0x6b4b30, 0.95), 0, 0.2, -0.2, creeper)
    for (const x of [-0.25, 0.25]) for (const z of [-0.45, 0.45]) {
      const w = cyl(0.06, 0.06, 0.05, 8, mat(0x171713, 0.9), x, 0.06, z, creeper); w.rotation.z = Math.PI / 2
    }
    creeper.position.set(2.4, 0, 0.8)
    creeper.rotation.y = 0.4
    this.scene.add(creeper)
    const pan = cyl(0.32, 0.32, 0.12, 16, mat(0x3a352b, 0.8, 0.4), 0.7, 0.06, 1.1, null)
    pan.scale.z = 0.7
    const toolbox = box(0.55, 0.3, 0.28, mat(0x8a3322, 0.75, 0.3), -2.2, 0.15, 3.0)
    box(0.5, 0.03, 0.04, mat(0x2a2923, 0.8), -2.2, 0.32, 3.0)

    // battery sits on cart
    batteryProp.position.set(-4.6, 0.9, 3.55)

    // shelf labels / cans for food
    const foodShelf = box(0.1, 1.6, 1.8, rust, 3.6, 1.3, -5.45)
    for (let i = 0; i < 4; i++) {
      const can = cyl(0.08, 0.08, 0.16, 10, mat(0x7d3a2a, 0.8, 0.3), 3.55, 0.9 + i * 0.3, -5.9 + (i % 2) * 0.25)
    }
    this.addHitbox(0.7, 1.0, 1.2, 3.5, 1.4, -5.4, { id: 'food', verb: 'Eat', label: 'Beans & crackers' })
  }

  registerPickup(part, group, pos, radius) {
    this.pickups[part] = { group, pos: V3(...pos), radius, taken: false }
    this.addHitbox(radius, radius, radius, pos[0], pos[1] + radius * 0.1, pos[2], {
      id: `pickup_${part}`, verb: 'Pick up', label: PART_INFO[part]?.name || part
    })
  }

  takePickup(part) {
    const p = this.pickups[part]
    if (!p || p.taken) return false
    p.taken = true
    p.group.visible = false
    return true
  }

  buildOutside() {
    const g = this.grassGround()
    const road = new THREE.MeshStandardMaterial({ map: dirtTexture(63), roughness: 0.98 })
    road.map.repeat.set(1, 40)
    // main road along X
    const r = plane(300, 7.2, road, 0, 0.015, 26, -Math.PI / 2)
    r.material.map.rotation = Math.PI / 2
    r.material.map.center.set(0.5, 0.5)
    // driveways
    for (const [x, z, w, len] of [[0, 16, 7, 20], [64, 32, 5.5, 12], [-58, 32, 5.5, 12]]) {
      const d = plane(w, len, road, x, 0.02, z)
      d.material = road
    }
    // concrete apron already built; dirt shoulder by door
    const apron = plane(8.2, 2.4, new THREE.MeshStandardMaterial({ map: dirtTexture(67), roughness: 1 }), 0, 0.018, 7.2)

    // paths to farm and store
    this.scene.add(r, apron)

    // distant hills
    const hillMat = mat(0x5e5b47, 1, 0)
    for (let i = 0; i < 26; i++) {
      const a = i / 26 * TAU
      const rad = 190 + Math.sin(i * 4.7) * 28
      const h = 22 + Math.abs(Math.sin(i * 2.1)) * 42
      const hill = new THREE.Mesh(new THREE.ConeGeometry(34 + (i % 3) * 14, h, 5), hillMat)
      hill.position.set(Math.cos(a) * rad, h / 2 - 3, Math.sin(a) * rad)
      hill.rotation.y = a
      this.scene.add(hill)
    }

    // field patches
    const patchMat = mat(0x6a6442, 1, 0)
    for (const [x, z, w, d, c] of [[-40, 60, 55, 35, 0x716a43], [45, 72, 48, 38, 0x5e5e3a], [-75, -30, 50, 50, 0x64603c]]) {
      const p = plane(w, d, mat(c, 1, 0), x, 0.012, z)
      this.scene.add(p)
    }

    // trees
    this.buildTrees()

    // fences
    this.buildFences()

    // power poles + wires
    const poleMat = new THREE.MeshStandardMaterial({ map: woodTexture(81, '#5b4632'), roughness: 1 })
    const poles = []
    for (let x = -90; x <= 90; x += 30) {
      const pole = cyl(0.16, 0.22, 8.5, 7, poleMat, x, 4.25, 30.5)
      box(2.4, 0.12, 0.12, poleMat, x, 7.4, 30.5)
      for (const dx of [-1.05, 0, 1.05]) box(0.07, 0.22, 0.07, mat(0x4b5a52, 0.6, 0.6), x + dx, 7.57, 30.5)
      poles.push(V3(x, 7.7, 30.5))
    }
    const wireMat = new THREE.LineBasicMaterial({ color: 0x2b2a26, transparent: true, opacity: 0.7 })
    for (let i = 0; i < poles.length - 1; i++) {
      for (const off of [-1.05, 0, 1.05]) {
        const a = poles[i].clone(); a.x += off
        const b = poles[i + 1].clone(); b.x += off
        const mid = a.clone().lerp(b, 0.5); mid.y -= 1.1
        const curve = new THREE.CatmullRomCurve3([a, mid, b])
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(10))
        this.scene.add(new THREE.Line(geo, wireMat))
      }
    }

    // road signs
    this.roadSign(-9, 24.4, 'MILLER FARM', '2 MI →', 1)
    this.roadSign(10, 24.4, 'HOLLOW CREEK', 'STORE ←', -1)
    this.roadSign(58, 24.4, 'MILLER', 'FARM →', 1)
    this.roadSign(-52, 24.4, 'STORE', '← 1/4 MI', -1)

    this.buildFarm()
    this.buildStore()

    // yard clutter / wreck
    const wreck = new THREE.Group()
    const wreckMat = new THREE.MeshStandardMaterial({ map: paintedMetalTexture('#6a5a42', 89), roughness: 0.95, metalness: 0.2 })
    box(1.7, 0.6, 3.6, wreckMat, 0, 0.5, 0, wreck)
    box(1.55, 0.5, 1.3, wreckMat, 0, 1.05, 0.4, wreck)
    const wr = cyl(0.32, 0.32, 0.2, 14, mat(0x1a1a16, 0.95), -0.85, 0.32, 1.1, wreck); wr.rotation.z = Math.PI / 2
    wreck.position.set(13.5, 0, 3.2)
    wreck.rotation.y = 0.3
    this.scene.add(wreck)
    for (const [x, z] of [[12.6, 4.2], [14.4, 2.2]]) this.treeColliders.push({ x, z, r: 1.1 })

    // marker rings
    this.buildMarker('miller', 64, 37, 'MILLER FARM')
    this.buildMarker('store', -58, 37, 'HOLLOW CREEK STORE')

    // grass tufts near garage / road for depth
    this.buildGrassTufts()
  }

  grassGround() {
    const tex = grassTexture(57)
    tex.repeat.set(60, 60)
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(420, 420), new THREE.MeshStandardMaterial({ map: tex, roughness: 1, metalness: 0 }))
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.02
    ground.receiveShadow = true
    this.scene.add(ground)
    return ground
  }

  buildTrees() {
    const rand = mulberry(9182)
    const spots = []
    for (let i = 0; i < 190; i++) {
      let x, z
      if (i < 120) {
        x = -160 + rand() * 320
        z = 34 + rand() * 130
      } else {
        x = -170 + rand() * 340
        z = -140 + rand() * 150
      }
      if (Math.abs(x) < 18 && z > -15 && z < 38) continue
      if (Math.abs(z - 26) < 8) continue
      if (Math.hypot(x - 64, z - 42) < 22) continue
      if (Math.hypot(x + 58, z - 42) < 20) continue
      const scale = 0.7 + rand() * 0.9
      spots.push({ x, z, s: scale, pine: rand() > 0.62, rot: rand() * TAU })
      this.treeColliders.push({ x, z, r: 0.65 * scale })
    }
    const trunkGeo = new THREE.CylinderGeometry(0.13, 0.28, 3.4, 6)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3f3325, roughness: 1 })
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, spots.length)
    const pineGeo = new THREE.ConeGeometry(1.7, 4.8, 7)
    const leafGeo = new THREE.IcosahedronGeometry(2.0, 1)
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x56522f, roughness: 1, flatShading: true })
    const pineMat = new THREE.MeshStandardMaterial({ color: 0x39452f, roughness: 1, flatShading: true })
    const pines = new THREE.InstancedMesh(pineGeo, pineMat, spots.filter(s => s.pine).length)
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, spots.filter(s => !s.pine).length)
    const m = new THREE.Matrix4()
    let qi = 0, li = 0
    spots.forEach((s, i) => {
      m.compose(V3(s.x, 1.7 * s.s, s.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, s.rot, 0)), V3(s.s, s.s, s.s))
      trunks.setMatrixAt(i, m)
      if (s.pine) {
        m.compose(V3(s.x, 3.3 * s.s, s.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, s.rot, 0)), V3(s.s, s.s, s.s))
        pines.setMatrixAt(qi++, m)
      } else {
        m.compose(V3(s.x, 3.7 * s.s, s.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, s.rot, 0)), V3(s.s * 1.1, s.s * 0.9, s.s * 1.1))
        leaves.setMatrixAt(li++, m)
      }
    })
    trunks.castShadow = true; pines.castShadow = true; leaves.castShadow = true
    trunks.receiveShadow = true; pines.receiveShadow = true; leaves.receiveShadow = true
    this.scene.add(trunks, pines, leaves)

    // clipped far treeline silhouette
    const farMat = mat(0x3d4031, 1, 0)
    for (let i = 0; i < 50; i++) {
      const a = i / 50 * TAU
      const x = Math.cos(a) * 150, z = Math.sin(a) * 150
      const t = new THREE.Mesh(new THREE.ConeGeometry(4 + (i % 4), 12 + (i % 5) * 3, 5), farMat)
      t.position.set(x, 5, z)
      this.scene.add(t)
    }
  }

  buildFences() {
    const wood = new THREE.MeshStandardMaterial({ map: woodTexture(91, '#6b5a42'), roughness: 1 })
    const postGeo = new THREE.BoxGeometry(0.14, 1.35, 0.14)
    const posts = []
    for (let x = -140; x <= 140; x += 4.2) {
      if (Math.abs(x) < 6) continue
      if (Math.abs(x - 64) < 4) continue
      if (Math.abs(x + 58) < 4) continue
      posts.push([x, 22.5])
    }
    const inst = new THREE.InstancedMesh(postGeo, wood, posts.length)
    const m = new THREE.Matrix4()
    posts.forEach(([x, z], i) => {
      m.compose(V3(x, 0.67, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, (i % 3 - 1) * 0.04, 0)), V3(1, 1, 1))
      inst.setMatrixAt(i, m)
    })
    inst.castShadow = true; inst.receiveShadow = true
    this.scene.add(inst)
    // rails (segments so driveways stay open)
    const railMat = new THREE.MeshStandardMaterial({ map: woodTexture(93, '#705d44'), roughness: 1 })
    const pieces = [[-140, -6.5], [6.5, 60], [68, 136]]
    for (const [a, b] of pieces) {
      for (const y of [0.55, 1.05]) {
        const rail = box(b - a, 0.1, 0.07, railMat, (a + b) / 2, y, 22.5)
      }
    }
    // roadside grass strip
    const strip = plane(300, 2, mat(0x5e5c3c, 1), 0, 0.014, 21.4)
    this.scene.add(strip)
  }

  buildFarm() {
    const red = new THREE.MeshStandardMaterial({ map: paintedMetalTexture('#6e2f24', 101), roughness: 0.92, metalness: 0.1 })
    const roofMat = new THREE.MeshStandardMaterial({ map: rustTexture(103), roughness: 0.9, metalness: 0.25 })
    const wood = new THREE.MeshStandardMaterial({ map: woodTexture(107, '#5a4633'), roughness: 1 })
    const barn = new THREE.Group()
    box(13, 6, 9, red, 0, 3, 0, barn)
    // gambrel roof approximation
    box(13.6, 0.3, 10.4, roofMat, 0, 6.2, 0, barn).rotation.x = 0.08
    for (const s of [-1, 1]) {
      const r = box(13.8, 0.25, 5.4, roofMat, 0, 7.0, s * 2.4, barn)
      r.rotation.x = s * 0.5
    }
    // barn doors
    box(3.4, 4.2, 0.12, wood, 0, 2.1, 4.53, barn)
    box(0.12, 4.2, 0.12, mat(0xd0c5aa, 0.95), 0, 2.1, 4.6, barn)
    // X brace
    const brace1 = box(3.3, 0.16, 0.05, mat(0xb1a58a, 0.95), 0, 2.1, 4.61, barn); brace1.rotation.z = 0.75
    const brace2 = box(3.3, 0.16, 0.05, mat(0xb1a58a, 0.95), 0, 2.1, 4.62, barn); brace2.rotation.z = -0.75
    box(0.7, 0.7, 0.1, mat(0xd0c5aa, 0.9), 0, 4.9, 4.62, barn)
    barn.position.set(64, 0, 45)
    this.scene.add(barn)
    this.addCollider(57, 71, 40.2, 49.8)
    // silo
    const silo = cyl(2.3, 2.3, 11, 20, new THREE.MeshStandardMaterial({ map: corrugatedTexture(111, '#6f6f64'), roughness: 0.85, metalness: 0.25 }), 74.5, 5.5, 48)
    const dome = new THREE.Mesh(new THREE.SphereGeometry(2.3, 16, 8, 0, TAU, 0, Math.PI / 2), mat(0x64645a, 0.8, 0.4))
    dome.position.set(74.5, 11, 48); this.scene.add(dome)
    this.addCollider(72, 77, 45.5, 50.5)
    // farmhouse
    const house = new THREE.Group()
    box(8, 4.2, 6, new THREE.MeshStandardMaterial({ map: paintedMetalTexture('#8a7b62', 113), roughness: 0.95 }), 0, 2.1, 0, house)
    for (const s of [-1, 1]) {
      const r = box(8.8, 0.2, 3.8, roofMat, 0, 5.0, s * 1.5, house); r.rotation.x = s * 0.55
    }
    for (const x of [-2.5, 0.4]) {
      box(1.0, 1.1, 0.05, mat(0x2b2b25, 0.4, 0.3), x, 2.3, 3.05, house)
      box(0.9, 0.9, 0.02, mat(0xe7bf7c, 0.5, 0.1, { emissive: 0xc27a2c, emissiveIntensity: 1.1 }), x, 2.3, 3.08, house)
    }
    box(1.2, 2.2, 0.1, mat(0x4b3524, 0.95), 2.5, 1.1, 3.03, house)
    const porch = box(8.4, 0.15, 2, wood, 0, 0.6, 4, house)
    for (const x of [-3.6, 0, 3.6]) box(0.14, 2.6, 0.14, wood, x, 1.8, 4.8, house)
    box(8.4, 0.12, 0.12, wood, 0, 3.1, 4.8, house)
    house.position.set(48, 0, 46)
    this.scene.add(house)
    this.addCollider(43.8, 52.2, 42.8, 49.2)
    // hay bales
    const hay = new THREE.MeshStandardMaterial({ map: grassTexture(117), color: 0xc7b37a, roughness: 1 })
    for (let i = 0; i < 5; i++) {
      const h = cyl(0.9, 0.9, 1.4, 14, hay, 52 + i * 2.1, 0.9, 36 + (i % 2) * 1.7)
      h.rotation.z = Math.PI / 2
    }
    // firewood stacks by barn
    for (let i = 0; i < 8; i++) {
      const log = cyl(0.12, 0.12, 1.5, 7, new THREE.MeshStandardMaterial({ map: woodTexture(121 + i, '#5b422c'), roughness: 1 }), 57.5 + (i % 3) * 0.25, 0.15 + Math.floor(i / 3) * 0.22, 38.2)
      log.rotation.z = Math.PI / 2
    }
    // corn field rows
    const stalkMat = mat(0x77703f, 1)
    const stalkGeo = new THREE.BoxGeometry(0.05, 1.6, 0.05)
    const count = 380
    const stalks = new THREE.InstancedMesh(stalkGeo, stalkMat, count)
    const rand = mulberry(55)
    const m = new THREE.Matrix4()
    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / 20)
      const x = 34 + row * 0.9 + rand() * 0.35
      const z = 28 + (i % 20) * 0.9 + rand() * 0.4
      m.compose(V3(x, 0.8, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 0.1, rand() * TAU, rand() * 0.12)), V3(1, 0.8 + rand() * 0.5, 1))
      stalks.setMatrixAt(i, m)
    }
    stalks.castShadow = true
    this.scene.add(stalks)
  }

  buildStore() {
    const wallMat = new THREE.MeshStandardMaterial({ map: paintedMetalTexture('#6f6a58', 131), roughness: 0.95 })
    const roofMat = new THREE.MeshStandardMaterial({ map: rustTexture(137), roughness: 0.9, metalness: 0.2 })
    const g = new THREE.Group()
    box(9, 4.4, 6, wallMat, 0, 2.2, 0, g)
    for (const s of [-1, 1]) {
      const r = box(10, 0.2, 4, roofMat, 0, 5.0, s * 1.6, g); r.rotation.x = s * 0.45
    }
    // storefront glass + door
    for (const x of [-2.8, -1.0, 1.6]) {
      box(1.5, 2.0, 0.05, mat(0x2c3733, 0.2, 0.4), x, 2.0, 3.04, g)
      box(1.35, 1.85, 0.02, mat(0xdfb87a, 0.5, 0.1, { emissive: 0x9c6424, emissiveIntensity: 1.0 }), x, 2.0, 3.07, g)
    }
    box(1.2, 2.4, 0.1, mat(0x3b2b1d, 0.95), 3.0, 1.2, 3.04, g)
    // sign
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 1.1), new THREE.MeshBasicMaterial({ map: signTexture('HOLLOW CREEK STORE', 'FEED · FUEL · GENERAL GOODS'), transparent: true }))
    sign.position.set(0, 3.55, 3.12)
    g.add(sign)
    // gas pump
    const pump = new THREE.Group()
    box(0.6, 1.8, 0.45, mat(0x8e8a7c, 0.7, 0.3), 0, 0.9, 0, pump)
    box(0.45, 0.4, 0.02, mat(0x252823, 0.5), 0, 1.4, 0.24, pump)
    box(0.05, 0.6, 0.05, mat(0x232420, 0.8), 0.33, 1.1, 0.1, pump)
    pump.position.set(-5.3, 0, 4.8)
    g.add(pump)
    // porch
    box(9.4, 0.15, 1.8, new THREE.MeshStandardMaterial({ map: woodTexture(141), roughness: 1 }), 0, 0.55, 3.9, g)
    for (const x of [-4.2, 0, 4.2]) box(0.12, 2.9, 0.12, new THREE.MeshStandardMaterial({ map: woodTexture(143), roughness: 1 }), x, 1.9, 4.7, g)
    box(9.4, 0.12, 0.12, mat(0x413a2d, 0.95), 0, 3.3, 4.7, g)
    // lit bulb
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd59a }))
    b.position.set(0, 3.0, 4.3); g.add(b)
    const pl = new THREE.PointLight(0xffb46a, 8, 8, 2); pl.position.set(0, 2.9, 4.2); g.add(pl)
    g.position.set(-58, 0, 42)
    this.scene.add(g)
    this.addCollider(-62.7, -53.3, 38.8, 45.2)
  }

  roadSign(x, z, main, sub, dir) {
    const g = new THREE.Group()
    const post = cyl(0.045, 0.045, 2.1, 6, new THREE.MeshStandardMaterial({ map: woodTexture(151), roughness: 1 }), 0, 1.05, 0, g)
    const board = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.7), new THREE.MeshBasicMaterial({ map: signTexture(main, sub), transparent: true, side: THREE.DoubleSide }))
    board.position.set(0, 1.8, 0.02)
    g.add(board)
    g.position.set(x, 0, z)
    g.rotation.y = dir > 0 ? 0 : Math.PI
    this.scene.add(g)
  }

  buildMarker(id, x, z, label) {
    const g = new THREE.Group()
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.7, 2.0, 40), new THREE.MeshBasicMaterial({ color: 0xd9a441, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false }))
    ring.rotation.x = -Math.PI / 2
    ring.position.y = 0.04
    g.add(ring)
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 7, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0xd9a441, transparent: true, opacity: 0.045, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }))
    beam.position.y = 3.5
    g.add(beam)
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture([label], '#e2d6ba'), transparent: true, depthWrite: false }))
    sprite.scale.set(1.5, 0.75, 1)
    sprite.position.y = 3.4
    g.add(sprite)
    g.position.set(x, 0, z)
    g.visible = false
    this.scene.add(g)
    this.markers[id] = { group: g, ring, beam, x, z, label }
  }

  buildGrassTufts() {
    const rand = mulberry(202)
    const geo = new THREE.ConeGeometry(0.05, 0.36, 3)
    const matg = mat(0x67673f, 1)
    const inst = new THREE.InstancedMesh(geo, matg, 700)
    const m = new THREE.Matrix4()
    let i = 0
    while (i < 700) {
      const x = -35 + rand() * 70
      const z = 7 + rand() * 16
      if (Math.abs(x) < 4.2 && z < 26) continue
      if (z > 21 && z < 31) continue
      m.compose(V3(x, 0.18, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand() * TAU, (rand() - 0.5) * 0.2)), V3(0.7 + rand() * 0.8, 0.6 + rand() * 0.8, 0.7 + rand() * 0.8))
      inst.setMatrixAt(i++, m)
    }
    inst.receiveShadow = true
    this.scene.add(inst)
  }

  buildTruck() {
    const truck = new Truck()
    truck.group.position.set(0, 0, -0.6)
    this.scene.add(truck.group)
    this.truck = truck

    // truck collider (on foot)
    this.addCollider(-1.2, 1.2, -3.6, 2.2)

    // moped outside
    const moped = new Moped()
    moped.group.position.set(4.7, 0, 8.3)
    moped.group.rotation.y = -0.3
    this.scene.add(moped.group)
    this.moped = moped

    // part mount hitboxes in truck-local coords, transformed to world
    const tz = -0.6
    const ti = PART_INFO
    for (const [name, info] of Object.entries(ti)) {
      if (name === 'wheels') {
        for (const [x, z] of [[-0.94, 1.55], [0.94, 1.55], [-0.94, -1.65], [0.94, -1.65]]) {
          const hb = this.addHitbox(0.75, 0.9, 0.75, x, 0.55, z + tz, {
            id: `mount_wheels`, verb: 'Install', label: 'Wheel (19mm)'
          }, truck.group)
          hb.position.set(x, 0.55, z)
        }
      } else {
        const s = info.spot
        // keep the plug bank clear of the carburetor's sight line
        const hx = name === 'plugs' ? -0.5 : s.x
        this.addHitbox(0.55, 0.55, 0.55, hx, s.y + 0.12, s.z, {
          id: `mount_${name}`, verb: 'Install', label: `${info.name} (${info.tool}mm · ${info.torque[0]}–${info.torque[1]} Nm)`
        }, truck.group)
      }
    }
    // tune + ignition + fuel interactions
    this.addHitbox(0.34, 0.4, 0.34, 0.95, 1.3, 1.55, { id: 'tune', verb: 'Tune', label: 'Engine bay / diagnostic' }, truck.group)
    this.addHitbox(0.7, 1.0, 0.8, -1.15, 1.35, 0.35, { id: 'ignition', verb: 'Crank', label: 'Driver door / ignition' }, truck.group)
    this.addHitbox(0.35, 0.35, 0.35, 0.78, 1.04, -2.28, { id: 'fuel_tank', verb: 'Fill', label: 'Fuel tank' }, truck.group)
    this.addHitbox(0.3, 0.34, 0.3, 0.48, 1.58, 1.3, { id: 'oil_fill', verb: 'Fill', label: 'Engine oil' }, truck.group)
    this.addHitbox(0.32, 0.26, 0.32, 0.22, 1.62, 2.55, { id: 'coolant_fill', verb: 'Fill', label: 'Coolant' }, truck.group)

    // wheel / body entry interaction (driving)
    this.addHitbox(0.9, 1.2, 1.4, -1.1, 1.1, 0.2, { id: 'truck_drive', verb: 'Get in', label: 'The Patient' }, truck.group)
    this.addHitbox(1.0, 1.2, 1.8, 0, 0.7, 0, { id: 'moped_drive', verb: 'Ride', label: 'Moped' }, moped.group)

    // mount hint sprites (shown only when you carry the part)
    this.mountHints = {}
    for (const [name, info] of Object.entries(PART_INFO)) {
      const p = name === 'wheels' ? new THREE.Vector3(0, 0.9, 0.1) : info.spot.clone()
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialSprite(0xd9a441, 0.05), transparent: true, depthWrite: false, opacity: 0.8 }))
      sp.position.copy(p).add(new THREE.Vector3(0, name === 'wheels' ? 0.7 : 0.35, 0))
      sp.scale.set(0.22, 0.22, 1)
      sp.visible = false
      this.truck.group.add(sp)
      this.mountHints[name] = sp
    }
  }

  buildParticles() {
    // interior dust
    const count = 420
    const pos = new Float32Array(count * 3)
    const rand = mulberry(771)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = -8 + rand() * 16
      pos[i * 3 + 1] = 0.2 + rand() * 4.2
      pos[i * 3 + 2] = -5.6 + rand() * 11.2
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const m = new THREE.PointsMaterial({
      size: 0.025, color: 0xffdfae, transparent: true, opacity: 0.55,
      map: radialSprite(0xffffff), depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true
    })
    this.dust = new THREE.Points(geo, m)
    this.dust.frustumCulled = false
    this.scene.add(this.dust)

    // exhaust puffs
    const ecount = 70
    const epos = new Float32Array(ecount * 3)
    const elife = new Float32Array(ecount)
    const evel = new Float32Array(ecount * 3)
    const egeo = new THREE.BufferGeometry()
    egeo.setAttribute('position', new THREE.BufferAttribute(epos, 3))
    const em = new THREE.PointsMaterial({
      size: 0.35, color: 0xb5aa98, transparent: true, opacity: 0.22,
      map: radialSprite(0xffffff), depthWrite: false
    })
    this.exhaust = new THREE.Points(egeo, em)
    this.exhaust.frustumCulled = false
    this.scene.add(this.exhaust)
    this.exhaustData = { pos: epos, life: elife, vel: evel, count: ecount, cursor: 0 }
    for (let i = 0; i < ecount; i++) { epos[i * 3 + 1] = -50 }
  }

  puffExhaust() {
    const d = this.exhaustData
    const i = d.cursor++ % d.count
    const p = this.truck.group.position
    d.pos[i * 3] = p.x + 0.5
    d.pos[i * 3 + 1] = 0.4
    d.pos[i * 3 + 2] = p.z - 3.25
    d.vel[i * 3] = (Math.random() - 0.5) * 0.2
    d.vel[i * 3 + 1] = 0.35 + Math.random() * 0.3
    d.vel[i * 3 + 2] = -0.15
    d.life[i] = 1.4 + Math.random()
  }

  setMarker(id, on) {
    const m = this.markers[id]
    if (m) m.group.visible = on
  }

  setLampMode(mode) {
    // 'day' keeps lamps dim, 'night' bright
    this.lamps.forEach((l, i) => { l.intensity = mode === 'night' ? 40 : 24 })
  }

  update(dt, t) {
    this.clock += dt
    const d = this.dust
    if (d) {
      const p = d.geometry.attributes.position
      for (let i = 0; i < p.count; i++) {
        p.array[i * 3] += Math.sin(t * 0.4 + i) * 0.0007
        p.array[i * 3 + 1] += Math.cos(t * 0.3 + i * 0.7) * 0.0005
        p.array[i * 3 + 2] += Math.sin(t * 0.23 + i * 1.3) * 0.0004
      }
      p.needsUpdate = true
    }
    // exhaust
    const e = this.exhaustData
    if (e) {
      const p = this.exhaust.geometry.attributes.position
      for (let i = 0; i < e.count; i++) {
        if (e.life[i] > 0) {
          e.life[i] -= dt
          e.pos[i * 3] += e.vel[i * 3] * dt
          e.pos[i * 3 + 1] += e.vel[i * 3 + 1] * dt
          e.pos[i * 3 + 2] += e.vel[i * 3 + 2] * dt
          e.vel[i * 3 + 1] += dt * 0.12
          if (e.life[i] <= 0) e.pos[i * 3 + 1] = -50
        }
      }
      p.needsUpdate = true
    }
    // stove flicker
    if (this.stoveGlow) this.stoveGlow.intensity = 4.2 + Math.sin(t * 9.3) * 0.7 + Math.sin(t * 17.1) * 0.4
    // markers pulse
    for (const m of Object.values(this.markers)) {
      if (!m.group.visible) continue
      const s = 1 + Math.sin(t * 2.2) * 0.04
      m.ring.scale.set(s, s, 1)
      m.beam.material.opacity = 0.035 + Math.sin(t * 2.2) * 0.012
    }
  }
}

function corrugatedDoorMat() {
  return new THREE.MeshStandardMaterial({ map: corrugatedTexture(171, '#6b6a60'), roughness: 0.8, metalness: 0.3 })
}

function radialSprite(color = 0xffffff, inner = 0.2) {
  const c = document.createElement('canvas'); c.width = c.height = 64
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  g.addColorStop(0, `rgba(${(color >> 16) & 255},${(color >> 8) & 255},${color & 255},1)`)
  g.addColorStop(inner, `rgba(${(color >> 16) & 255},${(color >> 8) & 255},${color & 255},0.55)`)
  g.addColorStop(1, `rgba(${(color >> 16) & 255},${(color >> 8) & 255},${color & 255},0)`)
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function mulberry(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}
