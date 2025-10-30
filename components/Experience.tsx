'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Sumago Infotech Private Limited",
      position: "Python Development Intern",
      location: "Remote",
      duration: "1.5 months",
      description: [
        "Completed comprehensive internship focused on Python and web development",
        "Learned and implemented two tech stacks: Python (Flask) and PHP for web applications",
        "Developed a healthcare chatbot using Python that provides answers to health-related queries",
        "Gained hands-on experience in building AI-powered conversational interfaces",
        "Worked on real-world projects enhancing problem-solving and development skills"
      ],
      technologies: ["Python", "Flask", "PHP", "NLP", "Web Development", "AI/ML"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <div className="flex items-center gap-3">
              <Briefcase className="text-accent-cyan" size={32} />
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                <span className="text-gradient">Experience</span>
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)}>
              <Card className="group hover:border-accent-cyan/50 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-accent-cyan font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 md:text-right">
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <Calendar size={16} className="text-accent-violet" />
                        <span className="text-sm font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <MapPin size={16} className="text-accent-violet" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-foreground-muted"
                      >
                        <span className="text-accent-cyan mt-1.5">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1 text-xs font-mono bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline decoration */}
        <div className="absolute left-8 top-32 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent hidden lg:block" />
      </div>
    </section>
  );
}
