"use client";

import { CaseStudyContent } from "@/data/case-studies";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

interface Props {
  data: CaseStudyContent;
}

export default function CaseStudyDetailClient({ data }: Props) {
  return (
    <main className="pt-40 pb-24 relative overflow-hidden">
      {/* Ambient glowing background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-electric/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-white/40 text-sm mb-12 uppercase tracking-widest font-medium"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/resources/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-accent-electric truncate">{data.client}</span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/resources/case-studies" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>
        </motion.div>

        {/* Hero Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-electric text-xs font-semibold uppercase tracking-wider mb-6">
              Client Case Study
            </div>
            
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-medium text-white leading-[1.1] mb-6 tracking-tight"
                style={{
                  backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
            >
              {data.title}
            </h1>

            <p className="text-xl md:text-2xl text-accent-electric font-medium mb-8 leading-relaxed">
              {data.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-t border-b border-white/10 text-white/70">
              <div>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Partner Clinic Group</span>
                <strong className="text-white text-lg">{data.client}</strong>
              </div>
              <div>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">Geographic Focus</span>
                <strong className="text-white text-lg">{data.location}</strong>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Summary & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-medium text-white mb-6">Executive Summary</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {data.executiveSummary}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full"></div>
            <div>
              <h4 className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">The Challenge</h4>
              <p className="text-white/80 leading-relaxed text-[15px]">
                {data.challenge}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Technology Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-medium text-white mb-8 flex items-center gap-3">
            <Cpu className="text-accent-electric" size={24} />
            Core Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.techStack.map((tech, i) => (
              <div key={i} className="border-l-2 border-accent-electric/40 pl-6 py-1">
                <h4 className="text-lg font-semibold text-white mb-2">{tech.name}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed System Architecture & Data Flow */}
        <div className="mb-20 space-y-12">
          <h3 className="text-3xl font-medium text-white">System Architecture & Data Flow</h3>
          <div className="space-y-8">
            {data.architecture.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col gap-6"
              >
                <div>
                  <h4 className="text-xl font-medium text-white mb-3">{step.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
                
                {step.codeSnippet && (
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] p-5">
                    <div className="absolute top-3 right-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
                      {step.codeSnippet.language}
                    </div>
                    <pre className="overflow-x-auto text-xs md:text-sm font-mono text-accent-electric/80 leading-relaxed">
                      <code>{step.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security and Edge Case Handling */}
        <div className="mb-20">
          <h3 className="text-3xl font-medium text-white mb-10">Security & Edge-Case Handling</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.security.map((sec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative group overflow-hidden flex flex-col h-full justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <ShieldCheck className="text-accent-electric mb-4" size={24} />
                  <h4 className="text-lg font-medium text-white mb-2">{sec.title}</h4>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">{sec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outcomes / Performance Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-medium text-white mb-8">Performance Impact Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-white/50 text-xs md:text-sm uppercase tracking-wider font-semibold">
                  <th className="pb-4 pr-4">Metrics Category</th>
                  <th className="pb-4 px-4 text-center md:text-left">Legacy Workflow</th>
                  <th className="pb-4 pl-4 text-accent-electric text-center md:text-left">AI Autonomous State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm md:text-base">
                {data.metrics.map((metric, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4 font-medium text-white">{metric.label}</td>
                    <td className="py-4 px-4 text-white/50 text-center md:text-left">{metric.preValue}</td>
                    <td className="py-4 pl-4 text-accent-electric font-semibold text-center md:text-left">{metric.postValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Conclusion CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 border border-white/10 rounded-3xl bg-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="text-white/50 text-sm uppercase tracking-widest font-bold block mb-2">Conclusion</span>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              {data.conclusion}
            </p>
          </div>
          <MagneticButton>
            <Link 
              href="/get-started"
              className="px-8 py-4 rounded-full border border-accent-electric bg-accent-electric/10 text-accent-electric font-medium hover:bg-accent-electric hover:text-black transition-colors shrink-0"
            >
              Request Custom AI Build
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </main>
  );
}
