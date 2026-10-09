import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBookOpen, FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Humanities Group",
      duration: "2024 - Present",
      status: "In Progress",
      desc: "Currently pursuing higher secondary education in the Humanities department while concurrently mastering modern web technologies, full-stack development, and digital engineering.",
      icon: <FaGraduationCap className="text-cyan-400" />,
      accentColor: "#00f0ff",
      links: []
    },
    {
      degree: "Complete Web Development Course",
      institution: "Programming Hero (Batch 13)",
      duration: "Completed",
      status: "Certified",
      desc: "Intensive training program covering full-stack web development, modern frontend frameworks (React, Next.js), backend systems, REST APIs, and MongoDB database management.",
      icon: <FaCertificate className="text-purple-400" />,
      accentColor: "#a855f7",
      links: [
        {
          label: "View Certificate",
          url: "https://drive.google.com/YOUR_CERTIFICATE_DRIVE_LINK_HERE",
          icon: <FaExternalLinkAlt className="text-[10px]" />,
          color: "border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10"
        },
        {
          label: "Letter of Recommendation",
          url: "https://drive.google.com/YOUR_RECOMMENDATION_DRIVE_LINK_HERE",
          icon: <FaAward className="text-[11px] text-purple-400" />,
          color: "border-purple-500/40 text-purple-300 hover:bg-purple-500/10"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="pt-32 lg:pt-40 pb-24 px-6 max-w-[1440px] mx-auto scroll-mt-36 relative overflow-hidden"
      id="education"
    >
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Academic & Certifications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-100">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Background</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            Bridging the gap between humanities, creative problem-solving, and modern full-stack digital engineering.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-transparent hidden md:block mb-4" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent hidden sm:block" />

        <motion.div variants={containerVariants} className="space-y-10 sm:space-y-12">
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="absolute -inset-1 rounded-[2.8rem] opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700" style={{ backgroundColor: edu.accentColor }} />
              <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-white/10 group-hover:border-cyan-400/50 p-7 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-3xl md:text-4xl shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-inner relative overflow-hidden">
                    <span className="relative z-10">{edu.icon}</span>
                    <div className="absolute inset-0 opacity-20 blur-md" style={{ backgroundColor: edu.accentColor }} />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-black text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                        <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                          <FaBookOpen className="text-xs" />
                          <span>{edu.institution}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                          <FaCalendarAlt className="text-cyan-400" />
                          <span>{edu.duration}</span>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">{edu.status}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 font-sans font-normal leading-relaxed text-xs sm:text-sm md:text-base max-w-3xl">{edu.desc}</p>

                    {edu.links && edu.links.length > 0 && (
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        {edu.links.map((link, lIdx) => (
                          <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${link.color}`}>
                            {link.icon}
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;