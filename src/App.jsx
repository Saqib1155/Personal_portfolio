import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import SmoothScroll from "@/components/SmoothScroll"
import { Menu, X } from 'lucide-react'

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Small delay to ensure page is rendered and Lenis is initialized
        const timeoutId = setTimeout(() => {
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    } else if (pathname === '/') {
      // Scroll to top if no hash and on home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <Router>
      <ScrollToHash />
      <div className="antialiased selection:bg-white selection:text-black min-h-screen bg-[#0b0a10]">
        {/* Simple Navbar */}
        <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center backdrop-blur-sm bg-background/20">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            Sb<span className="text-primary">.</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-sm font-medium text-white/60 hover:text-white transition-colors">About</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-3 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <Menu size={22} />
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[110] md:hidden">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <div className="absolute top-4 left-4 right-4 glass border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tighter text-white"
                >
                  Sb<span className="text-primary">.</span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="#home"
                  onClick={(e) => {
                    handleScroll(e, 'home')
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    handleScroll(e, 'about')
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    handleScroll(e, 'projects')
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleScroll(e, 'contact')
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-primary bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all rounded-xl text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}

        <SmoothScroll>
          <main className="relative">
            <div className="fixed inset-0 pointer-events-none z-[0] stars-overlay" />
            <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-me" element={<AboutPage />} />
            </Routes>
          </main>
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App
