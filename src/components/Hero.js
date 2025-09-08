import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import portfolioData from "../mock";
import backgroundImage from "./background-tech.png";

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      className="py-20 md:py-32 bg-cover bg-center bg-no-repeat text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay for better text visibility */}
      <div className="absolute inset-0 bg-blue-900/70 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-md">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-8 drop-shadow">
            {personal.title}
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-semibold text-white max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow">
            {personal.tagline}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-blue-100 font-medium mb-12 drop-shadow-sm">
            <MapPin size={20} className="text-blue-200" />
            <span>{personal.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 group font-bold shadow-lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            <Link to="/more-info">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 group font-bold shadow-lg"
              >
                View API Showcase
                <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { value: "50+", label: "API Endpoints" },
              { value: "4+", label: "Years Experience" },
              { value: "5", label: "Tech Domains" },
              { value: "100%", label: "Full-Stack" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-black text-white mb-1 drop-shadow-sm">{stat.value}</div>
                <div className="text-blue-100 text-sm font-semibold drop-shadow-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;