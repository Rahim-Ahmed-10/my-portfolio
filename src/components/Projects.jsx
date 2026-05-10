import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto scroll-mt-32" data-purpose="project-list" id="projects">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl font-heading font-light tracked-header uppercase">Deployed <span className="font-bold">Artifacts</span></h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>
      <div className="space-y-12">
        {projectsData.map((project) => (
          <article key={project.id} className="group relative" data-purpose="project-card">
            <div className={`absolute -inset-4 bg-gradient-to-r ${project.color === 'cyber-blue' ? 'from-cyber-blue/10 via-cyber-purple/10' : 'from-cyber-purple/10 via-cyber-pink/10'} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
            <div className={`glass-panel iridescent-border p-6 md:p-10 rounded-[3rem] flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center transition-all duration-700 group-hover:bg-surface-elevated/5 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
              <Link to={`/project/${project.id}`} className="w-full md:w-1/2 aspect-[16/10] rounded-[2rem] overflow-hidden iridescent-border relative group/img shadow-2xl block">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover/img:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="w-full h-1 bg-accent-primary/50 scale-x-0 group-hover/img:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </Link>
              <div className="flex-1 space-y-8 py-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-accent-primary/5 border border-accent-primary/10 text-accent-primary`}>
                      {project.module}
                    </span>
                    <div className="h-px w-8 bg-border-subtle/20" />
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-none drop-shadow-sm transition-colors group-hover:text-accent-primary text-foreground-primary">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                <p className="text-foreground-secondary font-light leading-relaxed text-lg max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="group/btn relative px-10 py-4 rounded-full overflow-hidden transition-all duration-500 flex items-center justify-center min-w-[160px]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-tertiary transition-transform duration-500 group-hover/btn:scale-110`} />
                    <span className="relative z-10 font-heading font-black text-[10px] uppercase tracking-[0.2em] text-white">
                      View Details
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                  </Link>
                  <a
                    className="group/btn relative px-10 py-4 rounded-full overflow-hidden transition-all duration-500 flex items-center justify-center min-w-[160px] border border-white/10 hover:border-accent-primary/30 bg-white/5 hover:bg-accent-primary/5"
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 font-heading font-black text-[10px] uppercase tracking-[0.2em] text-foreground-secondary group-hover:text-foreground-primary transition-colors">
                      Live Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
