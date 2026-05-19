import { motion } from 'framer-motion'
import { Code2, Layout, Zap, Smartphone } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'

const WhyChooseMe = () => {
  return (
    <section className="py-32 px-4 mesh-gradient overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden glass border-primary/20 shadow-2xl"
            >
              <img
                src="/developer.jpg.png"
                alt="Frontend Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-primary/30 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">5+ Years</p>
                  <p className="text-xs text-white/60">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-primary font-bold tracking-tight text-4xl md:text-5xl mb-4 block"
              >
                Why Choose Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-white"
              >

                <span className="text-primary">Frontend Specialist</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6 text-lg text-white/70 leading-relaxed"
            >
              <p>
                As a passionate Frontend Developer, I specialize in building immersive digital experiences that blend aesthetic elegance with technical precision. I believe that every pixel has a story to tell and every interaction should feel like second nature.
              </p>
              <p>
                My journey in tech is driven by a relentless curiosity for how things work under the hood. I don&apos;t just write code; I craft performance-optimized, accessible, and scalable frontend architectures that empower users and solve real-world problems.
              </p>
            </motion.div>

            {/* Core Values / Skills Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { icon: Layout, title: "Modern UI/UX", desc: "Focus on clean, minimalist design" },
                { icon: Zap, title: "Performance", desc: "Lightning fast load times & smooth FPS" },
                { icon: Smartphone, title: "Mobile First", desc: "Responsive across all devices" },
                { icon: Code2, title: "Clean Code", desc: "Maintainable & scalable architecture" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3 text-primary">
                    <item.icon size={20} />
                    <h3 className="font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="pt-8"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-[0_0_20px_rgba(199,112,240,0.3)] hover:shadow-[0_0_40px_rgba(199,112,240,0.5)] transition-all inline-block"
                >
                  Let&apos;s Collaborate
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseMe
