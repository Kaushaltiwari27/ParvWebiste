"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "The Future of Generative AI in Business Operations",
    category: "AI Trends",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "/blog_1.png",
  },
  {
    title: "How to Build a No-Code Automation Agency",
    category: "Freelancing",
    date: "Oct 05, 2025",
    readTime: "8 min read",
    image: "/hero_bg.png",
  },
  {
    title: "Top 10 Prompt Engineering Frameworks",
    category: "Guides",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    image: "/program_1.png",
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-primary-navy relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="font-inter text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight"
            >
              Latest <br/> Insights.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-muted"
            >
              Stay updated with the latest in AI, automation, and tech business strategies.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            href="#" 
            className="hidden md:inline-flex items-center gap-2 border border-border-color hover:border-white text-white font-bold py-3 px-6 transition-colors mt-6 md:mt-0 uppercase tracking-widest text-sm"
          >
            View All Articles
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-dark overflow-hidden group cursor-pointer border border-border-color hover:border-white transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-48 w-full relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-primary-dark px-3 py-1 text-xs font-bold text-accent-electric uppercase tracking-widest border border-border-color">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-text-muted mb-4 font-mono">
                  <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</div>
                </div>
                <h3 className="font-inter text-2xl font-black text-white mb-4 group-hover:text-accent-electric transition-colors leading-snug uppercase">
                  {post.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-accent-electric group-hover:translate-x-2 transition-transform uppercase tracking-widest mt-4">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
