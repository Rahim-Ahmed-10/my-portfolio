import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 text-center px-6">
        <h2 className="text-4xl font-heading font-black text-foreground-primary">Project Not Found</h2>
        <Link to="/" className="text-accent-primary hover:underline flex items-center gap-2">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-10 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* Back Button */}
      <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={() => navigate(-1)}
        className="group flex items-center gap-3 text-foreground-secondary hover:text-accent-primary transition-colors mb-12"
      >
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-primary/50 group-hover:bg-accent-primary/5 transition-all">
          <HiArrowLeft className="text-xl" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Go Back</span>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Project Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className={`absolute -inset-4 bg-gradient-to-r ${project.color === 'cyber-blue' ? 'from-cyber-blue/20 via-cyber-purple/20' : 'from-cyber-purple/20 via-cyber-pink/20'} to-transparent blur-3xl opacity-50`}></div>
          <div className="relative rounded-[3rem] overflow-hidden iridescent-border shadow-2xl aspect-[16/10]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="space-y-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-accent-primary/5 border border-accent-primary/10 text-accent-primary">
                {project.module}
              </span>
              <div className="h-px w-8 bg-border-subtle/20" />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight leading-none text-foreground-primary">
              {project.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-foreground-secondary text-xl font-light leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags?.map(tag => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-foreground-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 pt-6"
          >
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-12 py-5 rounded-full overflow-hidden transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-tertiary transition-transform duration-500 group-hover/btn:scale-110`} />
              <div className="relative z-10 flex items-center gap-3 font-heading font-black text-[10px] uppercase tracking-[0.2em] text-white">
                Launch Live Site <HiExternalLink className="text-lg" />
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
