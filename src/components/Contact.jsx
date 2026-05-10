import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFacebookF } from 'react-icons/fa6';

const Contact = () => {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/rahimahmed01',
      style: 'glass-panel iridescent-border',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(0,210,255,0.3)]'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/Rahim-Ahmed-10',
      style: 'glass-panel iridescent-border',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(188,19,254,0.3)]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/profile.php?id=100071816113262',
      style: 'glass-panel iridescent-border',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      href: 'mailto:rahimahmed01690@gmail.com',
      isPrimary: true,
      style: 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(var(--accent-primary),0.4)]'
    }
  ];

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center scroll-mt-32" data-purpose="contact-section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel iridescent-border p-12 md:p-20 rounded-[4rem] space-y-12 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-accent-primary/5 blur-[120px] pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <h2 className="text-[10px] font-heading font-black text-accent-tertiary tracking-[0.5em] uppercase opacity-60">Uplink Established</h2>
          <h3 className="text-5xl md:text-7xl font-heading font-extralight tracking-tighter leading-tight">Initiate <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-accent-primary to-accent-secondary">Transmission</span></h3>
        </div>

        <p className="text-foreground-secondary max-w-lg mx-auto font-light text-lg leading-relaxed relative z-10">
          Currently seeking new opportunities to innovate and build impactful digital experiences. My inbox is always open.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8 relative z-10">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={link.href}
              target={link.isPrimary ? undefined : "_blank"}
              rel={link.isPrimary ? undefined : "noopener noreferrer"}
              className={`group flex items-center gap-4 px-10 py-5 rounded-[1.5rem] transition-all duration-500 font-heading font-black text-[10px] uppercase tracking-[0.2em] ${link.style} ${link.hoverGlow} ${link.isPrimary ? 'text-white shadow-xl shadow-accent-primary/20' : 'text-foreground-primary hover:bg-white/5'}`}
            >
              <span className="text-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {link.icon}
              </span>
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
