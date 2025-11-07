"use client";

import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";

interface BackButtonProps {
  onBack: () => void;
}

export function BackButton({ onBack }: BackButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onClick={onBack}
      className="fixed top-18 left-8 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/50 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      <div className="flex flex-col items-start">
        <span className="tracking-wider leading-tight" style={{ fontFamily: "serif", fontSize: "0.875rem" }}>
          Back to Menu
        </span>
      </div>
      <Home className="w-4 h-4 opacity-70" />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-purple-400/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}
