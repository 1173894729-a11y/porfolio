'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900">工作经历</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200" />

          {profile.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-10 last:mb-0 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-gray-900 border-2 border-white shadow-sm" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0
                  ? 'md:pl-8 md:ml-[50%]'
                  : 'md:pr-8 md:text-right md:mr-[50%]'
              }`}>
                <div className="bg-gray-50 rounded-lg p-5 sm:p-6 transition-shadow duration-300 group-hover:shadow-md">
                  <p className="text-xs text-gray-400 mb-1.5">{exp.period}</p>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{exp.company}</h3>
                  <p className="text-sm text-gray-500 mb-2">{exp.position}</p>

                  {/* Responsibilities - hover expand */}
                  {exp.responsibilities.length > 0 && (
                    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-3 group-hover:pt-3 group-hover:border-t group-hover:border-gray-200 transition-all duration-500 ease-in-out">
                      <ul className={`space-y-1.5 ${
                        index % 2 === 0 ? '' : 'md:text-right'
                      }`}>
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-gray-500 leading-relaxed">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
