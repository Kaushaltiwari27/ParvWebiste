"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail, MessageSquare, Briefcase, FileText, CreditCard, BarChart } from "lucide-react";

const curriculum = [
  { id: "01", title: "AI Fundamentals", desc: "Understand the core concepts of Generative AI, LLMs, and how to effectively interact with them." },
  { id: "02", title: "Prompt Engineering", desc: "Learn advanced prompting frameworks to get precise, high-quality outputs every time." },
  { id: "03", title: "AI Tools Mastery", desc: "Deep dive into ChatGPT, Claude, Midjourney, and specialized tools for specific tasks." },
  { id: "04", title: "AI Automation", desc: "Connect apps using Zapier and Make. Automate repetitive tasks without coding." },
  { id: "05", title: "Content Creation", desc: "Scale your content output. Generate blogs, social media posts, and scripts in minutes." },
  { id: "06", title: "Data Analysis", desc: "Use Advanced Data Analysis to parse spreadsheets, visualize data, and extract insights." },
  { id: "07", title: "AI for Design", desc: "Create stunning visuals, presentations, and branding assets using AI design tools." },
  { id: "08", title: "AI for Developers", desc: "Accelerate your coding workflow with Copilot, code generation, and debugging tools." },
  { id: "09", title: "AI Marketing", desc: "Optimize ad copy, create personalized campaigns, and improve SEO with AI assistance." },
  { id: "10", title: "Income & Freelancing", desc: "Monetize your new skills. Learn how to package, price, and pitch AI services to clients." },
];

const templates = [
  { name: "Email Automation", icon: Mail },
  { name: "WhatsApp Business", icon: MessageSquare },
  { name: "Lead Generation", icon: Briefcase },
  { name: "Content Workflow", icon: FileText },
  { name: "Invoice & Payment", icon: CreditCard },
  { name: "Report Generation", icon: BarChart },
];

export default function WhatYouLearn() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="curriculum" className="py-24 bg-primary-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="font-sora text-4xl md:text-5xl font-bold mb-16 text-white"
        >
          What You'll Learn
        </motion.h2>

        <div className="flex flex-col mb-24">
          {curriculum.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.05 }}
                className="border-t border-border-color border-b -mt-px first:mt-0"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full py-6 flex items-center group cursor-pointer text-left"
                >
                  <span className="font-mono text-lg md:text-2xl text-accent-electric w-12 md:w-16">
                    {item.id}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center mr-4 md:mr-8 text-white group-hover:border-accent-blue transition-colors flex-shrink-0">
                    {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                  
                  <span className="font-sora text-xl md:text-3xl font-bold text-white group-hover:text-accent-electric transition-colors">
                    {item.title}
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-12 md:pl-24">
                        <p className="text-lg text-text-muted">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h3 className="font-sora text-3xl font-bold text-white mb-8 text-center">
            Automation Templates You Get
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {templates.map((temp, i) => {
              const Icon = temp.icon;
              return (
                <div key={i} className="bg-card-bg border border-border-color rounded-2xl p-6 flex flex-col items-center text-center hover:border-accent-electric transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary-navy flex items-center justify-center mb-4 group-hover:bg-accent-blue transition-colors text-accent-electric group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-white font-sora">{temp.name}</h4>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
