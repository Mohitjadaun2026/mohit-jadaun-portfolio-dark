
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
