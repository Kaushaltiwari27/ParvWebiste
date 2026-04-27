"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AISearchModal from "./AISearchModal";

const navItems = [
  {
    title: "Services",
    href: "/#services",
    dropdown: [
      { title: "AI Automation", href: "/services/ai-automation" },
      { title: "Web Development", href: "/services/web-development" },
      { title: "App Development", href: "/services/app-development" },
      { title: "CRM / ERP Systems", href: "/services/crm-erp" },
      { title: "Branding Solutions", href: "/services/branding" },
      { title: "Consulting", href: "/services/consulting" }
    ]
  },
  {
    title: "Training",
    href: "/#pricing",
    dropdown: [
      { title: "AI Foundation Program", href: "/training/ai-foundation" },
      { title: "AI Skill Builder", href: "/training/skill-builder" },
      { title: "AI Income Accelerator", href: "/training/income-accelerator" },
      { title: "Corporate Training", href: "/training/corporate" },
      { title: "Workshops", href: "/training/workshops" }
    ]
  },
  {
    title: "Solutions",
    href: "/#portfolio",
    dropdown: [
      { title: "Business Automation", href: "/solutions/business-automation" },
      { title: "Lead Generation Systems", href: "/solutions/lead-generation" },
      { title: "Chatbots", href: "/solutions/chatbots" },
      { title: "AI Agents", href: "/solutions/ai-agents" },
      { title: "E-commerce Growth", href: "/solutions/ecommerce-growth" }
    ]
  },
  {
    title: "Resources",
    href: "/#faq",
    dropdown: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Free Tools", href: "/resources/tools" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "FAQs", href: "/resources/faqs" },
      { title: "Contact Support", href: "/resources/support" }
    ]
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        scrolled || pathname !== '/'
          ? "bg-black/70 backdrop-blur-xl py-4 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6 md:py-[20px] border-transparent"
      } px-6 md:px-[120px]`}
    >
      <div className="flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-[60px]">
          <Link href="/" className="w-[187px] flex items-center text-white font-general font-semibold text-xl tracking-wide shrink-0 z-50">
            ParvInfoSoft
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-[30px]" onMouseLeave={() => setHoveredIndex(null)}>
            {navItems.map((item, index) => {
              const isActive = pathname.startsWith(`/${item.title.toLowerCase()}`);
              return (
                <div 
                  key={item.title} 
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <Link 
                    href={item.href} 
                    className={`flex items-center gap-[14px] text-[14px] font-medium hover:text-white transition-colors py-4 ${isActive ? 'text-accent-electric' : 'text-white/80'}`}
                  >
                    {item.title}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${hoveredIndex === index ? "rotate-180 text-white" : isActive ? 'text-accent-electric' : 'text-white/80'}`} 
                    />
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-[280px] bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.title} 
                              href={subItem.href}
                              className="group/link flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                              <span className={`text-[14px] font-medium transition-colors ${pathname === subItem.href ? 'text-accent-electric' : 'text-white/80 group-hover/link:text-white'}`}>
                                {subItem.title}
                              </span>
                              <ArrowRight size={14} className={`-translate-x-2 transition-all duration-300 ${pathname === subItem.href ? 'text-accent-electric translate-x-0 opacity-100' : 'text-white/0 group-hover/link:text-accent-electric group-hover/link:translate-x-0 opacity-0 group-hover/link:opacity-100'}`} />
                            </Link>
                          ))}
                        </div>
                        <div className="bg-white/5 p-4 border-t border-white/5">
                          <span className="text-[11px] text-white/40 uppercase tracking-widest font-bold">Premium Multi-Page Ecosystem</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Actions (Search + Get Started) */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setSearchOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-accent-electric hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
          >
            <Search size={18} className="group-hover:scale-110 transition-transform" />
          </button>

          <Link 
            href="/get-started"
            className="relative inline-flex items-center justify-center p-[0.6px] rounded-full overflow-hidden group bg-white/20 transition-all hover:bg-white/40 hover:scale-[1.02] active:scale-95"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-black rounded-full px-[29px] py-[11px] h-full w-full flex items-center justify-center transition-colors group-hover:bg-[#0A0A0A]">
              <span className="text-white text-[14px] font-medium">Get Started</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-[110] relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <AISearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Fullscreen Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#050505] z-[100] flex flex-col pt-32 px-6 h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-32">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="border-b border-white/10 pb-6"
                >
                  <Link 
                    href={item.href} 
                    className="text-3xl font-medium text-white mb-6 flex justify-between items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                    <ArrowRight className="text-accent-electric opacity-50" />
                  </Link>
                  <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                    {item.dropdown.map((sub) => (
                      <Link 
                        key={sub.title} 
                        href={sub.href} 
                        className={`text-lg transition-colors ${pathname === sub.href ? 'text-accent-electric' : 'text-white/60 hover:text-white'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
                <Link
                  href="/get-started"
                  className="w-full block py-5 rounded-full bg-white text-black text-center text-xl font-medium shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 transition-transform sticky bottom-6"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
