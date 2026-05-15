'use client'

import { motion } from 'framer-motion'
import { profile, ProjectCategory } from '@/data/profile'

interface ProjectSidebarProps {
  activeCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
}

export default function ProjectSidebar({
  activeCategory,
  onCategoryChange,
}: ProjectSidebarProps) {
  return (
    <div className="w-full lg:w-[22%] lg:min-w-[180px] lg:max-w-[240px] lg:sticky lg:top-20 lg:self-start">
      <nav className="flex lg:flex-col gap-6 lg:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
        {profile.projects.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id as ProjectCategory)}
            className="group flex items-center gap-3 whitespace-nowrap"
          >
            {/* Active indicator dot */}
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-black scale-100'
                  : 'bg-transparent scale-0'
              }`}
            />

            {/* Category name */}
            <span
              className={`text-sm font-normal tracking-wide transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'text-black'
                  : 'text-gray-500 group-hover:text-black'
              }`}
            >
              {category.name}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
