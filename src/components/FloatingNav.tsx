"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Layers, BookOpen, User } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "programs", label: "Programs", icon: Layers },
  { id: "curriculum", label: "Curriculum", icon: BookOpen },
  { id: "about", label: "About", icon: User },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-primary-navy/80 backdrop-blur-lg border border-border-color rounded-full p-2 flex items-center gap-1 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-accent-blue text-white" : "text-text-muted hover:text-white hover:bg-card-bg"
              }`}
            >
              <Icon size={16} className={isActive ? "text-white" : "text-text-muted"} />
              <span className={`text-sm font-medium ${isActive ? "block" : "hidden sm:block"}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
