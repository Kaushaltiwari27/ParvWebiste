"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-transparent border-t border-white/10 pt-24 pb-8 font-general">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="text-white font-semibold text-2xl tracking-wide mb-6">
              ParvInfoSoft
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[250px]">
              Where AI Meets Real Business Growth. Premium AI Training Institute and IT Solutions company serving Surat, Gujarat, and all of India.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              {["About", "Services", "Portfolio", "Pricing"].map((link) => (
                <li key={link}>
                  <Link href={`/#${link.toLowerCase()}`} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9081553331" className="text-white/50 hover:text-white transition-colors text-sm">
                  Phone: +91 90815 53331
                </a>
              </li>
              <li>
                <a href="mailto:parvinfosoftadmin@gmail.com" className="text-white/50 hover:text-white transition-colors text-sm">
                  Email: parvinfosoftadmin@gmail.com
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <p className="text-white/50 text-sm leading-relaxed">
                  <strong className="text-white/70">Surat Office:</strong><br/>
                  4019 The Palladium Mall,<br/>
                  Near Vijaynagar, Chikuwadi,<br/>
                  Nana Varachha, Surat, Gujarat 395010
                </p>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Social</h4>
            <ul className="space-y-4">
              {[
                { name: "Instagram", url: "https://www.instagram.com/parvinfosoftai?igsh=MWVkdzFqb25hMXh2ZQ==" },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/parvinfosoft/" },
                { name: "WhatsApp", url: "https://wa.me/919081553331" }
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors text-sm">
                    {social.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 ParvInfoSoft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
