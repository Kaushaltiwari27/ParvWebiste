"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const reasons = [
  {
    id: "01",
    title: "Career Growth",
    content: [
      "Stay relevant in a fast-changing job market.",
      "Unlock promotions and leadership roles.",
      "Gain a competitive edge over non-AI peers.",
    ]
  },
  {
    id: "02",
    title: "Income Opportunities",
    content: [
      "Start freelancing with AI-powered services.",
      "Launch an AI automation consulting agency.",
      "Create high-quality content at scale for monetization."
    ]
  },
  {
    id: "03",
    title: "Productivity Power",
    content: [
      "Automate repetitive and boring tasks.",
      "Save 20+ hours every single week.",
      "Execute ideas 10X faster with AI assistance."
    ]
  }
];

export default function WhyProgram() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-primary-navy">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="border-t-2 border-accent-electric w-16 mb-8"></div>
        <div className="flex flex-col md:flex-row gap-16 mb-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="md:w-1/3"
          >
            <h2 className="font-inter text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
              The Framework <br/> For Success.
            </h2>
            <p className="text-text-muted text-lg mb-8">
              We engineered our curriculum to eliminate fluff and focus purely on high-leverage skills that generate immediate ROI.
            </p>
          </motion.div>

          <div className="flex flex-col md:w-2/3">
            {reasons.map((reason, index) => {
              const isExpanded = expandedId === reason.id;
              
              return (
                <motion.div 
                  key={reason.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-border-color last:border-b-0"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : reason.id)}
                    className="w-full py-8 flex items-center group cursor-pointer text-left"
                    aria-expanded={isExpanded}
                    aria-controls={`reason-content-${reason.id}`}
                  >
                    <span className="font-mono text-xl md:text-2xl text-accent-electric w-16 md:w-24 font-bold">
                      {reason.id}
                    </span>
                    
                    <h3 className={`font-inter text-2xl md:text-4xl font-black uppercase transition-all duration-300 flex-grow ${isExpanded ? 'text-accent-electric' : 'text-white group-hover:text-text-muted'}`}>
                      {reason.title}
                    </h3>

                    <div className="w-12 h-12 border border-border-color flex items-center justify-center text-white group-hover:bg-accent-electric group-hover:text-white group-hover:border-accent-electric transition-all flex-shrink-0">
                      {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`reason-content-${reason.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-16 md:pl-[136px]">
                          <ul className="space-y-3">
                            {reason.content.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 text-lg text-text-muted">
                                <span className="text-accent-electric mt-1.5">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-primary-navy border border-border-color p-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center relative overflow-hidden"
        >
          {/* vertical dividers */}
          <div className="absolute inset-y-0 left-1/5 w-px bg-border-color hidden md:block"></div>
          <div className="absolute inset-y-0 left-2/5 w-px bg-border-color hidden md:block"></div>
          <div className="absolute inset-y-0 left-3/5 w-px bg-border-color hidden md:block"></div>
          <div className="absolute inset-y-0 left-4/5 w-px bg-border-color hidden md:block"></div>
          
          <div className="relative z-10">
            <div className="font-mono text-3xl font-bold text-accent-electric mb-1">70%+</div>
            <div className="text-sm text-text-muted font-medium">Employers value AI</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-accent-electric mb-1">10X</div>
            <div className="text-sm text-text-muted font-medium">Faster execution</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-accent-electric mb-1">20+</div>
            <div className="text-sm text-text-muted font-medium">Hours saved</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-accent-electric mb-1">1000+</div>
            <div className="text-sm text-text-muted font-medium">AI opportunities</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="font-mono text-3xl font-bold text-accent-electric mb-1">Early</div>
            <div className="text-sm text-text-muted font-medium">Learners advantage</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
