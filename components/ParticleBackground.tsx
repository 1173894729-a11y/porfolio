'use client'

import { useState, useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const particles: Particle[] = []
      const particleCount = 80
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        const radius = maxRadius * (0.3 + Math.random() * 0.7)
        const baseX = centerX + Math.cos(angle) * radius
        const baseY = centerY + Math.sin(angle) * radius

        particles.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: 0,
          vy: 0,
          size: 2 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.5,
        })
      }
      particlesRef.current = particles
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4

      particles.forEach((p) => {
        // 基础浮动
        p.vx += (Math.random() - 0.5) * 0.1
        p.vy += (Math.random() - 0.5) * 0.1

        // 鼠标交互 - 左右滑动效果
        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 150

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist
            // 主要响应水平移动
            p.vx += dx * force * 0.02
            p.vy += dy * force * 0.01
          }
        }

        // 边界限制 - 确保粒子不会超出范围
        const dxFromCenter = p.x - centerX
        const dyFromCenter = p.y - centerY
        const distFromCenter = Math.sqrt(dxFromCenter * dxFromCenter + dyFromCenter * dyFromCenter)

        if (distFromCenter > maxRadius) {
          const angle = Math.atan2(dyFromCenter, dxFromCenter)
          p.x = centerX + Math.cos(angle) * maxRadius
          p.y = centerY + Math.sin(angle) * maxRadius
          p.vx *= -0.5
          p.vy *= -0.5
        }

        // 回归原位的趋势
        p.vx += (p.baseX - p.x) * 0.001
        p.vy += (p.baseY - p.y) * 0.001

        // 应用速度
        p.x += p.vx
        p.y += p.vy

        // 速度衰减
        p.vx *= 0.98
        p.vy *= 0.98

        // 绘制粒子
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 100, 100, ${p.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  )
}