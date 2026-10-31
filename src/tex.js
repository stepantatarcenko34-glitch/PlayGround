import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 *  Procedural textures. No external art: everything is painted on a
 *  canvas so the game ships as a few kilobytes of source.
 * ------------------------------------------------------------------ */

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function canvas(size = 512) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  return [c, c.getContext('2d')]
}

function toTexture(c, repeat = 1, srgb = true) {
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeat, repeat)
  if (srgb) t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 4
  return t
}

function grain(ctx, size, amount, rand) {
  const img = ctx.getImageData(0, 0, size, size)
  const d = img.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - 0.5) * amount
    d[i] += n; d[i + 1] += n; d[i + 2] += n
  }
  ctx.putImageData(img, 0, 0)
}

export function concreteTexture(seed = 7) {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  ctx.fillStyle = '#6b675f'
  ctx.fillRect(0, 0, size, size)
  for (let i = 0; i < 2600; i++) {
    const r = rand() * 2.2
    ctx.fillStyle = `rgba(${30 + rand() * 120},${28 + rand() * 110},${24 + rand() * 100},${0.08 + rand() * 0.2})`
    ctx.beginPath(); ctx.arc(rand() * size, rand() * size, r, 0, 7); ctx.fill()
  }
  // stains
  for (let i = 0; i < 16; i++) {
    const x = rand() * size, y = rand() * size, r = 14 + rand() * 72
    const g = ctx.createRadialGradient(x, y, 2, x, y, r)
    g.addColorStop(0, `rgba(20,17,13,${0.12 + rand() * 0.22})`)
    g.addColorStop(1, 'rgba(20,17,13,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill()
  }
  // cracks
  ctx.strokeStyle = 'rgba(25,22,18,0.55)'
  for (let i = 0; i < 12; i++) {
    ctx.lineWidth = 0.6 + rand() * 1.3
    let x = rand() * size, y = rand() * size
    ctx.beginPath(); ctx.moveTo(x, y)
    for (let s = 0; s < 8; s++) { x += (rand() - 0.5) * 34; y += (rand() - 0.5) * 34; ctx.lineTo(x, y) }
    ctx.stroke()
  }
  // expansion cuts
  ctx.strokeStyle = 'rgba(20,18,15,0.45)'
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.moveTo(0, 256); ctx.lineTo(size, 258); ctx.stroke()
  grain(ctx, size, 26, rand)
  return toTexture(c, 4)
}

export function corrugatedTexture(seed = 3, base = '#5a5b55') {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  const grad = ctx.createLinearGradient(0, 0, size, 0)
  for (let i = 0; i <= 64; i++) {
    const t = i / 64
    const v = 0.5 + 0.5 * Math.sin(t * Math.PI * 16)
    grad.addColorStop(t, `rgba(${20 + v * 40},${22 + v * 40},${20 + v * 36},1)`)
  }
  ctx.fillStyle = base; ctx.fillRect(0, 0, size, size)
  ctx.fillStyle = grad; ctx.globalAlpha = 0.55; ctx.fillRect(0, 0, size, size); ctx.globalAlpha = 1
  // rust streaks running down
  for (let i = 0; i < 90; i++) {
    const x = rand() * size, y = rand() * size * 0.7, w = 1 + rand() * 8, h = 12 + rand() * 150
    const g = ctx.createLinearGradient(x, y, x, y + h)
    g.addColorStop(0, `rgba(${90 + rand() * 50},${40 + rand() * 25},${20 + rand() * 15},${0.16 + rand() * 0.3})`)
    g.addColorStop(1, 'rgba(60,30,15,0)')
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h)
  }
  for (let i = 0; i < 400; i++) {
    ctx.fillStyle = `rgba(${120 + rand() * 80},${55 + rand() * 40},${25 + rand() * 20},${0.05 + rand() * 0.25})`
    ctx.fillRect(rand() * size, rand() * size, 1 + rand() * 5, 1 + rand() * 3)
  }
  grain(ctx, size, 20, rand)
  return toTexture(c, 2)
}

export function rustTexture(seed = 11) {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  ctx.fillStyle = '#4a423a'; ctx.fillRect(0, 0, size, size)
  for (let i = 0; i < 1400; i++) {
    const x = rand() * size, y = rand() * size, r = 1 + rand() * 22
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    const hot = rand() > 0.5
    g.addColorStop(0, hot ? `rgba(${140 + rand() * 70},${60 + rand() * 40},${25 + rand() * 20},0.55)` : `rgba(${45 + rand() * 30},${42 + rand() * 25},${36 + rand() * 20},0.6)`)
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill()
  }
  grain(ctx, size, 30, rand)
  return toTexture(c, 2)
}

