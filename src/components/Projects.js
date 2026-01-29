import React from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Code,
  Database,
  Brain,
  Wrench,
  Eye
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import portfolioData from "../mock";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  "AI Platform": Brain,
  "Healthcare": Database,
  "Automation": Wrench,
  "API": Code
};

const Projects = () => {
  const { projects } = portfolioData;
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    // Check if the link is an internal route (starts with /)
    if (project.link.startsWith("/")) {
      navigate(project.link);
    } else {
      // External link - open in new tab
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const getButtonIcon = (project) => {
    if (project.link.startsWith("/")) {
      return <Eye size={16} className="mr-2 group-hover:scale-110 transition-transform" />;
    }
    return <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" />;
  };

  const getButtonText = (project) => {
    return project.link.startsWith("/") ? "View Details" : "View Project";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcase of production-ready applications and APIs that demonstrate 
            expertise in AI integration, healthcare solutions, and business automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = categoryIcons[project.category] || Code;

            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                        <IconComponent size={32} />
                      </div>
                      <p className="text-white/80 text-sm font-medium">
                        {project.category} Project
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm opacity-90">
                        {project.link.startsWith("/") 
                          ? "Click to view API endpoints" 
                          : "Click to view live project"}
                      </p>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-emerald-100 text-slate-700"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white flex-1 group"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click event
                        handleProjectClick(project);
                      }}
                    >
                      {getButtonIcon(project)}
                      {getButtonText(project)}
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(portfolioData.personal.github, '_blank');
                      }}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-0 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Want to See More?
            </h3>
            <p className="text-slate-600 mb-6">
              Explore my complete portfolio including detailed API documentation, 
              technical specifications, and live demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white group"
                onClick={() => navigate("/more-info")}
              >
                <ArrowRight size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                View Endpoint Details
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 hover:border-blue-500 hover:text-blue-600 group"
                onClick={() => window.open(portfolioData.personal.github, '_blank')}
              >
                <Github size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Browse GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
