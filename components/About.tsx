"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./ui/figma/ImageWithFallback";
import { Code2, Palette, Zap } from "lucide-react";
import { GothicOrnament } from "./GothicOrnament";
import { BackButton } from "./BackButton";
import { FloatingParticles } from "./FloatingParticles";

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
  const ref = useRef(null);
  const isInView = true;

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Fullstack Development",
      description: "Building scalable applications from backend to frontend",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating dynamic and usable interfaces with responsive design",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Microservices & DevOps",
      description: "Designing modular architectures and deploying with Docker",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] relative overflow-x-hidden overflow-y-auto"
    >
      <FloatingParticles />
      <BackButton onBack={onBack} />
      
      {/* Ornamentos góticos en las 4 esquinas */}
      <GothicOrnament position="bottom-left" size="xlarge" className="opacity-90" />
      <GothicOrnament position="bottom-right" size="xlarge" className="opacity-90" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-100 mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 shadow-2xl shadow-purple-500/10">
              <GothicOrnament position="top-left" />
              <GothicOrnament position="bottom-right" />
              <ImageWithFallback
                src="/images/yo.jpg"
                alt="Sebastian Gallego Loaiza"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              Fullstack Developer with experience building scalable web and mobile applications 
              using React, Next.js, Node.js, and Spring Boot. I specialize in designing modular 
              architectures and deploying microservices with Docker and Linode.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I've led projects that improved API efficiency by 30% and enhanced user engagement 
              through responsive UI/UX design. My experience includes development of RESTful APIs, 
              fullstack applications from backend services to frontend interfaces, and creation of 
              dynamic interfaces with React and JavaScript.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Bilingual (English/Spanish), I thrive in agile, multicultural teams and remote 
              environments. I apply software design principles and best programming practices to 
              ensure maintainable and scalable code.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-purple-950/20 to-transparent border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-colors group relative"
            >
              <GothicOrnament position="top-right" className="opacity-20 mt-4" />
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
