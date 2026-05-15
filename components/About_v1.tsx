'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '@/data/profile'

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-between h-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Avatar */}
            <div className="relative w-52 h-52 rounded-full overflow-hidden bg-gray-100">
              {profile.about.avatar ? (
                <Image
                  src={profile.about.avatar}
                  alt="Avatar"
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  头像
                </div>
              )}
            </div>

            {/* Personal Info */}
            <div className="space-y-4 text-sm text-gray-700">
              <p>{profile.about.birthInfo}</p>
              <p>{profile.about.education}</p>
              {profile.about.certifications.map((cert) => (
                <p key={cert}>{cert}</p>
              ))}
            </div>

            {/* Contact Button */}
            <button
              onClick={scrollToContact}
              className="px-10 py-2.5 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
            >
              联系我
            </button>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-9 flex flex-col gap-10">
            {/* Top Row: two cards side by side */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Core Capabilities */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  核心能力矩阵
                </h3>
                <div className="flex flex-wrap gap-3">
                  {profile.about.coreCapabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded text-xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Skills */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  软件技能
                </h3>
                <div className="grid grid-cols-3 gap-5">
                  {profile.about.softwareSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative w-10 h-10 mb-1.5">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-600 leading-tight">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-gray-500 leading-tight">
                        {skill.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom Row: capability texts */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {profile.about.capabilityTexts.map((item) => (
                  <p
                    key={item.title}
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    <span className="font-semibold text-gray-900">
                      {item.title}：
                    </span>
                    {item.content}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
