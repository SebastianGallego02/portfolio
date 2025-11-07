"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ImageWithFallback } from "./ui/figma/ImageWithFallback";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { GothicOrnament } from "./GothicOrnament";
import { BackButton } from "./BackButton";
import { FloatingParticles } from "./FloatingParticles";

interface ProjectsProps {
  onBack: () => void;
}

export function Projects({ onBack }: ProjectsProps) {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isInView = true;

  // Función para verificar si se puede hacer scroll
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Función para hacer scroll hacia la izquierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Ancho de una tarjeta + gap
        behavior: 'smooth'
      });
    }
  };

  // Función para hacer scroll hacia la derecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Ancho de una tarjeta + gap
        behavior: 'smooth'
      });
    }
  };

  // Efecto para verificar el scroll inicial
  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const projects = [
    {
      title: "Task Manager",
      description:
        "A simple task manager with a modern UI and a clean design.",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "/images/Task Manager.png",
      demoUrl: "#",
      codeUrl: "https://github.com/SebastianGallego02/Notes_app",
    },
    {
      title: "Computer Simulator",
      description:
        "A program that simulates the functioning of a computer at a low level.",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "/images/Computer simulator.png",
      demoUrl: "https://computersimulator.netlify.app/",
      codeUrl: "#",
    },
    {
      title: "Mystic Portfolio",
      description:
        "A creative portfolio template with stunning parallax effects and particle animations.",
      tags: ["React", "Three.js", "GSAP"],
      image: "coding workspace night",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Void Chat",
      description:
        "Real-time chat application with end-to-end encryption and beautiful UI.",
      tags: ["Socket.io", "Node.js", "MongoDB"],
      image: "abstract dark blue",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Crystal CMS",
      description:
        "Headless CMS with intuitive interface for content creators and developers.",
      tags: ["Strapi", "GraphQL", "React"],
      image: "dark fantasy forest",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Nebula Tracker",
      description:
        "Project management tool with kanban boards and team collaboration features.",
      tags: ["Vue.js", "Firebase", "Vuetify"],
      image: "coding workspace night",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-[#0a0a0f] relative overflow-x-hidden overflow-y-auto"
    >
      <FloatingParticles />
      <BackButton onBack={onBack} />
      
      {/* Ornamentos góticos en las 4 esquinas */}
      <GothicOrnament position="top-left" size="xlarge" className="opacity-90" />
      <GothicOrnament position="top-right" size="xlarge" className="opacity-90" />
      <GothicOrnament position="bottom-left" size="xlarge" className="opacity-90" />
      <GothicOrnament position="bottom-right" size="xlarge" className="opacity-90" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-100 mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing various technologies and
            design approaches.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Flecha izquierda */}
          <motion.button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-[#0a0a0f] to-transparent flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-100 hover:opacity-80 cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
          >
            <ChevronLeft 
              size={24} 
              className={`transition-colors ${
                canScrollLeft ? 'text-purple-400' : 'text-gray-500'
              }`} 
            />
          </motion.button>

          {/* Flecha derecha */}
          <motion.button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-l from-[#0a0a0f] to-transparent flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-100 hover:opacity-80 cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
          >
            <ChevronRight 
              size={24} 
              className={`transition-colors ${
                canScrollRight ? 'text-purple-400' : 'text-gray-500'
              }`} 
            />
          </motion.button>

          {/* Horizontal scroll container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth-horizontal pb-4"
          >
            <div className="flex gap-6 min-w-max px-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-purple-950/10 to-transparent border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 flex-shrink-0 w-80 scroll-snap-start"
                >
                  <GothicOrnament position="bottom-right" className="opacity-20 z-10" />
                  
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={project.image || ""}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-gray-100 mb-3 text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.codeUrl && (
                        <a 
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6"
          >
            <p className="text-gray-500 text-sm tracking-widest" style={{ fontFamily: "serif", letterSpacing: "0.1em" }}>
              ← SCROLL TO EXPLORE ALL PROJECTS →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
