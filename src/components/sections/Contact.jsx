

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, CheckCircle2 } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'
import { useForm, ValidationError } from '@formspree/react'
import Footer from '@/components/Footer'

const socials = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
]

export default function Contact() {
  const [state, handleSubmit] = useForm("xnjwvker")

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration: 1
            }}
          >
            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter opacity-10 select-none">
              CONNECT
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold -mt-12 md:-mt-20 lg:-mt-32 relative z-10"
          >
            Let&apos;s build something <span className="text-primary">extraordinary.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Socials</h4>
              <div className="flex flex-wrap gap-6">
                {socials.map((social) => (
                  <MagneticButton key={social.name} strength={30}>
                    <a
                      href={social.href}
                      className="w-16 h-16 rounded-full glass flex items-center justify-center hover:bg-primary text-white transition-colors duration-300 border-primary/10 hover:border-primary/40 shadow-[0_0_15px_rgba(199,112,240,0.05)]"
                    >
                      <social.icon size={24} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-primary/40 text-sm uppercase tracking-widest">Availability</p>
              <p className="text-lg">Open for freelance projects and full-time roles.</p>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="glass p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center text-center min-h-[400px] border-primary/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                    className="mb-6 text-primary"
                  >
                    <CheckCircle2 size={80} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent Successfully</h3>
                  <p className="text-white/60 text-lg">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-8 text-sm font-medium underline underline-offset-4 text-primary opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass p-8 md:p-12 rounded-3xl space-y-6 border-primary/10 shadow-[0_0_30px_rgba(199,112,240,0.05)]"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/60">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white/5 border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/60">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/5 border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all"
                      placeholder="john@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/60">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-white/5 border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(199,112,240,0.3)] hover:shadow-[0_0_40px_rgba(199,112,240,0.5)]"
                  >
                    {state.submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
