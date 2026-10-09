import React, { useState } from 'react';
import PhysicsCanvas from './PhysicsCanvas';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaServer, FaShieldAlt, FaGoogle, FaStripe, FaCubes, FaCode
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiReactrouter, SiRadixui, SiExpress, SiMongodb, SiJsonwebtokens, SiFramer, SiGreensock, SiVercel
} from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', desc: 'Semantic structure combined with modern web standards.', icon: <FaHtml5 className="text-[#E34F26]" />, accentColor: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', desc: 'Advanced styling, animations, and responsive layouts.', icon: <FaCss3Alt className="text-[#1572B6]" />, accentColor: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', desc: 'Advanced ES6+ logic, async patterns, and functional programming.', icon: <SiJavascript className="text-[#F7DF1E]" />, accentColor: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript', desc: 'Static typing for scalable, maintainable, and error-free codebases.', icon: <SiTypescript className="text-[#3178C6]" />, accentColor: '#3178C6', category: 'Frontend' },
  { name: 'React 19', desc: 'Component-based architecture & high-performance state management.', icon: <FaReact className="text-[#61DAFB]" />, accentColor: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', desc: 'Full-stack React framework with SSR, ISR, and optimized routing.', icon: <SiNextdotjs className="text-white" />, accentColor: '#00f0ff', category: 'Frontend' },
  { name: 'React Router', desc: 'Declarative routing for React single-page applications.', icon: <SiReactrouter className="text-[#CA4245]" />, accentColor: '#CA4245', category: 'Frontend' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid, responsive UI development.', icon: <SiTailwindcss className="text-[#06B6D4]" />, accentColor: '#06B6D4', category: 'Frontend' },
  { name: 'HeroUI', desc: 'Beautiful, fast and modern React UI library.', icon: <FaCode className="text-cyan-300" />, accentColor: '#00f0ff', category: 'Frontend' },
  { name: 'Radix UI', desc: 'Unstyled, accessible components for building high-quality design systems.', icon: <SiRadixui className="text-white" />, accentColor: '#a855f7', category: 'Frontend' },
  { name: 'Framer Motion', desc: 'Production-ready animations and interactions for React.', icon: <SiFramer className="text-white" />, accentColor: '#e879f9', category: 'Frontend' },
  { name: 'GSAP', desc: 'Professional-grade JavaScript animation suite.', icon: <SiGreensock className="text-[#88CE02]" />, accentColor: '#88CE02', category: 'Frontend' },
  { name: 'Lenis', desc: 'Smooth scroll experience for modern web.', icon: <FaCode className="text-purple-300" />, accentColor: '#c084fc', category: 'Frontend' },
  { name: 'Matter.js', desc: '2D rigid body physics engine for the web.', icon: <FaCubes className="text-[#00d2ff]" />, accentColor: '#00d2ff', category: 'Frontend' },
  { name: 'Node.js', desc: 'Asynchronous event-driven JavaScript runtime.', icon: <FaNodeJs className="text-[#339933]" />, accentColor: '#339933', category: 'Backend & Services' },
  { name: 'Express.js', desc: 'Fast, unopinionated, minimalist web framework for Node.js.', icon: <SiExpress className="text-white" />, accentColor: '#94a3b8', category: 'Backend & Services' },
  { name: 'REST APIs', desc: 'Designing and consuming robust RESTful architectures.', icon: <FaServer className="text-[#00d2ff]" />, accentColor: '#00d2ff', category: 'Backend & Services' },
  { name: 'MongoDB', desc: 'NoSQL document database for scalable applications.', icon: <SiMongodb className="text-[#47A248]" />, accentColor: '#47A248', category: 'Backend & Services' },
  { name: 'Better-Auth', desc: 'Modern and flexible authentication for React.', icon: <FaShieldAlt className="text-cyan-400" />, accentColor: '#38bdf8', category: 'Backend & Services' },
  { name: 'JWT', desc: 'Stateless authentication via JSON Web Tokens.', icon: <SiJsonwebtokens className="text-amber-300" />, accentColor: '#f59e0b', category: 'Backend & Services' },
  { name: 'Google Auth', desc: 'Secure OAuth 2.0 authentication integration.', icon: <FaGoogle className="text-[#4285F4]" />, accentColor: '#4285F4', category: 'Backend & Services' },
  { name: 'Stripe', desc: 'Financial infrastructure and payment processing.', icon: <FaStripe className="text-[#008CDD]" />, accentColor: '#008CDD', category: 'Backend & Services' },
  { name: 'Git', desc: 'Distributed version control system.', icon: <FaGitAlt className="text-[#F05032]" />, accentColor: '#F05032', category: 'DevOps & Tools' },
  { name: 'GitHub', desc: 'Collaborative development using Git workflows and Actions.', icon: <FaGithub className="text-white" />, accentColor: '#f1f5f9', category: 'DevOps & Tools' },
  { name: 'Vercel', desc: 'Cloud platform for static sites and Serverless Functions.', icon: <SiVercel className="text-white" />, accentColor: '#38bdf8', category: 'DevOps & Tools' }
];

const SkillCard = ({ skill }) => (
  <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="group relative">
    <div className="absolute -inset-1 rounded-[2.2rem] opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500" style={{ backgroundColor: skill.accentColor }} />
    <div className="relative h-full bg-slate-950/70 backdrop-blur-2xl border border-white/10 group-hover:border-cyan-400/50 p-6 rounded-[2rem] flex flex-col items-center text-center gap-5 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 transition-all duration-500" style={{ backgroundColor: skill.accentColor }} />
      <div className="relative w-16 h-16 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
        <div className="relative z-10">{skill.icon}</div>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity" style={{ backgroundColor: skill.accentColor }} />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-heading font-extrabold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
        <p className="text-[11px] leading-relaxed text-slate-400 font-normal tracking-wide">{skill.desc}</p>
      </div>
      <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-80 transition-opacity">
        <div className="w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-xs" />
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Frontend', 'Backend & Services', 'DevOps & Tools'];
  const tags = skillsData.map(s => s.name);

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="pt-32 lg:pt-40 pb-24 px-6 max-w-[1440px] mx-auto scroll-mt-36 relative overflow-hidden"
      data-purpose="skills-grid"
      id="stack"
    >
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-100">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Matrix</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            Architecting high-performance digital solutions with modern stacks, resilient backends, and precision engineering.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-transparent hidden md:block mb-4" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 px-2 relative z-10">
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
                layoutId="activeSkillsTab"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/60 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28 px-2 relative z-10 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Physics Container */}
      <div className="mt-16 pt-16 border-t border-white/10 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1 bg-slate-950 border border-cyan-500/30 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          Interactive Physics Engine
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-2xl p-4 shadow-2xl relative overflow-hidden">
          <PhysicsCanvas tags={tags} />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;