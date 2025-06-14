
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 80, color: 'from-teal-500 to-blue-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Express.js', level: 80, color: 'from-gray-500 to-gray-700' },
        { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800' },
        { name: 'MySQL', level: 70, color: 'from-blue-600 to-blue-800' }
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Java', level: 85, color: 'from-red-500 to-orange-600' },
        { name: 'C++', level: 80, color: 'from-blue-600 to-purple-600' },
        { name: 'Python', level: 75, color: 'from-yellow-500 to-blue-500' },
        { name: 'Data Structures', level: 85, color: 'from-purple-500 to-pink-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillProgress 2s ease-out ${skillIndex * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-purple-400">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'Canva', 'Linux', 'Docker'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
