"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, BarChart3, ArrowUpRight, PhoneCall } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

const caseStudies = [
  {
    id: 9,
    title: "Architecting a High-Fidelity AI Voice Receptionist for Healthcare Infrastructure",
    client: "Surat Metro Healthcare Group",
    challenge: "Managing high-volume patient inquiries, verifying complex insurance details, and handling calendar logistics manually.",
    result: "0s hold time & 100% accuracy",
    metric: "75%",
    metricLabel: "Call Volume Reduction",
    icon: PhoneCall,
    color: "from-blue-500/20 to-indigo-900/40",
    slug: "ai-hospital-receptionist"
  },
  {
    id: 1,
    title: "How AI Automation Saved 40 Hours/Week for a Marketing Agency",
    client: "ScaleDigital Media",
    challenge: "Manual lead routing and reporting was eating up an entire full-time employee's schedule.",
    result: "40 hours saved weekly",
    metric: "+210%",
    metricLabel: "Lead Response Time",
    icon: Clock,
    color: "from-blue-500/20 to-indigo-900/40"
  },
  {
    id: 2,
    title: "Website Redesign Increased Qualified Leads by 210%",
    client: "TechFlow Solutions",
    challenge: "Outdated legacy website was bleeding traffic and had a bounce rate of 85%.",
    result: "210% increase in leads",
    metric: "-60%",
    metricLabel: "Bounce Rate",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-green-900/40"
  },
  {
    id: 3,
    title: "Custom CRM Setup Reduced Follow-up Losses to Zero",
    client: "Prime Real Estate",
    challenge: "Agents were tracking high-ticket leads in Excel, leading to missed follow-ups and lost commissions.",
    result: "Zero lost leads",
    metric: "+45%",
    metricLabel: "Close Rate",
    icon: BarChart3,
    color: "from-orange-500/20 to-red-900/40"
  },
  {
    id: 4,
    title: "AI Chatbot Improved Support Resolution by 65%",
    client: "E-Commerx",
    challenge: "Support team was overwhelmed with repetitive 'Where is my order?' tickets.",
    result: "65% ticket deflection",
    metric: "< 1 min",
    metricLabel: "Response Time",
    icon: Clock,
    color: "from-purple-500/20 to-pink-900/40"
  },
  {
    id: 5,
    title: "Sales Funnel Generated ₹5L Revenue in 30 Days",
    client: "Elite Coaching",
    challenge: "Selling high-ticket consulting manually through DMs with inconsistent results.",
    result: "₹5L Revenue",
    metric: "12x",
    metricLabel: "ROAS",
    icon: TrendingUp,
    color: "from-amber-500/20 to-orange-900/40"
  },
  {
    id: 6,
    title: "Automated AI Content Workflow for SEO Agency",
    client: "RankBuilders",
    challenge: "Spending $5,000/mo on freelance writers for basic top-of-funnel content.",
    result: "80% cost reduction",
    metric: "100+",
    metricLabel: "Articles/Month",
    icon: BarChart3,
    color: "from-cyan-500/20 to-blue-900/40"
  },
  {
    id: 7,
    title: "Real Estate Portal Build with Advanced Search Filters",
    client: "MetroHomes",
    challenge: "Needed a scalable, lightning-fast property portal with complex map integrations.",
    result: "10,000+ daily active users",
    metric: "< 1s",
    metricLabel: "Load Time",
    icon: Clock,
    color: "from-rose-500/20 to-red-900/40"
  },
  {
    id: 8,
    title: "E-commerce Conversion Optimization & Growth",
    client: "LuxeFashion",
    challenge: "High cart abandonment rate during the checkout process.",
    result: "Abandoned carts recovered",
    metric: "+35%",
    metricLabel: "Total Revenue",
    icon: TrendingUp,
    color: "from-teal-500/20 to-emerald-900/40"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-general">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-electric/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-electric text-sm font-medium mb-6">
              <BarChart3 size={16} />
              Proven Impact
            </div>
            <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight">
              Real Businesses. <span className="text-accent-electric">Real ROI.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              See exactly how we've helped companies across India increase revenue, automate operations, and scale digitally.
            </p>
            <MagneticButton>
              <Link 
                href="/get-started"
                className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-white/20 transition-all hover:bg-white/40 active:scale-95"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-full px-[32px] py-[14px] h-full w-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <span className="text-black text-[15px] font-medium tracking-wide">Become Our Next Success Story</span>
                </div>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const InnerContent = () => (
                <>
                  {/* Background Ambient Glow */}
                  <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${study.color} blur-[80px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none translate-x-1/2 -translate-y-1/2`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 tracking-wider uppercase">
                        Client: {study.client}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-accent-electric group-hover:text-black group-hover:border-accent-electric transition-colors">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <h3 className="text-3xl font-medium text-white mb-6 leading-[1.2] group-hover:text-accent-electric transition-colors">
                      {study.title}
                    </h3>

                    <div className="mb-10">
                      <p className="text-white/50 text-base leading-relaxed">
                        <span className="text-white/80 font-medium block mb-1">The Challenge:</span>
                        {study.challenge}
                      </p>
                    </div>

                    {/* Metrics Box */}
                    <div className="mt-auto grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <study.icon size={24} className="text-accent-electric mb-4" />
                        <div className="text-3xl font-medium text-white mb-1">{study.metric}</div>
                        <div className="text-white/50 text-sm font-medium">{study.metricLabel}</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end">
                        <div className="text-white/80 text-sm leading-snug font-medium">
                          "The exact result achieved was {study.result} within the first quarter."
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_50px_rgba(78,163,224,0.1)]"></div>
                </>
              );

              if ('slug' in study && study.slug) {
                return (
                  <Link href={`/resources/case-studies/${study.slug}`} key={study.id} className="block h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative h-full bg-[#050505] rounded-3xl border border-white/10 overflow-hidden hover:border-accent-electric/30 transition-colors p-8 md:p-10 cursor-pointer"
                    >
                      <InnerContent />
                    </motion.div>
                  </Link>
                );
              }

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-[#050505] rounded-3xl border border-white/10 overflow-hidden hover:border-accent-electric/30 transition-colors p-8 md:p-10"
                >
                  <InnerContent />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to transform your business?</h2>
          <p className="text-white/60 text-lg mb-10">Book a free consultation call and let's map out your exact growth strategy.</p>
          <MagneticButton>
            <Link 
              href="/get-started"
              className="px-8 py-4 rounded-full border border-accent-electric bg-accent-electric/10 text-accent-electric font-medium hover:bg-accent-electric hover:text-black transition-colors"
            >
              Request Consultation
            </Link>
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