export function paintedMetalTexture(color = '#4f6b66', seed = 21) {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  ctx.fillStyle = color; ctx.fillRect(0, 0, size, size)
  // fade / sun bleaching
  for (let i = 0; i < 60; i++) {
    const x = rand() * size, y = rand() * size, r = 20 + rand() * 90
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, `rgba(210,200,180,${0.02 + rand() * 0.06})`)
    g.addColorStop(1, 'rgba(210,200,180,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill()
  }
  // scratches
  for (let i = 0; i < 90; i++) {
    ctx.strokeStyle = rand() > 0.5 ? 'rgba(220,215,200,0.16)' : 'rgba(40,38,34,0.2)'
    ctx.lineWidth = 0.5 + rand()
    ctx.beginPath()
    const x = rand() * size, y = rand() * size
    ctx.moveTo(x, y); ctx.lineTo(x + (rand() - 0.5) * 100, y + (rand() - 0.5) * 30); ctx.stroke()
  }
  // rust blooms, especially low
  for (let i = 0; i < 110; i++) {
    const x = rand() * size, y = rand() * size, r = 1 + rand() * 18
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    const a = 0.08 + rand() * 0.35
    g.addColorStop(0, `rgba(${110 + rand() * 55},${50 + rand() * 30},${18 + rand() * 15},${a})`)
    g.addColorStop(1, 'rgba(90,40,15,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill()
  }
  grain(ctx, size, 14, rand)
  return toTexture(c, 2)
}

export function woodTexture(seed = 5, base = '#67513a') {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  ctx.fillStyle = base; ctx.fillRect(0, 0, size, size)
  for (let i = 0; i < 70; i++) {
    const y = rand() * size
    ctx.strokeStyle = `rgba(${30 + rand() * 60},${20 + rand() * 40},${12 + rand() * 25},${0.1 + rand() * 0.3})`
    ctx.lineWidth = 0.5 + rand() * 3
    ctx.beginPath(); ctx.moveTo(0, y)
    for (let x = 0; x <= size; x += 40) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * 4 + (rand() - 0.5) * 3)
    ctx.stroke()
  }
  for (let i = 0; i < 6; i++) {
    const x = rand() * size, y = rand() * size, r = 6 + rand() * 16
    ctx.strokeStyle = 'rgba(40,26,15,0.5)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.45, 0, 0, 7); ctx.stroke()
  }
  // knots & nails
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = 'rgba(30,28,25,0.35)'
    ctx.beginPath(); ctx.arc(rand() * size, rand() * size, 1 + rand() * 2, 0, 7); ctx.fill()
  }
  grain(ctx, size, 18, rand)
  return toTexture(c, 3)
}

export function grassTexture(seed = 9) {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  ctx.fillStyle = '#56583a'; ctx.fillRect(0, 0, size, size)
  for (let i = 0; i < 9000; i++) {
    const v = rand()
    ctx.strokeStyle = v > 0.7 ? `rgba(${120 + rand() * 50},${105 + rand() * 40},${50 + rand() * 30},0.35)`
      : `rgba(${50 + rand() * 40},${55 + rand() * 35},${25 + rand() * 25},0.45)`
    ctx.lineWidth = 0.7
    const x = rand() * size, y = rand() * size
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (rand() - 0.5) * 4, y - 3 - rand() * 5); ctx.stroke()
  }
  grain(ctx, size, 18, rand)
  return toTexture(c, 40)
}

export function dirtTexture(seed = 13) {
  const size = 512
  const [c, ctx] = canvas(size)
  const rand = rng(seed)
  ctx.fillStyle = '#6a5a44'; ctx.fillRect(0, 0, size, size)
  for (let i = 0; i < 5000; i++) {
    ctx.fillStyle = `rgba(${50 + rand() * 90},${40 + rand() * 70},${25 + rand() * 45},${0.1 + rand() * 0.3})`
    const r = rand() * 2.5
    ctx.beginPath(); ctx.arc(rand() * size, rand() * size, r, 0, 7); ctx.fill()
  }
  // tire ruts
  for (const x of [150, 362]) {
    const g = ctx.createLinearGradient(x - 30, 0, x + 30, 0)
    g.addColorStop(0, 'rgba(40,30,20,0)'); g.addColorStop(0.5, 'rgba(40,30,20,0.35)'); g.addColorStop(1, 'rgba(40,30,20,0)')
    ctx.fillStyle = g; ctx.fillRect(x - 30, 0, 60, size)
  }
  grain(ctx, size, 24, rand)
  const t = toTexture(c, 1)
  t.repeat.set(1, 6)
  return t
}

