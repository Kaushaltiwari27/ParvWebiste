"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹4,500",
    desc: "For Beginners",
    features: ["AI Fundamentals", "Basic Prompting", "Community Access", "Certificate"],
    featured: false
  },
  {
    name: "Skill Builder",
    price: "₹8,500",
    desc: "Most Popular",
    features: ["Advanced Prompting", "Content Automation", "Freelance Guide", "1-on-1 Support", "Real Projects"],
    featured: true
  },
  {
    name: "Income Accelerator",
    price: "₹20,000",
    desc: "For Business Scaling",
    features: ["Complete Automation Setup", "Custom CRM Integration", "Lead Gen Workflows", "Agency Growth Blueprint", "Priority Mentorship"],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6">
            Choose Your Growth Path
          </h2>
          <div className="w-[60px] h-[2px] bg-accent-electric mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-[#050505] rounded-3xl p-8 flex flex-col h-full border ${
                plan.featured ? "border-accent-electric shadow-[0_0_30px_rgba(78,163,224,0.15)] md:-mt-8 md:mb-8" : "border-white/10"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-electric text-black text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                  Featured
                </div>
              )}

              <h3 className="text-white text-2xl font-medium mb-2">{plan.name}</h3>
              <p className="text-white/50 text-sm mb-6">{plan.desc}</p>
              
              <div className="text-4xl font-medium text-white mb-8">
                {plan.price}
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80 text-[15px]">
                      <Check size={18} className="text-accent-electric shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <MagneticButton className="w-full">
                <Link 
                  href="/get-started"
                  className={`w-full block py-4 rounded-full font-medium transition-all text-center ${
                    plan.featured 
                      ? "bg-accent-electric text-black hover:bg-white shadow-[0_0_20px_rgba(78,163,224,0.4)] active:scale-95" 
                      : "bg-white/10 text-white hover:bg-white/20 active:scale-95"
                  }`}
                >
                  Get Started
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
