import * as THREE from 'three';

function canvas(size = 512) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

function finish(c, repeat = 1) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 8;
  return t;
}

export function concreteTexture(size = 512) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#756f62'; x.fillRect(0, 0, size, size);
  // mottling
  for (let i = 0; i < 2600; i++) {
    const r = Math.random() * 2.4;
    const g = 95 + Math.random() * 60;
    x.fillStyle = `rgba(${g},${g - 4},${g - 10},${Math.random() * 0.16})`;
    x.beginPath(); x.arc(Math.random() * size, Math.random() * size, r, 0, 7); x.fill();
  }
  // dark stains
  for (let i = 0; i < 16; i++) {
    const cx = Math.random() * size, cy = Math.random() * size, r = 20 + Math.random() * 90;
    const grd = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    grd.addColorStop(0, `rgba(30,27,22,${0.08 + Math.random() * 0.14})`);
    grd.addColorStop(1, 'rgba(22,20,16,0)');
    x.fillStyle = grd; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  // cracks
  x.strokeStyle = 'rgba(30,28,24,.35)'; x.lineWidth = 1;
  for (let i = 0; i < 7; i++) {
    let px = Math.random() * size, py = Math.random() * size;
    x.beginPath(); x.moveTo(px, py);
    for (let j = 0; j < 9; j++) { px += (Math.random() - 0.5) * 46; py += (Math.random() - 0.5) * 46; x.lineTo(px, py); }
    x.stroke();
  }
  return finish(c);
}

export function dirtTexture(size = 512) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#6b5c42'; x.fillRect(0, 0, size, size);
  for (let i = 0; i < 4200; i++) {
    const g = 50 + Math.random() * 70;
    x.fillStyle = `rgba(${g + 20},${g + 6},${g - 14},${Math.random() * 0.2})`;
    x.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 3, 1 + Math.random() * 3);
  }
  for (let i = 0; i < 26; i++) {
    const cx = Math.random() * size, cy = Math.random() * size, r = 14 + Math.random() * 55;
    const grd = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    grd.addColorStop(0, 'rgba(38,32,22,.22)');
    grd.addColorStop(1, 'rgba(38,32,22,0)');
    x.fillStyle = grd; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  return finish(c);
}

export function grassTexture(size = 512) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#5b6440'; x.fillRect(0, 0, size, size);
  for (let i = 0; i < 9000; i++) {
    const g = 60 + Math.random() * 70;
    x.strokeStyle = `rgba(${g - 8},${g + 12},${g - 26},${0.12 + Math.random() * 0.25})`;
    x.lineWidth = 1;
    const px = Math.random() * size, py = Math.random() * size;
    x.beginPath(); x.moveTo(px, py); x.lineTo(px + (Math.random() - 0.5) * 3, py - 2 - Math.random() * 4); x.stroke();
  }
  for (let i = 0; i < 20; i++) {
    const cx = Math.random() * size, cy = Math.random() * size, r = 20 + Math.random() * 80;
    const grd = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    grd.addColorStop(0, 'rgba(70,72,38,.16)');
    grd.addColorStop(1, 'rgba(70,72,38,0)');
    x.fillStyle = grd; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  return finish(c);
}

export function roadTexture(size = 256) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#4c4438'; x.fillRect(0, 0, size, size);
  for (let i = 0; i < 2600; i++) {
    const g = 45 + Math.random() * 65;
    x.fillStyle = `rgba(${g + 14},${g + 8},${g - 4},${Math.random() * 0.3})`;
    x.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 2.4, 1 + Math.random() * 2.4);
  }
  // wheel ruts
  x.fillStyle = 'rgba(28,24,18,.18)';
  x.fillRect(size * 0.2, 0, size * 0.11, size);
  x.fillRect(size * 0.68, 0, size * 0.11, size);
  return finish(c);
}

