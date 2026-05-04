"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  "AI Automation",
  "Web Development",
  "App Development",
  "Digital Growth",
  "AI Training",
  "Business Systems"
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Column */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-8"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.6) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
              >
                Where AI Meets Real Business Growth
              </h2>
              <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-[500px]">
                ParvInfoSoft is not just a training institute. We are an AI-first IT company helping businesses automate systems, scale digitally, and grow faster through technology. We train future-ready professionals while building real-world solutions.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Floating Cards & Hologram Dashboard */}
          <div className="lg:w-1/2 relative w-full h-[400px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Hologram Dashboard Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                <Image 
                  src="/about_ai.png" 
                  alt="Futuristic Business Dashboard" 
                  fill
                  className="object-contain opacity-40 mix-blend-screen"
                />
              </motion.div>

              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50, y: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1, 
                    type: "spring", 
                    stiffness: 50 
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  style={{
                    top: `${(i % 3) * 30}%`,
                    left: `${Math.floor(i / 3) * 45}%`,
                    marginTop: i > 2 ? '40px' : '0'
                  }}
                  className="absolute z-10 bg-[#050505]/80 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl shadow-2xl flex items-center justify-center min-w-[200px]"
                >
                  <span className="text-white font-medium tracking-wide">{card}</span>
                </motion.div>
              ))}
              
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-electric/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
