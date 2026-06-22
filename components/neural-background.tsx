'use client'

import { useEffect, useRef } from 'react'

/**
 * NeuralBackground
 * A fixed, full-page neural-network ("constellation") animation rendered on a
 * single <canvas>. Nodes drift slowly, link to nearby nodes with glowing edges,
 * and the pointer becomes a live node that forms bright connections around it.
 *
 * Engineered for smoothness:
 *  - device-pixel-ratio aware, capped at 2 to avoid overdraw on retina
 *  - particle count scales with viewport area (capped) for stable frame times
 *  - cached radial-gradient sprite for node glow (no per-frame gradient alloc)
 *  - additive ("lighter") blending only while drawing edges
 *  - pauses when the tab is hidden; respects prefers-reduced-motion
 */
export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const GOLD = '227, 186, 96'
    const GOLD_BRIGHT = '244, 213, 140'

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let linkDist = 150
    const pointer = { x: -9999, y: -9999, active: false }

    type Node = {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      pulse: number
    }
    let nodes: Node[] = []

    // Pre-render a soft glow sprite once; we stamp it for every node.
    const glow = document.createElement('canvas')
    const glowCtx = glow.getContext('2d')!
    const GS = 64
    glow.width = GS
    glow.height = GS
    const g = glowCtx.createRadialGradient(GS / 2, GS / 2, 0, GS / 2, GS / 2, GS / 2)
    g.addColorStop(0, `rgba(${GOLD_BRIGHT}, 0.9)`)
    g.addColorStop(0.25, `rgba(${GOLD}, 0.45)`)
    g.addColorStop(1, `rgba(${GOLD}, 0)`)
    glowCtx.fillStyle = g
    glowCtx.fillRect(0, 0, GS, GS)

    function build() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = Math.floor(width * dpr)
      canvas!.height = Math.floor(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      // scale link distance + density with screen size
      linkDist = Math.max(120, Math.min(170, width / 9))
      const area = width * height
      const target = Math.min(150, Math.max(46, Math.round(area / 15000)))
      nodes = new Array(target).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.9,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    let raf = 0
    let last = performance.now()

    function frame(now: number) {
      const dt = Math.min(2.2, (now - last) / 16.67)
      last = now
      ctx!.clearRect(0, 0, width, height)

      const n = nodes.length
      // move
      for (let i = 0; i < n; i++) {
        const p = nodes[i]
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.pulse += 0.02 * dt

        // gentle pointer attraction for an organic "reaching" feel
        if (pointer.active) {
          const dx = pointer.x - p.x
          const dy = pointer.y - p.y
          const d2 = dx * dx + dy * dy
          const range = linkDist * 1.8
          if (d2 < range * range && d2 > 1) {
            const f = (1 - Math.sqrt(d2) / range) * 0.04
            p.vx += (dx / Math.sqrt(d2)) * f
            p.vy += (dy / Math.sqrt(d2)) * f
          }
        }
        // damping + soft speed clamp
        p.vx *= 0.992
        p.vy *= 0.992
        const sp = Math.hypot(p.vx, p.vy)
        if (sp > 0.6) {
          p.vx = (p.vx / sp) * 0.6
          p.vy = (p.vy / sp) * 0.6
        }
        if (sp < 0.05) {
          p.vx += (Math.random() - 0.5) * 0.05
          p.vy += (Math.random() - 0.5) * 0.05
        }

        // wrap-around edges
        if (p.x < -20) p.x = width + 20
        else if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        else if (p.y > height + 20) p.y = -20
      }

      // edges (additive glow)
      ctx!.globalCompositeOperation = 'lighter'
      ctx!.lineWidth = 1
      const ld2 = linkDist * linkDist
      for (let i = 0; i < n; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < n; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < ld2) {
            const alpha = (1 - d2 / ld2) * 0.5
            ctx!.strokeStyle = `rgba(${GOLD}, ${alpha})`
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // pointer links (brighter)
      if (pointer.active) {
        const pr2 = (linkDist * 1.5) * (linkDist * 1.5)
        for (let i = 0; i < n; i++) {
          const a = nodes[i]
          const dx = a.x - pointer.x
          const dy = a.y - pointer.y
          const d2 = dx * dx + dy * dy
          if (d2 < pr2) {
            const alpha = (1 - d2 / pr2) * 0.85
            ctx!.strokeStyle = `rgba(${GOLD_BRIGHT}, ${alpha})`
            ctx!.lineWidth = 1.2
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(pointer.x, pointer.y)
            ctx!.stroke()
          }
        }
      }

      // nodes (glow sprite + core)
      for (let i = 0; i < n; i++) {
        const p = nodes[i]
        const tw = 0.6 + Math.sin(p.pulse) * 0.4
        const size = (p.r + 2.4) * 6
        ctx!.globalAlpha = 0.5 * tw
        ctx!.drawImage(glow, p.x - size / 2, p.y - size / 2, size, size)
      }
      ctx!.globalAlpha = 1
      ctx!.globalCompositeOperation = 'source-over'
      for (let i = 0; i < n; i++) {
        const p = nodes[i]
        ctx!.fillStyle = `rgba(${GOLD_BRIGHT}, 0.95)`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      // pointer node
      if (pointer.active) {
        const size = 26
        ctx!.globalCompositeOperation = 'lighter'
        ctx!.globalAlpha = 0.9
        ctx!.drawImage(glow, pointer.x - size / 2, pointer.y - size / 2, size, size)
        ctx!.globalAlpha = 1
        ctx!.globalCompositeOperation = 'source-over'
      }

      raf = requestAnimationFrame(frame)
    }

    function start() {
      if (raf) return
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    function stop() {
      cancelAnimationFrame(raf)
      raf = 0
    }

    // pointer tracking (canvas is fixed and full-viewport)
    function onMove(e: PointerEvent) {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    function onLeave() {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }
    function onVisibility() {
      if (document.hidden) stop()
      else start()
    }

    let resizeTimer = 0
    function onResize() {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(build, 150)
    }

    build()
    if (prefersReduced) {
      // draw a single static frame, no animation loop
      frame(performance.now())
      stop()
    } else {
      start()
      window.addEventListener('pointermove', onMove, { passive: true })
      window.addEventListener('pointerdown', onMove, { passive: true })
      window.addEventListener('pointerleave', onLeave)
      document.addEventListener('visibilitychange', onVisibility)
    }
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-background"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* readability vignettes layered over the animation */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(5,8,15,0) 40%, rgba(5,8,15,0.55) 100%)',
        }}
      />
    </div>
  )
}
