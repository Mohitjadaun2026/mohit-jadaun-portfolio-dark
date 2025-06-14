
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: 'Full Stack Development', desc: 'MERN Stack Expert' },
    { icon: Database, title: 'Backend Engineering', desc: 'Scalable APIs & Databases' },
    { icon: Globe, title: 'Web Technologies', desc: 'Modern Frameworks & Tools' },
    { icon: Zap, title: 'Problem Solving', desc: 'DSA & Competitive Programming' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">Computer Science Engineering</span> student 
              at CGC Jhanjeri, graduating in 2026. My journey in tech is driven by curiosity and a love for 
              building solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Specializing in <span className="text-purple-400 font-semibold">Full Stack Development</span> with 
              the MERN stack, I enjoy creating seamless user experiences backed by robust, scalable architectures. 
              When I'm not coding, you'll find me solving algorithmic challenges or exploring new technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
