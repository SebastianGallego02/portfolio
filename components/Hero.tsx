"use client";

import { motion } from "motion/react";
import { TitleOrnament } from "./TitleOrnament";
import { FloatingParticles } from "./FloatingParticles";
import { Sparkles } from "lucide-react";

interface HeroProps {
  onSectionSelect: (section: string) => void;
}

export function Hero({ onSectionSelect }: HeroProps) {
  const menuItems = [
    { name: "View Projects", section: "projects", primary: true },
    { name: "About Me", section: "about" },
    { name: "My Skills", section: "skills" },
    { name: "Get In Touch", section: "contact" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background with vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/50 via-black to-black" />
      
      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Title with ornaments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <TitleOrnament position="top" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl tracking-wider mb-4"
            style={{
              fontFamily: "serif",
              letterSpacing: "0.1em",
              textShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
            }}
          >
            <span className="text-gray-100">Sebastian Gallego Loaiza</span>
          </motion.h1>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4"
          >
            <TitleOrnament position="bottom" />
          </motion.div>
        </motion.div>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="space-y-4"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            >
              {item.primary ? (
                <button
                  onClick={() => onSectionSelect(item.section)}
                  className="group relative inline-flex items-center gap-3 text-gray-100 tracking-widest transition-all hover:text-purple-300"
                  style={{ fontFamily: "serif", letterSpacing: "0.2em" }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">
                    {item.name.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </span>
                  <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ) : (
                <button
                  onClick={() => onSectionSelect(item.section)}
                  className="group relative text-gray-300 tracking-widest hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "serif", letterSpacing: "0.15em" }}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative corner elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-8 flex gap-3"
        >
          <div className="w-3 h-3 rounded-full bg-purple-500/60" />
          <div className="w-3 h-3 rounded-full bg-purple-400/60" />
          <div className="w-3 h-3 rounded-full bg-purple-300/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 right-8"
        >
          <div className="w-12 h-12 rounded-full border-2 border-purple-400/60 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-purple-400/60" />
          </div>
        </motion.div>
      </div>

      <style>{`
        @supports (background: radial-gradient(circle, black, black)) {
          .bg-gradient-radial {
            background: radial-gradient(circle at center, rgb(17 24 39 / 0.5) 0%, rgb(0 0 0) 50%, rgb(0 0 0) 100%);
          }
        }
      `}</style>
    </section>
  );
}
