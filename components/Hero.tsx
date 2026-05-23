'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import HeroBackgroundText from './HeroBackgroundText'
import { profile } from '@/data/profile'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-50"
    >
      <HeroBackgroundText />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Center - Circular Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={toggleVideo}
              className="relative w-[270px] h-[270px] sm:w-[308px] sm:h-[308px] lg:w-[365px] lg:h-[365px] rounded-full overflow-hidden bg-gray-200 shadow-xl cursor-pointer group block"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/5月20日(4)-封面.jpg"
                preload="none"
                playsInline
              >
                <source src="/5月20日(4).mp4" type="video/mp4" />
              </video>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="text-white text-sm font-medium tracking-wide">
                  点击播放
                </span>
              </div>
            </button>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {profile.name}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">
              {profile.title}
            </p>

            {profile.subtitle && (
              <p className="text-sm text-gray-500 mb-6">
                {profile.subtitle}
              </p>
            )}

            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={scrollToProjects}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看作品
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="px-6 py-2.5 border-2 border-gray-900 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-900 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                联系我
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
