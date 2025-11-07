"use client";

import { motion } from "motion/react";

interface TitleWithOrnamentsProps {
  children: React.ReactNode;
  className?: string;
}

export function TitleWithOrnaments({ children, className = "" }: TitleWithOrnamentsProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Left ornament */}
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/40"
      >
        <path
          d="M0 12 Q8 8 16 12 Q24 16 32 12 Q40 8 48 12 Q56 16 64 12 Q72 8 80 12 Q88 16 96 12 Q104 8 112 12 Q120 16 120 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 12 Q4 8 8 12 Q12 16 8 20 Q4 24 0 20"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M112 12 Q116 8 120 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-gray-100"
        style={{ fontFamily: "serif", letterSpacing: "0.1em" }}
      >
        {children}
      </motion.div>

      {/* Right ornament (mirrored) */}
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/40 scale-x-[-1]"
      >
        <path
          d="M0 12 Q8 8 16 12 Q24 16 32 12 Q40 8 48 12 Q56 16 64 12 Q72 8 80 12 Q88 16 96 12 Q104 8 112 12 Q120 16 120 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 12 Q4 8 8 12 Q12 16 8 20 Q4 24 0 20"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M112 12 Q116 8 120 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

