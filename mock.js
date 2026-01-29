export const portfolioData = {
  personal: {
    name: "Cyprain Chidozie",
    title: "Application Manager & Full-Stack Developer",
    tagline: "Building intelligent APIs and scalable applications that solve real-world problems",
    location: "Brno, South Moravia, Czechia",
    email: "cyprainchidozie232@gmail.com",
    phone: "420774992576",
    linkedin: "https://www.linkedin.com/in/cyprain-chidozie-6092a71a7",
    github: "https://github.com/cypso05",
    portfolio: "https://cypso05.github.io/softwaredev/index.html"
  },
  
  about: {
    summary: "Highly motivated application manager and developer who specializes in front-end and back-end applications. I enjoy learning about new technologies as well as working with back-end frameworks like ASP.NET, Flask, Django, and Express.js (Node.js). I also enjoy working with front-end frameworks like React, Angular, Blazor and Bootstrap.",
    highlights: [
      "4+ years as an Application Manager at KBC Global Services",
      "7+ years of experience in software engineering and development",
      "Specialized in API development and automation solutions",
      "Developed 50+ secure endpoints across diverse domains",
      "Proficient in both front-end and back-end technologies"
    ]
  },

  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "C#", "SQL"] },
    { category: "Frontend", items: ["React.js", "React Native", "Angular", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Django", "Flask", "ASP.NET", "Node.js", "REST APIs"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "SQLite", "Database Administration"] },
    { category: "DevOps", items: ["Git", "SVN", "Docker", "Testing", "Performance Management"] },
    { category: "Specializations", items: ["API Development", "Automation", "Generative AI", "Full-Stack Development"] }
  ],

  experience: [
    {
      company: "KBC Global Services",
      role: "Application Manager",
      duration: "January 2024 - Present",
      location: "Brno, South Moravia, Czechia",
      highlights: [
        "Leading application lifecycle management and development initiatives",
        "Implementing business process automation solutions",
        "Managing API integrations and workflow optimization"
      ]
    },
    {
      company: "KBC Global Services",
      role: "Business Solutions Analyst",
      duration: "July 2022 - Present",
      location: "Brno, Czechia", 
      highlights: [
        "Robotic Process Automation using UiPath",
        "API integration and workflow analysis",
        "Business process analysis using Agile methodologies"
      ]
    },
    {
      company: "Personal Project",
      role: "Backend API Developer",
      duration: "August 2024 - Present",
      location: "MultiAPP AI Platform",
      highlights: [
        "Engineered 50+ high-performance asynchronous APIs using Quart",
        "Implemented JWT authentication and rate limiting",
        "Built AI-powered endpoints for text processing, file handling, and domain-specific tasks"
      ]
    },
    {
      company: "AT&T",
      role: "Network Technical Specialist", 
      duration: "July 2020 - June 2022",
      location: "Czechia",
      highlights: [
        "Network troubleshooting and IP configuration",
        "Customer support across various operating systems",
        "LAN and WAN network connectivity solutions"
      ]
    }
  ],

  
  projects: [
    {
      title: "MultiAPP AI Platform",
      description: "Comprehensive AI-powered API platform with 50+ endpoints for diverse business applications",
      tech: ["Python", "Quart", "JWT", "Async/Await"],
      link: "/more-info",
      category: "AI Platform"
    },
    {
      title: "Herbal Drugs RESTful API",
      description: "Medical API with European Medical Agency (EMA) data integration",
      tech: ["Python", "REST API", "Medical Data"],
      link: "https://pharmaceutical-herbs.onrender.com/swagger/index.html",
      category: "Healthcare"
    },
    {
      title: "Chemical Drugs & Diseases API", 
      description: "NHS.uk data integration for pharmaceutical information",
      tech: ["Python", "REST API", "Healthcare"],
      link: "https://medicinesapi.onrender.com/api-docs/",
      category: "Healthcare"
    },
    {
      title: "Business Process Automation",
      description: "RPA solutions using UiPath for workflow optimization",
      tech: ["UiPath", "VBA", "Process Analysis"],
      link: "#",
      category: "Automation"
    }
  ],

  apiEndpoints: {
    "AI-Powered Automation & Code Intelligence": [
      {
        endpoint: "/api-reference",
        title: "API Reference Generator (English)",
        problem: "Generating API reference documentation is time-consuming and error-prone.",
        solution: "Automates the creation of API reference documentation in English using AI.",
        impact: "Saves time and ensures accurate, standardized API documentation.",
        tech: ["Python", "AI/ML", "Documentation"],
        images: {
          request: "/images/API/generateAPIrefEN.png",
          response: "/images/API/generateAPIrefENresult.png"
        }
      },
      {
        endpoint: "/generate-full-doc",
        title: "AI Documentation Generator",
        problem: "Technical documentation is time-consuming and often inconsistent across development teams.",
        solution: "A secure API that uses fine-tuned LLM to automatically generate comprehensive, formatted documentation from code snippets.",
        impact: "Reduces manual documentation work by 80%, ensuring consistency and saving developer time.",
        tech: ["Python", "AI/ML", "Documentation"],
        images: {
          request: "/images/GenerateFullcodeDoc/Generate_fulldoc.png",
          response: "/images/GenerateFullcodeDoc/fulldoc_result.png"
        }
      },
      {
        endpoint: "/code/refactor", 
        title: "Intelligent Code Refactoring System",
        problem: "Legacy code is difficult and expensive to maintain, requiring manual optimization.",
        solution: "An AI-powered system that analyzes, optimizes, and explains code changes in real-time.",
        impact: "Improves codebase quality and maintainability while providing learning opportunities.",
        tech: ["Code Analysis", "AI", "Optimization"],
        images: {
          request: "/images/refactor/coderefactor.png",
          response: "/images/refactor/refactorresult.png"
        }
      },
      {
        endpoint: "/generate-code",
        title: "Natural Language to Code Generator", 
        problem: "Converting business requirements to functional code requires significant development time.",
        solution: "Translates natural language prompts into executable code across multiple programming languages.",
        impact: "Accelerates prototyping and development by automating initial code generation.",
        tech: ["NLP", "Code Generation", "Multi-language"],
        images: {
          request: "/images/code_generate/CodeGeneration_request.png",
          response: "/images/code_generate/CodeGeneration_result.png"
        }
      }
    ],
    "Data & Database Expertise": [
      {
        endpoint: "/sql/validate",
        title: "SQL Query Validation Engine",
        problem: "Database queries often contain errors and performance issues that are hard to detect.",
        solution: "Real-time SQL validation with optimization suggestions and educational feedback.",
        impact: "Used for training and database debugging, improving query quality and performance.",
        tech: ["SQL", "Database", "Validation"],
        images: {
          request: "/images/sqlValidate/SQLvalidaterequest.png",
          response: "/images/sqlValidate/SQLvalidateresult.png"
        }
      },
      {
        endpoint: "/sql/performance",
        title: "Database Performance Advisor",
        problem: "Slow database queries increase latency and operational costs significantly.",
        solution: "Analyzes SQL queries and generates index and optimization guides to reduce latency.",
        impact: "Reduces query execution time and infrastructure costs through intelligent optimization.",
        tech: ["Performance", "Database Optimization", "Analytics"],
        images: {
          request: "/images/sqlperformance/sqlrequest.png",
          response: "/images/sqlperformance/SQLresult.png"
        }
      },
      {
        endpoint: "/sql/orm-comparison", 
        title: "SQL to ORM Code Bridge",
        problem: "Developers struggle to convert between SQL queries and application-level ORM code.",
        solution: "Generates equivalent ORM code across multiple frameworks from SQL queries.",
        impact: "Simplifies developer onboarding and reduces context switching between SQL and application code.",
        tech: ["ORM", "Code Generation", "Multi-framework"],
        images: {
          request: "/images/orm/SQLormcompare.png",
          response: "/images/orm/SQLormcompareresult.png"
        }
      }
    ],
    "Multi-Domain Business Solutions": [
      {
        endpoint: "/finance/report-analysis",
        title: "Financial Report Analysis System", 
        problem: "Financial reports require expert analysis for risk assessment and compliance verification.",
        solution: "Automated system that extracts insights, calculates risk factors, and ensures regulatory compliance.",
        impact: "Automates core financial workflows, reducing analysis time and improving accuracy.",
        tech: ["Finance", "Risk Analysis", "Compliance"],
        images: {
          request: "/images/financereport/Finance_report.png",
          response: "/images/financereport/Finance_result.png"
        }
      },
      {
        endpoint: "/medical/simplify",
        title: "Medical Jargon Simplification Engine",
        problem: "Complex medical reports are difficult for patients to understand, affecting health literacy.",
        solution: "Converts dense medical terminology into patient-friendly explanations while maintaining accuracy.", 
        impact: "Improves patient communication and health literacy by making medical information accessible.",
        tech: ["Healthcare", "NLP", "Patient Communication"],
        images: {
          request: "/images/medical/medical_request.png",
          response: "/images/medical/medicalresult.png"
        }
      },
      {
        endpoint: "/legal/analyze",
        title: "Legal Document Analysis Tool",
        problem: "Legal documents contain complex language and potential risks that are hard to identify quickly.",
        solution: "Identifies key clauses, potential risks, and summarizes legalese into plain language.",
        impact: "Enables faster contract review and risk assessment for legal professionals and businesses.",
        tech: ["Legal Tech", "Document Analysis", "Risk Assessment"],
        images: {
          request: "/images/legalanalyse/legalrequest.png",
          response: "/images/legalanalyse/legalresult.png"
        }
      }
    ],
    "Content & Communication Systems": [
      {
        endpoint: "/support/multilingual",
        title: "Multilingual Customer Support AI",
        problem: "Global businesses need scalable customer support across multiple languages and cultures.",
        solution: "AI system that adapts tone and response based on sentiment analysis for multilingual support.",
        impact: "Serves global user base with culturally-aware, contextual customer service automation.",
        tech: ["NLP", "Multilingual", "Sentiment Analysis"],
        images: {
          request: "/images/support_multilingual/mulsupportresult.png",
          response: "/images/support_multilingual/mulsupportresult.png"
        }
      },
      {
        endpoint: "/content/generate-multilingual",
        title: "Multi-Region Content Generation Pipeline", 
        problem: "Creating SEO-optimized, culturally-appropriate content for global markets is resource-intensive.",
        solution: "Automated content generation that produces culturally-aware marketing copy in 10+ languages.",
        impact: "Scales content marketing efforts globally while maintaining cultural sensitivity and SEO optimization.",
        tech: ["Content Generation", "SEO", "Localization"],
        images: {
          request: "/images/multiAPI/multilingualAPIref.png",
          response: "/images/multiAPI/multilingualAPIrefresult.png"
        }
      },
      {
        endpoint: "/cv/generate-skills",
        title: "AI-Powered CV Builder",
        problem: "Job seekers struggle to tailor their resumes for specific roles and highlight relevant skills.",
        solution: "Analyzes target roles and generates tailored professional summaries, skills, and achievements.",
        impact: "Improves job application success rates by creating targeted, role-specific professional profiles.",
        tech: ["Career Tech", "AI Matching", "Professional Development"],
        images: {
          request: "/images/CV/CV_request.png",
          response: "/images/CV/CVresult.png"
        }
      }
    ],
    "Infrastructure & Architecture": [
      {
        endpoint: "/process/structured", 
        title: "Structured Data Processing Pipeline",
        problem: "Enterprise systems need robust handling of complex, nested documents and metadata.",
        solution: "Advanced pipeline for processing structured data with support for nested documents and rich metadata.",
        impact: "Enables enterprise-grade content management with reliable data processing and validation.",
        tech: ["Data Processing", "Enterprise", "Structured Data"],
        images: {
          request: "/images/content_generate/content_request.png",
          response: "/images/content_generate/content_result.png"
        }
      },
      {
        endpoint: "/health",
        title: "System Health Monitoring",
        problem: "Production systems require reliable health checks to ensure uptime and meet SLA requirements.",
        solution: "Comprehensive health check endpoints with detailed system status and performance metrics.",
        impact: "Ensures system reliability and provides real-time monitoring for maintaining service quality.",
        tech: ["Monitoring", "DevOps", "System Health"],
        images: {
          request: "/images/healthcheck/health_request.png",
          response: "/images/healthcheck/health_result.png"
        }
      },
      {
        endpoint: "/metrics",
        title: "Real-time Analytics & Metrics System", 
        problem: "Systems need observable performance metrics for capacity planning and optimization decisions.",
        solution: "Real-time metrics collection showing uptime, memory usage, and processing statistics.",
        impact: "Informs capacity planning and system optimization through detailed performance analytics.",
        tech: ["Analytics", "Performance", "Monitoring"],
        images: {
          request: "/images/metrics/metricsrequest.png",
          response: "/images/metrics/matricsresult.png"
        }
      }
    ]
  }
};

export default portfolioData;
