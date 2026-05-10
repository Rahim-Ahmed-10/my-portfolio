import React from 'react';
import PhysicsCanvas from './PhysicsCanvas';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss,
} from 'react-icons/si';
import { TbDeviceMobile } from 'react-icons/tb';

const skillsData = [
  { 
    name: 'React.js', 
    desc: 'Component-based architecture & high-performance state management.',
    icon: <FaReact className="text-[#61DAFB]" />,
    gradient: 'from-[#61DAFB]/50 to-[#00d2ff]/50'
  },
  { 
    name: 'JavaScript', 
    desc: 'Advanced ES6+ logic, async patterns, and functional programming.',
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    gradient: 'from-[#F7DF1E]/50 to-[#ff9d00]/50'
  },
  { 
    name: 'Next.js', 
    desc: 'Full-stack React framework with SSR, ISR, and optimized routing.',
    icon: <SiNextdotjs className="text-white" />,
    gradient: 'from-white/30 to-gray-500/30'
  },
  { 
    name: 'Tailwind CSS', 
    desc: 'Utility-first CSS framework for rapid, responsive UI development.',
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    gradient: 'from-[#06B6D4]/50 to-[#00d2ff]/50'
  },
  { 
    name: 'TypeScript', 
    desc: 'Static typing for scalable, maintainable, and error-free codebases.',
    icon: <SiTypescript className="text-[#3178C6]" />,
    gradient: 'from-[#3178C6]/50 to-[#7c3aed]/50'
  },
  { 
    name: 'HTML5 & CSS3', 
    desc: 'Semantic structure combined with modern, fluid styling systems.',
    icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div>,
    gradient: 'from-[#E34F26]/50 to-[#1572B6]/50'
  },
  { 
    name: 'Version Control', 
    desc: 'Collaborative development using Git workflows and GitHub Actions.',
    icon: <FaGithub className="text-white" />,
    gradient: 'from-white/20 to-cyber-purple/50'
  },
  { 
    name: 'Responsive Design', 
    desc: 'Ensuring seamless user experiences across all device screen sizes.',
    icon: <TbDeviceMobile className="text-white" />,
    gradient: 'from-cyber-purple/50 to-cyber-pink/50'
  },
];

const SkillCard = ({ skill, index, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute -inset-2 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
      <div className="relative h-full glass-panel iridescent-border p-8 rounded-[2rem] flex flex-col items-center text-center gap-6 overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
          {skill.icon}
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-heading font-black tracking-tight text-foreground-primary">
            {skill.name}
          </h3>
          <p className="text-[11px] leading-relaxed text-foreground-secondary font-light uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
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

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32" data-purpose="skills-grid" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-heading font-light uppercase tracking-tighter text-foreground-primary">
            Technical <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Matrix</span>
          </h2>
          <p className="text-foreground-secondary text-sm font-light max-w-md">
            Architecting high-performance digital solutions with modern stacks and precision engineering.
          </p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-accent-primary/30 via-accent-secondary/20 to-transparent hidden md:block mb-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 px-4">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      <div className="mt-20 pt-20 border-t border-foreground-primary/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-surface-primary text-[10px] font-bold uppercase tracking-[0.4em] text-accent-primary/50">
          Advanced Physics Simulation
        </div>
        <div className="flex items-center gap-4 mb-12 justify-center">
            <h3 className="text-sm font-heading font-bold uppercase tracking-widest text-accent-primary flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              Gravity Interaction
            </h3>
        </div>
        <PhysicsCanvas tags={tags} />
      </div>
    </section>
  );
};

export default Skills;
