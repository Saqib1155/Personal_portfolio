

import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, Layout, Palette, Zap } from 'lucide-react'

const skills = [
  { name: 'React', icon: Layout },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Tailwind', icon: Palette },
  { name: 'Framer Motion', icon: Zap },
  { name: 'Node.js', icon: Cpu },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className="relative mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-square max-w-[450px] mx-auto rounded-3xl overflow-hidden glass border-primary/20 shadow-2xl"
              >
                <img 
                  src="/developer1.png.png" 
                  alt="Frontend Developer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10]/60 to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              A narrative-driven approach to <span className="text-primary">frontend engineering.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed mb-12">
              <p>
                I am a passionate Frontend Engineer dedicated to crafting intuitive, scalable, and visually compelling web applications. My expertise lies in bridging the gap between complex technical requirements and elegant user experiences.
              </p>
              <p>
                With a strong foundation in modern JavaScript frameworks and a keen eye for design, I specialize in transforming conceptual ideas into fully functional, high-performance digital products that feel <span className="text-primary/80">alive.</span>
              </p>
              <p>
                Beyond writing clean and maintainable code, I thrive on solving intricate problems, optimizing performance, and continuously exploring new technologies to push the boundaries of what&apos;s possible on the web. Let&apos;s build something extraordinary together.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl glass border-primary/5 hover:border-primary/20 transition-all flex flex-col items-center gap-2 group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-xs font-medium text-white/60">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rotating background element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none"
      />
    </section>
  )
}
