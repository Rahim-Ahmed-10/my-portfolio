import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-32 px-6 max-w-6xl mx-auto scroll-mt-32" 
      data-purpose="project-list" 
      id="projects"
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-heading font-light tracked-header uppercase">Deployed <span className="font-bold">Artifacts</span></h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>
      
      <div className="space-y-16">
        {projectsData.map((project, index) => (
          <motion.article 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative" 
            data-purpose="project-card"
          >
            <div className={`absolute -inset-4 bg-gradient-to-r ${project.color === 'cyber-blue' ? 'from-cyber-blue/10 via-cyber-purple/10' : 'from-cyber-purple/10 via-cyber-pink/10'} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
            
            <div className={`relative glass-panel border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] p-6 md:p-10 rounded-[3rem] flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center transition-all duration-500 z-10`}>
              
              {/* Project Image */}
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-[2rem] overflow-hidden iridescent-border relative group/img shadow-2xl shrink-0">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover/img:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="w-full h-1 bg-accent-primary/50 scale-x-0 group-hover/img:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-8 py-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-accent-primary/5 border border-accent-primary/10 text-accent-primary`}>
                      {project.module}
                    </span>
                    <div className="h-px w-8 bg-border-subtle/20" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-none drop-shadow-sm text-slate-100">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 font-light leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Tags */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 items-center mt-8 pt-4 border-t border-white/5">
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-sm font-medium transition-all duration-300 shadow-md text-slate-100 hover:text-white hover:-translate-y-1"
                    >
                      <FaGithub className="text-lg" /> 📁 Client Repo / GitHub (Frontend)
                    </a>
                  )}

                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-sm font-medium transition-all duration-300 shadow-md text-slate-100 hover:text-white hover:-translate-y-1"
                    >
                      <FaGithub className="text-lg" /> ⚙️ Server Repo / GitHub (Backend)
                    </a>
                  )}

                  {project.livelink && (
                    <a
                      href={project.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400/80 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] text-sm font-medium transition-all duration-300 shadow-md text-cyan-50 hover:-translate-y-1"
                    >
                      <FaExternalLinkAlt className="text-lg" /> 🚀 Live Site / Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
