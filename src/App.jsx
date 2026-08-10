import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Lazy loaded components (Below the fold or heavy)
const AmbientBackground = lazy(() => import('./components/AmbientBackground'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));

const Home = () => (
  <>
    <Hero />
    <Suspense fallback={<div className="min-h-screen" />}>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </Suspense>
  </>
);

function App() {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Defer Lenis initialization slightly to improve TTI
    const timer = setTimeout(() => {
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
    }, 100);

    return () => {
      clearTimeout(timer);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
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
      <Suspense fallback={null}>
        <AmbientBackground />
      </Suspense>

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default App;

