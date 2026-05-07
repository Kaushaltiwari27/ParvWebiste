"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const tools = [
  { name: "ChatGPT", desc: "Advanced language generation & reasoning" },
  { name: "Claude", desc: "Long-context analysis & writing" },
  { name: "Microsoft Copilot", desc: "Enterprise productivity integration" },
  { name: "Canva AI", desc: "Quick visual assets & presentations" },
  { name: "Midjourney", desc: "Photorealistic AI art generation" },
  { name: "DALL-E", desc: "Integrated image creation" },
  { name: "Notion AI", desc: "Workspace organization & writing" },
  { name: "Zapier", desc: "No-code workflow automation" },
  { name: "Make (Integromat)", desc: "Advanced visual automation" },
  { name: "Pictory AI", desc: "Text-to-video generation" },
  { name: "GrammarlyGO", desc: "Context-aware writing assistant" },
  { name: "Beautiful.ai", desc: "Smart presentation design" },
  { name: "Tome", desc: "Generative storytelling format" },
  { name: "DeepL", desc: "Highly accurate translations" },
  { name: "ElevenLabs", desc: "Lifelike voice synthesis" }
];

export default function ToolsMaster() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="font-sora text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Tools You'll Master
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Get hands-on experience with the industry's most powerful AI platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.05 }}
              className="bg-card-bg border border-border-color rounded-2xl p-6 flex flex-col hover:border-accent-electric transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary-navy flex items-center justify-center text-accent-electric group-hover:bg-accent-electric group-hover:text-white transition-colors">
                  <Wrench size={14} />
                </div>
                <h3 className="font-sora font-bold text-lg text-white">{tool.name}</h3>
              </div>
              <p className="text-sm text-text-muted">{tool.desc}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: tools.length * 0.05 }}
            className="bg-primary-navy border border-border-color border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-sora font-bold text-lg text-text-muted">And many more...</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
