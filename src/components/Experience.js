import React from "react";
import { Calendar, MapPin, Building, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import portfolioData from "../mock";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven track record of delivering scalable solutions across enterprise environments,
            specializing in API development and business process automation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-slate-500 transform md:-translate-x-px"></div>

          {experience.map((job, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-3 md:left-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform md:-translate-x-1.5 mt-6"></div>
              
              {/* Content Card */}
              <Card className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50`}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                        <Building size={18} />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-emerald-100 text-slate-700 w-fit"
                      >
                        <Calendar size={14} className="mr-1" />
                        {job.duration}
                      </Badge>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {job.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-3">
                        <ArrowRight className="text-emerald-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-20 bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Career Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-slate-300 text-sm">Production API Endpoints Developed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-slate-300 text-sm">Years in Application Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-300 mb-2">Multiple</div>
              <div className="text-slate-300 text-sm">Domains & Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;