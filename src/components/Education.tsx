
import React from 'react';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'CGC Jhanjeri',
      location: 'Mohali, Punjab',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.5/10',
      description: 'Specializing in Full Stack Development, Data Structures & Algorithms, and Software Engineering principles.',
      highlights: ['Dean\'s List', 'Technical Society Member', 'Hackathon Participant'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'Higher Secondary Certificate (12th)',
      field: 'Science (PCM)',
      institution: 'ABC Senior Secondary School',
      location: 'City, State',
      duration: '2020 - 2022',
      grade: '92.5%',
      description: 'Focused on Mathematics, Physics, and Chemistry with additional computer science coursework.',
      highlights: ['School Topper', 'Science Olympiad Winner', 'Mathematics Club President'],
      color: 'from-green-500 to-teal-600'
    },
    {
      degree: 'Secondary School Certificate (10th)',
      field: 'General Studies',
      institution: 'XYZ High School',
      location: 'City, State',
      duration: '2018 - 2020',
      grade: '95.2%',
      description: 'Strong foundation in core subjects with early exposure to computer programming.',
      highlights: ['Class Valedictorian', 'Computer Programming Award', 'Sports Captain'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic journey and educational milestones that built my foundation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="group bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Grade */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap size={28} className="text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">{edu.grade}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400 font-medium mb-1">{edu.field}</p>
                        <p className="text-purple-400">{edu.institution}</p>
                      </div>
                      <div className="mt-2 md:mt-0 space-y-1 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Trophy size={16} className="text-yellow-500 mr-2" />
                        <span className="text-yellow-500 font-medium">Key Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
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
