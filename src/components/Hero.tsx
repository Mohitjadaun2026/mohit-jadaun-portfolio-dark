
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'MERN Stack Expert', 'Backend Engineer', 'Problem Solver'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[currentIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mb-8 hover:scale-110 transition-transform duration-300">
            MJ
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Mohit Jadaun
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="text-blue-400">{currentText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            B.Tech CSE Student | Passionate about building scalable web applications 
            and solving complex problems through code
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: 'https://github.com/mohitjadaun', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mohitjadaun', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mohit@example.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Download Resume
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
