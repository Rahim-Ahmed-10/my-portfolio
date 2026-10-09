import React, { useState } from 'react';
import {
  FaFolder,
  FaCog,
  FaRocket,
  FaHtml5,
  FaCss3Alt,
  FaShieldAlt,
  FaTimes,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaTerminal
} from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiStripe,
  SiFramer,
  SiVite,
  SiReactrouter,
  SiJavascript
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';

const getTechIcon = (tech) => {
  const iconMap = {
    'React': <SiReact className="text-[#61DAFB]" />,
    'React 19': <SiReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Better-Auth': <FaShieldAlt className="text-purple-400" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    'Express.js': <SiExpress className="text-white" />,
    'Stripe': <SiStripe className="text-[#008CDD]" />,
    'Framer Motion': <SiFramer className="text-white" />,
    'Vite': <SiVite className="text-[#646CFF]" />,
    'React Router': <SiReactrouter className="text-[#CA4245]" />,
    'HTML5': <FaHtml5 className="text-[#E34F26]" />,
    'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" />
  };
  return iconMap[tech] || <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />;
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = ['All', 'Full-Stack', 'Frontend'];

  // Categorize Projects logically
  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Full-Stack') {
      return project.category === 'Full-Stack' || project.githubServer || project.techStack?.includes('Node.js') || project.techStack?.includes('MongoDB');
    }
    if (activeTab === 'Frontend') {
      return project.category === 'Frontend' || (!project.githubServer && !project.techStack?.includes('Express.js'));
    }
    return true;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="pt-32 lg:pt-40 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto scroll-mt-36 relative overflow-hidden"
      data-purpose="project-list"
      id="projects"
    >
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 px-2 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Portfolio Engineering
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-100">
            Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Artifacts</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            High-performance full-stack & frontend web applications engineered for seamless scalability and interactive user experience.
          </p>
        </div>

        {/* Quick Project Stats Counter Dashboard */}
        <div className="flex items-center gap-4 bg-slate-950/80 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl shadow-xl">
          <div className="px-3.5 border-r border-white/10 text-center">
            <span className="text-xl font-mono font-black text-cyan-400 block">{projectsData.length}</span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Total Works</span>
          </div>
          <div className="px-3.5 border-r border-white/10 text-center">
            <span className="text-xl font-mono font-black text-purple-400 block">
              {projectsData.filter(p => p.githubServer || p.category === 'Full-Stack').length}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Full-Stack</span>
          </div>
          <div className="px-3.5 text-center">
            <span className="text-xl font-mono font-black text-blue-400 block">
              {projectsData.filter(p => !p.githubServer && p.category !== 'Full-Stack').length}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Frontend</span>
          </div>
        </div>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-12 px-2 relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 select-none cursor-pointer ${activeTab === tab
                ? 'text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                : 'text-slate-400 hover:text-slate-100 bg-slate-900/60 border border-white/10 hover:bg-slate-800/80'
              }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/60 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab} Projects</span>
          </button>
        ))}
      </div>

      {/* Projects Cards List */}
      <motion.div layout className="space-y-12 lg:space-y-16 relative z-10 min-h-[500px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
              data-purpose="project-card"
            >
              {/* Outer Glow Halo */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${project.color === 'cyber-blue' ? 'from-cyan-500/20 via-blue-500/10' : 'from-purple-500/20 via-pink-500/10'} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.8rem] pointer-events-none`} />

              {/* Main Sleek Glass Card Frame */}
              <div className={`relative bg-slate-950/75 backdrop-blur-2xl border border-white/10 group-hover:border-cyan-400/50 p-6 md:p-8 lg:p-9 rounded-[2.2rem] lg:rounded-[2.6rem] flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-10 items-center transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:-translate-y-1 overflow-hidden`}>

                {/* Mac-Style App Window Media Preview */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-white/10 relative group/media shadow-2xl shrink-0 bg-slate-900 cursor-pointer"
                >
                  {/* Window Bar Header */}
                  <div className="h-8 bg-slate-950/90 border-b border-white/10 px-4 flex items-center justify-between select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                      <FaTerminal className="text-cyan-400 text-[9px]" />
                      <span>{project.title.toLowerCase().replace(/\s+/g, '')}.app</span>
                    </div>
                  </div>

                  {/* Media Content */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-950">
                    {project.video ? (
                      <>
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay loop muted playsInline
                        />
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          initial={{ opacity: 1 }}
                          whileHover={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <img
                            alt={project.title}
                            className="w-full h-full object-cover"
                            src={project.image}
                            loading="lazy"
                          />
                        </motion.div>
                      </>
                    ) : (
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/media:scale-105"
                        src={project.image}
                        loading="lazy"
                      />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5 z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-slate-950/90 px-3 py-1.5 rounded-xl border border-cyan-400/40 shadow-lg">
                        Click to Inspect Project
                      </span>
                      <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-5 py-1 w-full">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {project.module || (project.githubServer ? 'Full-Stack Architecture' : 'Frontend Engineering')}
                      </span>
                      <div className="h-px w-8 bg-white/10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 font-sans font-normal leading-relaxed text-xs sm:text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map(tech => (
                        <span key={tech} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/40 transition-colors text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 shadow-inner">
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link Buttons Bar */}
                  <div className="flex flex-wrap gap-3 items-center mt-5 pt-4 border-t border-white/10">
                    {project.githubClient && (
                      <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 hover:text-cyan-300 transition-all duration-300"
                        title="Frontend Source Code"
                      >
                        <FaFolder className="text-cyan-400" />
                        <span>Frontend</span>
                      </a>
                    )}

                    {project.githubServer && (
                      <a
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-purple-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 hover:text-purple-300 transition-all duration-300"
                        title="Backend Source Code"
                      >
                        <FaCog className="text-purple-400" />
                        <span>Backend</span>
                      </a>
                    )}

                    {project.livelink && (
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 hover:border-cyan-400 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
                      >
                        <FaRocket className="text-cyan-400" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-300 transition-all"
                    >
                      Explore Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Detail Modal Panel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                    Project Insights & Technical Specs
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                    Key Features & Technical Scope:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-cyan-400 shrink-0" />
                      <span>Responsive Cyberpunk UI layout with smooth Framer Motion interactions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-cyan-400 shrink-0" />
                      <span>Optimized API routing with secure environment configs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-cyan-400 shrink-0" />
                      <span>Production-ready deployment on Vercel / Netlify platform</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  {selectedProject.livelink && (
                    <a
                      href={selectedProject.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Visit Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubClient && (
                    <a
                      href={selectedProject.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-slate-200 font-mono text-xs font-bold uppercase tracking-wider"
                    >
                      <FaGithub className="text-sm" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;