import React, { useState } from "react";
import { Mail, Phone, LinkedinIcon, Github, MapPin, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import portfolioData from "../mock";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { personal } = portfolioData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Connect with me",
      href: personal.linkedin,
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: personal.github,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to build something amazing? I'm always open to discussing new opportunities, 
            interesting projects, and innovative API solutions.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-blue-200">
            <MapPin size={20} />
            <span>{personal.location}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${method.color} rounded-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{method.label}</div>
                          <div className="text-blue-200 text-sm">{method.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-medium text-white">Available for Projects</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Currently accepting new projects and consulting opportunities. 
                Specializing in API development, automation solutions, and full-stack applications.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-emerald-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-emerald-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-emerald-400"
                    required
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-emerald-400 resize-none"
                    required
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">24h</div>
              <div className="text-blue-200 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-blue-200 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Remote</div>
              <div className="text-blue-200 text-sm">Work Ready</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-300 mb-1">Global</div>
              <div className="text-blue-200 text-sm">Collaboration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;