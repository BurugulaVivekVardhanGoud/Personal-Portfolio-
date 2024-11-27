import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BarChart2, Brain, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <Database size={24} />, name: 'Data Analysis', description: 'Expert in SQL, Python, and data visualization tools' },
    { icon: <BarChart2 size={24} />, name: 'Business Intelligence', description: 'Proficient in Power BI, Tableau, and reporting' },
    { icon: <Brain size={24} />, name: 'Machine Learning', description: 'Experience with predictive modeling and ML algorithms' },
    { icon: <TrendingUp size={24} />, name: 'Statistical Analysis', description: 'Strong foundation in statistical methods and A/B testing' },
  ];

  return (
    <section id="about" className="py-20 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-[#F8F8FF] leading-relaxed mb-6">
                I'm a passionate Data & Business Analyst with expertise in transforming complex data into actionable insights. With a strong foundation in analytics and business intelligence, I help organizations make data-driven decisions.
              </p>
              <p className="text-[#F8F8FF] leading-relaxed">
                My approach combines technical expertise with business acumen to deliver meaningful results. I'm constantly learning and adapting to new technologies and methodologies in the ever-evolving data landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#0A192F] p-4 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700] transition-colors duration-300"
                >
                  <div className="text-[#FFD700] mb-2">{skill.icon}</div>
                  <h3 className="text-[#FFD700] font-medium mb-2">{skill.name}</h3>
                  <p className="text-[#F8F8FF]/80 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;