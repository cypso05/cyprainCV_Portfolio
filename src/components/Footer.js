import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowUp, Mail, LinkedinIcon, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import portfolioData from "../mock";

const Footer = () => {
  const { personal } = portfolioData;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-slate-400 bg-clip-text text-transparent">
                CC
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                <p className="text-slate-400 text-sm">{personal.title}</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Building intelligent APIs and scalable applications that solve real-world problems. 
              Specializing in full-stack development, automation, and AI integration.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                size="sm"
                variant="outline"
                className="border-slate-700 hover:border-blue-400 hover:bg-blue-400/10 text-slate-400 hover:text-blue-400 group"
                onClick={() => window.open(personal.email.startsWith('mailto:') ? personal.email : `mailto:${personal.email}`, '_blank')}
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                className="border-slate-700 hover:border-blue-400 hover:bg-blue-400/10 text-slate-400 hover:text-blue-400 group"
                onClick={() => window.open(personal.linkedin, '_blank')}
              >
                <LinkedinIcon size={16} className="group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                className="border-slate-700 hover:border-emerald-400 hover:bg-emerald-400/10 text-slate-400 hover:text-emerald-400 group"
                onClick={() => window.open(personal.github, '_blank')}
              >
                <Github size={16} className="group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                className="border-slate-700 hover:border-slate-400 hover:bg-slate-400/10 text-slate-400 hover:text-slate-400 group"
                onClick={() => window.open(personal.portfolio, '_blank')}
              >
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                About Me
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('skills');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Skills
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('experience');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Experience
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Projects
              </button>
            </div>
          </div>

          {/* Featured Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore More</h4>
            <div className="space-y-3">
              <Link 
                to="/more-info"
                className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                API Showcase
              </Link>
              <button
                onClick={() => window.open(personal.portfolio, '_blank')}
                className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm text-left"
              >
                Full Portfolio
              </button>
              <button
                onClick={() => window.open(personal.github, '_blank')}
                className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm text-left"
              >
                GitHub Profile
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} {personal.name}. Built with</span>
              <Heart size={14} className="text-red-400" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-xs">
              
              </span>
              
              <Button
                size="sm"
                variant="outline"
                className="border-slate-700 hover:border-blue-400 hover:bg-blue-400/10 text-slate-400 hover:text-blue-400 group"
                onClick={scrollToTop}
              >
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                <span className="ml-1 text-xs">Top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;