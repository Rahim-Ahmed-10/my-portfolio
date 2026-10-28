import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowLeft,
  FaFolder,
  FaCog,
  FaRocket,
  FaSearch,
  FaTerminal,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { projectsData } from '../data/projects';
import { getTechIcon } from '../utils/techIcons';
import ProjectDetailsModal from './ProjectDetailsModal';

const AllProjectsView = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to top upon mounting the archive view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tabs = ['All', 'Full-Stack', 'Frontend'];

  // Categorize & Filter Projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category condition
      let matchesTab = true;
      if (activeTab === 'Full-Stack') {
        matchesTab =
          project.category === 'Full-Stack' ||
          Boolean(project.githubServer) ||
          project.techStack?.includes('Node.js') ||
          project.techStack?.includes('MongoDB');
      } else if (activeTab === 'Frontend') {
        matchesTab =
          project.category === 'Frontend' ||
          (!project.githubServer && !project.techStack?.includes('Express.js'));
      }

      // Search query condition
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTitle = project.title.toLowerCase().includes(query);
        const inDesc = project.description?.toLowerCase().includes(query);
        const inModule = project.module?.toLowerCase().includes(query);
        const inTech = project.techStack?.some((t) => t.toLowerCase().includes(query));
        matchesSearch = inTitle || inDesc || inModule || Boolean(inTech);
      }

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const fullStackCount = useMemo(
    () => projectsData.filter((p) => p.githubServer || p.category === 'Full-Stack').length,
    []
  );
  const frontendCount = useMemo(
    () => projectsData.filter((p) => !p.githubServer && p.category !== 'Full-Stack').length,
    []
  );

  return (
    <div className="min-h-screen pt-28 lg:pt-36 pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/4 -right-36 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-36 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navigation & Breadcrumb Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 relative z-10">
        {onBack ? (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
          >
            <FaArrowLeft className="text-xs text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        ) : (
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
          >
            <FaArrowLeft className="text-xs text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        )}

        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>System Archive // Database Active</span>
        </div>
      </div>

      {/* Header Title Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Full Engineering Archive
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-100">
            Deployed{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Artifacts Catalog
            </span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
            Browse through the full repository of full-stack ecosystems, client-side web applications,
            production APIs, and interactive UI systems engineered for speed and scale.
          </p>
        </div>

        {/* Quick Archive Counter Stats */}
        <div className="flex items-center gap-3 sm:gap-4 bg-slate-950/80 border border-white/10 p-3.5 rounded-2xl backdrop-blur-2xl shadow-xl shrink-0">
          <div className="px-3 border-r border-white/10 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-cyan-400 block">
              {projectsData.length}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Total</span>
          </div>
          <div className="px-3 border-r border-white/10 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-purple-400 block">
              {fullStackCount}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Full-Stack</span>
          </div>
          <div className="px-3 border-r border-white/10 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-blue-400 block">
              {frontendCount}
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Frontend</span>
          </div>
          <div className="px-3 text-center">
            <span className="text-lg sm:text-xl font-mono font-black text-emerald-400 block">100%</span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Live</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Instant Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 relative z-10 bg-slate-950/80 border border-white/10 p-4 rounded-2xl backdrop-blur-2xl">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const count =
              tab === 'All'
                ? projectsData.length
                : tab === 'Full-Stack'
                ? fullStackCount
                : frontendCount;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 select-none cursor-pointer ${
                  activeTab === tab
                    ? 'text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-slate-100 bg-slate-900/60 border border-white/10 hover:bg-slate-800/80'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="archiveActiveTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-purple-500/25 border border-cyan-400/60 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{tab}</span>
                  <span className="text-[10px] opacity-70">({count})</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, tech..."
            className="w-full bg-slate-900/90 border border-white/10 focus:border-cyan-400/60 rounded-xl pl-9 pr-8 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-400 focus:outline-none transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-mono p-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Responsive Projects Grid (3-Column on Desktop 1440px) */}
      <motion.div layout className="relative z-10 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {filteredProjects.map((project, index) => {
                const isFullStack =
                  project.category === 'Full-Stack' || Boolean(project.githubServer);

                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative flex flex-col h-full"
                    data-purpose="archive-card"
                  >
                    {/* Hover Ambient Halo */}
                    <div
                      className={`absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br ${
                        isFullStack
                          ? 'from-cyan-500/25 via-blue-500/15 to-purple-500/20'
                          : 'from-purple-500/25 via-pink-500/15 to-blue-500/20'
                      } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Main Glass Card Frame */}
                    <div className="relative flex flex-col justify-between h-full bg-slate-950/85 backdrop-blur-2xl border border-white/10 group-hover:border-cyan-400/50 rounded-2xl sm:rounded-3xl p-5 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_45px_rgba(0,240,255,0.15)] overflow-hidden">
                      
                      {/* Top Cyber Window Bar */}
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/5 select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          </div>

                          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                            <FaTerminal className="text-cyan-400 text-[9px]" />
                            <span className="tracking-tight lowercase truncate max-w-[130px]">
                              {project.id.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()}.tsx
                            </span>
                          </div>

                          <span
                            className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              isFullStack
                                ? 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.25)]'
                                : 'text-purple-300 bg-purple-950/70 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.25)]'
                            }`}
                          >
                            {isFullStack ? 'Full-Stack' : 'Frontend'}
                          </span>
                        </div>

                        {/* Thumbnail with Hover Zoom */}
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="relative aspect-[16/10] my-3.5 rounded-xl overflow-hidden bg-slate-900 border border-white/10 group/thumb cursor-pointer shadow-inner"
                        >
                          <motion.img
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-slate-950/90 px-2.5 py-1 rounded-md border border-cyan-400/50 shadow-md">
                              <FaTerminal className="text-[9px]" /> Inspect Specs
                            </span>
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          </div>
                        </div>

                        {/* Card Title & Description */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400/90 uppercase">
                              {project.module || 'System Artifact'}
                            </span>
                            <span className="h-px flex-1 bg-white/10" />
                          </div>

                          <h3
                            onClick={() => setSelectedProject(project)}
                            className="text-xl font-black tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors cursor-pointer"
                          >
                            {project.title}
                          </h3>

                          <p className="text-slate-400 text-xs font-sans font-normal leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Full Tech Stack Pills */}
                        {project.techStack && (
                          <div className="flex flex-wrap items-center gap-1.5 my-3.5 pt-1">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 group-hover:border-cyan-500/30 text-[10px] font-mono font-bold text-slate-300 shadow-sm transition-colors"
                              >
                                {getTechIcon(tech)}
                                <span>{tech}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Action Bar */}
                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10 mt-3">
                        {project.livelink && (
                          <a
                            href={project.livelink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[110px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/35 hover:to-blue-500/35 border border-cyan-400/40 hover:border-cyan-300 text-cyan-300 text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]"
                          >
                            <FaRocket className="text-xs text-cyan-400 shrink-0" />
                            <span>Live Demo</span>
                          </a>
                        )}

                        {project.githubClient && (
                          <a
                            href={project.githubClient}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white text-[11px] font-mono transition-colors"
                            title="Frontend Source Code"
                          >
                            <FaFolder className="text-cyan-400 text-xs" />
                            <span className="hidden sm:inline">Frontend</span>
                          </a>
                        )}

                        {project.githubServer && (
                          <a
                            href={project.githubServer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-purple-400/50 text-purple-300 hover:text-white text-[11px] font-mono transition-colors"
                            title="Backend Source Code"
                          >
                            <FaCog className="text-purple-400 text-xs" />
                            <span className="hidden sm:inline">Backend</span>
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-colors"
                          title="Inspect Technical Specs"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="py-24 text-center space-y-4 bg-slate-950/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <FaTerminal className="mx-auto text-4xl text-slate-500 animate-pulse" />
              <h3 className="text-lg font-mono font-bold uppercase text-slate-200">
                No Artifacts Found
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No matching projects found for query "{searchQuery}". Try searching with a different
                technology tag or resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('All');
                }}
                className="px-5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs uppercase hover:bg-cyan-900 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Technical Details Inspection Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default AllProjectsView;

