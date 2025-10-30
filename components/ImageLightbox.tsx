'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  projectTitle,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') previousImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-background-secondary/80 hover:bg-background-secondary backdrop-blur-sm border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all group"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-foreground group-hover:text-accent-cyan transition-colors" />
          </button>

          {/* Project Title */}
          <div className="absolute top-4 left-4 z-50">
            <div className="px-4 py-2 rounded-lg bg-background-secondary/80 backdrop-blur-sm border border-accent-cyan/20">
              <p className="text-sm font-mono text-accent-cyan">
                {currentIndex + 1} / {images.length}
              </p>
              <h3 className="text-lg font-display font-semibold text-foreground">
                {projectTitle}
              </h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-background-secondary/80 hover:bg-background-secondary backdrop-blur-sm border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all group"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} className="text-foreground group-hover:text-accent-cyan transition-colors" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-background-secondary/80 hover:bg-background-secondary backdrop-blur-sm border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all group"
                aria-label="Next image"
              >
                <ChevronRight size={28} className="text-foreground group-hover:text-accent-cyan transition-colors" />
              </button>
            </>
          )}

          {/* Main Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full max-h-[85vh] aspect-auto">
                <Image
                  src={images[currentIndex]}
                  alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                  width={1920}
                  height={1080}
                  className="rounded-lg object-contain w-full h-full max-h-[85vh] border-2 border-accent-cyan/30 shadow-2xl"
                  style={{ maxHeight: '85vh' }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-full px-4">
              <div className="flex gap-2 justify-center overflow-x-auto pb-2 px-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex
                        ? 'border-accent-cyan scale-110'
                        : 'border-accent-cyan/20 hover:border-accent-cyan/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Keyboard Hints */}
          <div className="absolute bottom-4 left-4 z-50">
            <div className="px-3 py-2 rounded-lg bg-background-secondary/60 backdrop-blur-sm border border-accent-cyan/10">
              <p className="text-xs text-foreground-muted font-mono">
                ESC to close • ← → to navigate
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
