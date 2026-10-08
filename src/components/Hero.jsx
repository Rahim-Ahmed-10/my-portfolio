import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { resumeUrl } from '../data/config';
import profileImg from "../assets/profile-new.png";

const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Smooth GSAP Antigravity Floating Effect
    gsap.to(imageRef.current, {
      y: "+=14",
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(textRef.current, {
      y: "-=6",
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.3
    });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen py-24 md:py-32 flex flex-col items-center justify-center px-6 text-center scroll-mt-32 relative overflow-hidden bg-[#030712]"
      data-purpose="hero-banner"
      id="hero"
    >
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">

        {/* Profile Card Frame */}
        <div className="mb-10 flex items-center justify-center relative" ref={imageRef}>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[2.8rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-40 group-hover:opacity-80 blur-lg transition-all duration-700" />
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-[2.5rem] overflow-hidden bg-slate-950/80 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-700 group-hover:rounded-[3.2rem]">
              <img
                alt="Md Rahim Miah Portrait"
                className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-115"
                src={profileImg}
                fetchPriority="high"
                decoding="sync"
                width="240"
                height="240"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
            </div>
            <div className="absolute -inset-3 rounded-[3rem] border border-cyan-400/20 group-hover:scale-105 transition-all duration-700 pointer-events-none" />
          </div>
        </div>

        {/* Text & Content */}
        <div className="space-y-4 max-w-3xl" ref={textRef}>

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(0,240,255,0.12)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-[0.2em] text-cyan-300 uppercase">
              Architecting Digital Environments v1.0
            </span>
          </motion.div>

          {/* Title Name with Glossy Silver-White Metallic Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)]"
          >
            RAHIM MIAH
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-lg font-normal text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            A <span className="text-cyan-300 font-semibold border-b border-cyan-400/40">Full Stack Developer</span> dedicated to crafting immersive, high-performance interfaces where precision engineering meets minimalist design.
          </motion.p>

          {/* Buttons & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8"
          >
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,240,255,0.4)" }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-300 font-mono shadow-[0_0_15px_rgba(0,240,255,0.25)]"
              >
                Hire Me
              </motion.a>

              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 font-mono relative group overflow-hidden"
              >
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100 ease-out" />
              </motion.a>
            </div>

            {/* Status */}
            <div className="flex flex-col items-center md:items-start gap-0.5">
              <span className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400/80">Status</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-300">Available for Hire</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;