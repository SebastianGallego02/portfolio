"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { GothicOrnament } from "./GothicOrnament";
import { BackButton } from "./BackButton";
import { FloatingParticles } from "./FloatingParticles";
import {
  Code2,
  Database,
  FileCode2,
  Figma,
  GitBranch,
  Globe,
  Laptop,
  Layout,
  Palette,
  Server,
  Sparkles,
  Terminal,
  Cloud,
  TestTube,
} from "lucide-react";

interface SkillsProps {
  onBack: () => void;
}

export function Skills({ onBack }: SkillsProps) {
  const ref = useRef(null);
  const isInView = true;

  const skills = [
    { name: "JavaScript", icon: <Laptop className="w-8 h-8" /> },
    { name: "TypeScript", icon: <FileCode2 className="w-8 h-8" /> },
    { name: "Python", icon: <Code2 className="w-8 h-8" /> },
    { name: "Java", icon: <Code2 className="w-8 h-8" /> },
    { name: "React.js", icon: <Code2 className="w-8 h-8" /> },
    { name: "Next.js", icon: <Layout className="w-8 h-8" /> },
    { name: "Angular", icon: <Layout className="w-8 h-8" /> },
    { name: "NestJS", icon: <Terminal className="w-8 h-8" /> },
    { name: "ExpressJS", icon: <Terminal className="w-8 h-8" /> },
    { name: "Spring Boot", icon: <Server className="w-8 h-8" /> },
    { name: "FastAPI", icon: <Server className="w-8 h-8" /> },
    { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
    { name: "Oracle", icon: <Database className="w-8 h-8" /> },
    { name: "SQL", icon: <Database className="w-8 h-8" /> },
    { name: "Docker", icon: <Server className="w-8 h-8" /> },
    { name: "Linode", icon: <Cloud className="w-8 h-8" /> },
    { name: "GCP", icon: <Cloud className="w-8 h-8" /> },
    { name: "Git", icon: <GitBranch className="w-8 h-8" /> },
    { name: "GitHub", icon: <GitBranch className="w-8 h-8" /> },
    { name: "Figma", icon: <Figma className="w-8 h-8" /> },
    { name: "CI/CD", icon: <Sparkles className="w-8 h-8" /> },
    { name: "Jest", icon: <TestTube className="w-8 h-8" /> },
    { name: "JUnit", icon: <TestTube className="w-8 h-8" /> },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] relative overflow-x-hidden overflow-y-auto"
    >
      <FloatingParticles />
      <BackButton onBack={onBack} />
      
      {/* Ornamentos góticos en las 4 esquinas */}
      <GothicOrnament position="top-left" size="xlarge" className="opacity-90" />
      <GothicOrnament position="top-right" size="xlarge" className="opacity-90" />
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
            Skills & <span className="text-purple-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="relative bg-gradient-to-br from-purple-950/20 to-transparent border border-purple-500/20 rounded-lg p-8 md:p-12">
          <GothicOrnament position="top-left" />
          <GothicOrnament position="top-right" />
          <GothicOrnament position="bottom-left" />
          <GothicOrnament position="bottom-right" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:from-purple-500/10 transition-all group cursor-default"
              >
                <div className="text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                  {skill.icon}
                </div>
                <span className="text-gray-300 text-center group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React Native",
              "Expo",
              "Redux",
              "JWT",
              "Spring Security",
              "JPA/Hibernate",
              "PHP",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-purple-500/5 text-purple-400/60 rounded-full border border-purple-500/10 hover:border-purple-500/30 hover:text-purple-400 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
