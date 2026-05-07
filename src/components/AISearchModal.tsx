"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Command, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AISearchModal({ isOpen, onClose }: AISearchModalProps) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose(); // toggle logic usually handled in parent, but this allows closing
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    
    if (val.length < 2) {
      setResults(null);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate AI Search Delay
    setTimeout(() => {
      const lower = val.toLowerCase();
      let aiResponse = "";
      let links: { label: string; url: string }[] = [];

      if (lower.includes("price") || lower.includes("cost") || lower.includes("fee")) {
        aiResponse = "Our training programs start at ₹4,500. Corporate training and business automation services are custom quoted starting from ₹80,000 based on your specific requirements.";
        links = [{ label: "View Pricing Details", url: "/#pricing" }];
      } else if (lower.includes("course") || lower.includes("learn") || lower.includes("training")) {
        aiResponse = "We offer multiple AI programs. The Foundation program is best for absolute beginners, while the Skill Builder helps you monetize your AI skills.";
        links = [
          { label: "AI Foundation", url: "/training/ai-foundation" },
          { label: "AI Skill Builder", url: "/training/skill-builder" }
        ];
      } else if (lower.includes("founder") || lower.includes("kaushal")) {
        aiResponse = "ParvInfoSoft was founded by Kaushal Tiwari, an AI Strategist and business builder dedicated to bringing premium AI education and automation to India.";
        links = [{ label: "Connect with Founder", url: "/#founder" }];
      } else if (lower.includes("service") || lower.includes("automation") || lower.includes("build")) {
        aiResponse = "We build custom AI agents, automated workflows (Zapier/Make), and custom CRM systems tailored to your business operations.";
        links = [
          { label: "AI Automation", url: "/services/ai-automation" },
          { label: "Web Development", url: "/services/web-development" }
        ];
      } else {
        aiResponse = `I found some resources related to "${val}". If you need specific help, our team is available to assist you.`;
        links = [{ label: "Contact Support", url: "/get-started" }];
      }

      setResults({ text: aiResponse, links });
      setIsSearching(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-transparent/80 backdrop-blur-sm"
          ></motion.div>

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Area */}
            <div className="flex items-center px-4 py-4 border-b border-white/10 relative">
              <Search size={20} className="text-white/40 mr-3" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={handleSearch}
                placeholder="Ask Parv AI or search the site..."
                className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none placeholder:text-white/30"
              />
              <div className="flex items-center gap-2">
                {isSearching && <Sparkles size={18} className="text-accent-electric animate-pulse" />}
                <button 
                  onClick={onClose}
                  className="px-2 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/50 hover:text-white transition-colors flex items-center gap-1"
                >
                  ESC
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto min-h-[100px] max-h-[400px]">
              {!query && (
                <div className="p-8 text-center text-white/30 flex flex-col items-center">
                  <Command size={40} className="mb-4 opacity-20" />
                  <p>Type to ask AI about courses, pricing, or services.</p>
                </div>
              )}

              {query && results && !isSearching && (
                <div className="p-6">
                  <div className="flex items-start gap-4 bg-accent-electric/5 border border-accent-electric/20 rounded-xl p-5 relative overflow-hidden mb-6">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-electric"></div>
                    <Sparkles size={20} className="text-accent-electric mt-1 shrink-0" />
                    <div>
                      <p className="text-white text-[15px] leading-relaxed mb-4">
                        {results.text}
                      </p>
                      {results.links && results.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {results.links.map((link: any, idx: number) => (
                            <Link 
                              key={idx}
                              href={link.url}
                              onClick={onClose}
                              className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-sm text-white hover:bg-white/20 transition-colors flex items-center gap-2"
                            >
                              {link.label} <ArrowRight size={14} />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Suggestion Links */}
                  <div className="px-2">
                    <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Quick Links</h4>
                    <div className="space-y-1">
                      <Link href="/resources/tools" onClick={onClose} className="block px-3 py-2 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-colors text-sm flex items-center justify-between group">
                        Free AI Tools Directory
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-electric" />
                      </Link>
                      <Link href="/get-started" onClick={onClose} className="block px-3 py-2 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-colors text-sm flex items-center justify-between group">
                        Book Consultation
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-electric" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/5 bg-transparent/50 text-center flex items-center justify-center gap-4 text-xs text-white/30">
              <span className="flex items-center gap-1"><Command size={12}/> K to open search</span>
              <span className="flex items-center gap-1"><ArrowRight size={12}/> to navigate</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
