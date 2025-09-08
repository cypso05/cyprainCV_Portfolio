import React from "react";
import { Code, Database, Globe, Wrench, Brain, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import portfolioData from "../mock";

const skillIcons = {
  "Languages": Code,
  "Frontend": Globe,
  "Backend": Database,
  "Databases": Layers,
  "DevOps": Wrench,
  "Specializations": Brain
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, specializing in 
            API development, automation, and intelligent business solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillIcons[skillGroup.category] || Code;
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <CardTitle className="text-lg text-slate-800">
                      {skillGroup.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 hover:from-blue-500 hover:to-emerald-500 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Specializations */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-0 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Core Specializations
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                  <Database size={28} />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">API Architecture</h4>
                <p className="text-sm text-slate-600">
                  50+ production endpoints with robust security and performance optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                  <Brain size={28} />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">AI Integration</h4>
                <p className="text-sm text-slate-600">
                  Generative AI solutions for automation, code generation, and intelligent processing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                  <Wrench size={28} />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Full-Stack Development</h4>
                <p className="text-sm text-slate-600">
                  End-to-end application development from database design to user interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;