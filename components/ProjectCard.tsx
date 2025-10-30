"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Project } from "@/components/Projects";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Handle multiple images
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group"
      >
        <Card className="h-full overflow-hidden relative hover:border-accent-cyan/30 transition-all duration-300">
          {/* Gradient glow on hover */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.5 : 0 }}
          />

          <div className="relative bg-card rounded-lg">
            {/* Project Image Gallery */}
            <div 
              className="relative h-48 bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 overflow-hidden cursor-pointer"
              onClick={openLightbox}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {images[currentImageIndex] ? (
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-display text-gradient">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Expand Icon */}
              <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-lg bg-background-secondary/80 backdrop-blur-sm border border-accent-cyan/30">
                  <Expand size={16} className="text-accent-cyan" />
                </div>
              </div>

              {/* Image Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background-secondary/80 hover:bg-background-secondary p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} className="text-accent-cyan" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background-secondary/80 hover:bg-background-secondary p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} className="text-accent-cyan" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-accent-cyan w-4"
                            : "bg-foreground-muted/50 hover:bg-foreground-muted"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="backdrop-blur-sm">
                    Featured
                  </Badge>
                </div>
              )}
          </div>

          <CardHeader>
            <CardTitle className="text-foreground group-hover:text-gradient transition-all">
              {project.title}
            </CardTitle>
            <CardDescription className="line-clamp-3">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={tech}
                  variant={techIndex % 2 === 0 ? "default" : "outline"}
                  className="text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="gap-3">
            {project.liveUrl && (
              <Button
                variant="default"
                size="sm"
                className="flex-1 group/btn"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 group-hover/btn:rotate-45 transition-transform" size={16} />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 group/btn"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 group-hover/btn:scale-110 transition-transform" size={16} />
                  Code
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </motion.div>

    {/* Image Lightbox Modal */}
    <ImageLightbox
      images={images}
      initialIndex={currentImageIndex}
      isOpen={isLightboxOpen}
      onClose={() => setIsLightboxOpen(false)}
      projectTitle={project.title}
    />
  </>
  );
}
