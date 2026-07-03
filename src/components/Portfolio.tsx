"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter, Globe, Cpu, Smartphone, Layout, Paintbrush } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Websites", "AI Tools", "Dashboards", "Apps", "Branding"];

const projects = [
  {
    id: 1,
    title: "ScaleCRM Platform",
    category: "Dashboards",
    summary: "Custom CRM built for a real estate agency with automated lead tracking.",
    metric: "300% ROI",
    metricLabel: "in first 90 days",
    imageGrad: "from-blue-600/40 to-indigo-900/60",
    icon: Layout
  },
  {
    id: 2,
    title: "Aura Fashion Store",
    category: "Websites",
    summary: "Headless Shopify build with predictive AI product recommendations.",
    metric: "+45%",
    metricLabel: "Conversion Rate",
    imageGrad: "from-purple-600/40 to-pink-900/60",
    icon: Globe
  },
  {
    id: 3,
    title: "SupportAgent AI",
    category: "AI Tools",
    summary: "Custom LLM trained on company docs to handle tier-1 support tickets.",
    metric: "10,000+",
    metricLabel: "Tickets deflected",
    imageGrad: "from-emerald-600/40 to-green-900/60",
    icon: Cpu
  },
  {
    id: 4,
    title: "FinTrack Mobile",
    category: "Apps",
    summary: "Cross-platform finance management app with real-time analytics.",
    metric: "50K+",
    metricLabel: "Active Users",
    imageGrad: "from-orange-600/40 to-red-900/60",
    icon: Smartphone
  },
  {
    id: 5,
    title: "Nexus Brand Identity",
    category: "Branding",
    summary: "Complete rebranding, logo design, and digital asset library for a B2B SaaS.",
    metric: "Award",
    metricLabel: "Winning Design",
    imageGrad: "from-zinc-600/40 to-slate-900/60",
    icon: Paintbrush
  },
  {
    id: 6,
    title: "AutoDoc Generator",
    category: "AI Tools",
    summary: "Internal tool that generates compliance reports from unstructured data.",
    metric: "40 hrs",
    metricLabel: "Saved weekly",
    imageGrad: "from-teal-600/40 to-emerald-900/60",
    icon: Cpu
  },
  {
    id: 7,
    title: "Healthcare Portal",
    category: "Websites",
    summary: "Secure, HIPAA-compliant patient portal with telemedicine integration.",
    metric: "Zero",
    metricLabel: "Downtime",
    imageGrad: "from-cyan-600/40 to-blue-900/60",
    icon: Globe
  },
  {
    id: 8,
    title: "Sales Analytics Board",
    category: "Dashboards",
    summary: "Real-time pipeline visibility pulling data from Salesforce and HubSpot.",
    metric: "$2M+",
    metricLabel: "Pipeline managed",
    imageGrad: "from-rose-600/40 to-red-900/60",
    icon: Layout
  },
  {
    id: 9,
    title: "FitLife App",
    category: "Apps",
    summary: "Fitness tracking app featuring AI-generated personalized workout plans.",
    metric: "4.9/5",
    metricLabel: "App Store Rating",
    imageGrad: "from-yellow-600/40 to-orange-900/60",
    icon: Smartphone
  },
  {
    id: 10,
    title: "Elevate Startup Kit",
    category: "Branding",
    summary: "Pitch deck design, web design, and visual identity for a seed-stage startup.",
    metric: "$5M",
    metricLabel: "Seed Raised",
    imageGrad: "from-indigo-600/40 to-purple-900/60",
    icon: Paintbrush
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-electric text-sm font-medium mb-6">
              Built for Real Businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 scroll-reveal-text">
              Proof of Concept
            </h2>
            <p className="text-lg text-white/50">
              We don't just teach. We build production-grade software and automation systems for companies across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-accent-electric text-black shadow-[0_0_15px_rgba(78,163,224,0.3)]" 
                    : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                data-cursor="VIEW"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.setProperty("--mx", `${x * -35}px`);
                  e.currentTarget.style.setProperty("--my", `${y * -35}px`);
                  e.currentTarget.style.setProperty("--rx", `${y * 10}deg`);
                  e.currentTarget.style.setProperty("--ry", `${x * -10}deg`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty("--mx", "0px");
                  e.currentTarget.style.setProperty("--my", "0px");
                  e.currentTarget.style.setProperty("--rx", "0deg");
                  e.currentTarget.style.setProperty("--ry", "0deg");
                }}
                style={{
                  transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.5s ease",
                  willChange: "transform",
                }}
                className="group relative bg-[#060606] border border-white/10 rounded-3xl overflow-hidden h-[400px] cursor-pointer scroll-skew"
              >
                {/* Background Image/Gradient with Parallax translation */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.imageGrad} opacity-40 group-hover:opacity-80`}
                  style={{
                    transform: "translate(var(--mx, 0px), var(--my, 0px)) scale(1.15)",
                    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease",
                    willChange: "transform",
                  }}
                ></div>
                
                {/* Overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/20 group-hover:from-black group-hover:via-black/90 group-hover:to-black/40 transition-colors duration-500"></div>

                <div 
                  className="absolute inset-0 p-8 flex flex-col justify-end z-10"
                  style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                >
                  
                  {/* Top Category Badge */}
                  <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 flex items-center gap-2">
                    <project.icon size={12} className="text-accent-electric" />
                    {project.category}
                  </div>

                   <h3 className="text-2xl font-medium text-white mb-2 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-6 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Hidden metrics revealed on hover */}
                  <div className="overflow-hidden">
                    <div className="opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 md:translate-y-8 md:group-hover:translate-y-0 transition-all duration-500 delay-150 flex items-center justify-between border-t border-white/10 pt-6 mt-2">
                      <div>
                        <div className="text-accent-electric font-medium text-lg leading-none mb-1">{project.metric}</div>
                        <div className="text-white/40 text-xs uppercase tracking-wider">{project.metricLabel}</div>
                      </div>
                      
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent-electric transition-colors hover:scale-110 active:scale-95 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <ArrowUpRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Soft border glow on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent-electric/30 rounded-3xl transition-colors duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(78,163,224,0)] group-hover:shadow-[inset_0_0_40px_rgba(78,163,224,0.1)]"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
