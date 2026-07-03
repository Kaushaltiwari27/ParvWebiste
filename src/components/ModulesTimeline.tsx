"use client";

import { motion } from "framer-motion";

const modules = [
  "AI Fundamentals",
  "Prompt Engineering",
  "AI Tools Mastery",
  "AI Automation",
  "Content Creation",
  "Data Analytics",
  "AI Design",
  "AI for Developers",
  "AI Marketing",
  "Freelancing with AI"
];

export default function ModulesTimeline() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6">
            What You’ll Learn
          </h2>
          <div className="w-[60px] h-[2px] bg-accent-electric mx-auto shadow-[0_0_10px_rgba(78,163,224,0.8)]"></div>
        </motion.div>

        <div className="relative">
          {/* Glowing Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full"></div>
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-accent-electric -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(78,163,224,0.8)] z-0"
          ></motion.div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {modules.map((mod, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} pl-16 md:pl-0`}
                >
                  {/* Number Node */}
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-transparent border-2 border-white/20 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(0,0,0,1)] group hover:border-accent-electric transition-colors">
                    <div className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-white/70 font-mono text-sm group-hover:text-accent-electric group-hover:shadow-[0_0_15px_rgba(78,163,224,0.4)] transition-all">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} w-full`}>
                    <div className="bg-[#050505] border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors relative group overflow-hidden">
                      <div className="absolute inset-0 bg-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"></div>
                      <h3 className="text-xl md:text-2xl font-medium text-white relative z-10">
                        {mod}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-electric/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
    </section>
  );
}
