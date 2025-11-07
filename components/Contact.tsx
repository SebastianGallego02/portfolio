"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
import { GothicOrnament } from "./GothicOrnament";
import { BackButton } from "./BackButton";
import { FloatingParticles } from "./FloatingParticles";

interface ContactProps {
  onBack: () => void;
}

export function Contact({ onBack }: ContactProps) {
  const ref = useRef(null);
  const isInView = true;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/sebastian-gallego-loaiza", label: "LinkedIn" },
    { icon: <Github size={24} />, href: "#", label: "GitHub" },
    { icon: <Mail size={24} />, href: "mailto:sebasglha@gmail.com", label: "sebasglha@gmail.com" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-[#0a0a0f] relative overflow-x-hidden overflow-y-auto"
    >
      <FloatingParticles />
      <BackButton onBack={onBack} />
      
      {/* Ornamentos góticos en las 4 esquinas */}
      <GothicOrnament position="bottom-left" size="xlarge" className="opacity-90" />
      <GothicOrnament position="bottom-right" size="xlarge" className="opacity-90" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-100 mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-gray-100 mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                question or just want to say hi, I'll do my best to get back to
                you!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                    {link.icon}
                  </div>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-purple-500/20"
            >
              <p className="text-gray-400">
                <span className="text-purple-400">Phone:</span> +57 (304) 374 1054
              </p>
              <p className="text-gray-400 mt-2">
                <span className="text-purple-400">Email:</span> sebasglha@gmail.com
              </p>
              <p className="text-gray-400 mt-2">
                <span className="text-purple-400">Location:</span> Manizales, Colombia
              </p>
              <p className="text-gray-400 mt-2">
                <span className="text-purple-400">Response Time:</span> Usually within 24 hours
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-purple-950/10 to-transparent border border-purple-500/20 rounded-lg p-8 space-y-6 relative"
            >
              <GothicOrnament position="top-left" className="opacity-20" />
              <GothicOrnament position="bottom-right" className="opacity-20" />
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/20 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/20 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-purple-500/20 rounded-lg text-gray-100 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-20 pt-8 border-t border-purple-500/20"
      >
        <p className="text-gray-400">
          Designed & Built with <span className="text-purple-400">♦</span> Inspired by Hollow Knight
        </p>
        <p className="text-gray-500 mt-2">© 2025 All rights reserved</p>
      </motion.div>
    </section>
  );
}
