"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onSectionSelect: (section: string) => void;
}

export function Navigation({ onSectionSelect }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Skills", section: "skills" },
    { name: "Journey", section: "journey" },
    { name: "Contact", section: "contact" },
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 tracking-widest"
            style={{ 
              fontFamily: "serif", 
              letterSpacing: "0.2em",
              textShadow: "0 0 10px rgba(168, 85, 247, 0.3)"
            }}
          >
            PORTFOLIO
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => onSectionSelect(item.section)}
                className="text-gray-300 hover:text-purple-400 transition-colors relative group tracking-widest"
                style={{ 
                  fontFamily: "serif",
                  letterSpacing: "0.15em"
                }}
              >
                {item.name.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0f] border-t border-purple-500/20"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onSectionSelect(item.section);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded transition-colors tracking-widest"
                style={{ 
                  fontFamily: "serif", 
                  letterSpacing: "0.15em"
                }}
              >
                {item.name.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
