import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const getPath = (href) => {
    return location.pathname === '/' ? href : `/${href}`;
  };


  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'py-4 bg-dark/80 backdrop-blur-xl border-b border-white/5'
        : 'py-6 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-tertiary flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all duration-500 group-hover:rotate-6">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black tracking-tighter text-foreground-primary uppercase text-base leading-none group-hover:text-accent-primary transition-colors">
              Md Rahim Miah
            </span>
            <span className="text-[9px] font-bold text-accent-tertiary tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              Web Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-12 relative">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <Link
                  to={getPath(item.href)}
                  className="text-[10px] font-black text-foreground-secondary hover:text-foreground-primary transition-colors duration-300 py-2 tracking-[0.25em] uppercase"
                >
                  {item.name}
                </Link>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-hover"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 -z-10 bg-accent-primary/5 rounded-full blur-[2px]"
                      style={{ margin: '-4px -20px' }}
                    />
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Button & Mobile Toggle */}
        <div className="flex items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to={getPath('#contact')}
              className="relative px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-foreground-primary text-surface-primary hover:text-white transition-all duration-500 overflow-hidden group block"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${isOpen ? 'text-foreground-primary' : 'text-foreground-primary'} hover:text-accent-primary transition-colors relative z-[100]`}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface-primary/98 backdrop-blur-3xl z-[90] flex flex-col items-center justify-center md:hidden"
          >
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="flex flex-col gap-6 text-center"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={getPath(item.href)}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-heading font-black tracking-tighter text-foreground-primary hover:text-accent-primary transition-all duration-300 uppercase block py-2"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="pt-8">
                <Link
                  to={getPath('#contact')}
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_30px_rgba(var(--accent-primary),0.3)] block"
                >
                  Launch Project
                </Link>
              </motion.li>
            </motion.ul>

            {/* Ambient Background for Mobile Menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
