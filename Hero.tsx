import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-[#FFD700] text-lg font-medium mb-2">Hi, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F8FF] mb-4">
              Vivek Vardhan Goud
            </h1>
            <div className="text-xl md:text-2xl text-[#F8F8FF]/80 mb-6 h-[60px]">
              <TypeAnimation
                sequence={[
                  'Data Analyst',
                  2000,
                  'Business Analyst',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-[#0A192F] rounded-lg font-medium transition-transform duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img
              src="IMG_0359.PNG"
              alt="Vivek Vardhan Goud"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#FFD700] shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
