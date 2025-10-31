"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/shailesh2909",
      color: "hover:text-accent-cyan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shailesh-suryawanshi-6989492a1/",
      color: "hover:text-accent-cyan",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:shaileshsuryawanshi443103@gmail.com",
      color: "hover:text-accent-cyan",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-background-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto mb-6" />
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Let&apos;s build something amazing
              together!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass p-8 md:p-12 rounded-lg text-center">
            <p className="text-xl text-foreground-muted mb-8">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            <Button
              size="lg"
              className="group mb-12"
              asChild
            >
              <a href="mailto:shaileshsuryawanshi443103@gmail.com">
                <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Say Hello
              </a>
            </Button>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-foreground-muted ${social.color} transition-colors p-3 rounded-full hover:bg-accent-cyan/10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-2 text-foreground-muted text-sm">
              <span>Designed & Built with</span>
              <Heart size={16} className="text-accent-violet fill-accent-violet animate-pulse" />
              <span>by Shailesh Suryawanshi</span>
            </div>
            <p className="text-foreground-muted/60 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
