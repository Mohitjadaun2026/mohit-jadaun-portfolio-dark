
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Tech Innovations Pvt Ltd',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      description: [
        'Developed responsive web applications using React.js and Node.js',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with design team to create user-friendly interfaces',
        'Optimized application performance resulting in 30% faster load times'
      ],
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Backend Developer Intern',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      duration: 'Jan 2024 - May 2024',
      description: [
        'Built scalable backend services using Node.js and Express.js',
        'Designed and implemented database schemas in MongoDB',
        'Developed authentication and authorization systems',
        'Created comprehensive API documentation and testing suites'
      ],
      skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Postman'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Web Development Trainee',
      company: 'Digital Solutions Hub',
      location: 'Chandigarh, India',
      duration: 'Sep 2023 - Dec 2023',
      description: [
        'Learned modern web development technologies and frameworks',
        'Built multiple projects using HTML, CSS, JavaScript, and React',
        'Participated in code reviews and agile development practices',
        'Mentored junior trainees and contributed to knowledge sharing'
      ],
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Git', 'Agile'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-2 border-gray-900 z-10`}></div>

                {/* Content Card */}
                <div className="ml-20 bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 space-y-1 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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
