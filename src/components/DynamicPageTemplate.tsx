"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ChevronDown, Quote } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { PageContent } from "@/data/pages";
import { usePathname } from "next/navigation";

export default function DynamicPageTemplate({ data, category }: { data: PageContent, category: string }) {
  const pathname = usePathname();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <h2>Page not found.</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-32 pb-24 font-general relative overflow-hidden">
      
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
          <Link href={`/#${category.toLowerCase()}`} className="hover:text-white transition-colors">{category}</Link>
          <span>/</span>
          <span className="text-accent-electric">{data.title}</span>
        </motion.div>

        {/* Hero Section */}
        <div className={`mb-24 flex flex-col ${data.imageUrl ? 'lg:flex-row lg:items-center lg:justify-between' : ''} gap-12`}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-3xl ${data.imageUrl ? 'lg:max-w-2xl' : ''}`}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
            
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium text-white leading-[1.05] mb-6 tracking-tight"
                style={{
                  backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
            >
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-accent-electric font-medium mb-8">
              {data.subtitle}
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-12">
              {data.description}
            </p>

            <MagneticButton>
              <Link 
                href="/get-started"
                className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-white/20 transition-all hover:bg-white/40 active:scale-95"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-full px-[40px] py-[16px] h-full w-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <span className="text-black text-[16px] font-medium tracking-wide">
                    {category === "Training" ? "Enroll Now" : "Request Consultation"}
                  </span>
                </div>
              </Link>
            </MagneticButton>
          </motion.div>

          {data.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative hidden md:block"
            >
              {/* Decorative glows behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-electric/20 blur-[100px] rounded-full"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#050505] aspect-[4/3] group shadow-2xl">
                <img 
                  src={data.imageUrl} 
                  alt={data.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Dynamic Content Sections */}
        <div className="space-y-16">
          
          {/* Features Grid */}
          {data.features && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150px] bg-accent-electric/5 blur-[80px] pointer-events-none"></div>
              <h3 className="text-3xl font-medium text-white mb-10">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="text-accent-electric shrink-0 mt-1" />
                    <span className="text-white/80 font-medium text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Workflow / Process Steps */}
          {data.workflowSteps && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-medium text-white mb-10">How We Build It</h3>
              <div className="space-y-6">
                {data.workflowSteps.map((step, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6 hover:border-accent-electric/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent-electric/10 text-accent-electric flex items-center justify-center font-bold text-xl shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">{step.title}</h4>
                      <p className="text-white/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Modules (For Training) */}
          {data.modules && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-medium text-white mb-10">Curriculum Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.modules.map((mod, i) => (
                  <div key={i} className="bg-[#050505] border border-white/10 p-8 rounded-3xl">
                    <h4 className="text-lg font-medium text-accent-electric mb-2">{mod.title}</h4>
                    <p className="text-white/70">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Testimonials */}
          {data.testimonials && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-medium text-white mb-10">Real Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.testimonials.map((t, i) => (
                  <div key={i} className="bg-[#050505] border border-white/10 p-8 rounded-3xl relative">
                    <Quote className="text-white/5 absolute top-6 right-6 w-12 h-12" />
                    <p className="text-white/80 text-lg italic mb-6 relative z-10">"{t.review}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-electric to-blue-600 flex items-center justify-center font-bold text-black">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{t.name}</div>
                        <div className="text-white/50 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQs */}
          {data.faqs && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-medium text-white mb-10">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`border ${openFaq === i ? 'border-accent-electric bg-accent-electric/5' : 'border-white/10 bg-[#050505]'} rounded-2xl overflow-hidden transition-all duration-300`}
                  >
                    <button 
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className={`font-medium text-lg ${openFaq === i ? 'text-accent-electric' : 'text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent-electric' : 'text-white/40'}`} />
                    </button>
                    <div 
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? 1 : 0 }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing CTA Box */}
          {data.pricing && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 md:p-12 border border-white/10 rounded-3xl bg-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <span className="text-white/50 text-sm uppercase tracking-widest font-bold block mb-2">Investment</span>
                <span className="text-4xl font-medium text-white">{data.pricing}</span>
              </div>
              <MagneticButton>
                <Link 
                  href="/get-started"
                  className="px-8 py-4 rounded-full border border-accent-electric bg-accent-electric/10 text-accent-electric font-medium hover:bg-accent-electric hover:text-black transition-colors"
                >
                  Apply Now
                </Link>
              </MagneticButton>
            </motion.div>
          )}

        </div>
      </div>
    </main>
  );
}
