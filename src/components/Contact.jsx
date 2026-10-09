import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/rahimahmed01',
      accentColor: '#0077b5',
      glow: 'shadow-[0_0_20px_rgba(0,119,181,0.25)]'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/Rahim-Ahmed-10',
      accentColor: '#a855f7',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.25)]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/profile.php?id=100071816113262',
      accentColor: '#1877f2',
      glow: 'shadow-[0_0_20px_rgba(24,119,242,0.25)]'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/8801690123104',
      accentColor: '#25d366',
      glow: 'shadow-[0_0_20px_rgba(37,211,102,0.3)]',
      onClick: () => toast.success('Connecting to WhatsApp...', {
        style: {
          background: 'rgba(15, 23, 42, 0.95)',
          color: '#38bdf8',
          border: '1px solid rgba(37, 211, 102, 0.4)',
          backdropFilter: 'blur(12px)',
          fontFamily: 'monospace'
        },
        iconTheme: {
          primary: '#25D366',
          secondary: '#0f172a',
        },
      })
    }
  ];

  return (
    <section className="pt-32 lg:pt-40 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto scroll-mt-36 relative overflow-hidden" data-purpose="contact-section" id="contact">
      <Toaster position="bottom-center" />

      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Uplink Connection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-100">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Transmission</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            Have a project in mind or looking for a full-stack engineer? Connect directly through the direct channels or form below.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-transparent hidden md:block mb-4" />
      </div>

      {/* Dual-Column Glass Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">

        {/* Left Information & Socials Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          {/* Subtle Grid Background Accent */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="space-y-8 relative z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight mb-2">
                Let's Build Something Digital
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Open for software engineering opportunities, web development builds, and full-stack architecture projects.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              <a
                href="mailto:contact@rahimahmed.dev"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group/item"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg group-hover/item:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Direct Email</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover/item:text-cyan-300 transition-colors">rahimahmed01690@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/8801690123104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group/item"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg group-hover/item:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Phone / WhatsApp</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover/item:text-emerald-300 transition-colors">+880 1690-123104</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-100">Dhaka / Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-4">
              Social Networks
            </span>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={link.onClick}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-xs font-mono font-bold text-slate-200 hover:text-cyan-300 ${link.glow}`}
                >
                  <span className="text-base" style={{ color: link.accentColor }}>{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;