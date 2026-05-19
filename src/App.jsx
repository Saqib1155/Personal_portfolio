import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import CustomCursor from "@/components/CustomCursor"
import SmoothScroll from "@/components/SmoothScroll"

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
        <CustomCursor />
        
        {/* Simple Navbar */}
        <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center backdrop-blur-sm bg-background/20">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            Sb<span className="text-primary">.</span>
          </Link>
          <div className="flex gap-8 items-center">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-sm font-medium text-white/60 hover:text-white transition-colors">About</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">
              Contact
            </a>
          </div>
        </nav>

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
