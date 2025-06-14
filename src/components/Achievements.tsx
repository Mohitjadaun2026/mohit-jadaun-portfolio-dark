
import React from 'react';
import { Trophy, Code, Target, Users, Star, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: 'LeetCode Progress',
      description: '400+ Problems Solved',
      details: 'Consistent problem-solving across various difficulty levels',
      color: 'from-orange-500 to-red-600',
      link: 'https://leetcode.com/mohitjadaun'
    },
    {
      icon: Trophy,
      title: 'GSSoC\'25 Participant',
      description: 'Open Source Contributor',
      details: 'Contributing to major open-source projects during GirlScript Summer of Code',
      color: 'from-green-500 to-emerald-600',
      link: 'https://gssoc.girlscript.tech'
    },
    {
      icon: Target,
      title: 'Codeforces Rating',
      description: 'Specialist (1400+)',
      details: 'Competitive programming with consistent performance',
      color: 'from-blue-500 to-cyan-600',
      link: 'https://codeforces.com/profile/mohitjadaun'
    },
    {
      icon: Users,
      title: 'Hackathon Participation',
      description: '5+ Hackathons',
      details: 'Winner of 2 inter-college hackathons with innovative solutions',
      color: 'from-purple-500 to-indigo-600',
      link: '#'
    },
    {
      icon: Star,
      title: 'College Rank',
      description: 'Top 5% in Department',
      details: 'Consistent academic performance with 8.5+ CGPA',
      color: 'from-yellow-500 to-orange-600',
      link: '#'
    },
    {
      icon: Award,
      title: 'Technical Society',
      description: 'Executive Member',
      details: 'Led technical workshops and coding bootcamps for 100+ students',
      color: 'from-pink-500 to-purple-600',
      link: '#'
    }
  ];

  const stats = [
    { label: 'GitHub Repos', value: '25+', color: 'text-blue-400' },
    { label: 'Contributions', value: '500+', color: 'text-green-400' },
    { label: 'Problems Solved', value: '400+', color: 'text-orange-400' },
    { label: 'Projects Built', value: '15+', color: 'text-purple-400' }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and accomplishments that showcase my dedication to continuous learning
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-blue-400 font-medium mb-3">
                {achievement.description}
              </p>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {achievement.details}
              </p>

              {/* Link */}
              {achievement.link !== '#' && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group/link"
                >
                  <span>View Profile</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
