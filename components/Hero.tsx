'use client'

import { motion } from 'framer-motion'
import HeroBackgroundText from './HeroBackgroundText'
import { profile } from '@/data/profile'

export default function Hero() {
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
      {/* Background Text - FUYAOYAO at bottom */}
      <HeroBackgroundText />

      {/* Main Content Area - Video centered, text on right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Center - Circular Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[224px] h-[224px] sm:w-[256px] sm:h-[256px] lg:w-[304px] lg:h-[304px] rounded-full overflow-hidden bg-gray-200 shadow-xl">
              {/* Placeholder for personal video */}
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                <svg
                  className="w-16 h-16 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">个人视频</span>
                <span className="text-xs mt-2 text-gray-300">请替换为实际视频</span>
              </div>

              {/* Uncomment below to use actual video */}
              {/*
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/personal-intro.mp4" type="video/mp4" />
                您的浏览器不支持视频标签。
              </video>
              */}
            </div>
          </motion.div>

          {/* Right side - Text Content (smaller font) */}
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

            <p className="text-sm text-gray-500 mb-6">
              {profile.subtitle}
            </p>

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
