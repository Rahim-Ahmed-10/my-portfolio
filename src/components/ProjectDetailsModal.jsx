import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaCog,
  FaCube,
  FaLayerGroup,
  FaWrench,
  FaLightbulb,
  FaTerminal
} from 'react-icons/fa';
import { getTechIcon } from '../utils/techIcons';

const ProjectDetailsModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Keyboard ESC listener for smooth dismissal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isFullStack = project.category === 'Full-Stack' || Boolean(project.githubServer);
  const cleanId = (project.id || 'project').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 pt-24 sm:pt-28 pb-6 bg-slate-950/85 backdrop-blur-xl overflow-hidden"
        >
          {/* Outer Ambient Glow Aura */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl opacity-75 pointer-events-none" />

          {/* Main Glassmorphic Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] sm:max-h-[88vh] bg-slate-950/95 border border-cyan-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.25),0_25px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden"
          >
            {/* Top: Mac Window Header Bar with Exquisite Close Button */}
            <div className="h-12 sm:h-14 bg-slate-950/95 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between shrink-0 select-none">
              {/* Window Controls & Terminal Identifier */}
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 ml-2">
                  <FaTerminal className="text-cyan-400 text-[10px]" />
                  <span>terminal://{cleanId}.config</span>
                </div>
              </div>

              {/* 1. TOP-RIGHT EXQUISITE GLOWING CLOSE BUTTON (Rotates 90deg on hover) */}
              <button
                type="button"
                onClick={onClose}
                className="group relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900/90 hover:bg-rose-950/50 border border-white/10 hover:border-rose-500/60 text-slate-400 hover:text-rose-300 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(244,63,94,0.5)] focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                title="Close Modal (ESC)"
                aria-label="Close Project Details Modal"
              >
                <FaTimes className="text-sm transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
                <span className="absolute inset-0 rounded-xl bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </button>
            </div>

            {/* Glowing Top Holographic Accent Divider */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(0,240,255,0.8)] shrink-0" />

            {/* Internal Scrollable Content Body */}
            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 custom-scrollbar"
            >
              {/* Media Preview Banner */}
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl shrink-0">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${isFullStack
                        ? 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.25)]'
                        : 'text-purple-300 bg-purple-950/80 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.25)]'
                        }`}
                    >
                      {project.module || (isFullStack ? 'Full-Stack Architecture' : 'Frontend System')}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-1.5 drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Architectural Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                  <FaCube className="text-cyan-400" />
                  <span>Architectural Overview</span>
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Key Engineering Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                  <FaLayerGroup className="text-cyan-400" />
                  <span>Key Engineering Highlights</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl shadow-inner">
                    <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>Role-Based Access Control (RBAC) & Secure Session State</span>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl shadow-inner">
                    <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>High-Performance Responsive Glassmorphic UI</span>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl shadow-inner">
                    <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>Optimized Database Indexing & Clean API Routing</span>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl shadow-inner">
                    <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>Zero Layout Shifts & Production CI/CD Deploy</span>
                  </li>
                </ul>
              </div>

              {/* Technical Challenges & Solutions */}
              {project.challenges && (
                <div className="space-y-2 bg-slate-900/60 border border-amber-500/20 p-4 rounded-2xl shadow-inner">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                    <FaWrench className="text-amber-400" />
                    <span>Technical Challenge & Engineering Solution</span>
                  </h4>
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Future Roadmap / Improvements */}
              {project.improvements && (
                <div className="space-y-2 bg-slate-900/60 border border-purple-500/20 p-4 rounded-2xl shadow-inner">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                    <FaLightbulb className="text-purple-400" />
                    <span>Future Scalability & Planned Upgrades</span>
                  </h4>
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    {project.improvements}
                  </p>
                </div>
              )}

              {/* Core Technology Stack Pills */}
              {project.techStack && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Core Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono font-bold text-slate-200 shadow-sm"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Fixed Action Buttons Footer with Smooth Scaling & Close Button */}
            <div className="p-4 sm:p-5 bg-slate-950/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.githubClient && (
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/20 hover:border-cyan-400/50 text-slate-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <FaGithub className="text-sm text-cyan-400" />
                    <span>Source Code</span>
                  </motion.a>
                )}

                {project.githubServer && (
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-400/60 text-purple-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <FaCog className="text-sm text-purple-400" />
                    <span>Backend Code</span>
                  </motion.a>
                )}

                {/* Added Explicit Close Button in Footer */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-rose-950/40 border border-white/10 hover:border-rose-500/50 text-slate-300 hover:text-rose-300 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <FaTimes className="text-xs" />
                  <span>Close</span>
                </motion.button>
              </div>

              {project.livelink && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-slate-950 font-mono text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Preview</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;