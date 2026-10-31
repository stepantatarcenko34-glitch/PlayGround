export class Input {
  constructor(stage) {
    this.stage = stage
    this.keys = new Set()
    this.just = new Set()
    this.look = { x: 0, y: 0 }
    this.locked = false
    this.dragging = false
    this.touchMove = { x: 0, y: 0 }
    this.enabled = true
    this.onAction = null
    this.onTool = null
    this.onEscape = null
    this.onManual = null
    this.onVehicle = null
    this.onMap = null
    this.coarse = matchMedia('(pointer: coarse)').matches
    this.bind()
  }

  bind() {
    window.addEventListener('keydown', e => {
      if (e.repeat) return
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault()
      this.keys.add(e.code)
      this.just.add(e.code)
      if (e.code === 'KeyE' || e.code === 'Enter') this.onAction?.()
      if (e.code === 'Tab') this.onManual?.()
      if (e.code === 'Escape') this.onEscape?.()
      if (e.code === 'KeyF') this.onVehicle?.()
      if (e.code === 'KeyM') this.onMap?.()
      if (/^Digit[1-5]$/.test(e.code)) this.onTool?.(Number(e.code.slice(5)) - 1)
    })
    window.addEventListener('keyup', e => this.keys.delete(e.code))
    window.addEventListener('blur', () => this.keys.clear())

    const canvas = this.stage.querySelector('canvas') || this.stage
    this.canvas = canvas
    canvas.addEventListener('mousedown', e => {
      if (!this.enabled) return
      if (e.button === 0) {
        if (!this.coarse && !this.locked && document.pointerLockElement !== canvas) {
          canvas.requestPointerLock?.()
        }
        this.dragging = true
      }
    })
    window.addEventListener('mouseup', () => { this.dragging = false })
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas
    })
    window.addEventListener('mousemove', e => {
      if (!this.enabled) return
      if (this.locked || this.dragging) {
        this.look.x += e.movementX ?? 0
        this.look.y += e.movementY ?? 0
      }
    })

    // touch look (anywhere not on controls)
    let lookId = null, lx = 0, ly = 0
    canvas.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'touch' || !this.enabled) return
      lookId = e.pointerId; lx = e.clientX; ly = e.clientY
    })
    canvas.addEventListener('pointermove', e => {
      if (e.pointerId !== lookId) return
      this.look.x += (e.clientX - lx) * 1.5
      this.look.y += (e.clientY - ly) * 1.5
      lx = e.clientX; ly = e.clientY
    })
    const endLook = e => { if (e.pointerId === lookId) lookId = null }
    canvas.addEventListener('pointerup', endLook)
    canvas.addEventListener('pointercancel', endLook)
  }

  requestLock() {
    if (this.coarse) return
    this.canvas?.requestPointerLock?.()
  }

  releaseLock() {
    if (document.pointerLockElement) document.exitPointerLock?.()
  }

  axis() {
    let x = 0, y = 0
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y -= 1
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y += 1
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1
    x += this.touchMove.x
    y += this.touchMove.y
    const len = Math.hypot(x, y)
    if (len > 1) { x /= len; y /= len }
    return { x, y }
  }

  sprint() { return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') }
  consumeLook() {
    const o = { x: this.look.x, y: this.look.y }
    this.look.x = 0; this.look.y = 0
    return o
  }
  pressed(code) { return this.just.has(code) }
  endFrame() { this.just.clear() }

  bindJoystick(el, stick) {
    let id = null, cx = 0, cy = 0
    const radius = 44
    const move = e => {
      if (e.pointerId !== id) return
      let dx = e.clientX - cx, dy = e.clientY - cy
      const d = Math.hypot(dx, dy)
      if (d > radius) { dx = dx / d * radius; dy = dy / d * radius }
      stick.style.transform = `translate(${dx}px,${dy}px)`
      this.touchMove.x = dx / radius
      this.touchMove.y = dy / radius
    }
    el.addEventListener('pointerdown', e => {
      id = e.pointerId
      const r = el.getBoundingClientRect()
      cx = r.left + r.width / 2; cy = r.top + r.height / 2
      el.setPointerCapture(e.pointerId)
      move(e)
    })
    el.addEventListener('pointermove', move)
    const end = e => {
      if (e.pointerId !== id) return
      id = null; this.touchMove.x = 0; this.touchMove.y = 0
      stick.style.transform = 'translate(0,0)'
    }
    el.addEventListener('pointerup', end)
    el.addEventListener('pointercancel', end)
  }
}
