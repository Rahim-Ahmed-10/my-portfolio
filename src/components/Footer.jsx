import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { resumeUrl } from '../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: resumeUrl, isExternal: true },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/Rahim-Ahmed-10',
      color: 'hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/rahimahmed01',
      color: 'hover:text-blue-400 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/profile.php?id=100071816113262',
      color: 'hover:text-blue-500 hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/8801690123104',
      color: 'hover:text-emerald-400 hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
    },
  ];

  return (
    <footer className="relative z-10 pt-20 pb-12 px-6 md:px-12 border-t border-white/10 bg-slate-950/90 backdrop-blur-2xl overflow-hidden">

      {/* Spider-Web / Cyber-Grid Matrix Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Kinetic Background Ambient Lights */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 40, -40, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Holographic Top Border Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto space-y-12 relative z-10">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-white/10">

          {/* Col 1: Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-3.5 text-left">
            <a href="#hero" className="inline-flex items-center gap-3.5 group cursor-pointer select-none">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-950 border border-cyan-400/60 font-mono font-black text-white text-xl shadow-[0_0_20px_rgba(0,240,255,0.35)] group-hover:border-cyan-300 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400">
                  R
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/30 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Md Rahim Miah
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400/90 uppercase">
                  Full Stack Developer
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-sans font-normal">
              Architecting resilient full-stack applications and interactive frontends with modern digital precision.
            </p>
          </div>

          {/* Col 2: Navigation Links Container */}
          <div className="lg:col-span-4 flex flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md backdrop-blur-md"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Col 3: Social Badges */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-300 text-lg transition-all duration-300 backdrop-blur-md ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

        </div>

        {/* Bottom System Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono font-bold tracking-[0.25em] text-slate-500 gap-4 text-center">
          <p className="uppercase">
            © {currentYear} // <span className="text-slate-300">Md Rahim Miah</span> // All Rights Reserved
          </p>

          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400/90 uppercase tracking-widest">System Online & Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;