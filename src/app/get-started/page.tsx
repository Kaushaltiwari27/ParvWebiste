"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

type FlowType = "none" | "training" | "services";

export default function GetStartedPage() {
  const [flow, setFlow] = useState<FlowType>("none");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Attach the flow type (training or services)
    data.formType = flow;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Submission failed');
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-general relative selection:bg-accent-electric selection:text-white">
      <Navbar />
      
      {/* Ambient background */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-electric/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-40 pb-32 container mx-auto px-6 max-w-4xl min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: SELECTION */}
          {flow === "none" && !isSuccess && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-center"
            >
              <h1 className="text-[40px] md:text-[56px] font-medium leading-[1.1] mb-6">
                What are you looking for?
              </h1>
              <p className="text-white/60 text-lg mb-16 max-w-xl mx-auto">
                Select your path so we can provide you with the most relevant information and fastest response.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option 1 */}
                <button 
                  onClick={() => setFlow("training")}
                  className="group relative bg-[#050505] border border-white/10 rounded-2xl p-10 text-left hover:border-accent-electric transition-colors overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-electric/10 transition-colors">
                      <GraduationCap size={28} className="text-white/80 group-hover:text-accent-electric transition-colors" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">Training / Course</h3>
                    <p className="text-white/50 text-[15px] leading-relaxed mb-8">Learn AI, Automation, Freelancing & Income Skills.</p>
                    <div className="flex items-center gap-2 text-accent-electric text-sm font-medium">
                      Select Path <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Option 2 */}
                <button 
                  onClick={() => setFlow("services")}
                  className="group relative bg-[#050505] border border-white/10 rounded-2xl p-10 text-left hover:border-accent-electric transition-colors overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-electric/10 transition-colors">
                      <Briefcase size={28} className="text-white/80 group-hover:text-accent-electric transition-colors" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">Business Services</h3>
                    <p className="text-white/50 text-[15px] leading-relaxed mb-8">Need website, automation, branding or growth systems.</p>
                    <div className="flex items-center gap-2 text-accent-electric text-sm font-medium">
                      Select Path <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: TRAINING FORM */}
          {flow === "training" && !isSuccess && (
            <motion.div
              key="training-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <button onClick={() => setFlow("none")} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors">
                <ArrowLeft size={16} /> Back to selection
              </button>
              
              <h2 className="text-3xl font-medium mb-2">Apply for Training</h2>
              <p className="text-white/50 mb-10">Enter your details to enroll in our premium AI mastery programs.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Phone Number</label>
                    <input required name="phone" type="tel" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">City</label>
                    <input required name="city" type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="Mumbai" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Current Profession</label>
                    <input required name="profession" type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="Student / Developer / Marketer" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Interested Program</label>
                    <select required name="program" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors appearance-none">
                      <option value="">Select a program</option>
                      <option value="AI Foundation Program">AI Foundation Program</option>
                      <option value="AI Skill Builder">AI Skill Builder</option>
                      <option value="AI Income Accelerator">AI Income Accelerator</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70">Message / Goal</label>
                  <textarea name="message" rows={4} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors resize-none" placeholder="What do you want to achieve?"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-accent-electric text-black font-medium hover:bg-white transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 2: SERVICES FORM */}
          {flow === "services" && !isSuccess && (
            <motion.div
              key="services-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <button onClick={() => setFlow("none")} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors">
                <ArrowLeft size={16} /> Back to selection
              </button>
              
              <h2 className="text-3xl font-medium mb-2">Request Consultation</h2>
              <p className="text-white/50 mb-10">Tell us about your business and what systems you want to build.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Company Name</label>
                    <input required name="company" type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="Acme Corp" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Phone Number</label>
                    <input required name="phone" type="tel" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Service Needed</label>
                    <select required name="service" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors appearance-none">
                      <option value="">Select a service</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="CRM / ERP Systems">CRM / ERP Systems</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Monthly Budget</label>
                    <select required name="budget" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors appearance-none">
                      <option value="">Select a budget range</option>
                      <option value="Under ₹50k">Under ₹50k</option>
                      <option value="₹50k - ₹2L">₹50k - ₹2L</option>
                      <option value="₹2L+">₹2L+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70">Project Requirements</label>
                  <textarea name="requirements" rows={4} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-electric transition-colors resize-none" placeholder="Describe what you want to build..."></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-accent-electric text-black font-medium hover:bg-white transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Request Consultation"}
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 3: SUCCESS STATE */}
          {isSuccess && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-accent-electric/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent-electric/30">
                <CheckCircle2 size={40} className="text-accent-electric" />
              </div>
              <h2 className="text-4xl font-medium mb-4">Request Received</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md mx-auto">
                {flow === "training" 
                  ? "Thank you! Our admissions team will contact you shortly." 
                  : "Thank you! Our strategy team will connect with you soon."}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <MagneticButton>
                  <Link 
                    href="/"
                    className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-white/20 transition-all hover:bg-white/40 w-full sm:w-auto"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-white rounded-full px-[40px] py-[16px] h-full w-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <span className="text-black text-[16px] font-medium tracking-wide">Return Home</span>
                    </div>
                  </Link>
                </MagneticButton>
                
                <MagneticButton>
                  <a 
                    href="https://wa.me/919081553331"
                    target="_blank"
                    rel="noreferrer"
                    className="px-[40px] py-[16px] rounded-full border border-white/20 text-white font-medium text-[16px] hover:bg-white/10 transition-colors w-full sm:w-auto active:scale-95 bg-black/50 backdrop-blur-md"
                  >
                    WhatsApp Us
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
