import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "The Enexperts Consulting Group",
      period: "Jul 2024 - Sept 2024",
      responsibilities: [
        "Automated data tasks using Selenium to streamline processes",
        "Created highly interactive data visualizations using Python",
        "Performed basic Excel tasks such as cleaning data by removing white spaces using Python",
        "Coordinated with 13 team members, providing guidance on task execution and workflow"
      ]
    },
    {
      title: "Business Development Intern",
      company: "Peershala BD",
      period: "May 2023 - Jul 2023",
      responsibilities: [
        "Led efforts to find new leads, regularly finding 10 new leads each month through smart networking and outreach",
        "Built and maintained ties with important decision-makers, which made it easier to close deals and keep clients engaged",
        "Developed innovative cold calling scripts and strategies, resulting in a increase in appointment bookings"
      ]
    },
    {
      title: "Sales and Marketing Intern",
      company: "Money Ventures Capital",
      period: "Jun 2023 - Aug 2023",
      responsibilities: [
        "Applied data analysis techniques to optimise marketing metrics, resulting in improved decision-making",
        "Collaborated with cross-functional teams to launch innovative marketing campaigns",
        "Utilized cold calling techniques to meet timelines and drive lead generation",
        "Leveraged social media and email channels to generate new leads, boosting brand awareness"
      ]
    },
    {
      title: "Social Work Intern",
      company: "Rotract Club East",
      period: "Jun 2022 - Aug 2022",
      location: "Hyderabad",
      responsibilities: [
        "Renovated infrastructure and procured new equipment for a neglected government school",
        "Successfully raised funds and engaged sponsors to support school development initiatives",
        "Executed a comprehensive strategy to enhance school facilities and motivate students"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#0A192F] p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#FFD700]">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#FFD700] font-semibold text-xl mb-2">{exp.title}</h3>
                    <div className="flex items-center text-[#F8F8FF]/80 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <p className="text-[#F8F8FF] font-medium mb-3">{exp.company}</p>
                    <ul className="list-disc list-inside text-[#F8F8FF]/70 space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
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

export default Experience;