import * as THREE from 'three';
import { game } from './state.js';
import { LOCATIONS, JOB_MAP, clamp, lerp, rand } from './data.js';
import { grassTexture, dirtTexture, roadTexture, woodTexture, signTexture, labelTexture } from './textures.js';

const WORLD_R = 205;

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothstep(a, b, x) {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

function heightAt(x, z) {
  const r = Math.hypot(x, z);
  const hill = smoothstep(95, 200, r) * (8 + Math.sin(x * 0.021) * 4 + Math.cos(z * 0.017) * 3 + Math.sin((x + z) * 0.009) * 7);
  const bumps = (Math.sin(x * 0.07) * 0.22 + Math.cos(z * 0.061) * 0.18 + Math.sin((x - z) * 0.11) * 0.08) * smoothstep(18, 80, r);
  return hill + bumps;
}

function segDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz;
  let t = l2 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}

export class World {
  constructor(renderer, sound, cb = {}) {
    this.renderer = renderer;
    this.sound = sound;
    this.cb = cb;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xa8b0ad, 0.0055);
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 900);
    this.time = 0;
    this.keys = {};
    this.touch = { x: 0, y: 0, active: false };
    this.brakeTouch = false;
    this.colliders = [];
    this.roadSegs = [];
    this.roadPoints = [];
    this.shake = 0;
    this.promptAction = null;
    this.near = null;
    this.started = false;

    this.tractor = {
      x: game.s.tractor.pos ? game.s.tractor.pos.x : 6,
      z: game.s.tractor.pos ? game.s.tractor.pos.z : 2.5,
      heading: game.s.tractor.pos ? (game.s.tractor.pos.heading || 0) : 0,
      speed: 0, steer: 0
    };
    this.cameraPos = new THREE.Vector3(6, 4, 12);
    this.cameraLook = new THREE.Vector3(6, 1, 2);

    this.makeSky();
    this.buildTerrain();
    this.buildRoads();
    this.buildTrees();
    this.buildBuildings();
    this.buildProps();
    this.buildTractor();
    this.buildJobMarker();
    this.buildClouds();
    this.buildStars();
    this.updateEnvironment(true);
    this.resize();
  }

  // ---------------------------------------------------------------- sky
  makeSky() {
    this.skyUniforms = {
      top: { value: new THREE.Color(0x4b7ea8) },
      bottom: { value: new THREE.Color(0xc3cbc4) },
      sunColor: { value: new THREE.Color(0xffd7a0) },
      sunDir: { value: new THREE.Vector3(0.6, 0.5, 0.3) },
      sunI: { value: 1 }
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vWorld; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vWorld = wp.xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 top; uniform vec3 bottom; uniform vec3 sunColor; uniform vec3 sunDir; uniform float sunI;
        varying vec3 vWorld;
        void main(){
          vec3 d = normalize(vWorld);
          float h = clamp(d.y*0.5+0.5, 0.0, 1.0);
          vec3 col = mix(bottom, top, pow(h, 0.72));
          float s = max(dot(d, normalize(sunDir)), 0.0);
          col += sunColor * pow(s, 420.0) * 2.4 * sunI;
          col += sunColor * pow(s, 9.0) * 0.22 * sunI;
          gl_FragColor = vec4(col, 1.0);
        }`
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 20), mat);
    this.scene.add(this.sky);

    this.sun = new THREE.DirectionalLight(0xffd9a8, 2.4);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.left = -45;
    this.sun.shadow.camera.right = 45;
    this.sun.shadow.camera.top = 45;
    this.sun.shadow.camera.bottom = -45;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 220;
    this.sun.shadow.bias = -0.0008;
    this.scene.add(this.sun, this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xb9cbd6, 0x4a4534, 0.9);
    this.scene.add(this.hemi);
    this.amb = new THREE.AmbientLight(0xffffff, 0.15);
    this.scene.add(this.amb);
  }

  buildStars() {
    const n = 700;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(rand(-1, 1), rand(0.08, 1), rand(-1, 1)).normalize().multiplyScalar(430);
      pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xdfe8ff, size: 1.5, transparent: true, opacity: 0, depthWrite: false, fog: false });
    this.stars = new THREE.Points(g, this.starMat);
    this.scene.add(this.stars);
  }

  buildClouds() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const x = c.getContext('2d');
    x.clearRect(0, 0, 256, 128);
    for (let i = 0; i < 16; i++) {
      const cx = 40 + Math.random() * 176, cy = 60 + Math.random() * 40, r = 18 + Math.random() * 34;
      const g = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, 'rgba(255,250,240,.55)');
      g.addColorStop(1, 'rgba(255,250,240,0)');
      x.fillStyle = g; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.cloudMat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.75, depthWrite: false, fog: false });
    this.clouds = [];
    for (let i = 0; i < 12; i++) {
      const s = new THREE.Sprite(this.cloudMat.clone());
      s.position.set(rand(-260, 260), rand(65, 110), rand(-260, 260));
      s.scale.set(rand(50, 100), rand(18, 34), 1);
      s.material.opacity = rand(0.25, 0.6);
      this.clouds.push(s);
      this.scene.add(s);
    }
  }

  updateEnvironment(force = false) {
    const mins = game.s.minutes;
    const angle = (mins / 1440) * Math.PI * 2 - Math.PI / 2;
    const elev = Math.sin(angle);
    const dir = new THREE.Vector3(Math.cos(angle) * 0.85, Math.max(elev, 0.02), 0.38).normalize();
    this.skyUniforms.sunDir.value.copy(dir);
    const day = clamp(elev * 2.2, 0, 1);
    const dusk = clamp(1 - Math.abs(elev) * 3.4, 0, 1);

    const cDayTop = new THREE.Color(0x4b7ea8), cDayBot = new THREE.Color(0xc6cec5);
    const cNightTop = new THREE.Color(0x050912), cNightBot = new THREE.Color(0x101823);
    const cDuskTop = new THREE.Color(0x36425c), cDuskBot = new THREE.Color(0xd07b3e);
    const top = cNightTop.clone().lerp(cDayTop, day).lerp(cDuskTop, dusk * 0.55);
    const bot = cNightBot.clone().lerp(cDayBot, day).lerp(cDuskBot, dusk * 0.7);
    this.skyUniforms.top.value.copy(top);
    this.skyUniforms.bottom.value.copy(bot);
    this.skyUniforms.sunI.value = clamp(elev * 3 + 0.15, 0, 1.2);
    this.skyUniforms.sunColor.value.setHex(0xffc98a).lerp(new THREE.Color(0xfff4e0), day);

    this.sun.position.copy(this.tractor ? new THREE.Vector3(this.tractor.x, 0, this.tractor.z) : new THREE.Vector3()).add(new THREE.Vector3(dir.x * 90, Math.max(8, dir.y * 90), dir.z * 90));
    this.sun.target.position.set(this.tractor.x, 0, this.tractor.z);
    this.sun.intensity = 0.2 + day * 3.1;
    this.sun.color.copy(new THREE.Color(0xffb06a).lerp(new THREE.Color(0xfff3dd), day));
    this.hemi.intensity = 0.34 + day * 1.12;
    this.hemi.color.copy(new THREE.Color(0x2a3448).lerp(new THREE.Color(0xb9cbd6), day));
    this.hemi.groundColor.copy(new THREE.Color(0x1a1812).lerp(new THREE.Color(0x5a5340), day));
    this.amb.intensity = 0.13 + day * 0.22;
    this.scene.fog.color.copy(bot).multiplyScalar(0.86);
    this.starMat.opacity = clamp(-elev * 2.4, 0, 0.95);
    if (this.headlights) {
      const night = elev < 0.04;
      this.headlights.visible = night;
      this.headlightGlow.forEach(m => { m.material.color.setHex(night ? 0xfff0c0 : 0x6a6252); });
    }
    this.scene.background = bot.clone();
  }

  // ---------------------------------------------------------------- terrain
  buildTerrain() {
    const size = 540, seg = 116;
    const geo = new THREE.PlaneGeometry(size, size, seg, seg);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const cGrass = new THREE.Color(0xa7b57a);
    const cDry = new THREE.Color(0xc0a875);
    const cDirt = new THREE.Color(0x9a7e5a);
    const cDark = new THREE.Color(0x7c8c5c);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const y = heightAt(x, z);
      pos.setY(i, y);
      const n = Math.sin(x * 0.13) * Math.cos(z * 0.11) + Math.sin((x + z) * 0.05) * 0.7;
      let c = cGrass.clone();
      if (n > 0.55) c.lerp(cDry, (n - 0.55) * 0.8);
      if (n < -0.7) c.lerp(cDark, (-n - 0.7) * 0.9);
      if (y > 2.5) c.lerp(cDirt, clamp((y - 2.5) / 8, 0, 0.45));
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const tex = grassTexture();
    tex.repeat.set(60, 60);
    const mat = new THREE.MeshStandardMaterial({ map: tex, vertexColors: true, roughness: 0.98, metalness: 0 });
    const ground = new THREE.Mesh(geo, mat);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.ground = ground;

    // distant ridge
    const ridgeMat = new THREE.MeshStandardMaterial({ color: 0x55606a, roughness: 1, flatShading: true });
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + rand(-0.05, 0.05);
      const r = rand(240, 300);
      const h = rand(26, 62);
      const m = new THREE.Mesh(new THREE.ConeGeometry(rand(30, 65), h, 5), ridgeMat);
      m.position.set(Math.cos(a) * r, h / 2 - 4, Math.sin(a) * r);
      m.rotation.y = rand(0, 6);
      this.scene.add(m);
    }
  }

  buildRoads() {
    const defs = [
      [[0, 6], [-12, -8], [-30, -22], [-52, -34], [-74, -44]],
      [[2, 5], [18, -10], [36, -24], [54, -35], [66, -42]],
      [[4, 6], [18, 20], [34, 36], [50, 48], [62, 60]],
      [[-2, 8], [-14, 26], [-24, 44], [-30, 58], [-34, 68]],
      [[-74, -44], [-70, -14], [-62, 18], [-52, 54], [-52, 62]],
      [[-52, 62], [-48, 68], [-40, 72]]
    ];
    const tex = roadTexture();
    tex.repeat.set(1, 1);
    const mat = new THREE.MeshStandardMaterial({ map: tex, color: 0xb8ad98, roughness: 0.97, metalness: 0 });
    for (const pts of defs) {
      const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], 0, p[1])), false, 'catmullrom', 0.3);
      const N = 70, w = 2.6;
      const positions = [], uvs = [], indices = [];
      const samples = [];
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const p = curve.getPointAt(t);
        const tan = curve.getTangentAt(t);
        const nx = -tan.z, nz = tan.x;
        const len = Math.hypot(nx, nz) || 1;
        const y = heightAt(p.x, p.z) + 0.07;
        positions.push(p.x + (nx / len) * w, y, p.z + (nz / len) * w);
        positions.push(p.x - (nx / len) * w, y, p.z - (nz / len) * w);
        uvs.push(0, t * 16, 1, t * 16);
        samples.push({ x: p.x, z: p.z });
        if (i < N) {
          const a = i * 2;
          indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(indices);
      g.computeVertexNormals();
      const mesh = new THREE.Mesh(g, mat);
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.roadPoints.push(samples);
      for (let i = 0; i < samples.length - 1; i++) this.roadSegs.push([samples[i].x, samples[i].z, samples[i + 1].x, samples[i + 1].z]);
    }
  }

  // ---------------------------------------------------------------- trees
  buildTrees() {
    const rng = mulberry32(20261031);
    const trunks = [], pines = [], leaves = [];
    for (let i = 0; i < 520; i++) {
      const a = rng() * Math.PI * 2;
      const r = 14 + Math.sqrt(rng()) * 175;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (Math.hypot(x, z) < 13) continue;
      let nearRoad = false;
      for (const s of this.roadSegs) {
        if (segDist(x, z, s[0], s[1], s[2], s[3]) < 6.5) { nearRoad = true; break; }
      }
      if (nearRoad) continue;
      let nearPlace = false;
      for (const k in LOCATIONS) {
        const l = LOCATIONS[k];
        if (Math.hypot(x - l.x, z - l.z) < 18) { nearPlace = true; break; }
      }
      if (nearPlace) continue;
      const s = 0.8 + rng() * 0.9;
      const y = heightAt(x, z);
      if (rng() < 0.45) pines.push({ x, y, z, s, rot: rng() * 6 });
      else leaves.push({ x, y, z, s, rot: rng() * 6 });
      trunks.push({ x, y, z, s, rot: rng() * 6 });
      if (r < 120) this.colliders.push({ x, z, r: 0.75 * s });
    }

    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.24, 2.2, 6);
    trunkGeo.translate(0, 1.1, 0);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3726, roughness: 1 });
    const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, trunks.length);
    trunkMesh.castShadow = false;
    const dummy = new THREE.Object3D();
    trunks.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z);
      dummy.scale.setScalar(t.s);
      dummy.rotation.y = t.rot;
      dummy.updateMatrix();
      trunkMesh.setMatrixAt(i, dummy.matrix);
    });
    this.scene.add(trunkMesh);

    const pineGeo = new THREE.ConeGeometry(1.7, 5.4, 7);
    pineGeo.translate(0, 4.4, 0);
    const pineMat = new THREE.MeshStandardMaterial({ color: 0x3f5134, roughness: 1, flatShading: true });
    const pineMesh = new THREE.InstancedMesh(pineGeo, pineMat, pines.length);
    pines.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z);
      dummy.scale.set(t.s, t.s * (0.85 + rng() * 0.4), t.s);
      dummy.rotation.y = t.rot;
      dummy.updateMatrix();
      pineMesh.setMatrixAt(i, dummy.matrix);
    });
    this.scene.add(pineMesh);

    const leafGeo = new THREE.IcosahedronGeometry(1.9, 0);
    leafGeo.translate(0, 3.5, 0);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x5d6b3c, roughness: 1, flatShading: true });
    const leafMesh = new THREE.InstancedMesh(leafGeo, leafMat, leaves.length);
    leaves.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z);
      dummy.scale.set(t.s * (0.8 + rng() * 0.6), t.s, t.s * (0.8 + rng() * 0.6));
      dummy.rotation.set(rng(), t.rot, rng() * 0.4);
      dummy.updateMatrix();
      leafMesh.setMatrixAt(i, dummy.matrix);
    });
    this.scene.add(leafMesh);

    // bushes
    const bushGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const bushMat = new THREE.MeshStandardMaterial({ color: 0x59683f, roughness: 1, flatShading: true });
    const bushes = new THREE.InstancedMesh(bushGeo, bushMat, 220);
    for (let i = 0; i < 220; i++) {
      const a = rng() * Math.PI * 2, r = 10 + rng() * 150;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      dummy.position.set(x, heightAt(x, z) + 0.2, z);
      dummy.scale.set(0.7 + rng(), 0.5 + rng() * 0.8, 0.7 + rng());
      dummy.rotation.y = rng() * 6;
      dummy.updateMatrix();
      bushes.setMatrixAt(i, dummy.matrix);
    }
    this.scene.add(bushes);
  }

  // ---------------------------------------------------------------- buildings
  box(w, h, d, color, x, y, z, parent, opts = {}) {
    const m = color && color.isMaterial
      ? color
      : new THREE.MeshStandardMaterial({ color, roughness: opts.rough ?? 0.9, metalness: opts.metal ?? 0.05, flatShading: opts.flat ?? false });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true; mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  gable(w, d, h, color, x, y, z, parent, rot = 0) {
    const g = new THREE.Group();
    const slope = Math.atan2(h, d / 2);
    const len = Math.hypot(h, d / 2) + 0.2;
    for (const s of [-1, 1]) {
      const slab = this.box(w + 0.6, 0.18, len, color, 0, 0, s * d / 4, g, { rough: 0.95 });
      slab.rotation.x = -s * slope;
      slab.position.y = h / 2 + 0.05;
    }
    // gable ends
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, 0); shape.lineTo(w / 2, 0); shape.lineTo(0, h); shape.lineTo(-w / 2, 0);
    const endGeo = new THREE.ShapeGeometry(shape);
    const endMat = new THREE.MeshStandardMaterial({ color, roughness: 0.95, side: THREE.DoubleSide });
    for (const s of [-1, 1]) {
      const end = new THREE.Mesh(endGeo, endMat);
      end.position.set(0, 0, s * d / 2);
      g.add(end);
    }
    g.position.set(x, y, z);
    g.rotation.y = rot;
    parent.add(g);
    return g;
  }

  building(x, z, w, d, h, wallColor, roofColor, opts = {}) {
    const g = new THREE.Group();
    const walls = this.box(w, h, d, wallColor, 0, h / 2, 0, g, { rough: 0.95 });
    this.gable(w, d, opts.roofH || 2.4, roofColor, 0, h, 0, g);
    // door
    this.box(opts.doorW || 1.8, opts.doorH || 2.4, 0.1, 0x241c14, 0, (opts.doorH || 2.4) / 2, d / 2 + 0.06, g);
    // windows
    const winMat = new THREE.MeshStandardMaterial({ color: 0x8a9a9c, roughness: 0.2, metalness: 0.5 });
    for (const sx of [-1, 1]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.0, 0.08), winMat);
      win.position.set(sx * w * 0.28, h * 0.62, d / 2 + 0.06);
      g.add(win);
    }
    g.position.set(x, heightAt(x, z), z);
    g.rotation.y = opts.rot || 0;
    this.scene.add(g);
    this.colliders.push({ x, z, r: Math.max(w, d) * 0.55 + 0.8 });
    return g;
  }

  buildBuildings() {
    // HOME barn
    const home = this.building(0, -7, 11, 8, 4.4, 0x6e2f24, 0x33231b, { doorW: 4.2, doorH: 3.4, roofH: 3 });
    const homeSign = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.1), new THREE.MeshBasicMaterial({ map: signTexture('HARD START', 'BAY 03', '#17130e', '#e9e2d2', '#d2601f') }));
    homeSign.position.set(0, 4.6, 4.1);
    home.add(homeSign);
    // weather vane
    this.box(0.08, 1.4, 0.08, 0x2a2620, 0, 7.4, 0, home);

    // farmhouse
    const farm = this.building(66, -52, 8.5, 7, 3.8, 0xb9b3a2, 0x4a3a2e, { doorW: 1.5, doorH: 2.5, roofH: 2.8 });
    // porch
    this.box(6.5, 0.2, 2.2, 0x7a5f42, 0, 0.25, 4.5, farm);
    for (const sx of [-2.8, 2.8]) this.box(0.16, 2.4, 0.16, 0x6a5138, sx, 1.4, 5.2, farm);
    this.box(6.5, 0.16, 2.4, 0x4a3a2e, 0, 2.65, 4.5, farm);
    // silo
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 9, 16), new THREE.MeshStandardMaterial({ color: 0x8d8a7e, roughness: 0.85, metalness: 0.4 }));
    silo.position.set(58, 4.5, -55);
    silo.castShadow = true; silo.receiveShadow = true;
    this.scene.add(silo);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(2.2, 16, 8, 0, 6.3, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x6f6c62, roughness: 0.8, metalness: 0.4 }));
    dome.position.set(58, 9, -55);
    this.scene.add(dome);
    this.colliders.push({ x: 58, z: -55, r: 3.2 });

    // sawmill
    const mill = new THREE.Group();
    for (const sx of [-4, 4]) for (const sz of [-3, 3]) this.box(0.3, 4.2, 0.3, 0x4a3a28, sx, 2.1, sz, mill);
    this.box(9, 0.3, 7, 0x3a2f24, 0, 4.3, 0, mill);
    this.gable(9, 7, 1.6, 0x4a3a2c, 0, 4.45, 0, mill);
    this.box(4, 3.2, 0.2, 0x2a2018, 0, 1.6, 3.4, mill);
    // saw blade
    const blade = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.06, 28), new THREE.MeshStandardMaterial({ color: 0xa8a8a0, metalness: 0.9, roughness: 0.35 }));
    blade.rotation.z = Math.PI / 2;
    blade.position.set(3, 1.8, 1.2);
    mill.add(blade);
    // logs
    for (let i = 0; i < 7; i++) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.34, 4.2, 8), new THREE.MeshStandardMaterial({ color: 0x5a4028, roughness: 1 }));
      log.rotation.z = Math.PI / 2;
      log.position.set(-2 + (i % 2) * 0.7, 0.4 + Math.floor(i / 2) * 0.6, -2.6 + (i % 3) * 0.2);
      mill.add(log);
    }
    mill.position.set(-74, heightAt(-74, -52), -52);
    mill.rotation.y = 0.1;
    this.scene.add(mill);
    this.colliders.push({ x: -74, z: -52, r: 6.5 });

    // north barn
    this.building(-34, 78, 12, 9, 5, 0x6b3428, 0x2e2019, { doorW: 4.6, doorH: 3.8, roofH: 3.4 });
    // store
    const store = this.building(62, 52, 8, 6, 3.4, 0x8a7654, 0x3b2e22, { doorW: 1.8, doorH: 2.4, roofH: 2.2 });
    const storeSign = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.9), new THREE.MeshBasicMaterial({ map: signTexture('FEED & SEED', 'OPEN', '#1a1610', '#e9e2d2', '#e5b44a') }));
    storeSign.position.set(0, 4.2, 3.1);
    store.add(storeSign);

    // scrapyard piles
    const scrap = new THREE.Group();
    for (let i = 0; i < 9; i++) {
      const c = [0x5a3a2a, 0x3e4a44, 0x6a5a3a][i % 3];
      const b = this.box(2.4 + Math.random() * 1.6, 0.9, 1.4 + Math.random(), c, rand(-5, 5), 0.5 + (i % 3) * 0.9, rand(-4, 4), scrap);
      b.rotation.y = Math.random() * 3;
    }
    scrap.position.set(-52, 0, 52);
    this.scene.add(scrap);
    this.colliders.push({ x: -52, z: 52, r: 7 });
  }

  buildProps() {
    // home fuel pump
    const pump = new THREE.Group();
    this.box(1.0, 1.7, 0.6, 0x8b2c1c, 0, 0.85, 0, pump);
    this.box(0.7, 0.4, 0.1, 0x1c1812, 0, 1.35, 0.31, pump);
    this.box(0.16, 0.5, 0.1, 0x2a2620, 0.35, 1.0, 0.36, pump);
    const pumpSign = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.25), new THREE.MeshBasicMaterial({ map: labelTexture('DIESEL', '#e5b44a', '#1b1914') }));
    pumpSign.position.set(0, 1.72, 0.31);
    pump.add(pumpSign);
    pump.position.set(11.5, 0, -2.5);
    pump.rotation.y = -0.5;
    this.scene.add(pump);
    this.colliders.push({ x: 11.5, z: -2.5, r: 1 });

    // fences near home
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x6a5942, roughness: 1 });
    for (let i = 0; i < 22; i++) {
      const x = -18 + i * 1.7;
      this.box(0.12, 1.2, 0.12, 0x6a5942, x, 0.6, 10, this.scene);
      if (i < 21) this.box(1.7, 0.1, 0.08, 0x6a5942, x + 0.85, 0.85, 10, this.scene);
    }
    // hay bales
    for (let i = 0; i < 6; i++) {
      const bale = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.2, 12), new THREE.MeshStandardMaterial({ color: 0xb99a54, roughness: 1 }));
      bale.rotation.z = Math.PI / 2;
      bale.position.set(61 + (i % 3) * 1.6, 0.7, -38 + Math.floor(i / 3) * 1.5);
      bale.castShadow = true;
      this.scene.add(bale);
    }
    // telephone poles
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x4a3a28, roughness: 1 });
    for (let i = 0; i < 9; i++) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 8, 6), poleMat);
      const x = 8 + i * 14, z = 2 - i * 7;
      p.position.set(x, heightAt(x, z) + 4, z);
      p.castShadow = true;
      this.scene.add(p);
      this.box(2.2, 0.12, 0.12, 0x4a3a28, x, 7.2, z, this.scene);
    }

    // septic tank marker at farm
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.25, 16), new THREE.MeshStandardMaterial({ color: 0x4a5a4a, roughness: 0.9 }));
    tank.position.set(72, 0.12, -42);
    this.scene.add(tank);
    this.colliders.push({ x: 72, z: -42, r: 1.3 });

    // signs at road junctions
    const signs = [
      { x: 3, z: 12, text: 'HOME', sub: '1/2 MI' },
      { x: 40, z: -30, text: 'FARM', sub: '2 MI' },
      { x: 30, z: 32, text: 'STORE', sub: '1 MI' }
    ];
    for (const s of signs) {
      const post = this.box(0.12, 2.4, 0.12, 0x4a3a28, s.x, 1.2, s.z, this.scene);
      const board = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.55), new THREE.MeshBasicMaterial({ map: signTexture(s.text, s.sub, '#17130e', '#e9e2d2', '#d2601f') }));
      board.position.set(s.x, 2.35, s.z + 0.07);
      this.scene.add(board);
    }
  }

  // ---------------------------------------------------------------- tractor
  buildTractor() {
    const M = {
      body: new THREE.MeshStandardMaterial({ color: 0x9c3f1f, roughness: 0.62, metalness: 0.25 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x2c2924, roughness: 0.8, metalness: 0.3 }),
      steel: new THREE.MeshStandardMaterial({ color: 0x8a8a82, roughness: 0.45, metalness: 0.8 }),
      rubber: new THREE.MeshStandardMaterial({ color: 0x151513, roughness: 0.97 }),
      seat: new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.9 }),
      rust: new THREE.MeshStandardMaterial({ color: 0x6e4027, roughness: 0.95 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x9fb4b8, roughness: 0.15, metalness: 0.4, transparent: true, opacity: 0.25 })
    };
    this.tractorMats = M;
    const t = new THREE.Group();
    this.tractorGroup = t;

    // chassis
    this.box(1.5, 0.5, 3.6, M.dark, 0, 0.95, 0, t);
    // hood
    this.box(1.25, 0.8, 1.9, M.body, 0, 1.5, -0.85, t);
    this.box(1.28, 0.14, 1.95, M.rust, 0, 1.92, -0.85, t);
    // grille
    this.box(1.1, 0.6, 0.1, M.dark, 0, 1.45, -1.82, t);
    for (let i = 0; i < 6; i++) this.box(0.9, 0.04, 0.04, M.steel, 0, 1.25 + i * 0.09, -1.88, t);
    // headlights
    this.headlightGlow = [];
    for (const sx of [-0.42, 0.42]) {
      const hl = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 12), new THREE.MeshStandardMaterial({ color: 0x6a6252, emissive: 0x000000 }));
      hl.rotation.x = Math.PI / 2;
      hl.position.set(sx, 1.72, -1.84);
      t.add(hl);
      this.headlightGlow.push(hl);
    }
    // fenders
    for (const sx of [-0.95, 0.95]) {
      const f = this.box(0.5, 0.16, 1.5, M.body, sx, 1.28, 0.95, t);
      f.rotation.z = sx > 0 ? -0.1 : 0.1;
      this.box(0.5, 0.12, 1.5, M.rust, sx, 1.15, 0.95, t);
    }
    // seat + steering
    this.box(0.6, 0.14, 0.6, M.seat, 0, 1.45, 0.55, t);
    this.box(0.6, 0.6, 0.14, M.seat, 0, 1.78, 0.85, t);
    const col = this.box(0.06, 0.7, 0.06, M.steel, 0, 1.7, 0.2, t);
    col.rotation.x = -0.4;
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.03, 8, 20), M.dark);
    wheel.position.set(0, 1.98, 0.02);
    wheel.rotation.x = 1.1;
    t.add(wheel);
    // exhaust
    this.cylWorld(0.055, 0.06, 1.3, 8, M.steel, 0.55, 1.9, -1.55, t);
    // rear hitch
    this.box(0.3, 0.2, 0.5, M.dark, 0, 0.75, 1.9, t);

    // wheels
    this.frontWheels = [];
    this.rearWheels = [];
    for (const sx of [-0.82, 0.82]) {
      const fw = new THREE.Group();
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.26, 16), M.rubber);
      tire.rotation.z = Math.PI / 2;
      fw.add(tire);
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.3, 12), M.steel);
      rim.rotation.z = Math.PI / 2;
      fw.add(rim);
      fw.position.set(sx, 0.4, -1.25);
      t.add(fw);
      this.frontWheels.push(fw);

      const rw = new THREE.Group();
      const rt = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.36, 18), M.rubber);
      rt.rotation.z = Math.PI / 2;
      rw.add(rt);
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const lug = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.09, 0.18), M.rubber);
        lug.position.set(0, Math.cos(a) * 0.66, Math.sin(a) * 0.66);
        lug.rotation.x = a;
        rw.add(lug);
      }
      const rim2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.4, 14), M.steel);
      rim2.rotation.z = Math.PI / 2;
      rw.add(rim2);
      rw.position.set(sx, 0.68, 1.05);
      t.add(rw);
      this.rearWheels.push(rw);
    }

    // trailer
    const tr = new THREE.Group();
    this.box(1.8, 0.18, 2.8, M.rust, 0, 0.62, 0, tr);
    for (const sx of [-0.9, 0.9]) this.box(0.1, 0.3, 2.8, M.dark, sx, 0.8, 0, tr);
    for (const sz of [-1.35, 1.35]) this.box(1.8, 0.3, 0.1, M.dark, 0, 0.8, sz, tr);
    for (const sx of [-0.95, 0.95]) {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.22, 12), M.rubber);
      w.rotation.z = Math.PI / 2;
      w.position.set(sx, 0.34, 0);
      tr.add(w);
    }
    this.box(0.12, 0.12, 0.8, M.steel, 0, 0.62, -1.7, tr);
    tr.position.set(0, 0, 2.9);
    this.trailer = tr;
    t.add(tr);

    // cargo (logs / bales) on trailer
    this.cargo = new THREE.Group();
    const logMat = new THREE.MeshStandardMaterial({ color: 0x5a4028, roughness: 1 });
    for (let i = 0; i < 5; i++) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 2.4, 7), logMat);
      log.rotation.x = Math.PI / 2;
      log.position.set(-0.5 + (i % 3) * 0.5, 0.8 + Math.floor(i / 3) * 0.34, 0);
      this.cargo.add(log);
    }
    this.cargo.visible = false;
    tr.add(this.cargo);

    t.position.set(this.tractor.x, 0, this.tractor.z);
    t.rotation.y = this.tractor.heading;
    t.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.scene.add(t);

    // headlight spot
    this.headlights = new THREE.SpotLight(0xfff2cc, 90, 45, 0.45, 0.6, 1.4);
    this.headlights.position.set(0, 1.8, -1.8);
    this.headlights.target.position.set(0, 0.2, -22);
    this.headlights.visible = false;
    t.add(this.headlights, this.headlights.target);

    // exhaust smoke pool
    this.smoke = [];
    const smokeMat = new THREE.MeshBasicMaterial({ color: 0x5a544c, transparent: true, opacity: 0, depthWrite: false });
    for (let i = 0; i < 18; i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 5), smokeMat.clone());
      p.visible = false;
      p.userData.life = 0;
      this.scene.add(p);
      this.smoke.push(p);
    }
    this.smokeTimer = 0;

    // dust pool
    this.dust = [];
    const dustMat = new THREE.MeshBasicMaterial({ color: 0x9a8666, transparent: true, opacity: 0, depthWrite: false });
    for (let i = 0; i < 14; i++) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), dustMat.clone());
      p.visible = false;
      p.userData.life = 0;
      this.scene.add(p);
      this.dust.push(p);
    }
    this.dustTimer = 0;

    this.engineStarted = false;
  }

  cylWorld(rt, rb, h, seg, mat, x, y, z, parent) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }

  // ---------------------------------------------------------------- job marker
  buildJobMarker() {
    const g = new THREE.Group();
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.4, 26, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0xe5b44a, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    beam.position.y = 13;
    g.add(beam);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.7), new THREE.MeshStandardMaterial({ color: 0xe5b44a, emissive: 0x8a5a10, roughness: 0.3, metalness: 0.4 }));
    gem.position.y = 3.4;
    g.add(gem);
    this.jobGem = gem;
    this.jobBeam = beam;
    this.jobMarker = g;
    g.visible = false;
    this.scene.add(g);
  }

  // ---------------------------------------------------------------- scene lifecycle
  enter() {
    this.started = true;
    this.tractorGroup.position.set(this.tractor.x, 0, this.tractor.z);
    this.tractorGroup.rotation.y = this.tractor.heading;
    if (!this.engineStarted) {
      this.sound.startEngine(760);
      this.engineStarted = true;
    }
    this.sound.setWind(0.5);
    this.updateEnvironment(true);
  }

  exit() {
    this.sound.stopEngine();
    this.engineStarted = false;
  }

  resize() {
    const w = this.renderer.domElement.clientWidth || window.innerWidth;
    const h = this.renderer.domElement.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  setCargo(visible) {
    if (this.cargo) this.cargo.visible = visible;
  }

  getJobTarget() {
    const job = game.s.job;
    if (!job) return null;
    const def = JOB_MAP[job.id];
    const loc = LOCATIONS[job.stage === 'pickup' ? def.pickup : def.drop];
    return { loc, def, stage: job.stage };
  }

  bearingTo(target) {
    const dx = target.x - this.tractor.x, dz = target.z - this.tractor.z;
    const worldAngle = Math.atan2(dx, dz);
    let rel = worldAngle - (this.tractor.heading + Math.PI);
    while (rel > Math.PI) rel -= Math.PI * 2;
    while (rel < -Math.PI) rel += Math.PI * 2;
    return rel;
  }

  distanceTo(target) { return Math.hypot(target.x - this.tractor.x, target.z - this.tractor.z); }

  // ---------------------------------------------------------------- input
  update(dt) {
    if (!this.started) { this.time += dt; return; }
    this.time += dt;
    const t = this.time;
    const tr = this.tractor;

    // ---- driving input
    const k = this.keys;
    let throttle = 0;
    if (k['w'] || k['arrowup']) throttle += 1;
    if (k['s'] || k['arrowdown']) throttle -= 1;
    let steer = 0;
    if (k['a'] || k['arrowleft']) steer -= 1;
    if (k['d'] || k['arrowright']) steer += 1;
    if (this.touch.active) {
      steer += this.touch.x;
      throttle += -this.touch.y;
    }
    steer = clamp(steer, -1, 1);
    throttle = clamp(throttle, -1, 1);
    const braking = k['shift'] || k[' '] || this.brakeTouch;
    const fuel = game.s.tractor.fuel;
    const hasFuel = fuel > 0.2;

    // a bad tune and loose fasteners cost you power
    const tuneFactor = game.s.tune.started ? 0.72 + 0.28 * clamp(game.s.tune.quality / 100, 0, 1) : 0.55;
    const reliability = game.reliability();
    const power = hasFuel ? tuneFactor * (0.82 + 0.18 * reliability / 100) : 0;
    const damageFactor = clamp(1 - game.s.tractor.damage / 140, 0.4, 1);
    const cargoPenalty = game.s.job && game.s.job.stage === 'drop' ? 0.82 : 1;
    const maxSpeed = 12.5 * power * damageFactor * cargoPenalty;
    const accel = 6.8 * power * damageFactor;

    // loose bolts make themselves known
    this.misfire = Math.max(0, (this.misfire || 0) - dt);
    this.misfireTimer = (this.misfireTimer === undefined ? 9 : this.misfireTimer) - dt;
    if (this.misfireTimer <= 0) {
      this.misfireTimer = rand(7, 14);
      if (reliability < 92 && hasFuel && Math.abs(tr.speed) > 1 && Math.random() < 0.7) {
        this.misfire = 1.15;
        sound.backfire();
        if (this.cb.onToast) this.cb.onToast('MISFIRE. SOMETHING IS WORKING ITSELF LOOSE.', 'bad');
      }
    }
    if (this.misfire > 0) throttle *= 0.22;

    if (braking) {
      tr.speed = lerp(tr.speed, 0, 1 - Math.pow(0.0005, dt));
    } else if (throttle > 0) {
      tr.speed += accel * throttle * dt;
    } else if (throttle < 0) {
      if (tr.speed > 0.5) tr.speed -= accel * 1.4 * dt;
      else tr.speed -= accel * 0.45 * dt;
    } else {
      tr.speed = lerp(tr.speed, 0, 1 - Math.pow(0.55, dt));
    }
    tr.speed = clamp(tr.speed, -4.2, maxSpeed);

    // steering
    tr.steer = lerp(tr.steer, steer, 1 - Math.pow(0.001, dt));
    const speedFactor = clamp(Math.abs(tr.speed) / 6, 0, 1);
    tr.heading += tr.steer * Math.sign(tr.speed || 1) * (0.32 + speedFactor * 0.55) * dt;

    // move with collision
    const fx = -Math.sin(tr.heading), fz = -Math.cos(tr.heading);
    let nx = tr.x + fx * tr.speed * dt;
    let nz = tr.z + fz * tr.speed * dt;
    let hit = false;
    for (const c of this.colliders) {
      const d = Math.hypot(nx - c.x, nz - c.z);
      if (d < c.r + 1.1) { hit = true; break; }
    }
    if (Math.hypot(nx, nz) > WORLD_R) hit = true;
    if (hit) {
      const impact = Math.abs(tr.speed);
      nx = tr.x; nz = tr.z;
      tr.speed = -tr.speed * 0.18;
      if (impact > 5.5) {
        this.shake = Math.min(0.7, impact * 0.05);
        this.sound.thunk();
        this.sound.noiseHit(0.3, 300, 0.3, 0.8);
        game.s.stats.crashes++;
        game.s.tractor.damage = clamp(game.s.tractor.damage + impact * 2.2, 0, 100);
        game.damage(impact * 1.9, 'CRASH');
        if (this.cb.onCrash) this.cb.onCrash(impact);
      }
    }
    tr.x = nx; tr.z = nz;
    game.s.stats.distance = (game.s.stats.distance || 0) + Math.abs(tr.speed) * dt / 1000;
    game.s.tractor.pos = { x: tr.x, z: tr.z, heading: tr.heading };

    // fuel burn
    if (hasFuel) {
      game.s.tractor.fuel = clamp(fuel - (0.012 + Math.abs(throttle) * 0.115) * dt, 0, 100);
    }
    if (game.s.tractor.fuel <= 0 && !this._fuelWarned) {
      this._fuelWarned = true;
      this.sound.backfire();
      this.cb.onToast && this.cb.onToast('OUT OF DIESEL. YOU ARE WALKING.', 'bad');
    } else if (game.s.tractor.fuel > 3) this._fuelWarned = false;

    // ---- visuals
    const g = this.tractorGroup;
    g.position.set(tr.x, 0, tr.z);
    g.rotation.y = tr.heading;
    const bob = Math.sin(t * (6 + Math.abs(tr.speed))) * 0.012 * clamp(Math.abs(tr.speed) / 8, 0, 1);
    g.position.y = bob;
    const wheelSpin = tr.speed * dt / 0.68;
    for (const w of this.rearWheels) w.rotation.x += wheelSpin;
    for (const w of this.frontWheels) { w.rotation.x += tr.speed * dt / 0.4; w.rotation.y = tr.steer * 0.4; }

    // engine audio
    if (this.engineStarted) {
      const rpm = 620 + Math.abs(tr.speed) * 95 + Math.abs(throttle) * 130 + (hasFuel ? 0 : -200);
      this.sound.setEngine(Math.max(400, rpm), clamp(Math.abs(throttle) * 0.8 + Math.abs(tr.speed) / 18, 0, 1));
    }

    // smoke
    if (hasFuel && (Math.abs(throttle) > 0.1 || Math.abs(tr.speed) > 1)) {
      this.smokeTimer -= dt;
      if (this.smokeTimer <= 0) {
        this.smokeTimer = 0.14;
        const puff = this.smoke.find(s => !s.visible);
        if (puff) {
          const local = new THREE.Vector3(0.55, 1.9, -1.55).applyMatrix4(g.matrixWorld);
          puff.position.copy(local);
          puff.visible = true;
          puff.scale.setScalar(0.4);
          puff.userData.life = 1;
          puff.material.opacity = 0.22;
        }
      }
    }
    for (const p of this.smoke) {
      if (!p.visible) continue;
      p.userData.life -= dt * 0.7;
      p.position.y += dt * 0.9;
      p.scale.addScalar(dt * 1.6);
      p.material.opacity = Math.max(0, p.userData.life * 0.2);
      if (p.userData.life <= 0) p.visible = false;
    }

    // dust
    if (Math.abs(tr.speed) > 2.5 && !braking) {
      this.dustTimer -= dt;
      if (this.dustTimer <= 0) {
        this.dustTimer = 0.09;
        const puff = this.dust.find(s => !s.visible);
        if (puff) {
          const local = new THREE.Vector3((Math.random() - 0.5) * 2, 0.2, 1.7).applyMatrix4(g.matrixWorld);
          puff.position.copy(local);
          puff.visible = true;
          puff.userData.life = 1;
          puff.material.opacity = 0.28;
          puff.scale.setScalar(0.6);
          puff.rotation.x = -Math.PI / 2;
          puff.rotation.z = Math.random() * 6;
        }
      }
    }
    for (const p of this.dust) {
      if (!p.visible) continue;
      p.userData.life -= dt * 0.8;
      p.position.y += dt * 0.35;
      p.scale.addScalar(dt * 1.5);
      p.material.opacity = Math.max(0, p.userData.life * 0.25);
      if (p.userData.life <= 0) p.visible = false;
    }

    // camera chase
    const camDist = 9.8, camHeight = 5.6;
    const targetPos = new THREE.Vector3(tr.x - fx * camDist, camHeight, tr.z - fz * camDist);
    const lookAt = new THREE.Vector3(tr.x + fx * 1.5, 1.35, tr.z + fz * 1.5);
    const camK = 1 - Math.pow(0.0025, dt);
    this.cameraPos.lerp(targetPos, camK);
    this.cameraLook.lerp(lookAt, 1 - Math.pow(0.0008, dt));
    this.camera.position.copy(this.cameraPos);
    if (this.shake > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake;
      this.camera.position.z += (Math.random() - 0.5) * this.shake;
      this.shake *= Math.pow(0.02, dt);
    }
    this.camera.lookAt(this.cameraLook);

    // job marker
    this.updateJobMarker(dt);

    // environment every ~2s
    this.envTimer = (this.envTimer || 0) + dt;
    if (this.envTimer > 2) { this.envTimer = 0; this.updateEnvironment(); }
    this.sound.setWind(0.4 + Math.sin(t * 0.1) * 0.1);

    // proximity
    this.updateProximity();
  }

  updateJobMarker(dt) {
    const target = this.getJobTarget();
    if (!target) {
      this.jobMarker.visible = false;
      this.setCargo(false);
      return;
    }
    const loc = target.loc;
    this.jobMarker.visible = true;
    this.jobMarker.position.set(loc.x, heightAt(loc.x, loc.z), loc.z);
    this.jobGem.rotation.y += dt * 1.5;
    this.jobGem.position.y = 3.4 + Math.sin(this.time * 2) * 0.15;
    const pickup = target.stage === 'pickup';
    const col = pickup ? 0xe5b44a : 0x8db268;
    this.jobBeam.material.color.setHex(col);
    this.jobGem.material.color.setHex(col);
    this.jobGem.material.emissive.setHex(pickup ? 0x8a5a10 : 0x2a4a18);
    this.setCargo(!pickup);
  }

  updateProximity() {
    const job = this.getJobTarget();
    let action = null, text = '', key = 'E';
    const near = (loc, r = 9) => this.distanceTo(loc) < r;
    if (job && near(job.loc, 9)) {
      const verb = job.stage === 'pickup' ? (job.def.loadKind === 'pressure' ? 'PUMP OUT' : 'LOAD') : 'DELIVER';
      action = { type: 'job', stage: job.stage, def: job.def };
      text = `${verb} ${job.def.cargo}`;
    } else if (near(LOCATIONS.home, 13)) {
      if (game.s.tractor.fuel < 99.5 && this.distanceTo({ x: 11.5, z: -2.5 }) < 6) {
        const cost = Math.ceil((100 - game.s.tractor.fuel) * 0.7);
        action = { type: 'refuel', cost };
        text = `REFUEL · $${cost}`;
      } else {
        action = { type: 'home' };
        text = 'HOME SUPPLIES';
      }
    } else if (this.distanceTo({ x: 11.5, z: -2.5 }) < 6 && game.s.tractor.fuel < 99.5) {
      const cost = Math.ceil((100 - game.s.tractor.fuel) * 0.7);
      action = { type: 'refuel', cost };
      text = `REFUEL · $${cost}`;
    }
    const changed = (action && action.type) !== (this.promptAction && this.promptAction.type);
    this.promptAction = action;
    if (action) {
      if (this.cb.onPrompt) this.cb.onPrompt(text, key);
    } else if (changed || this.lastPromptShown) {
      if (this.cb.onPrompt) this.cb.onPrompt(null);
    }
    this.lastPromptShown = !!action;
  }

  interact() {
    const a = this.promptAction;
    if (!a) return;
    if (a.type === 'job') {
      if (this.cb.onJob) this.cb.onJob(a.def, a.stage);
    } else if (a.type === 'home') {
      if (this.cb.onHome) this.cb.onHome();
    } else if (a.type === 'refuel') {
      const cost = a.cost;
      if (game.s.cash <= 0) { this.cb.onToast && this.cb.onToast('NO CASH. THE PUMP IS LOCKED.', 'bad'); return; }
      const spend = Math.min(cost, game.s.cash);
      const amount = spend / 0.7;
      game.s.cash -= spend;
      game.s.tractor.fuel = clamp(game.s.tractor.fuel + amount, 0, 100);
      game.save(); game.changed();
      this.sound.cash();
      this.cb.onToast && this.cb.onToast(`REFUELLED · $${spend.toFixed(0)}`, 'good');
    }
  }

  // used by UI compass
  getMarkers() {
    const out = [];
    const job = this.getJobTarget();
    if (job) out.push({ x: job.loc.x, z: job.loc.z, label: job.stage === 'pickup' ? 'PICKUP' : 'DROP', color: '#e5b44a' });
    out.push({ x: LOCATIONS.home.x, z: LOCATIONS.home.z, label: 'HOME', color: '#8db268' });
    return out;
  }
}
