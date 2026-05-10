import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Humanities Group",
      duration: "2024 - Present",
      status: "2nd Year Student",
      desc: "Currently pursuing higher secondary education in the Humanities department, focusing on social sciences and communication while concurrently mastering modern frontend engineering.",
      icon: <FaGraduationCap className="text-accent-primary" />
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32" id="education">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-heading font-light uppercase tracking-tighter text-foreground-primary">
            Academic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Background</span>
          </h2>
          <p className="text-foreground-secondary text-sm font-light max-w-md">
            Bridging the gap between social sciences and modern digital engineering.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-accent-primary/30 via-accent-secondary/20 to-transparent hidden md:block mb-4"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
            <div className="relative glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {edu.icon}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-bold text-foreground-primary tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-3 text-accent-primary font-medium">
                        <FaBookOpen className="text-sm" />
                        <span className="text-sm uppercase tracking-widest">{edu.institution}</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] font-bold uppercase tracking-wider">
                        <FaCalendarAlt />
                        {edu.duration}
                      </div>
                      <span className="text-xs font-bold text-accent-tertiary uppercase tracking-widest px-1">{edu.status}</span>
                    </div>
                  </div>

                  <p className="text-foreground-secondary font-light leading-relaxed max-w-2xl">
                    {edu.desc}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                <FaGraduationCap className="text-9xl rotate-12" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
