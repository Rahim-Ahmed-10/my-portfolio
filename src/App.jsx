import React, { useEffect, useRef } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import AmbientBackground from './components/AmbientBackground';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Education from './components/Education';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
  </>
);

function App() {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle hash changes for Back/Forward navigation and scroll to top on route change
  useEffect(() => {
    if (location.hash && lenisRef.current) {
      const element = document.querySelector(location.hash);
      if (element) {
        lenisRef.current.scrollTo(element, { offset: -100 });
      }
    } else if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative bg-surface-primary text-foreground-primary font-sans overflow-x-hidden min-h-screen selection:bg-accent-primary selection:text-white">
      <CustomCursor />
      <AmbientBackground />

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

