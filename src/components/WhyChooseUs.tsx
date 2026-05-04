"use client";

import { motion } from "framer-motion";

const reasons = [
  "Real-world execution",
  "AI-first innovation",
  "Affordable growth systems",
  "Fast delivery",
  "Long-term support",
  "Scalable architecture"
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1]">
            Why Businesses Choose<br/>ParvInfoSoft
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Horizontal Progress Line Background */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 hidden md:block z-0"></div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="absolute top-1/2 left-0 right-0 h-[1px] bg-accent-electric -translate-y-1/2 origin-left hidden md:block z-0 shadow-[0_0_10px_rgba(78,163,224,0.5)]"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[#050505] border border-white/10 rounded-xl p-6 text-center flex items-center justify-center min-h-[140px] hover:bg-white/5 transition-colors shadow-2xl relative"
              >
                {/* Dot connecting to line on desktop */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] w-[8px] h-[8px] bg-accent-electric rounded-full hidden lg:block opacity-0 md:opacity-100 shadow-[0_0_10px_rgba(78,163,224,0.8)]"></div>
                
                <span className="text-white/80 font-medium text-[15px]">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
