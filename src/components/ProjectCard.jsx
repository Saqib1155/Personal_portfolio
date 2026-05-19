import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'



export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  link,
  className = '',
  id
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => setIsOpen(true)}
        className={`relative group cursor-pointer overflow-hidden rounded-2xl glass ${className}`}
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="p-6">
          <motion.h3 
            layoutId={`title-${id}`}
            className="text-xl font-bold mb-2 group-hover:text-white/80 transition-colors"
          >
            {title}
          </motion.h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${id}`}
                className="w-full max-w-4xl glass rounded-3xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
              >
                <div className="relative aspect-video">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsOpen(false)
                    }}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <motion.h2 
                        layoutId={`title-${id}`}
                        className="text-3xl md:text-4xl font-bold mb-4"
                      >
                        {title}
                      </motion.h2>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {github && (
                        <a href={github} target="_blank" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                          <Github size={24} />
                        </a>
                      )}
                      {link && (
                        <a href={link} target="_blank" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/60 leading-relaxed mb-8"
                  >
                    {description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
