import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative z-10 text-center border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-gray-400 uppercase tracking-widest">
          <a href="#hero" className="hover:text-accent-primary transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-accent-primary transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-accent-primary transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-accent-primary transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-accent-primary transition-colors duration-300">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 my-2 text-lg text-gray-400">
          <a
            href="https://github.com/Rahim-Ahmed-10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rahimahmed01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100071816113262"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/8801690123104"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-12 h-[1px] bg-accent-primary/40"></div>

        {/* Copyright Text */}
        <p className="text-[10px] font-heading font-bold tracking-[0.4em] uppercase text-gray-500">
          © {currentYear} // MD RAHIM MIAH // ALL RIGHTS RESERVED
        </p>

      </div>
    </footer>
  );
};

export default Footer;