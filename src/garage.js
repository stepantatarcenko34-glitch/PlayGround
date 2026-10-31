import * as THREE from 'three';
import { PARTS, PART_MAP, clamp, lerp } from './data.js';
import { game } from './state.js';
import { concreteTexture, woodTexture, pegboardTexture, signTexture, labelTexture, metalTexture, oilStainTexture, hazardTexture } from './textures.js';

const SLOT_INFO = {
  crank:     { anchor: [0, 1.02, -1.05], marker: [0, 0.95, -1.72], pick: [0.9, 0.5, 1.25], camR: 2.7, theta: Math.PI },
  pistons:   { anchor: [0, 1.46, -1.05], marker: [0, 1.56, -1.05], pick: [0.8, 0.3, 1.1], camR: 2.5, theta: Math.PI },
  oilpan:    { anchor: [0, 0.72, -1.05], marker: [0.6, 0.55, -1.05], pick: [0.9, 0.35, 1.1], camR: 2.7, theta: Math.PI },
  gasket:    { anchor: [0, 1.42, -1.05], marker: [-0.55, 1.48, -1.05], pick: [0.95, 0.14, 1.2], camR: 2.6, theta: Math.PI },
  head:      { anchor: [0, 1.58, -1.05], marker: [0, 1.86, -1.05], pick: [1.0, 0.42, 1.2], camR: 2.8, theta: Math.PI },
  carb:      { anchor: [0, 1.9, -1.05], marker: [0.4, 2.12, -1.05], pick: [0.5, 0.55, 0.5], camR: 2.4, theta: Math.PI },
  wiring:    { anchor: [0.45, 1.25, -1.4], marker: [0.72, 1.4, -1.5], pick: [1.3, 0.8, 0.9], camR: 2.9, theta: 2.4 },
  battery:   { anchor: [-0.62, 1.0, -1.5], marker: [-0.62, 1.28, -1.55], pick: [0.55, 0.45, 0.5], camR: 2.4, theta: 2.8 },
  radiator:  { anchor: [0, 1.15, -1.85], marker: [0, 1.55, -1.85], pick: [1.1, 0.75, 0.35], camR: 2.8, theta: Math.PI },
  fueltank:  { anchor: [0, 0.95, 1.55], marker: [0, 1.25, 1.58], pick: [1.2, 0.5, 0.7], camR: 2.8, theta: 0.2 },
  driveshaft:{ anchor: [0, 0.52, 0.5], marker: [0.4, 0.35, 0.55], pick: [0.4, 0.4, 2.0], camR: 2.8, theta: 0.8 },
  wheels:    { anchor: [0.88, 0.46, 1.35], marker: [0.95, 0.98, 1.35], pick: [0.4, 1.0, 1.0], camR: 3.0, theta: Math.PI / 2 },
  seat:      { anchor: [0, 1.08, 0.55], marker: [0, 1.58, 0.55], pick: [0.7, 0.85, 0.8], camR: 2.5, theta: 0.6 },
  steering:  { anchor: [0, 1.32, -0.1], marker: [0, 1.5, -0.1], pick: [0.6, 0.6, 0.6], camR: 2.4, theta: 0.9 }
};

export class Garage {
  constructor(renderer, sound, cb = {}) {
    this.renderer = renderer;
    this.sound = sound;
    this.cb = cb;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0907);
    this.scene.fog = new THREE.FogExp2(0x0a0907, 0.017);
    this.camera = new THREE.PerspectiveCamera(47, 1, 0.1, 120);

    this.car = new THREE.Group();
    this.scene.add(this.car);
    this.partMeshes = {};
    this.markers = {};
    this.picks = [];
    this.anim = [];
    this.smoke = [];
    this.time = 0;
    this.hoverId = null;
    this.selectedId = null;
    this.inputEnabled = true;
    this.running = false;

    this.orbit = { theta: 2.32, phi: 1.17, radius: 6.5 };
    this.cam = { target: new THREE.Vector3(0, 1.02, 0), radius: 6.5, theta: 2.32, phi: 1.17 };
    this.desired = { target: new THREE.Vector3(0, 1.02, 0), radius: 6.5, theta: 2.32, phi: 1.17 };

    this.pointer = new THREE.Vector2(-2, -2);
    this.raycaster = new THREE.Raycaster();
    this.down = null;
    this.dragging = false;

