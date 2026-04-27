"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if we already showed the preloader in this session to prevent it on every internal navigation
    const hasLoaded = sessionStorage.getItem("parv_loaded_v2");
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Counter Animation
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      
      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("parv_loaded_v2", "true");
        }, 800); // Wait a bit at 100% before closing
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#020202] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-electric/10 blur-[150px] rounded-full"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            {/* Massive Rotating Rings */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Outer dashed ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/5 border-dashed"
              ></motion.div>
              
              {/* Inner fast ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-t border-l border-accent-electric/50"
              ></motion.div>

              {/* Core glow */}
              <div className="absolute inset-12 bg-accent-electric/20 blur-xl rounded-full animate-pulse"></div>

              {/* Progress Counter */}
              <div className="relative z-10 text-5xl md:text-7xl font-bold text-white tracking-tighter" style={{ fontVariantNumeric: "tabular-nums" }}>
                {progress}<span className="text-2xl text-accent-electric">%</span>
              </div>
            </div>

            {/* Typography */}
            <div className="mt-12 text-center h-20">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-3xl font-medium tracking-widest mb-3 uppercase"
              >
                ParvInfoSoft
              </motion.h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-[2px] bg-gradient-to-r from-transparent via-accent-electric to-transparent mx-auto overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 h-full w-10 bg-white blur-[2px] animate-[slide_1s_ease-in-out_infinite]"></div>
              </motion.div>

              <p className="text-accent-electric text-xs tracking-[0.3em] uppercase mt-4 animate-pulse">
                Neural Engine Booting...
              </p>
            </div>
          </div>
          
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
