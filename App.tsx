import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Affiliations from './components/Affiliations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0A192F] min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Affiliations />
      <Contact />
    </div>
  );
}

export default App;