export function skyTexture() {
  const w = 1024, h = 512
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')
  const g = ctx.createLinearGradient(0, 0, 0, h)
  g.addColorStop(0, '#3b4d63')
  g.addColorStop(0.32, '#7d7a72')
  g.addColorStop(0.52, '#c98e5b')
  g.addColorStop(0.62, '#e3b075')
  g.addColorStop(0.76, '#8a7a62')
  g.addColorStop(1, '#3c3b34')
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
  // soft clouds
  const rand = rng(31)
  for (let i = 0; i < 70; i++) {
    const x = rand() * w, y = 30 + rand() * 190, rx = 40 + rand() * 150, ry = 5 + rand() * 22
    const cg = ctx.createRadialGradient(x, y, 0, x, y, rx)
    cg.addColorStop(0, `rgba(238,214,185,${0.03 + rand() * 0.08})`)
    cg.addColorStop(1, 'rgba(238,214,185,0)')
    ctx.save(); ctx.translate(x, y); ctx.scale(1, ry / rx); ctx.fillStyle = cg
    ctx.beginPath(); ctx.arc(0, 0, rx, 0, 7); ctx.fill(); ctx.restore()
  }
  // sun glow
  const sg = ctx.createRadialGradient(760, 300, 0, 760, 300, 180)
  sg.addColorStop(0, 'rgba(255,220,160,0.85)')
  sg.addColorStop(0.2, 'rgba(255,200,130,0.35)')
  sg.addColorStop(1, 'rgba(255,200,130,0)')
  ctx.fillStyle = sg; ctx.fillRect(0, 0, w, h)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function labelTexture(lines, bg = '#d9cfb8', fg = '#2a241c') {
  const [c, ctx] = canvas(256)
  ctx.fillStyle = bg; ctx.fillRect(0, 0, 256, 256)
  const rand = rng(lines.join('').length + 3)
  // paper grain
  for (let i = 0; i < 1200; i++) {
    ctx.fillStyle = `rgba(80,65,45,${rand() * 0.08})`
    ctx.fillRect(rand() * 256, rand() * 256, 2, 2)
  }
  ctx.strokeStyle = 'rgba(60,45,30,0.35)'; ctx.lineWidth = 3
  ctx.strokeRect(8, 8, 240, 240)
  ctx.fillStyle = fg
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  const arr = Array.isArray(lines) ? lines : [lines]
  arr.forEach((line, i) => {
    ctx.font = `bold ${Math.min(44, 230 / Math.max(6, line.length))}px 'Special Elite', monospace`
    ctx.fillText(line, 128, 128 + (i - (arr.length - 1) / 2) * 46)
  })
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function signTexture(main, sub = '') {
  const w = 512, h = 256
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#d8cdb4'; ctx.fillRect(0, 0, w, h)
  ctx.strokeStyle = '#2c2b26'; ctx.lineWidth = 10; ctx.strokeRect(10, 10, w - 20, h - 20)
  ctx.fillStyle = '#22211d'; ctx.textAlign = 'center'
  ctx.font = "bold 84px 'Barlow Condensed', sans-serif"; ctx.fillText(main, w / 2, sub ? 112 : 150)
  if (sub) { ctx.font = "500 30px 'IBM Plex Mono', monospace"; ctx.fillText(sub, w / 2, 174) }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function posterTexture() {
  const w = 256, h = 340
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#b9ab8d'; ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = '#3a3a34'; ctx.fillRect(16, 16, w - 32, h - 32)
  ctx.fillStyle = '#d7c9a9'; ctx.font = "bold 30px 'Barlow Condensed'"; ctx.textAlign = 'center'
  ctx.fillText('KEEP', w / 2, 68); ctx.fillText('AMERICA', w / 2, 100); ctx.fillText('RUNNING', w / 2, 132)
  ctx.strokeStyle = '#c2542a'; ctx.lineWidth = 6
  ctx.beginPath(); ctx.arc(w / 2, 215, 52, 0, 7); ctx.stroke()
  ctx.fillStyle = '#c2542a'; ctx.font = "bold 46px 'Barlow Condensed'"; ctx.fillText('V8', w / 2, 232)
  ctx.fillStyle = '#9a8b70'; ctx.font = "500 13px 'IBM Plex Mono'"; ctx.fillText('HOLLOW CREEK GARAGE', w / 2, 300)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}