export function woodTexture(size = 512) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#6b5138'; x.fillRect(0, 0, size, size);
  for (let i = 0; i < 220; i++) {
    const y = Math.random() * size;
    x.strokeStyle = `rgba(${20 + Math.random() * 40},${14 + Math.random() * 28},${8 + Math.random() * 18},${Math.random() * 0.28})`;
    x.lineWidth = 0.6 + Math.random() * 1.8;
    x.beginPath(); x.moveTo(0, y);
    for (let px = 0; px <= size; px += 16) x.lineTo(px, y + Math.sin(px * 0.02 + i) * 2.4 + (Math.random() - 0.5) * 2);
    x.stroke();
  }
  for (let i = 0; i < 10; i++) {
    const cx = Math.random() * size, cy = Math.random() * size;
    x.strokeStyle = 'rgba(25,16,8,.4)'; x.lineWidth = 1.4;
    x.beginPath(); x.ellipse(cx, cy, 8 + Math.random() * 16, 3 + Math.random() * 6, Math.random(), 0, 7); x.stroke();
  }
  return finish(c);
}

export function metalTexture(size = 256) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#8c8c84'; x.fillRect(0, 0, size, size);
  for (let i = 0; i < 1800; i++) {
    const g = 70 + Math.random() * 90;
    x.fillStyle = `rgba(${g},${g},${g - 4},${Math.random() * 0.28})`;
    x.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 3, 1 + Math.random() * 3);
  }
  for (let i = 0; i < 60; i++) {
    x.strokeStyle = `rgba(${40 + Math.random() * 40},${40 + Math.random() * 40},${38 + Math.random() * 38},${Math.random() * 0.3})`;
    x.lineWidth = 0.6;
    const y = Math.random() * size;
    x.beginPath(); x.moveTo(0, y); x.lineTo(size, y + (Math.random() - 0.5) * 4); x.stroke();
  }
  for (let i = 0; i < 14; i++) {
    const cx = Math.random() * size, cy = Math.random() * size, r = 4 + Math.random() * 18;
    const grd = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    grd.addColorStop(0, 'rgba(30,28,24,.3)');
    grd.addColorStop(1, 'rgba(30,28,24,0)');
    x.fillStyle = grd; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  return finish(c);
}

export function hazardTexture(size = 256) {
  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#c9a227'; x.fillRect(0, 0, size, size);
  x.strokeStyle = '#171410'; x.lineWidth = 34;
  for (let i = -size; i < size * 2; i += 64) {
    x.beginPath(); x.moveTo(i, 0); x.lineTo(i + size, size); x.stroke();
  }
  return finish(c);
}

export function oilStainTexture(size = 256) {
  const c = canvas(size), x = c.getContext('2d');
  x.clearRect(0, 0, size, size);
  for (let i = 0; i < 9; i++) {
    const cx = size / 2 + (Math.random() - 0.5) * 60, cy = size / 2 + (Math.random() - 0.5) * 60;
    const r = 30 + Math.random() * 65;
    const grd = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    grd.addColorStop(0, `rgba(14,11,8,${0.25 + Math.random() * 0.25})`);
    grd.addColorStop(0.7, `rgba(14,11,8,${0.1 + Math.random() * 0.12})`);
    grd.addColorStop(1, 'rgba(14,11,8,0)');
    x.fillStyle = grd; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function pegboardTexture(size = 512) {  const c = canvas(size), x = c.getContext('2d');
  x.fillStyle = '#93805f'; x.fillRect(0, 0, size, size);
  for (let i = 0; i < 3000; i++) {
    x.fillStyle = `rgba(30,24,16,${Math.random() * 0.12})`;
    x.fillRect(Math.random() * size, Math.random() * size, 2, 2);
  }
  x.fillStyle = 'rgba(24,20,14,.55)';
  const step = 32;
  for (let y = step / 2; y < size; y += step) for (let xx = step / 2; xx < size; xx += step) {
    x.beginPath(); x.arc(xx, y, 2.6, 0, 7); x.fill();
  }
  return finish(c);
}

export function signTexture(text, sub = '', bg = '#1a1712', fg = '#e9e2d2', accent = '#d2601f') {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, 512, 256);
  x.strokeStyle = accent; x.lineWidth = 6; x.strokeRect(14, 14, 484, 228);
  x.fillStyle = fg;
  x.font = 'bold 88px "Arial Narrow", sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, 256, sub ? 112 : 132);
  if (sub) {
    x.fillStyle = accent;
    x.font = '500 26px monospace';
    x.fillText(sub, 256, 190);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function labelTexture(text, fg = '#e9e2d2', bg = '#17140f') {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const x = c.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, 256, 64);
  x.fillStyle = fg; x.font = 'bold 30px monospace'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, 128, 34);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
