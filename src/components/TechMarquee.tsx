"use client";

import { motion } from "framer-motion";

const technologies = [
  "Artificial Intelligence",
  "React & Next.js",
  "Node.js Ecosystem",
  "Machine Learning",
  "Cloud Architecture",
  "Business Automation",
  "Data Analytics",
  "Mobile App Development",
  "ChatGPT & LLMs",
  "CRM Solutions",
];

export default function TechMarquee() {
  return (
    <div className="w-full py-10 bg-transparent border-t border-b border-white/5 overflow-hidden relative flex flex-col items-center justify-center">
      {/* Left/Right Fade Masks */}
      <div className="absolute inset-0 pointer-events-none z-10" 
           style={{ background: "linear-gradient(to right, #050B14 0%, transparent 15%, transparent 85%, #050B14 100%)" }}
      ></div>

      <div className="relative flex max-w-full overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 pr-16 items-center"
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="text-xl md:text-2xl font-medium text-white/50 tracking-wider uppercase transition-colors duration-300 hover:text-accent-electric">
                {tech}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent-electric/50"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
