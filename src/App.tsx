import { useState, useEffect } from 'react';
import Taskbar from './components/layout/Taskbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Approach from './components/sections/Approach';
import Evaluation from './components/sections/Evaluation';
import ExtrasAccordion from './components/sections/ExtrasAccordion';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Marquee from './components/ui/Marquee';
import Preloader from './components/ui/Preloader';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-custom-blue overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      <Preloader />
      <CustomCursor />

      <div className="fixed top-0 left-0 h-2 bg-custom-green z-[100] transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
      <div className="fixed top-0 left-0 w-full h-2 bg-custom-yellow z-[90]"></div>

      <Taskbar />

      <main className="flex flex-col gap-20 pt-32 pb-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Approach />
        <Evaluation />
        <ExtrasAccordion />
        <Marquee />
      </main>

      <Footer />
    </div>
  );
}

export default App;
