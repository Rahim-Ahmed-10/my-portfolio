import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Image from "../assets/WhatsApp_Image_2026-05-08_at_3.55.16_PM-removebg-preview.png";
const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP Antigravity Floating Effect
    gsap.to(imageRef.current, {
      y: "+=20",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(textRef.current, {
      y: "-=10",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center scroll-mt-32" data-purpose="hero-banner" id="hero">
      <div className="mb-16 relative group" ref={imageRef}>
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-[3rem] overflow-hidden glass-panel iridescent-border hologram-effect shadow-2xl transition-all duration-700 group-hover:rounded-[4rem] bg-surface-elevated/40 backdrop-blur-xl border border-white/10">
          <img
            alt="Md Rahim Miah Portrait"
            className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-125"
            src={Image}
          />
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
        </div>
        {/* Decorative Rings */}
        <div className="absolute -inset-4 rounded-[3.5rem] border border-accent-primary/20 scale-100 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
      </div>
      <div className="space-y-4 max-w-3xl" ref={textRef}>
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[10px] md:text-xs font-heading font-black text-accent-primary tracked-header uppercase mb-8 opacity-60"
        >
          Architecting Digital Environments v1.0
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-heading font-extralight tracking-tighter leading-[0.85] mb-10 text-white"
        >
          Md Rahim <span className="font-black block md:inline text-transparent bg-clip-text bg-gradient-to-br from-accent-primary to-accent-tertiary drop-shadow-sm glow-text">Miah</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl font-light text-foreground-secondary max-w-2xl mx-auto leading-relaxed"
        >
          A <span className="text-foreground-primary font-medium">Frontend Developer</span> dedicated to crafting immersive, high-performance interfaces where precision engineering meets minimalist design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
        >
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-white text-dark hover:bg-accent-primary hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="/resume.pdf" 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] glass-panel iridescent-border text-white hover:border-accent-primary transition-all duration-500"
            >
              Download CV
            </motion.a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-primary opacity-60">Status</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-secondary">Ready for Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
