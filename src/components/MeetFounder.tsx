"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetFounder() {
  return (
    <section id="founder" className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Founder Image */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[3/4] max-w-[500px] mx-auto rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Note: Ensure /founder.png is in public folder or replace with a generic placeholder */}
              <Image 
                src="/founder.png" 
                alt="Kaushal Tiwari - Founder and CEO of ParvInfoSoft, Top AI Training and IT Company in Surat, Gujarat" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </motion.div>
            
            {/* Ambient Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-electric/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <h3 className="text-accent-electric text-sm tracking-widest uppercase font-medium mb-4">Meet Our Founder</h3>
              <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6">
                Kaushal Tiwari
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed mb-12">
                Founder, Director & CEO of ParvInfoSoft. Passionate about AI innovation, digital systems, and helping businesses scale through modern technology. Under his leadership, ParvInfoSoft has become a leading premium <strong>AI Training Institute and IT Solutions provider in Surat, Gujarat</strong>, dedicated to building India’s future-ready AI ecosystem.
              </p>

              <a 
                href="https://www.linkedin.com/in/kaushal-tiwari-294628227/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-accent-electric hover:text-black transition-colors mb-12 font-medium"
              >
                Connect on LinkedIn
              </a>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {["Entrepreneur", "AI Strategist", "Business Builder", "Trainer"].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-white/10 bg-[#050505] rounded-lg p-4 text-center hover:border-accent-electric/50 transition-colors"
                  >
                    <span className="text-white/80 font-medium tracking-wide">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
