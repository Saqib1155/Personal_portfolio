

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const categories = ['All', 'React', 'Tailwind CSS', 'Framer Motion']

const projects = [
  {
    id: '1',
    title: 'Cafe Landing Page - Blond',
    description: 'A modern, responsive cafe landing page with a focus on elegant design and smooth user experience.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'React',
    link: 'https://cafe-landing-page-blond.vercel.app',
  },
  {
    id: '2',
    title: 'Cafe Landing Page - Vintage',
    description: 'A specialized cafe website featuring menu layouts, contact forms, and interactive elements.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    category: 'React',
    link: 'https://cafe-landing-page-69n7.vercel.app',
  },
  {
    id: '3',
    title: 'Modern Landing Page',
    description: 'A high-performance landing page designed for maximum conversion and aesthetic appeal.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'React',
    link: 'https://landing-page-1-khaki-three.vercel.app',
  },
  {
    id: '4',
    title: 'Veinira',
    description: 'A clean, modern website focused on brand presentation and a smooth browsing experience.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'React',
    link: 'https://veinira.co.uk',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory || p.tags.includes(activeCategory))

  return (
    <section id="projects" className="py-32 px-4 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured <span className="text-primary">Work</span></h2>
            <p className="text-white/60 text-lg max-w-md">
              A collection of projects that push the boundaries of frontend engineering and design.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 glass p-2 rounded-full border-primary/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-category"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(199,112,240,0.4)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
