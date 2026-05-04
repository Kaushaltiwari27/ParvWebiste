"use client";

import { motion } from "framer-motion";
import { Check, Minus, Sparkles, Zap, Rocket } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "AI Foundation",
    price: "₹4,500",
    icon: Sparkles,
    desc: "Perfect for beginners looking to understand AI basics and everyday tools.",
    badge: "Best For Beginners",
    popular: false,
  },
  {
    title: "AI Skill Builder",
    price: "₹8,500",
    icon: Zap,
    desc: "Learn advanced prompting, automation, and content creation workflows.",
    badge: "MOST POPULAR",
    popular: true,
    image: "/program_1.png",
  },
  {
    title: "Income Accelerator",
    price: "₹20,000",
    icon: Rocket,
    desc: "Master AI for freelancing, consulting, and building a business.",
    badge: "Best For Earners",
    popular: false,
    image: "/program_2.png",
  }
];

const features = [
  { name: "AI Fundamentals & Tools", tiers: [true, true, true] },
  { name: "Prompt Engineering Mastery", tiers: [true, true, true] },
  { name: "Content Creation Workflows", tiers: [false, true, true] },
  { name: "Basic Automation Setup", tiers: [false, true, true] },
  { name: "Advanced Zapier/Make Integrations", tiers: [false, false, true] },
  { name: "Freelancing & Client Acquisition", tiers: [false, false, true] },
  { name: "1-on-1 Mentorship Sessions", tiers: [false, false, true] },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-primary-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="border-t-2 border-accent-electric w-16 mb-8 mx-auto"></div>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="font-inter text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight"
          >
            Engineering Your <br /> Future.
          </motion.h2>
          <p className="text-text-muted text-lg">
            Select the tier that fits your ambition. From foundational knowledge to scaling a full automation agency.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 perspective-1000">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 0 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 border border-border-color overflow-hidden group ${
                  prog.popular ? "bg-primary-navy" : "bg-primary-dark"
                }`}
              >
                {/* Background Image for Card */}
                {prog.image && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={prog.image} 
                        alt={prog.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${prog.popular ? 'from-primary-navy via-primary-navy/90' : 'from-primary-dark via-primary-dark/90'} to-transparent z-0`}></div>
                  </>
                )}
                
                <div className="relative z-10 flex-grow flex flex-col">
                  {prog.popular && (
                    <div className="absolute -top-8 -right-8 bg-accent-electric text-white text-xs font-bold px-10 py-1 rotate-45 transform origin-bottom-left shadow-lg">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 flex items-center justify-center mb-6 border border-border-color ${
                    prog.popular ? "bg-accent-electric text-white border-none" : "bg-primary-dark text-accent-electric"
                  }`}>
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="font-inter text-2xl font-black uppercase text-white mb-2">{prog.title}</h3>
                  <div className="text-4xl font-mono font-bold text-accent-electric mb-4">{prog.price}</div>
                  <p className="text-text-muted mb-8 flex-grow">{prog.desc}</p>
                  
                  {!prog.popular && (
                    <div className="text-sm font-bold uppercase tracking-wider text-text-muted mb-6 border-b border-border-color pb-2 inline-block self-start">
                      {prog.badge}
                    </div>
                  )}
                  
                  <button className={`w-full py-4 font-black uppercase tracking-widest transition-all flex justify-center items-center gap-2 group/btn border border-border-color ${
                    prog.popular 
                      ? "bg-accent-electric text-white border-accent-electric hover:bg-white hover:text-primary-dark hover:border-white" 
                      : "bg-transparent hover:bg-white/10 text-white"
                  }`}>
                    Initialize <Rocket size={18} className="group-hover/btn:translate-y-[-2px] group-hover/btn:translate-x-[2px] transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-primary-dark border border-border-color overflow-hidden hidden md:block"
        >
          <div className="p-8 border-b border-border-color text-center bg-primary-navy">
            <h3 className="font-inter text-2xl font-black uppercase tracking-widest text-white">Compare Features</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 font-inter text-lg text-white font-bold border-b border-border-color w-2/5 uppercase">Features</th>
                  {programs.map((p, i) => (
                    <th key={i} className="p-6 text-center font-inter text-lg text-white font-bold border-b border-border-color border-l w-1/5 uppercase">
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={i} className="hover:bg-primary-navy/50 transition-colors">
                    <td className="p-6 border-b border-border-color text-text-muted font-medium">{feature.name}</td>
                    {feature.tiers.map((hasFeature, j) => (
                      <td key={j} className="p-6 border-b border-border-color border-l text-center">
                        {hasFeature ? (
                          <div className="flex justify-center"><Check className="text-accent-electric" size={24} /></div>
                        ) : (
                          <div className="flex justify-center"><Minus className="text-border-color" size={24} /></div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
