"use client";

import { motion } from "framer-motion";
import { Cpu, LayoutTemplate, Smartphone, Database, Megaphone, GraduationCap } from "lucide-react";
import Image from "next/image";

const services = [
  { title: "AI Automation Solutions", icon: Cpu },
  { title: "Website Development", icon: LayoutTemplate },
  { title: "Mobile App Development", icon: Smartphone },
  { title: "CRM / ERP Systems", icon: Database },
  { title: "Branding & Marketing", icon: Megaphone },
  { title: "AI Training Programs", icon: GraduationCap },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      
      {/* Ambient Robotic Hand Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 pointer-events-none opacity-20 mix-blend-screen">
        <Image 
          src="/services_ai.png" 
          alt="AI Robotic Hand" 
          fill
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6">
            What We Build
          </h2>
          <div className="w-[60px] h-[2px] bg-accent-electric mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-[#050505] border border-white/10 rounded-2xl p-10 overflow-hidden cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150px] bg-accent-electric/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Top border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent-electric/10 transition-colors">
                    <Icon size={28} className="text-white/70 group-hover:text-accent-electric transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-wide">{service.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
