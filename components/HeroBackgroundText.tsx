'use client'

import { useRef, useEffect } from 'react'
import { profile } from '@/data/profile'

interface Particle {
  baseX: number
  baseY: number
  x: number
  y: number
  size: number
  alpha: number
  phase: number
  jitterPhase: number
}

export default function HeroBackgroundText() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])
  const timeRef = useRef(0)
  const rafRef = useRef<number>(0)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const cvs = canvas
    const ctx = cvs.getContext('2d')
    if (!ctx) return

    const STEP = 3 // pixel sampling step — smaller = denser grid
    const BASE_PARTICLE_SIZE = 1.2
    const JITTER_AMOUNT = 0.6
    const MOUSE_RADIUS = 180
    const WAVE_AMPLITUDE = 12
    const WAVE_SPEED = 0.003

    function resize() {
      if (!ctx) return
      const parent = cvs.parentElement
      if (!parent) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      const rect = parent.getBoundingClientRect()
      cvs.width = rect.width * dpr
      cvs.height = rect.height * dpr
      cvs.style.width = rect.width + 'px'
      cvs.style.height = rect.height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      rasterizeText(rect.width, rect.height)
    }

    function rasterizeText(containerWidth: number, containerHeight: number) {
      if (!ctx) return

      const fontSize = containerWidth / 6.5
      const text = profile.nameEn

      // Offscreen canvas to rasterize text
      const offscreen = document.createElement('canvas')
      const octx = offscreen.getContext('2d')
      if (!octx) return

      offscreen.width = containerWidth
      offscreen.height = containerHeight

      octx.fillStyle = '#000'
      octx.font = `900 ${fontSize}px "Helvetica Neue", Helvetica, Arial, sans-serif`
      octx.textBaseline = 'alphabetic'

      const metrics = octx.measureText(text)
      const textWidth = metrics.width
      const textX = (containerWidth - textWidth) / 2
      // Position text so its baseline sits near the bottom of container
      const textY = containerHeight - fontSize * 0.08

      octx.fillText(text, textX, textY)

      const imageData = octx.getImageData(0, 0, containerWidth, containerHeight)
      const data = imageData.data
      const particles: Particle[] = []

      for (let y = 0; y < containerHeight; y += STEP) {
        for (let x = 0; x < containerWidth; x += STEP) {
          const idx = (y * containerWidth + x) * 4
          if (data[idx + 3] > 128) {
            particles.push({
              baseX: x,
              baseY: y,
              x,
              y,
              size: BASE_PARTICLE_SIZE,
              alpha: 1,
              phase: Math.random() * Math.PI * 2,
              jitterPhase: Math.random() * Math.PI * 2,
            })
          }
        }
      }

      particlesRef.current = particles
    }

    function animate() {
      if (!canvas || !ctx) return
      const rect = cvs.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouse = mouseRef.current
      const time = timeRef.current

      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const dx = mouse.x - p.baseX
        const dy = mouse.y - p.baseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        const factor = Math.max(0, 1 - dist / MOUSE_RADIUS)
        const easedFactor = factor * factor * (3 - 2 * factor) // smoothstep

        // Wave distortion
        const waveX = Math.sin(time * WAVE_SPEED + p.phase) * WAVE_AMPLITUDE * easedFactor
        const waveY = Math.cos(time * WAVE_SPEED + p.phase * 1.3) * WAVE_AMPLITUDE * easedFactor

        // Continuous jitter / grain
        const jitterX = Math.sin(time * WAVE_SPEED * 2.5 + p.jitterPhase) * JITTER_AMOUNT
        const jitterY = Math.cos(time * WAVE_SPEED * 2.1 + p.jitterPhase * 0.7) * JITTER_AMOUNT

        // Apply extra chaotic jitter when mouse is near
        const chaos = easedFactor * JITTER_AMOUNT * 1.5
        const chaosX = (Math.random() - 0.5) * chaos
        const chaosY = (Math.random() - 0.5) * chaos

        p.x = p.baseX + waveX + jitterX + chaosX
        p.y = p.baseY + waveY + jitterY + chaosY

        // Size: larger near mouse
        p.size = BASE_PARTICLE_SIZE * (1 + easedFactor * 1.8)

        // Alpha: half opacity static, near mouse deepens
        p.alpha = 0.42 + easedFactor * 0.35

        // Color: lighter gray static, near mouse slightly darker
        const brightness = 190 - easedFactor * 25 // 190 -> 165
        const color = `rgba(${brightness}, ${brightness}, ${brightness + 8}, ${p.alpha})`

        ctx.fillStyle = color
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
      }

      timeRef.current += 1
      rafRef.current = requestAnimationFrame(animate)
    }

    function onMouseMove(e: MouseEvent) {
      const rect = cvs.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function onMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('resize', resize)
    cvs.addEventListener('mousemove', onMouseMove)
    cvs.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      cvs.removeEventListener('mousemove', onMouseMove)
      cvs.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div
      className="absolute bottom-0 left-0 right-0 select-none"
      style={{ zIndex: 0, height: 'calc(100vw / 6.5 + 20px)' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
