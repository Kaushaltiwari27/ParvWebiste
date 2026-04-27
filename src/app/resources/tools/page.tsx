"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Wrench, Sparkles, Layout, Video, LineChart, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { name: "All", icon: Wrench },
  { name: "AI Writing", icon: Sparkles },
  { name: "Design", icon: Layout },
  { name: "Productivity", icon: Cpu },
  { name: "Video", icon: Video },
  { name: "SEO / Marketing", icon: LineChart },
  { name: "Automation", icon: Cpu }
];

const toolsList = [
  { id: 1, name: "ChatGPT", desc: "OpenAI's flagship conversational model for writing and analysis.", category: "AI Writing", tag: "Freemium", url: "https://chat.openai.com", logoText: "OAI", color: "from-emerald-500/20 to-green-900/40" },
  { id: 2, name: "Claude", desc: "Anthropic's helpful, harmless, and honest AI assistant.", category: "AI Writing", tag: "Freemium", url: "https://claude.ai", logoText: "CL", color: "from-amber-500/20 to-orange-900/40" },
  { id: 3, name: "Gemini", desc: "Google's multimodal AI designed for complex reasoning.", category: "AI Writing", tag: "Freemium", url: "https://gemini.google.com", logoText: "GM", color: "from-blue-500/20 to-indigo-900/40" },
  { id: 4, name: "Canva", desc: "The ultimate drag-and-drop design tool for social media and marketing.", category: "Design", tag: "Freemium", url: "https://canva.com", logoText: "CV", color: "from-cyan-500/20 to-blue-900/40" },
  { id: 5, name: "Figma", desc: "Collaborative interface design tool for high-end UI/UX.", category: "Design", tag: "Freemium", url: "https://figma.com", logoText: "FG", color: "from-rose-500/20 to-red-900/40" },
  { id: 6, name: "Remove.bg", desc: "Instantly remove image backgrounds using AI.", category: "Design", tag: "Free", url: "https://remove.bg", logoText: "RB", color: "from-zinc-500/20 to-slate-900/40" },
  { id: 7, name: "Notion", desc: "The connected workspace for your docs, projects, and knowledge.", category: "Productivity", tag: "Freemium", url: "https://notion.so", logoText: "NT", color: "from-gray-500/20 to-zinc-900/40" },
  { id: 8, name: "Trello", desc: "Visual boards to manage projects and organize workflows.", category: "Productivity", tag: "Freemium", url: "https://trello.com", logoText: "TR", color: "from-blue-400/20 to-blue-800/40" },
  { id: 9, name: "ClickUp", desc: "One app to replace them all. Tasks, docs, chat, and goals.", category: "Productivity", tag: "Freemium", url: "https://clickup.com", logoText: "CU", color: "from-purple-500/20 to-pink-900/40" },
  { id: 10, name: "CapCut", desc: "Free all-in-one video editing app with AI features.", category: "Video", tag: "Free", url: "https://capcut.com", logoText: "CC", color: "from-slate-800/20 to-black/40" },
  { id: 11, name: "Descript", desc: "Write, record, transcribe, edit, collaborate, and share videos.", category: "Video", tag: "Freemium", url: "https://descript.com", logoText: "DS", color: "from-indigo-500/20 to-purple-900/40" },
  { id: 12, name: "Ubersuggest", desc: "Generate more SEO traffic with premium keyword research.", category: "SEO / Marketing", tag: "Freemium", url: "https://neilpatel.com/ubersuggest/", logoText: "UB", color: "from-orange-500/20 to-red-900/40" },
  { id: 13, name: "Ahrefs Free Tools", desc: "Free SEO tools from the industry leader in backlink analysis.", category: "SEO / Marketing", tag: "Free", url: "https://ahrefs.com/free-seo-tools", logoText: "AH", color: "from-blue-600/20 to-indigo-900/40" },
  { id: 14, name: "AnswerThePublic", desc: "Discover what people are asking about on Google.", category: "SEO / Marketing", tag: "Freemium", url: "https://answerthepublic.com", logoText: "AP", color: "from-yellow-500/20 to-orange-900/40" },
  { id: 15, name: "Zapier", desc: "Connect your apps and automate workflows without coding.", category: "Automation", tag: "Freemium", url: "https://zapier.com", logoText: "ZP", color: "from-orange-400/20 to-amber-900/40" },
  { id: 16, name: "Make", desc: "Advanced visual workflow automation platform.", category: "Automation", tag: "Freemium", url: "https://make.com", logoText: "MK", color: "from-violet-500/20 to-purple-900/40" },
  { id: 17, name: "n8n", desc: "Fair-code workflow automation tool. Self-hostable.", category: "Automation", tag: "Free / OSS", url: "https://n8n.io", logoText: "N8", color: "from-red-500/20 to-rose-900/40" }
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = activeCategory === "All" 
    ? toolsList 
    : toolsList.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white font-general">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-electric text-sm font-medium mb-6">
              <Wrench size={16} />
              The Tech Stack
            </div>
            <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight">
              Essential <span className="text-accent-electric">Free Tools</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The exact software stack we use and recommend to build, automate, and scale modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-white/10 sticky top-[80px] z-40 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <Filter size={20} className="text-white/40 shrink-0 hidden md:block" />
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.name 
                    ? "bg-accent-electric text-black shadow-[0_0_20px_rgba(78,163,224,0.3)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <category.icon size={16} className={activeCategory === category.name ? "text-black" : "text-white/40"} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredTools.map((tool) => (
                <motion.a
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-[#050505] p-6 rounded-3xl border border-white/10 overflow-hidden hover:border-accent-electric/50 transition-colors h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    {/* Tool Logo Placeholder */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold tracking-wider">{tool.logoText}</span>
                    </div>
                    
                    {/* Free Tag */}
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
                      {tool.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-accent-electric transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                      {tool.desc}
                    </p>
                  </div>

                  {/* Visit Button */}
                  <div className="mt-auto w-full py-3 rounded-xl bg-white/5 text-center text-sm font-medium text-white group-hover:bg-accent-electric group-hover:text-black transition-colors flex items-center justify-center gap-2">
                    Visit Website <ExternalLink size={14} />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_50px_rgba(78,163,224,0.1)]"></div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No tools found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
