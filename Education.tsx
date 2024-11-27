import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      institution: "Woxsen University",
      degree: "BBA Data Science and AI",
      period: "2021-2024",
      courses: "Python, Excel, SQL, Data Visualization, Business Intelligence",
      icon: <GraduationCap size={24} />
    },
    {
      institution: "Ivy League Academy",
      degree: "Secondary Education",
      period: "2019-2021",
      courses: "Accountancy, Business Studies, Economics, GST Filing, Python",
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0A192F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#0A192F] p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#FFD700]">{edu.icon}</div>
                  <div>
                    <h3 className="text-[#FFD700] font-semibold text-xl mb-2">{edu.institution}</h3>
                    <p className="text-[#F8F8FF] font-medium mb-2">{edu.degree}</p>
                    <p className="text-[#F8F8FF]/80 mb-2">{edu.period}</p>
                    <p className="text-[#F8F8FF]/70">Relevant Courses: {edu.courses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;