    this.makeMaterials();
    this.makeEnvironment();
    this.buildRoom();
    this.buildCar();
    this.bindInput();
    this.resize();
  }

  // ---------------------------------------------------------------- materials
  makeMaterials() {
    const std = (o) => new THREE.MeshStandardMaterial(o);
    const mt = metalTexture();
    mt.repeat.set(2.2, 2.2);
    this.M = {
      steel: std({ map: mt, color: 0xa6a59b, metalness: 0.9, roughness: 0.38 }),
      dark: std({ map: mt, color: 0x6b6961, metalness: 0.72, roughness: 0.58, bumpMap: mt, bumpScale: 0.006 }),
      cast: std({ map: mt, color: 0x6b675f, metalness: 0.28, roughness: 0.82, bumpMap: mt, bumpScale: 0.01 }),
      block: std({ map: mt, color: 0x625e56, metalness: 0.2, roughness: 0.85, bumpMap: mt, bumpScale: 0.012 }),
      rust: std({ color: 0xa25c31, metalness: 0.4, roughness: 0.92 }),
      orange: std({ color: 0xd06a26, metalness: 0.35, roughness: 0.55 }),
      yellow: std({ color: 0xc99a34, metalness: 0.4, roughness: 0.6 }),
      chrome: std({ color: 0xb9b7ae, metalness: 1, roughness: 0.18 }),
      rubber: std({ color: 0x20201e, metalness: 0, roughness: 0.95 }),
      vinyl: std({ color: 0x2e2319, metalness: 0.05, roughness: 0.88 }),
      copper: std({ color: 0xa9662f, metalness: 0.85, roughness: 0.4 }),
      brass: std({ color: 0xb08a3e, metalness: 0.9, roughness: 0.35 }),
      black: std({ color: 0x121211, metalness: 0.3, roughness: 0.8 }),
      red: std({ color: 0x8b2c1c, metalness: 0.35, roughness: 0.62 }),
      blue: std({ color: 0x2f4a5c, metalness: 0.35, roughness: 0.62 }),
      wood: std({ map: woodTexture(), color: 0xffffff, roughness: 0.9 }),
      concrete: std({ map: concreteTexture(), color: 0x8f8778, roughness: 0.93 }),
      peg: std({ map: pegboardTexture(), color: 0xcbb894, roughness: 0.9 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x9fb4b8, metalness: 0.4, roughness: 0.1, transparent: true, opacity: 0.3 }),
      glow: new THREE.MeshBasicMaterial({ color: 0xffd9a0 }),
      white: std({ color: 0xb9b3a4, roughness: 0.7 }),
      green: std({ color: 0x4a5d38, metalness: 0.2, roughness: 0.8 })
    };
    this.M.concrete.map.repeat.set(5, 4);
    this.M.concrete.map.wrapS = this.M.concrete.map.wrapT = THREE.RepeatWrapping;
    this.M.wood.map.repeat.set(3, 1);
    this.M.peg.map.repeat.set(2.4, 1.2);
  }

  makeEnvironment() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const env = new THREE.Scene();
    env.background = new THREE.Color(0x181410);
    const add = (color, w, h, pos, rot) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color }));
      m.position.set(...pos); m.rotation.set(...rot); env.add(m);
    };
    add(0xffd9a4, 7, 5, [0, 6, 0], [Math.PI / 2, 0, 0]);
    add(0x7a8fa8, 4, 6, [-8, 3, 0], [0, Math.PI / 2, 0]);
    add(0xff8c3a, 3, 2, [6, 2.5, -4], [0, -Math.PI / 2, 0]);
    add(0x2a241c, 10, 10, [0, -2, 0], [-Math.PI / 2, 0, 0]);
    const tex = pmrem.fromScene(env, 0.06).texture;
    this.scene.environment = tex;
    pmrem.dispose();
  }

  // ---------------------------------------------------------------- helpers
  add(mesh, parent = this.scene) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  box(w, h, d, m, x, y, z, parent = this.scene) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, y, z);
    return this.add(mesh, parent);
  }

  cyl(rt, rb, h, seg, m, x, y, z, parent = this.scene) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    mesh.position.set(x, y, z);
    return this.add(mesh, parent);
  }

  // ---------------------------------------------------------------- room
  buildRoom() {
    const M = this.M;
    // floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(22, 17), M.concrete);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // back wall
    this.box(22, 6, 0.25, M.concrete, 0, 3, -8.5);
    // side walls
    this.box(0.25, 6, 17, M.concrete, -11, 3, 0);
    this.box(0.25, 6, 17, M.concrete, 11, 3, 0);
    // front wall / door
    this.box(22, 6, 0.25, M.concrete, 0, 3, 8.5);
    // ceiling
    this.box(22, 0.2, 17, M.dark, 0, 5.9, 0);

    // roll-up door
    const door = new THREE.Group();
    for (let i = 0; i < 16; i++) {
      const p = this.box(8.4, 0.28, 0.08, i % 2 ? M.steel : M.dark, 0, 0.35 + i * 0.3, 8.3, door);
      p.castShadow = false;
    }
    this.box(0.16, 5.3, 0.16, M.dark, -4.3, 2.65, 8.25, door);
    this.box(0.16, 5.3, 0.16, M.dark, 4.3, 2.65, 8.25, door);
    this.scene.add(door);

    // window
    const win = new THREE.Group();
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 2.3), new THREE.MeshBasicMaterial({ color: 0xffcf92 }));
    pane.position.set(5.6, 3.35, -8.34);
    win.add(pane);
    const frameM = M.dark;
    this.box(4.5, 0.12, 0.16, frameM, 5.6, 4.56, -8.3, win);
    this.box(4.5, 0.12, 0.16, frameM, 5.6, 2.14, -8.3, win);
    this.box(0.12, 2.55, 0.16, frameM, 3.38, 3.35, -8.3, win);
    this.box(0.12, 2.55, 0.16, frameM, 7.82, 3.35, -8.3, win);
    this.box(0.08, 2.3, 0.1, frameM, 5.6, 3.35, -8.29, win);
    this.box(4.2, 0.08, 0.1, frameM, 5.6, 3.35, -8.29, win);
    this.scene.add(win);

    // light shafts through window
    const shaftMat = new THREE.MeshBasicMaterial({ color: 0xffcf92, transparent: true, opacity: 0.035, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    for (let i = 0; i < 3; i++) {
      const shaft = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 7.2), shaftMat);
      shaft.position.set(4.6 + i * 1.1, 2.4, -5.4);
      shaft.rotation.set(-0.55, 0, 0.06 * i);
      this.scene.add(shaft);
    }

    // ceiling trusses
    for (let z = -6; z <= 6; z += 3) {
      this.box(21.5, 0.12, 0.14, M.dark, 0, 5.72, z);
      for (let x = -9; x <= 9; x += 3) {
        const t = this.box(0.1, 0.1, 0.1, M.dark, x, 5.72, z);
        t.castShadow = false;
      }
    }
    for (let x = -8; x <= 8; x += 4) this.box(0.14, 0.12, 16.5, M.dark, x, 5.74, 0);

    // lamps
    const lampXs = [-4.4, 0, 4.4];
    for (const lx of lampXs) {
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.36, 18, 1, true), M.dark);
      shade.position.set(lx, 4.72, 0.4);
      shade.rotation.x = Math.PI;
      this.scene.add(shade);
      const bulb = this.cyl(0.1, 0.1, 0.16, 10, M.glow, lx, 4.5, 0.4);
      bulb.castShadow = false;
      const light = new THREE.PointLight(0xffc784, 38, 14, 2);
      light.position.set(lx, 4.35, 0.4);
      this.scene.add(light);
      const cord = this.box(0.03, 0.9, 0.03, M.black, lx, 5.25, 0.4);
      cord.castShadow = false;
    }

    // main spot over the car
    const spot = new THREE.SpotLight(0xfff0d2, 420, 18, 0.82, 0.85, 1.5);
    spot.position.set(0, 5.5, 1.2);
    spot.target.position.set(0, 0.8, -0.4);
    spot.castShadow = true;
    spot.shadow.mapSize.set(1024, 1024);
    spot.shadow.bias = -0.0004;
    this.scene.add(spot, spot.target);

    // daylight through window
    const sun = new THREE.DirectionalLight(0xffd7a2, 1.8);
    sun.position.set(8, 6, -9);
    sun.target.position.set(0, 0.8, 0);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -8; sun.shadow.camera.right = 8;
    sun.shadow.camera.top = 8; sun.shadow.camera.bottom = -8;
    sun.shadow.bias = -0.0006;
    this.scene.add(sun, sun.target);

    const hemi = new THREE.HemisphereLight(0x9fb0c4, 0x3a3024, 0.62);
    this.scene.add(hemi);
    const amb = new THREE.AmbientLight(0x8b8272, 0.28);
    this.scene.add(amb);

    // cool fill from the working side, so the block reads instead of going black
    const fillSun = new THREE.DirectionalLight(0xb9c8d8, 0.8);
    fillSun.position.set(4, 3.2, -5);
    fillSun.target.position.set(0, 1, 0);
    this.scene.add(fillSun, fillSun.target);

    // soft bounce off the floor, keeps the cast iron from crushing to black
    const bounce = new THREE.PointLight(0xffb877, 24, 8, 2);
    bounce.position.set(2.2, 1.1, -2.0);
    this.scene.add(bounce);

    // workbench (left)
    const bench = new THREE.Group();
    this.box(5.4, 0.16, 1.5, M.wood, 0, 1.0, 0, bench);
    this.box(5.2, 0.1, 1.3, M.dark, 0, 0.9, 0, bench);
    for (const x of [-2.45, 2.45]) for (const z of [-0.6, 0.6]) this.box(0.14, 0.92, 0.14, M.steel, x, 0.46, z, bench);
    // vise
    this.box(0.5, 0.28, 0.34, M.steel, -2.1, 1.18, 0.2, bench);
    this.box(0.26, 0.14, 0.2, M.dark, -2.1, 1.38, 0.2, bench);
    this.cyl(0.04, 0.04, 0.5, 8, M.steel, -1.85, 1.25, 0.2, bench).rotation.z = Math.PI / 2;
    // scattered tools
    for (let i = 0; i < 7; i++) {
      const t = this.box(0.05 + Math.random() * 0.5, 0.04, 0.05, i % 2 ? M.steel : M.rust, -1.4 + i * 0.55, 1.1, -0.35 + Math.random() * 0.5, bench);
      t.rotation.y = Math.random() * Math.PI;
      t.castShadow = false;
    }
    this.cyl(0.16, 0.16, 0.1, 12, M.rust, 1.9, 1.13, 0.3, bench);
    bench.position.set(-8.0, 0, -1.6);
    this.scene.add(bench);

    // pegboard
    const peg = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 2.2), M.peg);
    peg.position.set(-10.84, 3.0, -1.6);
    peg.rotation.y = Math.PI / 2;
    this.scene.add(peg);
    for (let i = 0; i < 9; i++) {
      const tool = this.box(0.06, 0.55 + (i % 3) * 0.22, 0.1, M.steel, -10.7, 3.1, -3.9 + i * 0.58);
      tool.rotation.x = 0.02;
      tool.castShadow = false;
    }

    // shelves right wall
    const shelves = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      this.box(0.9, 0.08, 5.2, M.wood, 0, 1.1 + i * 1.25, 0, shelves);
      this.box(0.06, 1.25, 0.06, M.steel, 0.4, 0.55 + i * 1.25, -2.4, shelves);
      this.box(0.06, 1.25, 0.06, M.steel, 0.4, 0.55 + i * 1.25, 2.4, shelves);
      for (let j = 0; j < 4; j++) {
        const w = 0.3 + Math.random() * 0.25, h = 0.2 + Math.random() * 0.25, d = 0.3 + Math.random() * 0.3;
        const m = [M.rust, M.yellow, M.blue, M.wood][Math.floor(Math.random() * 4)];
        this.box(w, h, d, m, -0.1 + Math.random() * 0.2, 1.2 + i * 1.25 + h / 2, -2.1 + j * 1.2, shelves);
      }
    }
    shelves.position.set(10.4, 0, 1.4);
    this.scene.add(shelves);

    // tool chest
    const chest = new THREE.Group();
    this.box(1.7, 1.3, 0.9, M.red, 0, 0.7, 0, chest);
    for (let i = 0; i < 5; i++) {
      this.box(1.5, 0.16, 0.04, M.dark, 0, 0.28 + i * 0.22, 0.46, chest);
      this.box(0.4, 0.03, 0.03, M.chrome, 0, 0.36 + i * 0.22, 0.49, chest);
    }
    this.box(1.72, 0.1, 0.92, M.steel, 0, 1.4, 0, chest);
    chest.position.set(-6.2, 0, 4.3);
    chest.rotation.y = 0.25;
    this.scene.add(chest);

    // tires stack
    for (let i = 0; i < 4; i++) {
      const tire = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.2, 10, 22), M.rubber);
      tire.rotation.x = Math.PI / 2;
      tire.position.set(6.2, 0.24 + i * 0.38, 5.2);
      tire.rotation.z = i * 0.4;
      this.scene.add(tire);
    }

    // compressor
    const comp = new THREE.Group();
    const tank = this.cyl(0.55, 0.55, 1.7, 18, M.blue, 0, 0.65, 0, comp);
    tank.rotation.z = Math.PI / 2;
    this.box(0.55, 0.5, 0.5, M.dark, 0.3, 1.15, 0, comp);
    this.cyl(0.26, 0.26, 0.3, 14, M.steel, 0.3, 1.5, 0, comp);
    this.box(0.1, 0.7, 0.1, M.steel, -0.5, 0.35, 0.3, comp);
    comp.position.set(8.2, 0, -5.6);
    comp.rotation.y = -0.4;
    this.scene.add(comp);

    // oil drums
    for (let i = 0; i < 2; i++) {
      const d = this.cyl(0.42, 0.42, 1.05, 16, i ? M.rust : M.red, 8.9, 0.53, 3.6 + i * 1.05);
      this.cyl(0.44, 0.44, 0.04, 16, M.dark, 8.9, 0.85, 3.6 + i * 1.05);
    }

    // back room props: fridge, cot, sink
    const fridge = new THREE.Group();
    this.box(0.9, 1.85, 0.75, M.white, 0, 0.95, 0, fridge);
    this.box(0.86, 0.06, 0.03, M.dark, 0, 1.1, 0.39, fridge);
    this.box(0.06, 0.4, 0.05, M.chrome, 0.32, 1.5, 0.4, fridge);
    this.box(0.06, 0.3, 0.05, M.chrome, 0.32, 0.8, 0.4, fridge);
    fridge.position.set(-9.4, 0, -7.4);
    this.scene.add(fridge);

    const cot = new THREE.Group();
    this.box(2.0, 0.16, 0.8, M.steel, 0, 0.45, 0, cot);
    this.box(1.9, 0.16, 0.72, M.vinyl, 0, 0.58, 0, cot);
    this.box(0.55, 0.12, 0.7, M.white, -0.65, 0.68, 0, cot);
    for (const x of [-0.9, 0.9]) for (const z of [-0.35, 0.35]) this.box(0.06, 0.45, 0.06, M.steel, x, 0.22, z, cot);
    cot.position.set(-6.4, 0, -7.5);
    this.scene.add(cot);

    const sink = new THREE.Group();
    this.box(0.9, 0.1, 0.6, M.steel, 0, 0.95, 0, sink);
    this.box(0.8, 0.25, 0.5, M.white, 0, 0.8, 0, sink);
    this.cyl(0.04, 0.04, 0.4, 8, M.chrome, 0, 1.2, -0.2, sink);
    this.box(0.04, 0.04, 0.25, M.chrome, 0, 1.4, -0.08, sink);
    this.box(0.1, 0.9, 0.1, M.steel, -0.35, 0.45, 0, sink);
    this.box(0.1, 0.9, 0.1, M.steel, 0.35, 0.45, 0, sink);
    sink.position.set(-3.9, 0, -7.5);
    this.scene.add(sink);

    // signs
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.1), new THREE.MeshBasicMaterial({ map: signTexture('HARD START', 'BAY 03', '#16130e', '#e9e2d2', '#d2601f') }));
    sign.position.set(0.3, 3.5, -8.33);
    this.scene.add(sign);
    const partsSign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.4), new THREE.MeshBasicMaterial({ map: labelTexture('PARTS · NO CREDIT') }));
    partsSign.position.set(10.82, 4.55, 1.4);
    partsSign.rotation.y = -Math.PI / 2;
    this.scene.add(partsSign);

    // wall clock
    const clockFace = new THREE.Mesh(new THREE.CircleGeometry(0.32, 24), new THREE.MeshBasicMaterial({ color: 0xd8d2c0 }));
    clockFace.position.set(-4.0, 3.7, -8.33);
    this.scene.add(clockFace);
    const hand = this.box(0.02, 0.22, 0.01, M.black, -4.0, 3.78, -8.31);
    hand.geometry.translate(0, 0.11, 0);


    // front wall windows (the view from the default camera)
    const winPaneMat = new THREE.MeshBasicMaterial({ color: 0xffd7a2 });
    const frontShaftMat = new THREE.MeshBasicMaterial({ color: 0xffcf92, transparent: true, opacity: 0.045, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    for (const wx of [-7.1, 7.1]) {
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 1.85), winPaneMat);
      pane.position.set(wx, 3.55, 8.36);
      pane.rotation.y = Math.PI;
      this.scene.add(pane);
      this.box(3.35, 0.12, 0.16, M.dark, wx, 4.55, 8.32);
      this.box(3.35, 0.12, 0.16, M.dark, wx, 2.55, 8.32);
      this.box(0.12, 2.1, 0.16, M.dark, wx - 1.62, 3.55, 8.32);
      this.box(0.12, 2.1, 0.16, M.dark, wx + 1.62, 3.55, 8.32);
      this.box(0.08, 1.85, 0.12, M.dark, wx, 3.55, 8.31);
      const fill = new THREE.PointLight(0xffd0a0, 20, 13, 2);
      fill.position.set(wx, 3.2, 6.7);
      this.scene.add(fill);
      const shaft = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 6.4), frontShaftMat);
      shaft.position.set(wx, 2.1, 5.4);
      shaft.rotation.set(-0.95, 0, 0);
      this.scene.add(shaft);
    }

    // hazard stripe by the door
    const hazTex = hazardTexture();
    hazTex.repeat.set(8, 1);
    const haz = new THREE.Mesh(new THREE.PlaneGeometry(8.4, 0.22), new THREE.MeshBasicMaterial({ map: hazTex }));
    haz.position.set(0, 0.5, 8.34);
    haz.rotation.y = Math.PI;
    this.scene.add(haz);

    // door sign
    const baySign = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.7), new THREE.MeshBasicMaterial({ map: signTexture('BAY 03', 'NO SMOKING', '#17130e', '#e9e2d2', '#d2601f') }));
    baySign.position.set(0, 5.45, 8.33);
    baySign.rotation.y = Math.PI;
    this.scene.add(baySign);

    // oil stain under the project
    const stain = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 3.4), new THREE.MeshBasicMaterial({ map: oilStainTexture(), transparent: true, opacity: 0.75, depthWrite: false }));
    stain.rotation.x = -Math.PI / 2;
    stain.position.set(-0.2, 0.012, -0.3);
    stain.rotation.z = 0.25;
    this.scene.add(stain);

    // parts cart
    const cart = new THREE.Group();
    this.box(2.0, 0.07, 1.15, M.steel, 0, 0.92, 0, cart);
    this.box(2.0, 0.12, 0.06, M.dark, 0, 1.0, -0.56, cart);
    this.box(2.0, 0.12, 0.06, M.dark, 0, 1.0, 0.56, cart);
    for (const x of [-0.9, 0.9]) for (const z of [-0.48, 0.48]) {
      this.box(0.07, 0.86, 0.07, M.dark, x, 0.47, z, cart);
      const wheel = this.cyl(0.09, 0.09, 0.05, 8, M.rubber, x, 0.09, z, cart);
      wheel.rotation.z = Math.PI / 2;
    }
    // loose parts on the cart
    const crank = this.cyl(0.07, 0.07, 0.8, 8, M.steel, -0.5, 1.0, 0, cart);
    crank.rotation.z = Math.PI / 2;
    for (let i = 0; i < 4; i++) this.cyl(0.1, 0.1, 0.2, 12, M.chrome, 0.25 + (i % 2) * 0.24, 1.06, -0.24 + Math.floor(i / 2) * 0.32, cart);
    this.box(0.55, 0.04, 0.42, M.copper, 0.72, 1.0, 0.22, cart);
    this.box(0.32, 0.18, 0.28, M.steel, -0.15, 1.06, 0.3, cart);
    this.cyl(0.18, 0.18, 0.08, 14, M.black, -0.15, 1.18, 0.3, cart);
    cart.position.set(4.9, 0, 3.7);
    cart.rotation.y = -0.42;
    this.scene.add(cart);

    // stool + bucket
    const stool = new THREE.Group();
    this.cyl(0.28, 0.28, 0.08, 14, M.vinyl, 0, 0.55, 0, stool);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const leg = this.cyl(0.025, 0.025, 0.55, 6, M.steel, Math.cos(a) * 0.17, 0.27, Math.sin(a) * 0.17, stool);
      leg.rotation.z = Math.cos(a) * 0.12;
    }
    stool.position.set(2.4, 0, 3.5);
    this.scene.add(stool);

    const bucket = this.cyl(0.22, 0.18, 0.42, 14, M.blue, -2.5, 0.21, 3.9);
    this.cyl(0.23, 0.23, 0.03, 14, M.dark, -2.5, 0.43, 3.9);

    // hanging chains
    for (const [cx, cz] of [[7.8, 5.6], [7.8, 3.8], [-8.2, 5.6]]) {
      const chain = this.cyl(0.025, 0.025, 2.6, 5, M.rust, cx, 4.5, cz);
      chain.castShadow = false;
      this.cyl(0.07, 0.07, 0.12, 6, M.steel, cx, 3.15, cz);
    }

    // wall shelf with cans (front-left)
    this.box(2.6, 0.08, 0.4, M.wood, -7.1, 2.15, 8.15);
    for (let i = 0; i < 5; i++) {
      this.cyl(0.09, 0.09, 0.24, 10, i % 2 ? M.blue : M.rust, -8.0 + i * 0.42, 2.32, 8.1);
    }

    // dust
    const count = 360;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe0b0, size: 0.018, transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.scene.add(this.dust);
  }

  // ---------------------------------------------------------------- car
  buildCar() {
    const M = this.M;
    const car = this.car;

    // frame rails
    this.box(0.13, 0.2, 4.35, M.dark, -0.56, 0.64, 0, car);
    this.box(0.13, 0.2, 4.35, M.dark, 0.56, 0.64, 0, car);
    for (const z of [-2.0, -1.15, -0.15, 0.9, 2.0]) this.box(1.24, 0.11, 0.14, M.dark, 0, 0.64, z, car);
    // frame side plates / rust
    this.box(0.05, 0.1, 1.2, M.rust, -0.63, 0.64, 1.1, car);
    this.box(0.05, 0.1, 0.8, M.rust, 0.63, 0.64, -0.4, car);

    // axles + suspension
    for (const z of [-1.42, 1.42]) {
      const axle = this.cyl(0.07, 0.07, 1.95, 10, M.steel, 0, 0.47, z, car);
      axle.rotation.z = Math.PI / 2;
      for (const x of [-0.62, 0.62]) {
        this.box(0.12, 0.12, 1.0, M.dark, x, 0.56, z, car);
        const shock = this.cyl(0.05, 0.05, 0.42, 8, M.rust, x * 1.35, 0.72, z, car);
        shock.rotation.z = 0.35 * Math.sign(x);
        this.box(0.3, 0.06, 0.9, M.steel, x * 1.18, 0.44, z, car);
      }
      // leaf springs
      this.box(1.5, 0.05, 0.09, M.rust, 0, 0.57, z, car);
    }

    // jack stands
    this.stands = new THREE.Group();
    for (const x of [-0.95, 0.95]) for (const z of [-1.5, 1.5]) {
      const s = new THREE.Group();
      this.box(0.42, 0.06, 0.42, M.dark, 0, 0.03, 0, s);
      const post = this.cyl(0.055, 0.07, 0.44, 6, M.yellow, 0, 0.26, 0, s);
      this.box(0.22, 0.05, 0.22, M.yellow, 0, 0.5, 0, s);
      s.position.set(x, 0, z);
      this.stands.add(s);
    }
    car.add(this.stands);

    // engine block (always present)
    const block = this.box(0.82, 0.7, 1.18, M.block, 0, 1.1, -1.05, car);
    // bores
    for (let i = 0; i < 4; i++) {
      const bore = this.cyl(0.115, 0.115, 0.04, 14, M.black, 0, 1.455, -1.48 + i * 0.28, car);
      bore.castShadow = false;
    }
    // block side ribs
    for (let i = 0; i < 5; i++) this.box(0.04, 0.5, 0.06, M.cast, -0.42, 1.1, -1.5 + i * 0.22, car);
    // engine mounts
    this.box(0.22, 0.16, 0.22, M.rubber, -0.45, 0.75, -1.0, car);
    this.box(0.22, 0.16, 0.22, M.rubber, 0.45, 0.75, -1.0, car);

    // transmission (always)
    this.box(0.55, 0.5, 0.6, M.cast, 0, 0.78, -0.25, car);
    this.cyl(0.09, 0.09, 0.4, 10, M.dark, 0, 0.65, -0.05, car).rotation.x = Math.PI / 2;

    // exhaust (always)
    const exCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.42, 1.0, -1.5),
      new THREE.Vector3(0.55, 0.7, -1.0),
      new THREE.Vector3(0.55, 0.55, 0.4),
      new THREE.Vector3(0.45, 0.5, 1.5),
      new THREE.Vector3(0.55, 0.48, 2.05)
    ]);
    const exhaust = new THREE.Mesh(new THREE.TubeGeometry(exCurve, 30, 0.035, 7, false), M.rust);
    this.add(exhaust, car);
    this.cyl(0.06, 0.05, 0.18, 8, M.dark, 0.55, 0.48, 2.12, car).rotation.x = Math.PI / 2;

    // part meshes
    this.makeCrank();
    this.makePistons();
    this.makeOilpan();
    this.makeGasket();
    this.makeHead();
    this.makeCarb();
    this.makeWiring();
    this.makeBattery();
    this.makeRadiator();
    this.makeFuelTank();
    this.makeDriveshaft();
    this.makeWheels();
    this.makeSeat();
    this.makeSteering();

    // pick volumes + markers
    for (const def of PARTS) {
      const info = SLOT_INFO[def.id];
      const pick = new THREE.Mesh(new THREE.BoxGeometry(...info.pick), new THREE.MeshBasicMaterial({ visible: false }));
      pick.position.set(...info.anchor);
      pick.userData.slot = def.id;
      car.add(pick);
      this.picks.push(pick);

      const marker = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.012, 6, 24), new THREE.MeshBasicMaterial({ color: 0xd2601f, transparent: true, opacity: 0.65, depthWrite: false }));
      ring.rotation.x = Math.PI / 2;
      const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.055), new THREE.MeshBasicMaterial({ color: 0xff8a3c, transparent: true, opacity: 0.85, depthWrite: false }));
      gem.position.y = 0.18;
      marker.add(ring, gem);
      marker.position.set(...(info.marker || info.anchor));
      marker.userData.ring = ring;
      marker.userData.gem = gem;
      car.add(marker);
      this.markers[def.id] = marker;
    }

    // smoke pool for running engine
    const smokeMat = new THREE.MeshBasicMaterial({ color: 0x8a8278, transparent: true, opacity: 0, depthWrite: false });
    for (let i = 0; i < 14; i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 6), smokeMat.clone());
      p.visible = false;
      p.userData.life = 0;
      car.add(p);
      this.smoke.push(p);
    }
    this.smokeTimer = 0;
  }

  registerPart(id, group, anchor) {
    group.visible = false;
    this.car.add(group);
    this.partMeshes[id] = group;
    this.partMeshes[id].userData.anchor = anchor;
    // installed status from save
    if (game.s.parts[id] && game.s.parts[id].installed) {
      group.visible = true;
      group.scale.setScalar(1);
    }
  }

  makeCrank() {
    const M = this.M, g = new THREE.Group();
    const shaft = this.cyl(0.075, 0.075, 1.05, 10, M.steel, 0, 0, 0, g);
    shaft.rotation.x = Math.PI / 2;
    for (let i = 0; i < 4; i++) {
      const throwArm = this.box(0.3, 0.1, 0.1, M.steel, 0.1, 0.1, -0.42 + i * 0.28, g);
      throwArm.rotation.z = i % 2 ? 0.5 : -0.5;
      this.cyl(0.055, 0.055, 0.1, 8, M.chrome, 0.16, 0.17, -0.42 + i * 0.28, g).rotation.x = Math.PI / 2;
    }
    const pulley = this.cyl(0.19, 0.19, 0.08, 16, M.dark, 0, 0, -0.6, g);
    pulley.rotation.x = Math.PI / 2;
    this.cyl(0.08, 0.08, 0.1, 10, M.steel, 0, 0, -0.65, g).rotation.x = Math.PI / 2;
    const fly = this.cyl(0.29, 0.29, 0.05, 20, M.steel, 0, 0, 0.52, g);
    fly.rotation.x = Math.PI / 2;
    g.position.set(0, 1.02, -1.05);
    this.registerPart('crank', g, [0, 1.02, -1.05]);
  }

  makePistons() {
    const M = this.M, g = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const z = -0.44 + i * 0.28;
      const p = this.cyl(0.112, 0.112, 0.22, 14, M.chrome, 0, 0.02, z, g);
      this.cyl(0.108, 0.108, 0.03, 14, M.dark, 0, -0.09, z, g);
      for (let r = 0; r < 3; r++) this.cyl(0.113, 0.113, 0.008, 14, M.dark, 0, -0.05 + r * 0.035, z, g);
      const rod = this.box(0.045, 0.28, 0.05, M.steel, 0, -0.2, z, g);
      rod.rotation.x = 0.08;
    }
    g.position.set(0, 1.48, -1.05);
    this.registerPart('pistons', g, [0, 1.46, -1.05]);
  }

  makeOilpan() {
    const M = this.M, g = new THREE.Group();
    this.box(0.86, 0.2, 1.02, M.dark, 0, 0, 0, g);
    this.box(0.55, 0.14, 0.5, M.dark, 0, -0.15, 0.12, g);
    this.cyl(0.06, 0.06, 0.04, 8, M.steel, 0, -0.23, 0.12, g);
    this.box(0.9, 0.03, 1.06, M.steel, 0, 0.1, 0, g);
    g.position.set(0, 0.74, -1.05);
    this.registerPart('oilpan', g, [0, 0.72, -1.05]);
  }

  makeGasket() {
    const M = this.M, g = new THREE.Group();
    this.box(0.9, 0.025, 1.08, M.copper, 0, 0, 0, g);
    for (let i = 0; i < 4; i++) {
      const hole = this.cyl(0.1, 0.1, 0.04, 12, M.black, 0, 0.01, -0.42 + i * 0.28, g);
      hole.castShadow = false;
    }
    g.position.set(0, 1.445, -1.05);
    this.registerPart('gasket', g, [0, 1.42, -1.05]);
  }

  makeHead() {
    const M = this.M, g = new THREE.Group();
    this.box(0.92, 0.24, 1.12, M.cast, 0, 0, 0, g);
    this.box(0.72, 0.16, 0.94, M.orange, 0, 0.19, 0, g);
    this.box(0.6, 0.03, 0.8, M.dark, 0, 0.28, 0, g);
    for (let i = 0; i < 4; i++) {
      this.cyl(0.055, 0.055, 0.12, 10, M.chrome, 0.28, 0.08, -0.42 + i * 0.28, g);
      this.box(0.12, 0.06, 0.16, M.dark, 0.34, 0.16, -0.42 + i * 0.28, g);
    }
    // exhaust manifold
    for (let i = 0; i < 4; i++) {
      const pipe = this.cyl(0.04, 0.04, 0.26, 8, M.rust, -0.48, 0.04, -0.42 + i * 0.28, g);
      pipe.rotation.z = 0.7;
    }
    this.box(0.1, 0.12, 1.0, M.rust, -0.6, -0.06, 0, g);
    g.position.set(0, 1.57, -1.05);
    this.registerPart('head', g, [0, 1.58, -1.05]);
  }

  makeCarb() {
    const M = this.M, g = new THREE.Group();
    this.box(0.36, 0.18, 0.32, M.steel, 0, 0, 0, g);
    this.cyl(0.21, 0.21, 0.1, 18, M.black, 0, 0.15, 0, g);
    this.cyl(0.22, 0.22, 0.03, 18, M.chrome, 0, 0.21, 0, g);
    this.cyl(0.02, 0.02, 0.14, 6, M.steel, 0.12, 0.06, 0.1, g);
    this.box(0.1, 0.03, 0.1, M.brass, 0.12, 0.14, 0.1, g);
    g.position.set(0, 1.86, -1.05);
    this.registerPart('carb', g, [0, 1.9, -1.05]);
  }

  makeWiring() {
    const M = this.M, g = new THREE.Group();
    const curves = [
      { pts: [[-0.55, 0.12, -0.5], [-0.4, 0.3, -0.7], [-0.1, 0.4, -1.0], [0.25, 0.35, -1.1], [0.5, 0.1, -0.7], [0.55, 0.0, 0.4], [0.5, 0.0, 1.4]], color: M.black },
      { pts: [[-0.5, 0.1, -0.5], [-0.3, 0.24, -0.85], [0.0, 0.3, -1.1], [0.3, 0.25, -1.0], [0.5, 0.06, -0.5], [0.5, -0.02, 0.6]], color: M.red },
      { pts: [[-0.6, 0.08, -0.55], [-0.45, 0.2, -0.9], [-0.2, 0.26, -1.15], [0.1, 0.2, -1.2], [0.35, 0.02, -0.8], [0.42, -0.05, 0.2]], color: M.yellow }
    ];
    for (const c of curves) {
      const curve = new THREE.CatmullRomCurve3(c.pts.map(p => new THREE.Vector3(...p)));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.014, 6, false), c.color);
      this.add(tube, g);
    }
    for (let i = 0; i < 4; i++) {
      this.box(0.06, 0.05, 0.04, M.dark, -0.2 + i * 0.15, 0.18, -0.62, g);
    }
    g.position.set(0, 0.9, -1.0);
    this.registerPart('wiring', g, [0.45, 1.25, -1.4]);
  }

  makeBattery() {
    const M = this.M, g = new THREE.Group();
    this.box(0.38, 0.28, 0.24, M.black, 0, 0, 0, g);
    this.box(0.34, 0.03, 0.2, M.dark, 0, 0.155, 0, g);
    this.cyl(0.035, 0.035, 0.05, 8, M.red, -0.11, 0.19, 0.04, g);
    this.cyl(0.035, 0.035, 0.05, 8, M.steel, 0.11, 0.19, 0.04, g);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.1), new THREE.MeshBasicMaterial({ map: labelTexture('12V · 480A', '#e9e2d2', '#1b1914') }));
    label.position.set(0, 0.0, 0.125);
    g.add(label);
    g.position.set(-0.62, 0.96, -1.55);
    this.registerPart('battery', g, [-0.62, 1.0, -1.5]);
  }

  makeRadiator() {
    const M = this.M, g = new THREE.Group();
    this.box(0.98, 0.62, 0.08, M.dark, 0, 0, 0, g);
    for (let i = 0; i < 16; i++) this.box(0.045, 0.56, 0.1, M.steel, -0.44 + i * 0.058, 0, 0.01, g);
    this.box(1.02, 0.09, 0.14, M.steel, 0, 0.33, 0, g);
    this.box(1.02, 0.09, 0.14, M.steel, 0, -0.33, 0, g);
    this.cyl(0.06, 0.06, 0.08, 10, M.brass, 0.25, 0.39, 0, g);
    // hoses
    const hose1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.28, 0.34, 0), new THREE.Vector3(0.36, 0.34, -0.2),
      new THREE.Vector3(0.38, 0.3, -0.55), new THREE.Vector3(0.3, 0.3, -0.72)
    ]);
    this.add(new THREE.Mesh(new THREE.TubeGeometry(hose1, 16, 0.035, 7, false), M.rubber), g);
    g.position.set(0, 1.13, -1.84);
    this.registerPart('radiator', g, [0, 1.15, -1.85]);
  }

  makeFuelTank() {
    const M = this.M, g = new THREE.Group();
    this.box(1.02, 0.38, 0.48, M.rust, 0, 0, 0, g);
    this.box(0.96, 0.06, 0.42, M.dark, 0, 0.22, 0, g);
    for (const x of [-0.34, 0.34]) {
      this.box(0.06, 0.44, 0.52, M.dark, x, 0, 0, g);
      this.box(0.04, 0.5, 0.04, M.steel, x, 0, -0.26, g);
    }
    this.cyl(0.055, 0.055, 0.14, 8, M.steel, 0.2, 0.28, 0, g);
    this.cyl(0.08, 0.08, 0.03, 10, M.brass, 0.2, 0.35, 0, g);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.08), new THREE.MeshBasicMaterial({ map: labelTexture('DIESEL ONLY', '#e5b44a', '#1b1914') }));
    label.position.set(0, 0.02, 0.245);
    g.add(label);
    g.position.set(0, 0.94, 1.58);
    this.registerPart('fueltank', g, [0, 0.95, 1.55]);
  }

  makeDriveshaft() {
    const M = this.M, g = new THREE.Group();
    const shaft = this.cyl(0.055, 0.055, 1.65, 10, M.steel, 0, 0, 0, g);
    shaft.rotation.x = Math.PI / 2;
    this.box(0.14, 0.14, 0.12, M.dark, 0, 0, -0.8, g);
    this.box(0.14, 0.14, 0.12, M.dark, 0, 0, 0.8, g);
    this.cyl(0.08, 0.08, 0.1, 10, M.steel, 0, 0, 0.1, g).rotation.x = Math.PI / 2;
    this.box(0.12, 0.12, 0.1, M.rubber, 0, 0, -0.4, g);
    g.position.set(0, 0.52, 0.62);
    this.registerPart('driveshaft', g, [0, 0.52, 0.5]);
  }

  makeWheels() {
    const M = this.M, g = new THREE.Group();
    for (const x of [-0.86, 0.86]) for (const z of [-1.42, 1.42]) {
      const w = new THREE.Group();
      const tire = this.cyl(0.44, 0.44, 0.26, 22, M.rubber, 0, 0, 0, w);
      tire.rotation.z = Math.PI / 2;
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const b = this.box(0.3, 0.05, 0.16, M.rubber, 0, Math.cos(a) * 0.42, Math.sin(a) * 0.42, w);
        b.rotation.x = a;
        b.castShadow = false;
      }
      const rim = this.cyl(0.24, 0.24, 0.3, 16, M.steel, 0, 0, 0, w);
      rim.rotation.z = Math.PI / 2;
      const hub = this.cyl(0.09, 0.09, 0.34, 12, M.dark, 0, 0, 0, w);
      hub.rotation.z = Math.PI / 2;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const spoke = this.box(0.28, 0.05, 0.05, M.steel, 0, Math.cos(a) * 0.13, Math.sin(a) * 0.13, w);
        spoke.rotation.x = a;
        spoke.castShadow = false;
      }
      w.position.set(x, 0.44, z);
      g.add(w);
    }
    this.registerPart('wheels', g, [0.88, 0.46, 1.35]);
  }

  makeSeat() {
    const M = this.M, g = new THREE.Group();
    this.box(0.56, 0.14, 0.56, M.vinyl, 0, 0, 0, g);
    const back = this.box(0.56, 0.62, 0.14, M.vinyl, 0, 0.32, 0.26, g);
    back.rotation.x = -0.12;
    this.box(0.5, 0.05, 0.5, M.dark, 0, -0.08, 0, g);
    for (const x of [-0.26, 0.26]) this.box(0.05, 0.1, 0.5, M.steel, x, -0.1, 0, g);
    g.position.set(0, 1.0, 0.5);
    this.registerPart('seat', g, [0, 1.08, 0.55]);
  }

  makeSteering() {
    const M = this.M, g = new THREE.Group();
    const col = this.cyl(0.035, 0.045, 0.72, 8, M.steel, 0, -0.1, 0.1, g);
    col.rotation.x = -0.55;
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.022, 8, 22), M.black);
    wheel.position.set(0, 0.2, -0.1);
    wheel.rotation.x = 1.05;
    g.add(wheel);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const sp = this.box(0.17, 0.02, 0.02, M.steel, Math.cos(a) * 0.09, 0.2 + Math.sin(a) * 0.09, -0.1, g);
      sp.rotation.z = a;
    }
    this.cyl(0.045, 0.045, 0.05, 10, M.dark, 0, 0.2, -0.1, g).rotation.x = 1.05;
    g.position.set(0, 1.16, -0.05);
    this.registerPart('steering', g, [0, 1.32, -0.1]);
  }

  // ---------------------------------------------------------------- interaction
  bindInput() {
    const el = this.renderer.domElement;
    this.onDown = (e) => {
      if (!this.inputEnabled) return;
      this.down = { x: e.clientX, y: e.clientY, t: performance.now() };
      this.dragging = false;
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
    };
    this.onMove = (e) => {
      if (!this.inputEnabled) return;
      const rect = el.getBoundingClientRect();
      this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.clientX = e.clientX; this.clientY = e.clientY;
      if (this.down) {
        const dx = e.clientX - this.down.x, dy = e.clientY - this.down.y;
        if (Math.abs(dx) + Math.abs(dy) > 5) this.dragging = true;
        if (this.dragging) {
          this.desired.theta -= dx * 0.006;
          this.desired.phi = clamp(this.desired.phi - dy * 0.004, 0.55, 1.48);
          this.down.x = e.clientX; this.down.y = e.clientY;
        }
      } else {
        this.hoverCheck();
      }
    };
    this.onUp = (e) => {
      if (!this.inputEnabled) { this.down = null; return; }
      if (this.down && !this.dragging) this.pickAt();
      this.down = null;
      this.dragging = false;
    };
    this.onWheel = (e) => {
      if (!this.inputEnabled) return;
      e.preventDefault();
      this.desired.radius = clamp(this.desired.radius + e.deltaY * 0.006, 3.2, 12);
    };
    this.onLeave = () => { this.setHover(null); };

    el.addEventListener('pointerdown', this.onDown);
    el.addEventListener('pointermove', this.onMove);
    el.addEventListener('pointerup', this.onUp);
    el.addEventListener('pointerleave', this.onLeave);
    el.addEventListener('wheel', this.onWheel, { passive: false });
  }

  hoverCheck() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.raycaster.intersectObjects(this.picks, false)[0];
    this.setHover(hit ? hit.object.userData.slot : null);
    if (hit && this.cb.onHover) {
      this.cb.onHover(hit.object.userData.slot, this.clientX || 0, this.clientY || 0);
    }
  }

  pickAt() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.raycaster.intersectObjects(this.picks, false)[0];
    if (hit) {
      const id = hit.object.userData.slot;
      if (this.cb.onSelect) this.cb.onSelect(id);
    } else if (this.cb.onEmpty) {
      this.cb.onEmpty();
    }
  }

  setHover(id) {
    if (this.hoverId === id) return;
    this.hoverId = id;
    if (!id && this.cb.onHoverEnd) this.cb.onHoverEnd();
  }

  select(id) {
    this.selectedId = id;
    const info = SLOT_INFO[id];
    if (!info) return;
    this.desired.target.set(...info.anchor);
    this.desired.radius = info.camR;
    this.desired.theta = info.theta + 0.18;
    this.desired.phi = 1.2;
  }

  deselect() {
    this.selectedId = null;
    this.desired.target.set(0, 1.02, 0);
    this.desired.radius = 6.5;
    this.desired.theta = this.orbit.theta = 2.32;
    this.desired.phi = 1.17;
  }

  setRunning(on) {
    this.running = on;
    if (on) {
      const p = this.partMeshes.carb;
      if (p) p.visible = true;
    }
  }

  refreshParts() {
    for (const def of PARTS) {
      const st = game.s.parts[def.id];
      const mesh = this.partMeshes[def.id];
      if (!mesh) continue;
      if (st.installed) {
        if (!mesh.visible) {
          mesh.visible = true;
          mesh.scale.setScalar(0.01);
          this.anim.push({ mesh, t: 0 });
          this.sound.clunk();
        }
      } else {
        mesh.visible = false;
      }
      const marker = this.markers[def.id];
      if (marker) {
        marker.visible = !st.installed && game.canFit(def.id);
        if (st.stripped) marker.visible = true;
      }
    }
    const wheels = game.s.parts.wheels.installed;
    if (this.stands) this.stands.visible = !wheels;
  }

  // ---------------------------------------------------------------- update
  resize() {
    const w = this.renderer.domElement.clientWidth || window.innerWidth;
    const h = this.renderer.domElement.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  update(dt) {
    this.time += dt;
    const t = this.time;

    // camera
    const k = 1 - Math.pow(0.001, dt);
    this.cam.target.lerp(this.desired.target, k);
    this.cam.radius = lerp(this.cam.radius, this.desired.radius, k);
    this.cam.theta = lerp(this.cam.theta, this.desired.theta, k);
    this.cam.phi = lerp(this.cam.phi, this.desired.phi, k);
    const sp = Math.sin(this.cam.phi) * this.cam.radius;
    this.camera.position.set(
      this.cam.target.x + sp * Math.sin(this.cam.theta),
      this.cam.target.y + Math.cos(this.cam.phi) * this.cam.radius,
      this.cam.target.z + sp * Math.cos(this.cam.theta)
    );
    this.camera.lookAt(this.cam.target);

    // car vibration
    if (this.running) {
      this.car.position.y = Math.sin(t * 62) * 0.0035;
      this.car.rotation.z = Math.sin(t * 47) * 0.0012;
    } else {
      this.car.position.y = lerp(this.car.position.y, 0, 0.2);
      this.car.rotation.z = lerp(this.car.rotation.z, 0, 0.2);
    }

    // scale-in animations
    for (let i = this.anim.length - 1; i >= 0; i--) {
      const a = this.anim[i];
      a.t += dt * 3.2;
      const s = Math.min(1, a.t);
      const e = 1 + Math.sin(s * Math.PI) * 0.06;
      a.mesh.scale.setScalar(Math.max(0.01, s * e));
      if (s >= 1) { a.mesh.scale.setScalar(1); this.anim.splice(i, 1); }
    }

    // markers
    for (const def of PARTS) {
      const marker = this.markers[def.id];
      if (!marker || !marker.visible) continue;
      const hov = this.hoverId === def.id || this.selectedId === def.id;
      marker.userData.ring.rotation.z = t * 0.7;
      marker.userData.ring.scale.setScalar(hov ? 1.35 : 1 + Math.sin(t * 2.2) * 0.06);
      marker.userData.ring.material.opacity = hov ? 0.95 : 0.5 + Math.sin(t * 2.2) * 0.18;
      marker.userData.gem.position.y = 0.18 + Math.sin(t * 2.4) * 0.02;
      marker.userData.gem.rotation.y = t * 1.2;
    }

    // dust
    if (this.dust) {
      const p = this.dust.geometry.attributes.position;
      for (let i = 0; i < p.count; i++) {
        let y = p.getY(i) - dt * 0.045;
        if (y < 0.05) y = 5.4;
        p.setY(i, y);
        p.setX(i, p.getX(i) + Math.sin(t * 0.3 + i) * dt * 0.01);
      }
      p.needsUpdate = true;
    }

    // smoke when running
    if (this.running) {
      this.smokeTimer -= dt;
      if (this.smokeTimer <= 0) {
        this.smokeTimer = 0.42;
        const puff = this.smoke.find(s => !s.visible);
        if (puff) {
          puff.visible = true;
          puff.position.set(0.55, 0.55, 2.15);
          puff.scale.setScalar(0.3);
          puff.userData.life = 1;
          puff.material.opacity = 0.22;
        }
      }
    }
    for (const puff of this.smoke) {
      if (!puff.visible) continue;
      puff.userData.life -= dt * 0.4;
      puff.position.y += dt * 0.55;
      puff.position.z += dt * 0.25;
      puff.scale.addScalar(dt * 0.9);
      puff.material.opacity = Math.max(0, puff.userData.life * 0.18);
      if (puff.userData.life <= 0) puff.visible = false;
    }
  }
}
