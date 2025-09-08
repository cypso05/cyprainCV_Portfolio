import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Database, Brain, Globe, Settings, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import portfolioData from "../mock";

const categoryIcons = {
  "AI-Powered Automation & Code Intelligence": Brain,
  "Data & Database Expertise": Database,
  "Multi-Domain Business Solutions": Globe,
  "Content & Communication Systems": Code,
  "Infrastructure & Architecture": Settings
};

const InfoPage = () => {
  const currentYear = new Date().getFullYear();
  const [failedImages, setFailedImages] = useState({});
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageError = (endpoint, type, e) => {
    console.error(`Failed to load ${type} image for endpoint ${endpoint}: ${e.target.src}`);
    setFailedImages((prev) => ({
      ...prev,
      [`${endpoint}-${type}`]: true
    }));
  };

  // Open modal with selected image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modal for Full-Size Image */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Full-size view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              onError={() => {
                setIsModalOpen(false);
                setSelectedImage(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-slate-600 bg-clip-text text-transparent">
              API Endpoints & Technical Showcase
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-emerald-600 to-slate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            50+ Production-Ready API Endpoints
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive showcase of intelligent APIs spanning AI automation, data processing, 
            multi-domain business solutions, and enterprise infrastructure.
          </p>
        </div>
      </section>

      {/* API Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(portfolioData.apiEndpoints).map(([category, endpoints]) => {
            const IconComponent = categoryIcons[category];

            return (
              <div key={category} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl text-white">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">{category}</h2>
                    <p className="text-slate-600 mt-1">
                      {endpoints.length} specialized endpoints for {category.toLowerCase()}
                    </p>
                  </div>
                </div>

                {/* Endpoints Grid */}
                <div className="grid gap-8">
                  {endpoints.map((endpoint, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl text-slate-800 mb-2">
                              {endpoint.title}
                            </CardTitle>
                            <Badge 
                              variant="secondary" 
                              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                            >
                              {endpoint.endpoint}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {endpoint.tech.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        {/* Problem & Solution */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              Problem
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {endpoint.problem}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              Solution
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {endpoint.solution}
                            </p>
                          </div>
                        </div>

                        {/* Impact */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Business Impact
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {endpoint.impact}
                          </p>
                        </div>

                        {/* Screenshots */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="rounded-lg overflow-hidden border-2 border-slate-300">
                            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                              {failedImages[`${endpoint.endpoint}-request`] || !endpoint.images?.request ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                                  <Code className="text-slate-400" size={32} />
                                  <p className="text-xs text-slate-500 mt-2">Image Not Available</p>
                                </div>
                              ) : (
                                <img
                                  src={process.env.PUBLIC_URL + endpoint.images.request}
                                  alt={`${endpoint.title} Request Example`}
                                  className="absolute inset-0 w-full h-full object-contain cursor-pointer"
                                  width="400"
                                  height="225"
                                  loading="lazy"
                                  onClick={() => openModal(process.env.PUBLIC_URL + endpoint.images.request)}
                                  onError={(e) => handleImageError(endpoint.endpoint, "request", e)}
                                />
                              )}
                            </div>
                            <div className="p-4 text-center bg-slate-100">
                              <h5 className="font-medium text-slate-700 mb-1">API Request Example</h5>
                            </div>
                          </div>
                          <div className="rounded-lg overflow-hidden border-2 border-emerald-300">
                            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                              {failedImages[`${endpoint.endpoint}-response`] || !endpoint.images?.response ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-emerald-50">
                                  <Settings className="text-emerald-400" size={32} />
                                  <p className="text-xs text-slate-500 mt-2">Image Not Available</p>
                                </div>
                              ) : (
                                <img
                                  src={process.env.PUBLIC_URL + endpoint.images.response}
                                  alt={`${endpoint.title} Response Example`}
                                  className="absolute inset-0 w-full h-full object-contain cursor-pointer"
                                  width="400"
                                  height="225"
                                  loading="lazy"
                                  onClick={() => openModal(process.env.PUBLIC_URL + endpoint.images.response)}
                                  onError={(e) => handleImageError(endpoint.endpoint, "response", e)}
                                />
                              )}
                            </div>
                            <div className="p-4 text-center bg-emerald-50">
                              <h5 className="font-medium text-slate-700 mb-1">API Response Example</h5>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discuss Your Next API Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's build scalable, intelligent solutions that drive real business value.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-3">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © {currentYear} {portfolioData.personal?.name || "Your Name"}. Built with React & passion for API development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InfoPage;