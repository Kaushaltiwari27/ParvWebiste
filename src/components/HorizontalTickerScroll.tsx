"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Zap, Star, ArrowRight, Sparkles, Bot, Globe, Cpu } from "lucide-react";

// The "ticker tape sentence" — adapted for ParvInfoSoft brand
// SVG/icon elements act as punctuation inline with the text
const tickerContent = [
  { type: "text", value: "We build" },
  { type: "icon", el: <Brain size={32} className="text-accent-electric" /> },
  { type: "text", value: "AI-powered businesses" },
  { type: "divider" },
  { type: "text", value: "automate what slows you down" },
  { type: "icon", el: <Zap size={28} className="text-yellow-400" /> },
  { type: "text", value: "and scale what matters" },
  { type: "divider" },
  { type: "text", value: "from Surat" },
  { type: "icon", el: <Globe size={28} className="text-cyan-400" /> },
  { type: "text", value: "to the world" },
  { type: "divider" },
  { type: "text", value: "every workflow" },
  { type: "icon", el: <Cpu size={28} className="text-purple-400" /> },
  { type: "text", value: "deserves intelligence" },
  { type: "divider" },
  { type: "text", value: "every business" },
  { type: "icon", el: <Bot size={32} className="text-accent-electric" /> },
  { type: "text", value: "deserves to grow" },
  { type: "divider" },
  { type: "text", value: "discover" },
  { type: "icon", el: <Sparkles size={28} className="text-pink-400" /> },
  { type: "text", value: "the real magic of AI" },
  { type: "divider" },
  { type: "text", value: "We build" },
  { type: "icon", el: <Brain size={32} className="text-accent-electric" /> },
  { type: "text", value: "AI-powered businesses" },
  { type: "divider" },
  { type: "text", value: "automate what slows you down" },
  { type: "icon", el: <Zap size={28} className="text-yellow-400" /> },
  { type: "text", value: "and scale what matters" },
];

export default function HorizontalTickerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll → horizontal movement
  // The strip moves from 0px → -60% as user scrolls through the section
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#030712] border-t border-b border-white/5 overflow-hidden"
      style={{ height: "200vh" }} // tall = more scroll time = slower, more cinematic
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Top label */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/20 uppercase">
            Scroll to read our story
          </p>
        </div>

        {/* Left + Right fade masks */}
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #030712 0%, transparent 100%)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #030712 0%, transparent 100%)" }}
        />

        {/* The horizontal ticker tape strip */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-10 px-20 whitespace-nowrap will-change-transform"
        >
          {tickerContent.map((item, i) => {
            if (item.type === "text") {
              return (
                <span
                  key={i}
                  className="text-5xl md:text-7xl font-semibold text-white/80 tracking-tight select-none"
                  style={{
                    textShadow: "0 0 60px rgba(78,163,224,0.15)",
                  }}
                >
                  {item.value}
                </span>
              );
            }

            if (item.type === "icon") {
              return (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 shrink-0"
                  style={{ boxShadow: "0 0 20px rgba(78,163,224,0.1)" }}
                >
                  {item.el}
                </span>
              );
            }

            if (item.type === "divider") {
              return (
                <span key={i} className="shrink-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-electric/60" />
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-electric/60" />
                </span>
              );
            }

            return null;
          })}
        </motion.div>

        {/* Bottom scroll hint arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-white/20 text-xs font-medium tracking-widest uppercase">
          <ArrowRight size={14} />
          Keep scrolling
        </div>
      </div>
    </section>
  );
}
