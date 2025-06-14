
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2024',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and databases.',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      link: 'https://freecodecamp.org/certification',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Advanced JavaScript concepts, algorithms, and data structure implementations.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      link: 'https://freecodecamp.org/certification',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2024',
      description: 'In-depth React course covering hooks, context, routing, and modern React patterns.',
      skills: ['React.js', 'Redux', 'React Router', 'Hooks', 'Context API'],
      link: 'https://udemy.com/certificate',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'Coursera',
      date: '2023',
      description: 'Backend development with Node.js, Express.js, and database integration.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      link: 'https://coursera.org/certificate',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-blue-400 font-medium mb-3">{cert.issuer}</p>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-600 hover:border-blue-500/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
              >
                <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                <span>View Certificate</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
