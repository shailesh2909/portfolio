"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string | string[]; // Can now accept single image or array of images
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "VitalNex - Student Daily Needs",
      description:
        "An innovative Android application simplifying daily necessities for students and travelers. Features room rental services with comprehensive listings, mess services comparison, medical assistance access, and secure Firebase authentication. Successfully implemented as a final year diploma project with high user adoption and engagement.",
      technologies: ["Java", "XML", "Firebase Realtime Database", "Firebase Authentication", "Android Studio"],
      image: [
        "/images/vitalnex-1.jpg",
        "/images/vitalnex-2.jpg",
        "/images/vitalnex-3.jpg",
        "/images/vitalnex-4.jpg",
        "/images/vitalnex-5.jpg",
        "/images/vitalnex-6.jpg",
        "/images/vitalnex-7.jpg",
        "/images/vitalnex-8.jpg",
        "/images/vitalnex-9.jpg",
      ],
      githubUrl: "https://github.com/shailesh2909/VitalNex-Students-Daily-Needs-Android-Application",
      featured: true,
    },
    {
      title: "Document Intelligence Engine - Adobe Hackathon 2025",
      description:
        "Advanced NLP-powered document analysis system built for Adobe Hackathon 2025 (Round 2). Uses semantic search with sentence-transformers for context-aware query understanding, hybrid text extraction combining pdfplumber and EasyOCR for digital and scanned PDFs, multiprocessing for parallel document processing achieving sub-60s performance, and Docker containerization for seamless deployment.",
      technologies: ["Python", "NLP", "PyTorch", "Sentence-Transformers", "EasyOCR", "Docker", "OCR", "Semantic Search", "NLTK", "Multiprocessing"],
      image: ["/images/adobe-hackathon.jpg"],
      githubUrl: "https://github.com/shailesh2909/challenge1b",
      featured: true,
    },
    {
      title: "EduMark - Smart Attendance Management",
      description:
        "A comprehensive smart attendance management system with role-based dashboards for administrators, faculty, and students. Features real-time attendance tracking, CSV import, analytics dashboard, secure authentication, and Firestore real-time sync for instant data updates.",
      technologies: ["Next.js 14", "TypeScript", "Firebase", "Firestore", "Tailwind CSS", "React 18"],
      image: [
        "/images/edumark-1.jpg",  // Landing page
        "/images/edumark-2.jpg",  // Dashboard/Features
        "/images/edumark-3.jpg",  // Admin panel
        "/images/edumark-4.jpg",  // Faculty interface
        "/images/edumark-5.jpg",  // Student view
        "/images/edumark-6.jpg",  // Attendance marking
        "/images/edumark-7.jpg",  // Analytics
        "/images/edumark-8.jpg",  // Reports
        "/images/edumark-9.jpg",  // CSV Import
        "/images/edumark-10.jpg", // Additional features
      ],
      githubUrl: "https://github.com/shailesh2909/Smart-Attendance-Management-System-EduMark-",
      featured: true,
    },
    {
      title: "MediPlus - AI-Powered Healthcare Platform",
      description:
        "An intelligent telemedicine platform connecting patients with verified doctors. Features AI disease prediction using Random Forest ML, automatic severity scoring for prioritizing care, nearest doctor search, doctor credential verification via web scraping, real-time appointment booking with Firebase, and global timezone support.",
      technologies: ["Python", "Flask", "Firebase Firestore", "Machine Learning", "Selenium", "Random Forest", "HTML/CSS", "JavaScript"],
      image: [
        "/images/mediplus-1.jpg",  // HomePage
        "/images/mediplus-2.jpg",  // Appointment Form 1 (Patient Info)
        "/images/mediplus-3.jpg",  // Appointment Form 2 (Symptoms)
        "/images/mediplus-4.jpg",  // Patient Registration
        "/images/mediplus-5.jpg",  // Patient Profile
        "/images/mediplus-6.jpg",  // Doctor Registration
        "/images/mediplus-7.jpg",  // Doctor Profile
        "/images/mediplus-8.jpg",  // Doctors Page
        "/images/mediplus-9.jpg",  // Nearest Doctor
        "/images/mediplus-10.jpg", // Prescription Modal
        "/images/mediplus-11.jpg", // Firebase Backend
        "/images/mediplus-12.jpg", // Terminal Output
        "/images/mediplus-13.jpg", // Workflow Diagram
      ],
      liveUrl: "https://mediplus-1-h3zu.onrender.com/",
      githubUrl: "https://github.com/shailesh2909/MEDIPLUS",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my projects, skills, and achievements. Built with Next.js and featuring smooth animations, dark mode, and an elegant design with animated backgrounds, image lightbox galleries, and interactive UI elements.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: [
        "/images/portfolio-1.jpg", // Contact section
        "/images/portfolio-2.jpg", // Hero section
        "/images/portfolio-3.jpg", // About/Skills
        "/images/portfolio-4.jpg", // Projects gallery
        "/images/portfolio-5.jpg", // Experience section
        "/images/portfolio-6.jpg", // Full page view
      ],
      liveUrl: "https://shailesh-portfolio.vercel.app",
      githubUrl: "https://github.com/shailesh2909/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto mb-6" />
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              A selection of projects that showcase my skills in building modern,
              scalable, and user-friendly applications.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
