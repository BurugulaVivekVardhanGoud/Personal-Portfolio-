import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "JPMorgan Chase Markets",
      description: "Virtual Experience Program focused on Sales & Trading, including client pitching, market analysis, and bundled solution development.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/TF9ouPQomo5YcwRGR_JPMorgan%20Chase_tRHnev9wYYEWJdmgB_1715574742860_completion_certificate.pdf"
    },
    {
      title: "Alzheimer-Dementia-Classification",
      description: "Advanced machine learning project focused on early detection and classification of Alzheimer's and Dementia cases.",
      link: "https://github.com/BurugulaVivekVardhanGoud/Alzheimer-Dementia-Classification"
    },
    {
      title: "RoBERTa-Powered Twitter Sentimental Analysis",
      description: "Sentiment analysis project utilizing RoBERTa model to analyze Twitter data from the Threads App.",
      link: "https://github.com/BurugulaVivekVardhanGoud/RoBERTa-Powered-Twitter-Sentiment-Analysis-on-Threads-App"
    },
    {
      title: "AI-Gym-Poster-Angle",
      description: "Innovative AI project focusing on analyzing and optimizing gym poster angles for maximum effectiveness.",
      link: "https://github.com/BurugulaVivekVardhanGoud/AI-Gym-Poster-Angle"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0A192F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#0A192F] rounded-lg p-6 border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-[#FFD700] font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-[#F8F8FF]/80 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD700] hover:text-[#F8F8FF] transition-colors duration-300 flex items-center"
                  >
                    {project.link.includes('github.com') ? (
                      <>
                        <Github className="mr-2" size={20} />
                        View Project
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2" size={20} />
                        View Certificate
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;