"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Code2, Sparkles, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Android Development",
      description: "Building native Android apps with Java and modern architecture",
    },
    {
      icon: Sparkles,
      title: "AI Solutions",
      description: "Developing AI-powered applications using Python and Flask",
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Creating innovative solutions for real-world challenges",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I'm currently pursuing Electronics and Telecommunication Engineering at SCTR's Pune Institute 
                of Computer Technology with a CGPA of 8.32. My journey started at Government Polytechnic Khamgaon, 
                where I graduated with 91.94% in Computer Science and Engineering, building a strong foundation 
                in both hardware and software.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I specialize in Android development, AI-powered web applications, and machine learning solutions. 
                Recently, I was shortlisted for Adobe Hackathon 2025 Round 2, where I built an advanced Document 
                Intelligence Engine using NLP and semantic search. My final year diploma project, VitalNex, was an 
                innovative Android app helping students and travelers find essential services. I've built MediPlus, 
                an AI-powered telemedicine platform with disease prediction using Random Forest ML and doctor verification, 
                and EduMark, a smart attendance management system with Next.js and Firebase.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                When I'm not coding, you'll find me exploring design, photography, and cinematics. I ranked 
                1st in the Cyber Security Workshop Quiz at Pursuit 2023, and I'm always eager to learn new 
                technologies and contribute to innovative projects.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass p-6 rounded-lg hover:glow-cyan transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
