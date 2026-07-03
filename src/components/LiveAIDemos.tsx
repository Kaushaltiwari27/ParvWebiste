"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, GraduationCap, Type, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const tabs = [
  { id: "roi", name: "ROI Calculator", icon: Calculator },
  { id: "course", name: "Course Recommender", icon: GraduationCap },
  { id: "headline", name: "Headline Generator", icon: Type }
];

export default function LiveAIDemos() {
  const [activeTab, setActiveTab] = useState("roi");

  // ROI State
  const [teamSize, setTeamSize] = useState("5");
  const [hoursWasted, setHoursWasted] = useState("10");
  const [salary, setSalary] = useState("20000");
  const [currency, setCurrency] = useState("₹");

  // Dynamic salary limits based on currency
  const getSalaryConfig = () => {
    if (currency === "₹") return { min: 10000, max: 200000, step: 5000 };
    return { min: 500, max: 20000, step: 500 }; // For USD, EUR, GBP
  };

  // Course Recommender State
  const [userType, setUserType] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState<any>(null);

  // Headline Generator State
  const [niche, setNiche] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [headlines, setHeadlines] = useState<any>(null);

  const calculateROI = () => {
    const hours = parseInt(teamSize) * parseInt(hoursWasted) * 4; // monthly hours
    const hourlyRate = parseInt(salary) / 160; // rough hourly rate
    const moneySaved = Math.round(hours * hourlyRate);
    return { hours, moneySaved };
  };

  const handleCourseAnalysis = () => {
    if (!userType) return;
    setIsAnalyzing(true);
    setRecommendedCourse(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      if (userType === "student") {
        setRecommendedCourse({ title: "AI Foundation Program", reason: "Perfect for beginners looking to master ChatGPT and everyday AI tools without coding.", link: "/training/ai-foundation" });
      } else if (userType === "freelancer") {
        setRecommendedCourse({ title: "AI Skill Builder", reason: "Learn how to build automation workflows and sell them as a high-paying freelance service.", link: "/training/skill-builder" });
      } else if (userType === "working professional") {
        setRecommendedCourse({ title: "AI Skill Builder", reason: "Upskill in advanced prompt engineering and tools to save hours at your current job and stand out.", link: "/training/skill-builder" });
      } else {
        setRecommendedCourse({ title: "AI Income Accelerator", reason: "The exact blueprint for agency owners to scale their operations and close high-ticket AI retainers.", link: "/training/income-accelerator" });
      }
    }, 1500);
  };

  const handleGenerateHeadline = () => {
    if (!niche) return;
    setIsGenerating(true);
    setHeadlines(null);
    setTimeout(() => {
      setIsGenerating(false);
      setHeadlines({
        tagline: "AI-Powered Growth",
        headline: `Automate Your ${niche.charAt(0).toUpperCase() + niche.slice(1)} Business & Double Your Revenue.`,
        cta: "Get Free Audit"
      });
    }, 1500);
  };

  return (
    <section className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-electric/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-electric text-sm font-medium mb-6">
            <Sparkles size={16} />
            See AI In Action
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
            Experience the <span className="text-accent-electric">Power of AI</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Don't just take our word for it. Try our interactive AI tools right now and see exactly how automation can transform your business and career.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? "text-black" : "text-white/40"} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Demo Content Area */}
        <div className="bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-12 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* ROI CALCULATOR */}
            {activeTab === "roi" && (
              <motion.div
                key="roi"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">How much can AI save you?</h3>
                  <p className="text-white/50 mb-8">Enter your team details to calculate the monthly ROI of implementing basic AI automations.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm text-white/70 block mb-2">Team Size</label>
                      <input 
                        type="range" min="1" max="50" value={teamSize} onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full accent-accent-electric"
                      />
                      <div className="text-accent-electric font-medium mt-2">{teamSize} Employees</div>
                    </div>
                    <div>
                      <label className="text-sm text-white/70 block mb-2">Hours Wasted Weekly (Per Employee)</label>
                      <input 
                        type="range" min="1" max="20" value={hoursWasted} onChange={(e) => setHoursWasted(e.target.value)}
                        className="w-full accent-accent-electric"
                      />
                      <div className="text-accent-electric font-medium mt-2">{hoursWasted} Hours on repetitive tasks</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm text-white/70 block">Average Monthly Salary</label>
                        <select 
                          value={currency} 
                          onChange={(e) => {
                            setCurrency(e.target.value);
                            // Auto-adjust salary to reasonable default when switching currencies
                            if (e.target.value === "₹") setSalary("20000");
                            else setSalary("2000");
                          }}
                          className="bg-[#050505] border border-white/10 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-accent-electric cursor-pointer"
                        >
                          <option value="₹" className="bg-transparent text-white">INR (₹)</option>
                          <option value="$" className="bg-transparent text-white">USD ($)</option>
                          <option value="€" className="bg-transparent text-white">EUR (€)</option>
                          <option value="£" className="bg-transparent text-white">GBP (£)</option>
                        </select>
                      </div>
                      <input 
                        type="range" 
                        min={getSalaryConfig().min} 
                        max={getSalaryConfig().max} 
                        step={getSalaryConfig().step} 
                        value={salary} 
                        onChange={(e) => setSalary(e.target.value)}
                        className="w-full accent-accent-electric"
                      />
                      <div className="text-accent-electric font-medium mt-2">{currency}{parseInt(salary).toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-electric/20 blur-[50px] rounded-full"></div>
                  <h4 className="text-sm text-white/50 uppercase tracking-widest font-medium mb-8">AI Automation Potential</h4>
                  
                  <div className="space-y-8 relative z-10">
                    <div>
                      <div className="text-5xl font-medium text-white mb-2">{calculateROI().hours}</div>
                      <div className="text-white/50">Hours Saved Per Month</div>
                    </div>
                    <div className="w-full h-[1px] bg-white/10"></div>
                    <div>
                      <div className="text-5xl font-medium text-accent-electric mb-2">{currency}{calculateROI().moneySaved.toLocaleString('en-IN')}</div>
                      <div className="text-white/50">Money Saved Per Month</div>
                    </div>
                  </div>

                  <MagneticButton>
                    <Link href="/get-started" className="mt-8 block w-full py-4 rounded-xl bg-accent-electric text-black text-center font-medium hover:bg-white transition-colors">
                      Automate My Business
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            )}

            {/* COURSE RECOMMENDER */}
            {activeTab === "course" && (
              <motion.div
                key="course"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-medium text-white mb-2">Which AI Course is right for you?</h3>
                  <p className="text-white/50">Let our AI analyze your profile and recommend the perfect training program.</p>
                </div>

                {!recommendedCourse && !isAnalyzing && (
                  <div className="space-y-6">
                    <label className="text-sm text-white/70 block text-center">I am currently a...</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {["student", "working professional", "freelancer", "business owner"].map((type) => (
                        <button 
                          key={type}
                          onClick={() => setUserType(type)}
                          className={`p-3 text-sm rounded-xl border transition-colors capitalize ${userType === type ? 'bg-accent-electric/10 border-accent-electric text-accent-electric' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={handleCourseAnalysis}
                      disabled={!userType}
                      className="w-full mt-6 py-4 rounded-xl bg-white text-black font-medium hover:bg-accent-electric transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Sparkles size={18} /> Analyze Profile
                    </button>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="py-20 flex flex-col items-center justify-center text-accent-electric">
                    <Loader2 size={40} className="animate-spin mb-4" />
                    <p className="font-medium animate-pulse">Running neural analysis on profile...</p>
                  </div>
                )}

                {recommendedCourse && !isAnalyzing && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 bg-accent-electric/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-electric">
                      <GraduationCap size={32} />
                    </div>
                    <h4 className="text-accent-electric text-sm tracking-widest uppercase mb-2">Perfect Match</h4>
                    <h2 className="text-3xl font-medium text-white mb-4">{recommendedCourse.title}</h2>
                    <p className="text-white/60 mb-8">{recommendedCourse.reason}</p>
                    <div className="flex gap-4 justify-center">
                      <button onClick={() => { setRecommendedCourse(null); setUserType(""); }} className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                        Try Again
                      </button>
                      <Link href={recommendedCourse.link} className="px-6 py-3 rounded-full bg-accent-electric text-black font-medium hover:bg-white transition-colors">
                        View Course Details
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* HEADLINE GENERATOR */}
            {activeTab === "headline" && (
              <motion.div
                key="headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-medium text-white mb-2">AI Copywriting Agent</h3>
                  <p className="text-white/50">Enter your business niche and instantly generate a high-converting hero section for your website.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <input 
                    type="text" 
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="e.g. Real Estate Agency, Dental Clinic..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent-electric transition-colors w-full"
                  />
                  <button 
                    onClick={handleGenerateHeadline}
                    disabled={!niche || isGenerating}
                    className="px-8 py-4 rounded-xl bg-accent-electric text-black font-medium hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto shrink-0"
                  >
                    {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                    Generate
                  </button>
                </div>

                {headlines && !isGenerating && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 20 }}
                    className="bg-transparent border border-white/10 p-10 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-electric"></div>
                    <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full mb-6 uppercase tracking-widest border border-white/5">
                      {headlines.tagline}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-tight">
                      {headlines.headline}
                    </h2>
                    <button className="px-6 py-3 bg-white text-black font-medium rounded-lg text-sm">
                      {headlines.cta}
                    </button>
                    
                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                      <p className="text-white/40 text-sm mb-4">Want us to build the entire website and automation system for you?</p>
                      <Link href="/get-started" className="text-accent-electric text-sm font-medium hover:underline inline-flex items-center gap-1">
                        Request Consultation <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
