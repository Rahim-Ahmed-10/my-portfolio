import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="pt-32 lg:pt-40 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto scroll-mt-36 relative overflow-hidden" id="about">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center relative z-10">

        {/* Left Column: Narrative Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Header Badge & Title */}
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
                My Story & Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Journey</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>

          {/* Simple English Paragraphs */}
          <div className="space-y-3.5 text-xs sm:text-sm xl:text-base font-normal text-slate-300 leading-relaxed font-sans">
            <p className="bg-slate-900/40 p-4 xl:p-5 rounded-2xl border border-white/5 backdrop-blur-md hover:border-cyan-500/20 transition-colors">
              My journey started in the Humanities department. Studying human behavior and society made me curious about how people communicate with each other. I always wondered: <span className="text-cyan-300 font-medium">How can we make these connections simpler and better using modern technology?</span>
            </p>
            <p className="bg-slate-900/40 p-4 xl:p-5 rounded-2xl border border-white/5 backdrop-blur-md hover:border-cyan-500/20 transition-colors">
              That curiosity led me to web development. I soon realized that coding is not just logic or technical rules—it is a creative language. A language that allows me to build real web applications from scratch and share them with people worldwide instantly.
            </p>
            <p className="bg-slate-900/40 p-4 xl:p-5 rounded-2xl border border-white/5 backdrop-blur-md hover:border-cyan-500/20 transition-colors">
              Today, I combine human creativity with solid coding skills. I bring my humanities background into frontend engineering to build simple, fast, and user-friendly websites that solve real-world problems.
            </p>
          </div>

          {/* Origin & Focus Info */}
          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.08)]">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-0.5">
                Background
              </span>
              <p className="text-xs xl:text-sm font-bold text-slate-100">Humanities Student</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-purple-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.08)]">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-purple-400 block mb-0.5">
                Current Goal
              </span>
              <p className="text-xs xl:text-sm font-bold text-slate-100">Full-Stack Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Graphic Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="w-full max-w-[480px] h-[400px] xl:h-[440px] rounded-[2.5rem] p-1 bg-gradient-to-br from-cyan-500/30 via-slate-800/40 to-purple-500/30 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group overflow-hidden">
            <div className="h-full w-full bg-slate-950/90 rounded-[2.3rem] flex flex-col items-center justify-center p-6 relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative z-10 text-center space-y-1 select-none">
                <div className="text-4xl sm:text-6xl font-black text-slate-800/60 tracking-tight">HUMAN</div>
                <div className="text-lg sm:text-2xl font-mono font-black tracking-[0.4em] text-cyan-400 drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]">CODE</div>
                <div className="text-4xl sm:text-6xl font-black text-slate-800/60 tracking-tight">LOGIC</div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-cyan-400/20 rounded-full animate-ping pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-purple-500/20 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '20s' }} />
            </div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="absolute -top-4 right-2 xl:right-6 px-4 py-2.5 rounded-xl bg-slate-950/90 border border-cyan-500/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,240,255,0.2)]"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">Creativity</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="absolute -bottom-4 left-2 xl:left-6 px-4 py-2.5 rounded-xl bg-slate-950/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(168,85,247,0.2)]"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300">Problem Solving</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;