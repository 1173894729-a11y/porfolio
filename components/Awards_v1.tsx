'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '@/data/profile'

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
          {profile.awards.map((award, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Award Image */}
              <div className="relative aspect-[3/4] max-w-[240px] mx-auto">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Award Title */}
              <p className="mt-3 text-sm text-gray-900 text-center font-medium leading-snug">
                {award.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
