"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Avatar/Image with floating tech symbols */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-block relative"
        >
          {/* Floating Tech Symbols */}
          <motion.div
            className="absolute -top-4 -left-4 text-3xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-accent-cyan">{"</>"}</span>
          </motion.div>

          <motion.div
            className="absolute -top-2 -right-6 text-2xl"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <span className="text-accent-violet">{"{ }"}</span>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-6 text-2xl"
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <span className="text-accent-cyan opacity-80">{"<>"}</span>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 text-3xl"
            animate={{
              y: [0, 8, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            <span className="text-accent-violet opacity-90">{"[ ]"}</span>
          </motion.div>

          {/* Top right - Python/AI symbol */}
          <motion.div
            className="absolute top-0 right-0 text-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-accent-cyan">{"λ"}</span>
          </motion.div>

          {/* Bottom left - Database symbol */}
          <motion.div
            className="absolute bottom-2 left-0 text-xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <span className="text-accent-violet">{"⚡"}</span>
          </motion.div>

          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full bg-background-secondary rounded-full border-2 border-accent-cyan/30 flex items-center justify-center overflow-hidden ring-2 ring-accent-cyan/20 ring-offset-4 ring-offset-background-primary">
              <Image
                src="/images/profile.jpg"
                alt="Shailesh Suryawanshi"
                fill
                className="object-cover"
                priority
                sizes="160px"
              />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-accent-cyan font-mono text-sm md:text-base mb-4"
        >
          {"Hi, my name is"}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
        >
          <span className="text-gradient">Shailesh Suryawanshi</span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground-muted mb-6"
        >
          I build innovative solutions with AI & Mobile Tech
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          An Electronics & Telecommunication Engineering student specializing in Android development,
          web applications, and AI-powered solutions. Passionate about creating technology that makes a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="group"
            asChild
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: Github, href: "https://github.com/shailesh2909", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shailesh-suryawanshi-6989492a1/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:shaileshsuryawanshi443103@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent-cyan transition-colors p-3 rounded-full hover:bg-accent-cyan/10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-accent-cyan/30 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-accent-cyan rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
