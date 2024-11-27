import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "7036995301",
      link: "tel:7036995301"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "burugula999@gmail.com",
      link: "mailto:burugula999@gmail.com"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Vivek Vardhan Goud",
      link: "https://www.linkedin.com/in/vivek-vardhan-goud/"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "BurugulaVivekVardhanGoud",
      link: "https://github.com/BurugulaVivekVardhanGoud"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A192F] p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300 group"
              >
                <div className="text-[#FFD700] group-hover:text-[#F8F8FF] transition-colors duration-300 mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-[#FFD700] font-medium mb-2">{contact.label}</h3>
                <p className="text-[#F8F8FF]/80 break-all">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;