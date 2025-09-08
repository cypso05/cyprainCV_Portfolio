import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-slate-600 bg-clip-text text-transparent">
              CC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;