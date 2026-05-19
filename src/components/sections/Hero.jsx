

import { motion } from 'framer-motion'
import TextReveal from '@/components/TextReveal'
import MagneticButton from '@/components/MagneticButton'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-20"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-[#030303]/40 to-[#030303]" />
        
        {/* Animated Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full glass text-xs font-medium tracking-[0.2em] uppercase text-primary border-primary/20">
            Creative Developer & UI/UX Specialist
          </span>
        </motion.div>

        <TextReveal 
          text="Crafting Pixels into Digital Experiences" 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_0_15px_rgba(199,112,240,0.3)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
        >
          Building high-performance frontend architectures with a focus on <span className="text-primary">motion</span> and interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 100, 
            damping: 20, 
            delay: 0.8 
          }}
        >
          <MagneticButton>
            <a 
              href="#projects"
              className="group relative inline-block px-8 py-4 bg-primary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(199,112,240,0.4)] hover:shadow-[0_0_40px_rgba(199,112,240,0.6)]"
            >
              <span className="relative z-10">See My Work</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/40"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
