'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '@/data/profile'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragDirection, setDragDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const isDragging = useRef(false)

  const images = project.images || []
  const totalImages = images.length

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1))
  }, [totalImages])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0))
  }, [totalImages])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const diff = e.clientX - dragStartX.current
    setDragDirection(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging.current) return
    isDragging.current = false

    if (dragDirection < -50) {
      goToNext()
    } else if (dragDirection > 50) {
      goToPrev()
    }
    setDragDirection(0)
  }

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false
      setDragDirection(0)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 text-gray-400 hover:text-gray-900 transition-colors"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr_380px] gap-0">
          {/* Left - Project Info */}
          <div className="p-8 lg:p-12 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-gray-100">
            {/* Project Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              {project.title}
            </h2>

            {/* Info List */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">类型</p>
                <p className="text-sm text-gray-900">{project.type}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">规模</p>
                <p className="text-sm text-gray-900">{project.scale}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">设计年份</p>
                <p className="text-sm text-gray-900">{project.year}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">设计角色</p>
                <p className="text-sm text-gray-900">{project.role}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">地点</p>
                <p className="text-sm text-gray-900">{project.location}</p>
              </div>
            </div>
          </div>

          {/* Center - Image Carousel with Drag */}
          <div
            ref={containerRef}
            className="relative bg-gray-50 flex flex-col items-center justify-center p-4 lg:p-8 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Navigation Arrows */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrev()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-[50vh] lg:h-[75vh] overflow-hidden cursor-grab active:cursor-grabbing">
              <AnimatePresence initial={false} custom={dragDirection}>
                <motion.div
                  key={currentIndex}
                  custom={dragDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute inset-0"
                >
                  {images.length > 0 ? (
                    <Image
                      src={images[currentIndex]}
                      alt={`${project.title} - ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg
                        className="w-20 h-20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            {totalImages > 1 && (
              <div className="flex items-center gap-2 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gray-900 w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
                <span className="ml-3 text-xs text-gray-400">
                  {currentIndex + 1} / {totalImages}
                </span>
              </div>
            )}
          </div>

          {/* Right - Description */}
          <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">项目介绍</h3>
            <div className="space-y-4">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-sm text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
