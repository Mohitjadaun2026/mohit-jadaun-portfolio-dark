
import React from 'react';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with user authentication, payment integration, and admin dashboard.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      github: 'https://github.com/mohitjadaun/ecommerce',
      live: 'https://ecommerce-demo.com',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      icon: Globe
    },
    {
      title: 'Task Management API',
      description: 'RESTful API with JWT authentication, CRUD operations, and real-time notifications.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
      github: 'https://github.com/mohitjadaun/task-api',
      live: null,
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
      icon: Database
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio built with React and modern animations, showcasing projects and skills.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/mohitjadaun/portfolio',
      live: 'https://mohitjadaun.dev',
      image: 'bg-gradient-to-br from-purple-500 to-pink-600',
      icon: Code
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat app with multiple rooms, file sharing, and online status indicators.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/mohitjadaun/chat-app',
      live: 'https://chat-app-demo.com',
      image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <project.icon size={48} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group/link"
                  >
                    <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group/link"
                    >
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mohitjadaun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
