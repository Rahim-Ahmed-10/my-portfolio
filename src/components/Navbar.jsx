import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeUrl } from '../data/config';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'STACK', id: 'stack' },
    { label: 'EDUCATION', id: 'education' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  // Scroll Detection for Glass Background Transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Active Section Tracking
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.2,
    });

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -110; // Header height compensation to prevent overlapping
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 xl:px-12 py-3 transition-all duration-300 pointer-events-auto"
    >
      <div
        className={`max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${scrolled
            ? 'bg-slate-950/90 backdrop-blur-2xl border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(0,240,255,0.15)]'
            : 'bg-slate-900/50 backdrop-blur-md border-white/10 shadow-lg'
          }`}
      >
        {/* Crystal Clear Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="flex items-center gap-3.5 group cursor-pointer select-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-950 border border-cyan-400/60 font-mono font-black text-white text-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:border-cyan-300 group-hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 drop-shadow-[0_2px_8px_rgba(0,240,255,0.8)]">
              R
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/30 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-md opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs xl:text-sm font-black uppercase tracking-[0.2em] text-slate-100 group-hover:text-cyan-300 transition-colors">
              Md Rahim Miah
            </span>
            <span className="text-[9px] xl:text-[10px] font-mono font-bold tracking-widest text-cyan-400/90 uppercase">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Smooth Navigation Capsule */}
        <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/90 backdrop-blur-2xl border border-white/10 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`relative px-5 xl:px-6 py-2 rounded-full text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-[0.18em] transition-all duration-300 select-none cursor-pointer ${isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-100'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="smoothActivePill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/60 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.35)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3 xl:gap-4">
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 xl:px-6 py-2.5 rounded-full text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-200 border border-white/15 bg-slate-900/80 hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-300"
          >
            Resume
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 xl:px-7 py-2.5 rounded-full text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-cyan-400 transition-colors"
          aria-label="Toggle Navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/30 p-5 flex flex-col gap-3 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-400 py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 text-xs font-mono font-bold uppercase tracking-widest border border-white/20 rounded-xl text-slate-200"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="flex-1 text-center py-2.5 text-xs font-mono font-bold uppercase tracking-widest bg-cyan-400 text-slate-950 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;