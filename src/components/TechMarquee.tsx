"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Zap, Globe, Bot, Cpu, BarChart3, Smartphone, Database } from "lucide-react";

// Ticker tape content — text + inline icons as punctuation (exactly the requested effect)
const tickerItems = [
  { type: "text", value: "Artificial Intelligence" },
  { type: "icon", el: <Brain size={22} className="text-accent-electric" /> },
  { type: "text", value: "React & Next.js" },
  { type: "dot" },
  { type: "text", value: "Business Automation" },
  { type: "icon", el: <Zap size={22} className="text-yellow-400" /> },
  { type: "text", value: "Machine Learning" },
  { type: "dot" },
  { type: "text", value: "Cloud Architecture" },
  { type: "icon", el: <Globe size={22} className="text-cyan-400" /> },
  { type: "text", value: "CRM Solutions" },
  { type: "dot" },
  { type: "text", value: "Mobile App Dev" },
  { type: "icon", el: <Smartphone size={22} className="text-purple-400" /> },
  { type: "text", value: "ChatGPT & LLMs" },
  { type: "dot" },
  { type: "text", value: "AI Agents" },
  { type: "icon", el: <Bot size={22} className="text-pink-400" /> },
  { type: "text", value: "Data Analytics" },
  { type: "dot" },
  { type: "text", value: "Node.js Ecosystem" },
  { type: "icon", el: <Cpu size={22} className="text-green-400" /> },
  { type: "text", value: "ERP Systems" },
  { type: "dot" },
  { type: "text", value: "Digital Marketing" },
  { type: "icon", el: <BarChart3 size={22} className="text-orange-400" /> },
  { type: "text", value: "Database Architecture" },
  { type: "icon", el: <Database size={22} className="text-blue-400" /> },
  // Duplicate for seamless loop
  { type: "text", value: "Artificial Intelligence" },
  { type: "icon", el: <Brain size={22} className="text-accent-electric" /> },
  { type: "text", value: "React & Next.js" },
  { type: "dot" },
  { type: "text", value: "Business Automation" },
  { type: "icon", el: <Zap size={22} className="text-yellow-400" /> },
  { type: "text", value: "Machine Learning" },
  { type: "dot" },
];

export default function TechMarquee() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll drives the horizontal movement — ticker tape effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div
      ref={ref}
      className="w-full py-8 bg-transparent border-t border-b border-white/5 overflow-hidden relative"
    >
      {/* Left/Right Fade Masks */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, #050B14 0%, transparent 15%, transparent 85%, #050B14 100%)",
        }}
      />

      {/* Scroll-driven horizontal strip */}
      <motion.div
        style={{ x }}
        className="flex items-center gap-8 px-10 whitespace-nowrap will-change-transform"
      >
        {tickerItems.map((item, i) => {
          if (item.type === "text") {
            return (
              <span
                key={i}
                className="text-lg md:text-xl font-semibold text-white/50 tracking-wider uppercase hover:text-white transition-colors duration-300 cursor-default"
              >
                {item.value}
              </span>
            );
          }
          if (item.type === "icon") {
            return (
              <span
                key={i}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 shrink-0"
              >
                {item.el}
              </span>
            );
          }
          if (item.type === "dot") {
            return (
              <span key={i} className="flex items-center gap-1 shrink-0">
                <span className="w-1 h-1 rounded-full bg-accent-electric/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1 h-1 rounded-full bg-accent-electric/50" />
              </span>
            );
          }
          return null;
        })}
      </motion.div>
    </div>
  );
}

