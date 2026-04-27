"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Live Classes",
  "Certificate",
  "Community Support",
  "Lifetime Updates",
  "Real Projects"
];

export default function ProgramHighlight() {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-electric/10 border border-accent-electric/20 px-4 py-1.5 mb-8">
                <div className="w-2 h-2 bg-accent-electric rounded-full animate-pulse"></div>
                <span className="text-[13px] font-medium text-accent-electric uppercase tracking-widest">
                  Bestselling Program
                </span>
              </div>

              <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.6) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
              >
                India’s Most Practical AI Mastery Program
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed mb-10 max-w-[500px]">
                Learn AI tools, automation, content creation & income skills in 30 days. Practical learning designed for students, freelancers and business owners.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-accent-electric" />
                    <span className="text-white/80 font-medium text-[15px]">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link 
                href="/#pricing"
                className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-white/20 transition-all hover:bg-white/40"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black rounded-full px-[32px] py-[16px] h-full w-full flex items-center justify-center">
                  <span className="text-white text-[15px] font-medium tracking-wide">Explore Program</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Futuristic Dashboard Mockup */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 40 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(78,163,224,0.15)] transform-gpu perspective-1000"
            >
              <Image 
                src="/dashboard_ui.png" 
                alt="AI Dashboard Mockup" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
            </motion.div>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-electric/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
