"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Ultra-Premium Minimalist Aurora Background */}
      <div className="absolute inset-0 z-0 bg-transparent">
        {/* Animated Aurora Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-5xl bg-accent-electric/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"
        ></motion.div>

        {/* Elegant vignette and noise */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[48px] md:text-[72px] font-medium text-white leading-[1.05] mb-6 tracking-tight"
              style={{
                backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
          >
            Ready to Build. Automate. Grow.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
            Join ParvInfoSoft and step into the AI-powered future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <Link 
                href="/get-started"
                className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-white/20 transition-all hover:bg-white/40 w-full sm:w-auto active:scale-95"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-full px-[40px] py-[18px] h-full w-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <span className="text-black text-[16px] font-medium tracking-wide">Get Started</span>
                </div>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link 
                href="/get-started"
                className="px-[40px] py-[18px] rounded-full border border-white/20 text-white font-medium text-[16px] hover:bg-white/10 transition-colors w-full sm:w-auto active:scale-95 bg-transparent/50 backdrop-blur-md"
              >
                Join Waitlist
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
