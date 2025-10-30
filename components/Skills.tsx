"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    {
      category: "Programming",
      technologies: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "PHP",
        "XML",
      ],
    },
    {
      category: "Frameworks & Tools",
      technologies: [
        "Next.js",
        "React",
        "Flask",
        "Android Studio",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
        "Git",
        "Docker",
        "Selenium",
        "PyTorch",
        "VS Code",
      ],
    },
    {
      category: "AI/ML & Data",
      technologies: [
        "Machine Learning",
        "NLP",
        "PyTorch",
        "Sentence-Transformers",
        "EasyOCR",
        "NLTK",
        "Semantic Search",
        "OCR",
        "Random Forest",
        "Pandas",
        "NumPy",
      ],
    },
    {
      category: "Databases & Others",
      technologies: [
        "Firebase",
        "Firestore",
        "MongoDB",
        "MySQL",
        "DSA",
        "OOP",
        "DBMS",
        "REST APIs",
        "Multiprocessing",
        "Parallel Processing",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, categoryIndex) => (
            <AnimatedSection key={skillSet.category} delay={categoryIndex * 0.2}>
              <div className="glass p-8 rounded-lg h-full hover:border-accent-cyan/30 transition-all duration-300">
                <h3 className="font-display font-semibold text-2xl mb-6 text-accent-cyan">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.2 + techIndex * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge
                        variant={techIndex % 2 === 0 ? "default" : "secondary"}
                        className="text-sm py-1.5 px-3 cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional stats or visualization could go here */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Current CGPA", value: "8.32" },
              { label: "Projects Completed", value: "6+" },
              { label: "Technologies", value: "35+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 border border-accent-cyan/10"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
