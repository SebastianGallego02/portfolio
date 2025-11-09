"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { GothicOrnament } from "./GothicOrnament";
import { BackButton } from "./BackButton";
import { FloatingParticles } from "./FloatingParticles";

interface JourneyProps {
  onBack: () => void;
}

interface TimelineEntry {
  dateRange: string;
  title: string;
  description: string;
}

export function Journey({ onBack }: JourneyProps) {
  const ref = useRef(null);
  const isInView = true;

  const educationEntries: TimelineEntry[] = [
    {
      dateRange: "2020 - Current",
      title: "Computer and Systems Engineering - Caldas University",
      description: "Studying Computer and Systems Engineering in Manizales, Colombia. Gaining comprehensive knowledge in software development, systems architecture, and engineering principles.",
    },
    {
      dateRange: "2018 - 2019",
      title: "Industrial Control Professional Technician - UAM",
      description: "Completed Professional Technician program in Industrial Control at Autonomous University of Manizales (UAM), focusing on automation and control systems.",
    },
  ];

  const experienceEntries: TimelineEntry[] = [
    {
      dateRange: "Jan 2025 - Current",
      title: "Software Developer - Birdyback (Freelance)",
      description: "Developed mobile interfaces using React Native and Expo, focusing on user experience. Implemented modular APIs and integrated external services using SOLID principles. Managed global app state using Redux. Deployed multiple projects with Docker containers on Linode servers.",
    },
    {
      dateRange: "May 2024 - Dec 2024",
      title: "Configuration Analyst - Datasoft Ingeniería Ltda",
      description: "Developed queries, triggers, stored procedures and functions in PostgreSQL. Created reports using PHP and FPDF library. Worked on a project focused on tax management for the public sector in Manizales, Colombia.",
    },
    {
      dateRange: "Dec 2023 - May 2024",
      title: "Backend Developer - Freelancer at Fiverr",
      description: "Developed RESTful APIs using Spring Boot, following best practices in clean architecture. Implemented authentication and authorization with Spring Security and JWT. Integrated with relational databases using JPA/Hibernate, optimizing queries for performance. Deployed backend services in containerized environments with Docker.",
    },
    {
      dateRange: "May 2023 - Dec 2023",
      title: "Fullstack Developer - Panaltek",
      description: "Designed mockups in Figma, applying good UI/UX practices. Developed with ReactJS, Tailwind and ExpressJS for the backend. Created an enterprise platform focused on clear communication of services and brand, prioritizing user experience.",
    },
    {
      dateRange: "Jun 2022 - Nov 2022",
      title: "Developer - Freelancer (Unity Game)",
      description: "Performed MySQL database normalization and restructuring. Developed scenes in Unity with C#. Worked on a project with social focus: identify and improve disabilities in children through game mechanics.",
    },
  ];

  return (
    <section
      id="journey"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-[#0a0a0f] relative overflow-x-hidden overflow-y-auto"
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
            My <span className="text-purple-400">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h3 className="text-2xl text-gray-100 mb-8 text-center md:text-left">Education</h3>
            
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/30" />
            
            <div className="space-y-8 relative">
              {educationEntries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-purple-500 border-2 border-[#0a0a0f] z-10" />
                  
                  {/* Entry card */}
                  <div className="bg-gradient-to-br from-purple-950/10 to-transparent border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-colors relative">
                    <GothicOrnament position="top-right" className="opacity-20" />
                    <div className="text-purple-400 text-sm mb-2">{entry.dateRange}</div>
                    <h4 className="text-gray-100 text-lg mb-3">{entry.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{entry.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h3 className="text-2xl text-gray-100 mb-8 text-center md:text-left">Experience</h3>
            
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/30" />
            
            <div className="space-y-8 relative">
              {experienceEntries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-purple-500 border-2 border-[#0a0a0f] z-10" />
                  
                  {/* Entry card */}
                  <div className="bg-gradient-to-br from-purple-950/10 to-transparent border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-colors relative">
                    <GothicOrnament position="top-right" className="opacity-20" />
                    <div className="text-purple-400 text-sm mb-2">{entry.dateRange}</div>
                    <h4 className="text-gray-100 text-lg mb-3">{entry.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{entry.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

