import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Google Data Analytics Capstone",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/35PF8YU92GTZ"
    },
    {
      title: "Analysis for Business Systems",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/2JB9JGPG4DRQ"
    },
    {
      title: "Excel Basics for Data Analysis",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/6RQBRPG4UESE"
    },
    {
      title: "Bloomberg Finance Fundamentals",
      issuer: "Bloomberg",
      link: "https://portal.bloombergforeducation.com/certificates/Ko8beYH9AmLQivfLsFwdu1TL"
    },
    {
      title: "Bloomberg Market Concepts",
      issuer: "Bloomberg",
      link: "https://portal.bloombergforeducation.com/certificates/89vpKX5XgTVbrUkDGbsTAmLe"
    },
    {
      title: "Trade and Investment",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/9NMADKDWKKBJ"
    },
    {
      title: "Foundations of Business Strategy",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/RLS4JHBFU9ZF"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#0A192F] p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300"
              >
                <Award className="text-[#FFD700] mb-4" size={24} />
                <h3 className="text-[#FFD700] font-medium mb-2">{cert.title}</h3>
                <p className="text-[#F8F8FF]/80 mb-4">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#FFD700] hover:text-[#F8F8FF] transition-colors duration-300"
                >
                  View Certificate
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;