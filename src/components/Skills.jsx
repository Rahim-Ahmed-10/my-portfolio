import React from 'react';
import PhysicsCanvas from './PhysicsCanvas';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaServer,
  FaShieldAlt,
  FaGoogle,
  FaStripe,
  FaCubes,
  FaCode
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactrouter,
  SiRadixui,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiFramer,
  SiGreensock,
  SiVercel
} from 'react-icons/si';

const skillsData = [
  // Frontend Core
  {
    name: 'HTML5',
    desc: 'Semantic structure combined with modern web standards.',
    icon: <FaHtml5 className="text-[#E34F26]" />,
    gradient: 'from-[#E34F26]/50 to-[#ff9d00]/50'
  },
  {
    name: 'CSS3',
    desc: 'Advanced styling, animations, and responsive layouts.',
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    gradient: 'from-[#1572B6]/50 to-[#00d2ff]/50'
  },
  {
    name: 'JavaScript',
    desc: 'Advanced ES6+ logic, async patterns, and functional programming.',
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    gradient: 'from-[#F7DF1E]/50 to-[#ff9d00]/50'
  },
  {
    name: 'TypeScript',
    desc: 'Static typing for scalable, maintainable, and error-free codebases.',
    icon: <SiTypescript className="text-[#3178C6]" />,
    gradient: 'from-[#3178C6]/50 to-[#7c3aed]/50'
  },
  {
    name: 'React 19',
    desc: 'Component-based architecture & high-performance state management.',
    icon: <FaReact className="text-[#61DAFB]" />,
    gradient: 'from-[#61DAFB]/50 to-[#00d2ff]/50'
  },
  {
    name: 'Next.js',
    desc: 'Full-stack React framework with SSR, ISR, and optimized routing.',
    icon: <SiNextdotjs className="text-white" />,
    gradient: 'from-white/30 to-gray-500/30'
  },
  {
    name: 'React Router',
    desc: 'Declarative routing for React single-page applications.',
    icon: <SiReactrouter className="text-[#CA4245]" />,
    gradient: 'from-[#CA4245]/50 to-[#ff9d00]/50'
  },
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS framework for rapid, responsive UI development.',
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    gradient: 'from-[#06B6D4]/50 to-[#00d2ff]/50'
  },
  {
    name: 'HeroUI',
    desc: 'Beautiful, fast and modern React UI library.',
    icon: <FaCode className="text-white" />,
    gradient: 'from-white/20 to-cyber-purple/50'
  },
  {
    name: 'Radix UI',
    desc: 'Unstyled, accessible components for building high-quality design systems.',
    icon: <SiRadixui className="text-white" />,
    gradient: 'from-white/20 to-gray-500/30'
  },
  // Backend & DB
  {
    name: 'Node.js',
    desc: 'Asynchronous event-driven JavaScript runtime.',
    icon: <FaNodeJs className="text-[#339933]" />,
    gradient: 'from-[#339933]/50 to-[#7c3aed]/50'
  },
  {
    name: 'Express.js',
    desc: 'Fast, unopinionated, minimalist web framework for Node.js.',
    icon: <SiExpress className="text-white" />,
    gradient: 'from-white/30 to-gray-500/30'
  },
  {
    name: 'REST APIs',
    desc: 'Designing and consuming robust RESTful architectures.',
    icon: <FaServer className="text-[#00d2ff]" />,
    gradient: 'from-[#00d2ff]/50 to-[#7c3aed]/50'
  },
  {
    name: 'MongoDB',
    desc: 'NoSQL document database for scalable applications.',
    icon: <SiMongodb className="text-[#47A248]" />,
    gradient: 'from-[#47A248]/50 to-[#339933]/50'
  },
  // Auth & Security
  {
    name: 'Better-Auth',
    desc: 'Modern and flexible authentication for React.',
    icon: <FaShieldAlt className="text-accent-primary" />,
    gradient: 'from-accent-primary/50 to-accent-secondary/50'
  },
  {
    name: 'JWT',
    desc: 'Stateless authentication via JSON Web Tokens.',
    icon: <SiJsonwebtokens className="text-white" />,
    gradient: 'from-white/30 to-[#ff9d00]/50'
  },
  {
    name: 'Google Auth',
    desc: 'Secure OAuth 2.0 authentication integration.',
    icon: <FaGoogle className="text-[#4285F4]" />,
    gradient: 'from-[#4285F4]/50 to-[#EA4335]/50'
  },
  // Animations & Interactive Physics
  {
    name: 'Framer Motion',
    desc: 'Production-ready animations and interactions for React.',
    icon: <SiFramer className="text-white" />,
    gradient: 'from-white/30 to-cyber-purple/50'
  },
  {
    name: 'GSAP',
    desc: 'Professional-grade JavaScript animation suite.',
    icon: <SiGreensock className="text-[#88CE02]" />,
    gradient: 'from-[#88CE02]/50 to-[#339933]/50'
  },
  {
    name: 'Lenis',
    desc: 'Smooth scroll experience for modern web.',
    icon: <FaCode className="text-white" />,
    gradient: 'from-white/20 to-gray-500/30'
  },
  {
    name: 'Matter.js',
    desc: '2D rigid body physics engine for the web.',
    icon: <FaCubes className="text-[#00d2ff]" />,
    gradient: 'from-[#00d2ff]/50 to-[#7c3aed]/50'
  },
  // Tools & Services
  {
    name: 'Stripe',
    desc: 'Financial infrastructure and payment processing.',
    icon: <FaStripe className="text-[#008CDD]" />,
    gradient: 'from-[#008CDD]/50 to-[#00d2ff]/50'
  },
  {
    name: 'Git',
    desc: 'Distributed version control system.',
    icon: <FaGitAlt className="text-[#F05032]" />,
    gradient: 'from-[#F05032]/50 to-[#ff9d00]/50'
  },
  {
    name: 'GitHub',
    desc: 'Collaborative development using Git workflows and Actions.',
    icon: <FaGithub className="text-white" />,
    gradient: 'from-white/20 to-cyber-purple/50'
  },
  {
    name: 'Vercel',
    desc: 'Cloud platform for static sites and Serverless Functions.',
    icon: <SiVercel className="text-white" />,
    gradient: 'from-white/30 to-gray-500/30'
  }
];

const SkillCard = ({ skill, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
    >
      <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
      <div className="relative h-full glass-panel border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] p-8 rounded-[2rem] flex flex-col items-center text-center gap-6 overflow-hidden transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
          {skill.icon}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-heading font-black tracking-tight text-slate-100">
            {skill.name}
          </h3>
          <p className="text-[11px] leading-relaxed text-slate-400 font-light uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
            {skill.desc}
          </p>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
          <div className="w-4 h-4 border-t-2 border-r-2 border-accent-primary rounded-tr-sm" />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const tags = skillsData.map(s => s.name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 md:py-32 px-6 max-w-7xl mx-auto scroll-mt-32" 
      data-purpose="skills-grid" 
      id="skills"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-heading font-light uppercase tracking-tighter text-slate-100">
            Technical <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-md">
            Architecting high-performance digital solutions with modern stacks and precision engineering.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-accent-primary/30 via-accent-secondary/20 to-transparent hidden md:block mb-4"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 px-4"
      >
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>

      <div className="mt-20 pt-20 border-t border-foreground-primary/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-slate-950 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400/50">
          Advanced Physics Simulation
        </div>
        <div className="flex items-center gap-4 mb-12 justify-center">
          <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Gravity Interaction
          </h3>
        </div>
        <PhysicsCanvas tags={tags} />
      </div>
    </motion.section>
  );
};

export default Skills;
