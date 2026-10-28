import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaTerminal,
  FaTimes,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaCog,
  FaCube,
  FaLayerGroup,
  FaWrench,
  FaLightbulb
} from 'react-icons/fa';
import { projectsData } from '../data/projects';
import { getTechIcon } from '../utils/techIcons';

// Sub-Component: Project Details Modal / Drawer
export const ProjectsModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
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

  // Handle ESC key press to cleanly close modal
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/85 backdrop-blur-xl overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-950/95 border border-cyan-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden"
      >
        {/* Top: Mac Window Header Bar with Close Button */}
        <div className="h-11 sm:h-12 bg-slate-950/95 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_rgba(244,63,94,0.5)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 ml-2">
              <FaTerminal className="text-cyan-400 text-[10px]" />
              <span>terminal://{cleanId}.config</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close (ESC)"
            aria-label="Close Project Details Modal"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Scrollable Content Body with data-lenis-prevent */}
        <div
          data-lenis-prevent="true"
          className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 custom-scrollbar"
        >
          {/* Banner Media Preview */}
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
                  className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                    isFullStack
                      ? 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40'
                      : 'text-purple-300 bg-purple-950/80 border-purple-500/40'
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
              <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl">
                <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                <span>Role-Based Access Control (RBAC) & Secure Session State</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl">
                <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                <span>High-Performance Responsive Glassmorphic UI</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl">
                <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                <span>Optimized Database Indexing & Clean API Routing</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-900/70 border border-white/5 p-3 rounded-xl">
                <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                <span>Zero Layout Shifts & Production CI/CD Deploy</span>
              </li>
            </ul>
          </div>

          {/* Technical Challenge & Engineering Solution */}
          {project.challenges && (
            <div className="space-y-2 bg-slate-900/60 border border-amber-500/20 p-4 rounded-2xl">
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
            <div className="space-y-2 bg-slate-900/60 border border-purple-500/20 p-4 rounded-2xl">
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

        {/* Fixed Action Buttons Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.githubClient && (
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/20 text-slate-200 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <FaGithub className="text-sm" />
                <span>Source Code</span>
              </a>
            )}

            {project.githubServer && (
              <a
                href={project.githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <FaCog className="text-sm" />
                <span>Backend Code</span>
              </a>
            )}
          </div>

          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-mono text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Live Preview</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Reusable Featured Project Card Component
const FeaturedCard = ({ project, index, onSelect }) => {
  const isFullStack = project.category === 'Full-Stack' || Boolean(project.githubServer);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
      data-purpose="featured-project-card"
    >
      {/* Outer Ambient Glow Aura on Hover */}
      <div
        className={`absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br ${
          isFullStack
            ? 'from-cyan-500/25 via-blue-500/15 to-purple-500/20'
            : 'from-purple-500/25 via-pink-500/15 to-blue-500/20'
        } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Main Glassmorphic Card Container */}
      <div className="relative flex flex-col justify-between h-full bg-slate-950/85 backdrop-blur-2xl border border-white/10 group-hover:border-cyan-400/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_45px_rgba(0,240,255,0.15)] overflow-hidden">
        {/* Subtle Cyber Corner Bracket */}
        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors" />
        </div>

        {/* Top: Mac Window Top Bar + Cyber Badge */}
        <div>
          <div className="flex items-center justify-between pb-3.5 border-b border-white/5 select-none">
            {/* Mac 3-dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
            </div>

            {/* Terminal Title */}
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
              <FaTerminal className="text-cyan-400 text-[9px]" />
              <span className="tracking-tight lowercase truncate max-w-[130px]">
                {project.id.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()}.app
              </span>
            </div>

            {/* Glowing Cyber Badge */}
            <span
              className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                isFullStack
                  ? 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.25)]'
                  : 'text-purple-300 bg-purple-950/70 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.25)]'
              }`}
            >
              {isFullStack ? 'Full-Stack' : 'Frontend'}
            </span>
          </div>

          {/* Clean Project Thumbnail Preview with Smooth Hover Scaling */}
          <div
            onClick={() => onSelect(project)}
            className="relative aspect-[16/10] my-4 rounded-xl overflow-hidden bg-slate-900/90 border border-white/10 group/thumb cursor-pointer shadow-inner"
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </motion.div>

            {/* Hover Cyber Scanline & Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-slate-950/90 px-2.5 py-1 rounded-md border border-cyan-400/50 shadow-md">
                <FaTerminal className="text-[9px]" /> Click to Inspect
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>

          {/* Project Title & Description */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400/90 uppercase">
                {project.module || 'Artifact'}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <h3
              onClick={() => onSelect(project)}
              className="text-xl font-black tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1 cursor-pointer"
            >
              {project.title}
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm font-sans font-normal leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pill Tags with Distinct Cyber Glow Accents */}
          {project.techStack && (
            <div className="flex flex-wrap items-center gap-1.5 my-4 pt-1">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 group-hover:border-cyan-500/30 text-[10px] font-mono font-bold text-slate-300 shadow-sm transition-colors"
                >
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[9px] font-mono font-bold text-cyan-300">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Direct Action Buttons Bar ("Live Demo" & "Details" Trigger) */}
        <div className="flex items-center gap-2.5 pt-3.5 border-t border-white/10 mt-2">
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/35 hover:to-blue-500/35 border border-cyan-400/40 hover:border-cyan-300 text-cyan-300 text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]"
            >
              <FaRocket className="text-xs text-cyan-400 shrink-0" />
              <span>Live Demo</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            <span>Details</span>
            <FaTerminal className="text-[10px] text-cyan-400" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ onExploreAll }) => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  // Top 3 Featured Projects for 3-Column Responsive Layout
  const featuredProjects = useMemo(() => {
    return projectsData.filter((p) => p.featured !== false).slice(0, 3);
  }, []);

  const handleExploreClick = () => {
    if (onExploreAll) {
      onExploreAll();
    } else {
      navigate('/projects');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="pt-32 lg:pt-40 pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto scroll-mt-36 relative overflow-hidden"
      data-purpose="featured-projects-section"
      id="projects"
    >
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16 relative z-10">
        <div className="space-y-3 max-w-2xl">
          {/* Cyber Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Featured Engineering Works
            </span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-100">
            Deployed{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Artifacts
            </span>
          </h2>

          {/* Section Subtitle */}
          <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
            Curated high-performance full-stack architectures, modern web apps, and interactive digital
            experiences engineered for speed, security, and scale.
          </p>
        </div>

        {/* Featured Counter Metrics */}
        <div className="flex items-center gap-3 sm:gap-4 bg-slate-950/80 border border-white/10 p-3.5 rounded-2xl backdrop-blur-2xl shadow-xl shrink-0">
          <div className="px-3 border-r border-white/10 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-cyan-400 block">
              {featuredProjects.length}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Featured</span>
          </div>
          <div className="px-3 border-r border-white/10 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-purple-400 block">
              {projectsData.length}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">In Archive</span>
          </div>
          <div className="px-3 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-emerald-400 block">100%</span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Production</span>
          </div>
        </div>
      </div>

      {/* 1. HOMEPAGE FEATURED PROJECTS: 3-COLUMN RESPONSIVE GRID (1440px Desktop-first) */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* 2. EXPLORE ALL PROJECTS CALL-TO-ACTION (CTA) BUTTON */}
      <div className="mt-14 sm:mt-16 lg:mt-20 text-center relative z-10 flex flex-col items-center">
        <div className="relative inline-block group">
          {/* Animated Ambient Cyber Glow Aura */}
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse-slow pointer-events-none" />

          {/* High-end Cyber-Glass CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExploreClick}
            className="relative flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-cyan-400/50 hover:border-cyan-300 text-slate-100 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.25)] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-slate-100 to-purple-300 group-hover:from-cyan-200 group-hover:to-white">
              EXPLORE ALL PROJECTS ARCHIVE ➔
            </span>
          </motion.button>
        </div>

        <p className="text-[11px] font-mono text-slate-400 mt-3.5 tracking-wider uppercase">
          Spotlight (Top 3 Works) • View Full Interactive Catalog ({projectsData.length} Systems)
        </p>
      </div>

      {/* Technical Details Inspection Modal Sub-Component */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
