"use client";

import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

interface CardFlipProps {
  isFlipped: boolean;
  frontContent: ReactNode;
  backContent: ReactNode;
}

export function CardFlip({ isFlipped, frontContent, backContent }: CardFlipProps) {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Shared background that stays constant */}
      <div className="absolute inset-0 bg-black pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94], // Easing suave similar a Hollow Knight
            }}
            className="absolute inset-0 w-full min-h-screen overflow-hidden"
          >
            {frontContent}
          </motion.div>
        ) : (
          <motion.div
            key="section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94], // Easing suave similar a Hollow Knight
            }}
            className="absolute inset-0 w-full min-h-screen"
          >
            {backContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
