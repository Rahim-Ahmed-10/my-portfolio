import React from 'react';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-primary/10 blur-[140px] rounded-full animate-pulse-slow opacity-60" />
      
      {/* Secondary Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-secondary/10 blur-[140px] rounded-full animate-pulse-slow opacity-60" style={{ animationDelay: '3s' }} />
      
      {/* Tertiary Accent */}
      <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-accent-tertiary/5 blur-[100px] rounded-full animate-pulse-slow opacity-40" style={{ animationDelay: '1.5s' }} />
      
      {/* Fine Grain / Noise Overlay (Optional - but premium) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default AmbientBackground;
