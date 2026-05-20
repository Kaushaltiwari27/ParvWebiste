"use client";

/**
 * MeetFounder.tsx — with Exploded View Assembly
 * ─────────────────────────────────────────────────────────────
 * Scroll-driven effect:
 *   Phase 1 → stat cards explode OUTWARD from the founder image (center)
 *   Phase 2 → everything assembles naturally as user scrolls further
 *   Phase 3 → cards lock into their final grid positions
 *
 * Uses GSAP + ScrollTrigger. Framer Motion handles the initial
 * section fade-in only. No new sections added.
 * ─────────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Brain, TrendingUp, Users, Rocket } from "lucide-react";

const stats = [
  {
    id: "entrepreneur",
    label: "Entrepreneur",
    sub: "Serial builder",
    icon: Rocket,
    color: "#4EA3E0",
    // explode direction: top-left
    explodeX: -220,
    explodeY: -180,
  },
  {
    id: "ai-strategist",
    label: "AI Strategist",
    sub: "Future-ready AI",
    icon: Brain,
    color: "#a855f7",
    // explode direction: top-right
    explodeX: 220,
    explodeY: -180,
  },
  {
    id: "business-builder",
    label: "Business Builder",
    sub: "Surat → World",
    icon: TrendingUp,
    color: "#22d3ee",
    // explode direction: bottom-left
    explodeX: -220,
    explodeY: 180,
  },
  {
    id: "trainer",
    label: "AI Trainer",
    sub: "1000+ students",
    icon: Users,
    color: "#f59e0b",
    // explode direction: bottom-right
    explodeX: 220,
    explodeY: 180,
  },
];

export default function MeetFounder() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    // ── Set each card to its "exploded" start position ────────
    cards.forEach((card, i) => {
      gsap.set(card, {
        x:        stats[i].explodeX,
        y:        stats[i].explodeY,
        opacity:  0,
        scale:    0.5,
        rotation: (i % 2 === 0 ? -1 : 1) * 15,
      });
    });

    // ── Phase 1: cards fly IN to assembled positions ──────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start:   "top 70%",
        end:     "top 10%",
        scrub:   1.4,
        // markers: true, // uncomment to debug
      },
    });

    tl.to(cards, {
      x:        0,
      y:        0,
      opacity:  1,
      scale:    1,
      rotation: 0,
      duration: 1,
      stagger:  0.08,
      ease:     "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-electric/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── LEFT: Founder image — the "central mockup" ── */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              data-cursor="FOUNDER"
              className="relative w-full aspect-[3/4] max-w-[500px] mx-auto rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="/founder.png"
                alt="Kaushal Tiwari - Founder and CEO of ParvInfoSoft, Top AI Training and IT Company in Surat, Gujarat"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Ambient glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-electric/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          </div>

          {/* ── RIGHT: Content + Exploding Cards ── */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <h3 className="text-accent-electric text-sm tracking-widest uppercase font-medium mb-4">
                Meet Our Founder
              </h3>
              <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6">
                Kaushal Tiwari
              </h2>

              <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed mb-10">
                Founder, Director &amp; CEO of ParvInfoSoft. Passionate about
                AI innovation, digital systems, and helping businesses scale
                through modern technology. Under his leadership, ParvInfoSoft
                has become a leading premium{" "}
                <strong>
                  AI Training Institute and IT Solutions provider in Surat,
                  Gujarat
                </strong>
                , dedicated to building India's future-ready AI ecosystem.
              </p>

              <Link
                href="https://www.linkedin.com/in/kaushal-tiwari-294628227/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-accent-electric hover:text-black transition-colors mb-12 font-medium"
              >
                Connect on LinkedIn
              </Link>

              {/* ── Exploded View cards ──
                   These start at their explodeX/explodeY offsets and
                   GSAP ScrollTrigger flies them into their grid positions.
              ── */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.id}
                      ref={(el) => { cardRefs.current[i] = el; }}
                      className="relative border border-white/10 rounded-2xl p-5 overflow-hidden group"
                      style={{
                        background: "rgba(5,5,5,0.8)",
                        backdropFilter: "blur(12px)",
                        willChange: "transform, opacity",
                      }}
                    >
                      {/* Card glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at top left, ${stat.color}18, transparent 70%)`,
                          boxShadow: `inset 0 0 30px ${stat.color}10`,
                        }}
                      />
                      {/* Top border accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                        }}
                      />

                      <div className="relative z-10 flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: `${stat.color}18`,
                            border: `1px solid ${stat.color}30`,
                          }}
                        >
                          <Icon size={16} style={{ color: stat.color }} />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm leading-tight">
                            {stat.label}
                          </p>
                          <p className="text-white/40 text-xs mt-0.5">
                            {stat.sub}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
