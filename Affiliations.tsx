import React from 'react';
import { Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Affiliations = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const affiliations = [
    {
      period: "2022–2024",
      role: "Member",
      organization: "Poverty Inequality Research Center"
    },
    {
      period: "2022–2023",
      role: "Member",
      organization: "COE Racing Technologies"
    },
    {
      period: "2022–2024",
      role: "Member",
      organization: "Centre of Excellence Nutrition and Exercise Physiology"
    },
    {
      period: "2022",
      role: "Volunteer",
      organization: "TedX Woxsen"
    },
    {
      period: "2021–2022",
      role: "Executive",
      organization: "Paparazzi Club"
    },
    {
      period: "2021–2022",
      role: "Volunteer",
      organization: "Rotaract Hyderabad"
    }
  ];

  return (
    <section id="affiliations" className="py-20 bg-[#0A192F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Affiliations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="bg-[#0A192F] p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300"
              >
                <Users className="text-[#FFD700] mb-4" size={24} />
                <div className="text-[#F8F8FF]/80 mb-2">{affiliation.period}</div>
                <h3 className="text-[#FFD700] font-medium mb-1">{affiliation.role}</h3>
                <p className="text-[#F8F8FF]">{affiliation.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;