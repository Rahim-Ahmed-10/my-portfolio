import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Humanities Group",
      duration: "2024 - Present",
      status: "In Progress",
      desc: "Currently pursuing higher secondary education in the Humanities department while concurrently mastering modern web technologies, full-stack development, and digital engineering.",
      icon: <FaGraduationCap className="text-accent-primary" />
    },
    {
      degree: "Complete Web Development Course",
      institution: "Programming Hero (Batch 13)",
      duration: "Completed",
      status: "Certified",
      desc: "Intensive training program covering full-stack web development, modern frontend frameworks (React, Next.js), backend systems, and database management.",
      icon: <FaBookOpen className="text-accent-secondary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 md:py-32 px-6 max-w-7xl mx-auto scroll-mt-32" 
      id="education"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-heading font-light uppercase tracking-tighter text-slate-100">
            Academic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Background</span>
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-md">
            Bridging the gap between social sciences and modern digital engineering.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-accent-primary/30 via-accent-secondary/20 to-transparent hidden md:block mb-4"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        className="max-w-4xl mx-auto space-y-8"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
            <div className="relative glass-panel border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] p-8 md:p-12 rounded-[2.5rem] overflow-hidden backdrop-blur-xl bg-slate-950/40 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500 border border-white/10 shrink-0">
                  {edu.icon}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-bold text-slate-100 tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-3 text-cyan-400 font-medium">
                        <FaBookOpen className="text-sm" />
                        <span className="text-sm uppercase tracking-widest">{edu.institution}</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                        <FaCalendarAlt />
                        {edu.duration}
                      </div>
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-widest px-1">{edu.status}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 font-light leading-relaxed max-w-2xl text-sm md:text-base">
                    {edu.desc}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                <FaGraduationCap className="text-9xl rotate-12 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;