'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      label: '电话',
      value: profile.contact.phone,
      href: `tel:${profile.contact.phone}`,
    },
    {
      icon: Mail,
      label: '邮箱',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      icon: ExternalLink,
      label: '小红书',
      value: '溜溜溜哒的小红书主页',
      href: profile.contact.xiaohongshu,
      external: true,
    },
    {
      icon: MessageCircle,
      label: '微信',
      value: profile.contact.wechat,
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">联系我</h2>
          <p className="text-gray-400">期待与您交流合作</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Contact Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors group h-full"
                  >
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-white text-sm">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 bg-gray-800 rounded-lg border border-gray-700 h-full">
                    <item.icon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-white text-sm">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: WeChat QR Code */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-44 h-44 bg-white rounded-xl overflow-hidden border border-gray-700">
              <Image
                src={profile.contact.wechatQr}
                alt="微信二维码"
                fill
                className="object-contain p-3"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
