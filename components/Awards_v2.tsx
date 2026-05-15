'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '@/data/profile'

function splitAwardTitle(title: string) {
  if (title.includes('—')) {
    const [name, award] = title.split('—')
    return { name: name.trim(), award: '— ' + award.trim() }
  }
  const lastSpaceIndex = title.lastIndexOf(' ')
  if (lastSpaceIndex > 0) {
    return {
      name: title.slice(0, lastSpaceIndex).trim(),
      award: title.slice(lastSpaceIndex + 1).trim(),
    }
  }
  return { name: title, award: '' }
}

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900">个人荣誉</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.awards.map((award, index) => {
            const { name, award: awardName } = splitAwardTitle(award.title)
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Award Image */}
                <div className="max-w-[240px] mx-auto border border-gray-200 rounded-sm overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={240}
                    height={320}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Award Title */}
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-900 font-medium leading-snug">
                    {name}
                  </p>
                  {awardName && (
                    <p className="text-sm text-gray-900 font-medium leading-snug mt-0.5">
                      {awardName}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
