"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "500+", label: "Projects Guided" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "25+", label: "Industries Served" },
];

export default function StatsStrip() {
  return (
    <section className="py-24 bg-black relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white/60 text-lg uppercase tracking-widest font-medium">
            Trusted by Learners, Startups & Businesses Across India
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center group overflow-hidden"
            >
              {/* Top blue glow border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

              <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">{stat.value}</div>
              <div className="text-white/50 text-sm tracking-wide font-medium relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
