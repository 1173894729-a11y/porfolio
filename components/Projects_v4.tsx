'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { profile, Project, ProjectCategory } from '@/data/profile'
import ProjectSidebar from './ProjectSidebar'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('architecture')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedVideoId, setExpandedVideoId] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const filteredProjects = profile.projects.items.filter(
    (project) => project.category === activeCategory
  )

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeCategory])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900">项目作品</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar - Left */}
          <ProjectSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Project List - Right */}
          <motion.div
            ref={listRef}
            className="flex-1 flex flex-col max-h-[calc(100vh-16rem)] overflow-y-auto pr-2 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`group ${project.images?.[0]?.endsWith('.mp4') ? 'cursor-pointer' : 'cursor-pointer'}`}
                  onClick={project.images?.[0]?.endsWith('.mp4') ? () => setExpandedVideoId(project.id) : () => setSelectedProject(project)}
                >
                  {/* List Item: Left info + Right thumbnail */}
                  <div className="flex flex-col sm:flex-row items-start justify-center gap-2 sm:gap-4 py-5 border-b border-gray-100 last:border-b-0">

                    {/* Left - Project Info */}
                    <div className="flex flex-col justify-start w-[140px] sm:w-[160px] flex-shrink-0 pt-0">
                      {/* Icon placeholder - small black square */}
                      <div className="w-2 h-2 mb-1.5 bg-gray-900" />

                      {/* Project Name */}
                      <h3 className="text-sm font-normal text-gray-900 mb-0 group-hover:text-black transition-colors leading-tight">
                        {project.title}
                      </h3>

                      {/* Location / Type */}
                      <p className="text-xs text-gray-400 mt-0.5">
                        {project.category === 'scientific' || project.type === '视频' ? project.type : project.location}
                      </p>
                    </div>

                    {/* Right - Thumbnail */}
                    <div className="relative w-full sm:w-[320px] lg:w-[380px] aspect-[16/10] overflow-hidden bg-gray-100 flex-shrink-0">
                      {project.images && project.images.length > 0 ? (
                        project.images[0].endsWith('.mp4') ? (
                          <motion.div
                            layoutId={`video-${project.id}`}
                            className="w-full h-full"
                            style={{ opacity: expandedVideoId === project.id ? 0 : 1 }}
                          >
                            <video
                              src={project.images[0]}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          </motion.div>
                        ) : (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg
                            className="w-10 h-10"
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

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <div className="py-12 text-center text-gray-400 text-sm">
                该分类下暂无项目
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Video Expand Overlay */}
      <AnimatePresence>
        {expandedVideoId !== null && (
          <motion.div
            key="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setExpandedVideoId(null)}
          >
            {profile.projects.items
              .filter((p) => p.id === expandedVideoId)
              .map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`video-${project.id}`}
                  className="w-[800px] lg:w-[950px] bg-black flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    src={project.images[0]}
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
