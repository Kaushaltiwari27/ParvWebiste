"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { id: 1, name: "Harsh Patel", role: "Agency Owner", city: "Ahmedabad", initials: "HP", color: "from-blue-400 to-indigo-600", text: "ParvInfoSoft completely transformed my agency. We automated our entire client onboarding process, saving my team over 40 hours a week.", result: "Saved 40 hrs/week" },
  { id: 2, name: "Riya Sharma", role: "Freelance Developer", city: "Mumbai", initials: "RS", color: "from-pink-400 to-rose-600", text: "The AI Skill Builder program is worth 10x what they charge. I landed my first international client within 3 weeks of completing the course.", result: "Landed $2k client" },
  { id: 3, name: "Mitul Desai", role: "E-commerce Founder", city: "Surat", initials: "MD", color: "from-emerald-400 to-teal-600", text: "Their team built a custom AI recommendation engine for our store. Our AOV increased by 35% in just two months.", result: "+35% AOV" },
  { id: 4, name: "Jinal Mehta", role: "Marketing Director", city: "Pune", initials: "JM", color: "from-amber-400 to-orange-600", text: "We struggled with lead generation until ParvInfoSoft built our automated funnel. We now have a predictable stream of qualified leads.", result: "210% More Leads" },
  { id: 5, name: "Rahul Verma", role: "SaaS Founder", city: "Bangalore", initials: "RV", color: "from-cyan-400 to-blue-600", text: "I hired them for complete tech consulting. They architected our entire backend, saving us months of developer time and costly mistakes.", result: "Launched 3 months early" },
  { id: 6, name: "Priya Mehta", role: "Student", city: "Delhi", initials: "PM", color: "from-purple-400 to-violet-600", text: "The AI Foundation course was my gateway into tech. The instructors are incredibly supportive and the curriculum is highly practical.", result: "Got Tech Internship" },
  { id: 7, name: "Vikas Shah", role: "Real Estate Broker", city: "Ahmedabad", initials: "VS", color: "from-red-400 to-rose-600", text: "We use their custom CRM daily. It automatically follows up with leads via WhatsApp and has literally doubled our closing rate.", result: "Doubled Close Rate" },
  { id: 8, name: "Neha Jain", role: "Content Creator", city: "Jaipur", initials: "NJ", color: "from-yellow-400 to-amber-600", text: "I learned how to automate my entire content creation and distribution workflow. I now run three YouTube channels effortlessly.", result: "3x Content Output" },
  { id: 9, name: "Aarav Joshi", role: "Operations Head", city: "Hyderabad", initials: "AJ", color: "from-lime-400 to-green-600", text: "Their chatbot solution handles 80% of our tier-1 support queries flawlessly. It's like having a 24/7 support team.", result: "80% Ticket Deflection" },
  { id: 10, name: "Sneha Kapoor", role: "HR Manager", city: "Gurgaon", initials: "SK", color: "from-fuchsia-400 to-pink-600", text: "We booked them for Corporate Training. Our entire HR and recruitment team now uses AI to screen resumes and draft emails.", result: "10x Faster Hiring" },
  { id: 11, name: "Yash Patel", role: "B2B Sales", city: "Ahmedabad", initials: "YP", color: "from-sky-400 to-blue-600", text: "The Lead Generation System they built is a masterpiece. Cold outreach is now 100% automated and highly personalized.", result: "15 Meetings/Week" },
  { id: 12, name: "Kunal Shah", role: "Startup Founder", city: "Bangalore", initials: "KS", color: "from-indigo-400 to-purple-600", text: "They designed our branding and landing page. We raised our seed round within a month of launch.", result: "Raised Seed Round" },
  { id: 13, name: "Simran Kaur", role: "Freelance Designer", city: "Chandigarh", initials: "SK", color: "from-rose-400 to-red-600", text: "The AI Income Accelerator gave me the exact blueprint to package my design services with AI and charge premium rates.", result: "Tripled Freelance Rate" },
  { id: 14, name: "Mohit Arora", role: "Gym Owner", city: "Delhi", initials: "MA", color: "from-orange-400 to-red-600", text: "They built a WhatsApp AI agent that automatically books trial classes for leads from Instagram. It's magic.", result: "Fully Booked Gym" },
  { id: 15, name: "Devansh Modi", role: "Consultant", city: "Mumbai", initials: "DM", color: "from-teal-400 to-emerald-600", text: "Best investment I made this year. The strategies taught are not generic internet advice, they are battle-tested agency systems.", result: "Scaled to ₹5L/mo" }
];

export default function SuccessStories() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Auto-slide effect using Framer Motion's imperative animation
  useEffect(() => {
    let animation: any;
    
    const startAnimation = async () => {
      // Very slow constant movement
      animation = controls.start({
        x: -width,
        transition: { 
          duration: width / 80, // Increased speed
          ease: "linear", 
          repeat: Infinity,
          repeatType: "mirror"
        }
      });
    };

    if (!isHovered && width > 0) {
      startAnimation();
    } else {
      controls.stop();
    }

    return () => {
      if (animation) controls.stop();
    };
  }, [width, isHovered, controls]);

  return (
    <section id="success-stories" className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-accent-electric/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-electric text-sm font-medium mb-6">
            <Star size={16} className="fill-accent-electric" />
            Real Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
            Loved by <span className="text-accent-electric">1000+</span> Innovators
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
            Don't just take our word for it. Here is what business owners, freelancers, and students have to say about working with ParvInfoSoft.
          </p>
        </div>
      </div>

      {/* Draggable Auto-Carousel */}
      <div 
        className="w-full relative z-10 py-10 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={carouselRef}
          className="overflow-hidden"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={controls}
            style={{ x }}
            className="flex gap-6 px-6 md:px-12 w-max"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "100px" }}
                transition={{ delay: (index % 5) * 0.1 }}
                className="w-[350px] md:w-[420px] shrink-0 bg-[#050505] border border-white/10 rounded-3xl p-8 relative group hover:border-white/30 transition-colors"
              >
                <Quote size={40} className="text-white/5 absolute top-6 right-6 group-hover:text-accent-electric/10 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center border border-white/20 shadow-lg`}>
                    <span className="text-white font-bold text-lg">{t.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{t.name}</h4>
                    <p className="text-white/50 text-sm">{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent-electric text-accent-electric" />
                  ))}
                </div>

                <p className="text-white/80 text-[15px] leading-relaxed mb-8 h-[100px]">
                  "{t.text}"
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/40 text-xs font-medium uppercase tracking-wider">
                    <MapPin size={14} /> {t.city}
                  </div>
                  <div className="px-3 py-1 bg-accent-electric/10 border border-accent-electric/20 rounded-full text-accent-electric text-xs font-bold">
                    {t.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Fade Edges for Carousel */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-20"></div>

    </section>
  );
}
