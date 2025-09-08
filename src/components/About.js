import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import portfolioData from "../mock";
import CVPic from "./CV_pic.png"; // 👈 Import your image

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {about.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-600">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/more-info">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white group"
              >
                Explore My API Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          {/* Right Content - Professional Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md overflow-hidden shadow-lg border-0 bg-gradient-to-br from-slate-100 to-blue-50">
              <CardContent className="p-8 text-center">
                <img
                  src={CVPic}
                  alt={`${portfolioData.personal.name} - Professional`}
                  className="w-48 h-64 mx-auto rounded-lg object-cover mb-6 shadow-md border-2 border-slate-300"
                />
                <h3 className="font-bold text-slate-800 mb-2">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {portfolioData.personal.title}
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
