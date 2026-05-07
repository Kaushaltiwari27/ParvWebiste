"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Mic, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
  options?: { label: string; action: string; url?: string }[];
};

const INITIAL_MESSAGE: Message = {
  id: "msg_1",
  sender: "ai",
  text: "Hi 👋 I'm Parv AI. I can help you find the right training, suggest business automations, or connect you with our team. What are you looking for?",
  options: [
    { label: "I want to learn AI", action: "learn" },
    { label: "I need business automation", action: "business" },
    { label: "Pricing & Plans", action: "pricing" }
  ]
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        
        recognition.onstart = () => setIsRecording(true);
        
        recognition.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = 0; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setInputText(currentTranscript);
        };
        
        recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsRecording(false);
        };
        
        recognition.onend = () => setIsRecording(false);
        
        recognitionRef.current = recognition;
      }
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking and routing
    setTimeout(() => {
      let response: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I can definitely help with that. Let me connect you with our strategy team for a quick chat."
      };

      const lower = text.toLowerCase();
      
      if (lower.includes("learn") || lower.includes("course") || lower.includes("student")) {
        response.text = "Great! If you want to master AI, our 'AI Skill Builder' is the most popular choice. It teaches you how to build automations and get freelance clients.";
        response.options = [
          { label: "View Courses", action: "link", url: "/#training" },
          { label: "Talk to Advisor on WhatsApp", action: "whatsapp", url: "https://wa.me/919081553331?text=Hi,%20I%20want%20to%20know%20more%20about%20AI%20courses." }
        ];
      } else if (lower.includes("business") || lower.includes("automation") || lower.includes("service")) {
        response.text = "Awesome. We build custom AI agents, CRMs, and lead gen systems. What's your monthly budget looking like?";
        response.options = [
          { label: "Under ₹50k", action: "budget_low" },
          { label: "₹50k - ₹2L", action: "budget_mid" },
          { label: "Over ₹2L", action: "budget_high" }
        ];
      } else if (lower.includes("pricing")) {
        response.text = "Our training courses start at ₹4,500. For business services, custom automation builds start at ₹80,000. Would you like a detailed quote?";
        response.options = [
          { label: "Get a Quote", action: "whatsapp", url: "https://wa.me/919081553331?text=Hi,%20I%20need%20a%20pricing%20quote%20for%20my%20business." }
        ];
      } else if (lower.includes("budget_")) {
        response.text = "Perfect. I'll pass this context to our founder, Kaushal. Click below to start the WhatsApp chat directly with him.";
        response.options = [
          { label: "Start WhatsApp Chat", action: "whatsapp", url: "https://wa.me/919081553331?text=Hi,%20I'm%20looking%20for%20business%20automation%20services." }
        ];
      }

      setIsTyping(false);
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  const handleOptionClick = (option: { label: string; action: string; url?: string }) => {
    if (option.action === "link" && option.url) {
      window.location.href = option.url;
      setIsOpen(false);
      return;
    }
    if (option.action === "whatsapp" && option.url) {
      window.open(option.url, "_blank");
      return;
    }
    handleSend(option.label);
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Voice recognition is not supported in your browser. Please use Chrome or Edge.");
      return;
    }
    
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      setInputText(""); // Clear previous text when starting a new recording
      recognitionRef.current.start();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent-electric text-black flex items-center justify-center shadow-[0_0_30px_rgba(78,163,224,0.4)] transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Sparkles size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-48px)] bg-[#050505] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-electric to-transparent opacity-50"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-electric/10 border border-accent-electric/30 flex items-center justify-center text-accent-electric relative">
                  <Sparkles size={18} />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm">Parv AI</h3>
                  <p className="text-xs text-white/50">Usually replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar relative">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent-electric/5 blur-[80px] pointer-events-none rounded-full"></div>
              
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} relative z-10`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "user" 
                      ? "bg-accent-electric text-black rounded-tr-sm" 
                      : "bg-white/10 text-white rounded-tl-sm border border-white/5"
                  }`}>
                    {msg.text}
                  </div>
                  
                  {/* Options */}
                  {msg.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="text-xs px-3 py-1.5 rounded-full border border-accent-electric/30 bg-accent-electric/5 text-accent-electric hover:bg-accent-electric hover:text-black transition-colors flex items-center gap-1"
                        >
                          {opt.label}
                          {opt.action === "whatsapp" ? <ArrowRight size={12} /> : null}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-4 border border-white/5 flex items-center gap-1.5">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-transparent relative">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
                className="flex items-center gap-2"
              >
                <button 
                  type="button" 
                  onClick={toggleRecording}
                  title={isRecording ? "Stop Recording" : "Start Voice Typing"}
                  className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors border ${
                    isRecording 
                      ? "bg-red-500/20 text-red-500 border-red-500/50 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
                      : "bg-white/5 text-white/50 hover:text-accent-electric border-white/10"
                  }`}
                >
                  <Mic size={18} />
                </button>
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask Parv AI..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-electric/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-10 h-10 shrink-0 rounded-full bg-accent-electric text-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={16} className="-ml-0.5" />
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium">Powered by ParvInfoSoft AI</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
