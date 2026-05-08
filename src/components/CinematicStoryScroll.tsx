"use client";

/**
 * CinematicStoryScroll.tsx
 * ─────────────────────────────────────────────────────────────
 * Awwwards-quality GSAP horizontal storytelling ribbon.
 *
 * Architecture:
 *  - Section pins during horizontal travel (GSAP ScrollTrigger)
 *  - ONE long flex track translates on X via scrub tween
 *  - SVG glyphs are inline punctuation — not separate components
 *  - Layered parallax: track at 1×, accent layer at 0.6×
 *  - Floating micro-animations on SVG elements via GSAP ticker
 *  - Fully responsive: cinematic on desktop, adapted on mobile
 *  - Zero hydration issues (all GSAP inside useEffect)
 *  - Proper cleanup on unmount
 * ─────────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── SVG Primitive Components ────────────────────────────────
// Each is self-contained, aria-hidden, uses the site palette.

/** Minimal glowing node — acts like a full-stop */
const NodeDot = ({ size = 10, color = "#4EA3E0" }: { size?: number; color?: string }) => (
  <svg
    width={size * 3}
    height={size * 3}
    viewBox={`0 0 ${size * 3} ${size * 3}`}
    fill="none"
    aria-hidden
    className="inline-block align-middle shrink-0"
  >
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.3} fill={color} />
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.7} fill={color} fillOpacity="0.18" />
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 1.4} fill={color} fillOpacity="0.06" />
  </svg>
);

/** Smooth S-curve connector with arrowhead */
const FlowArrow = () => (
  <svg width="100" height="32" viewBox="0 0 100 32" fill="none" aria-hidden
    className="inline-block align-middle shrink-0">
    <path
      d="M0 16 C25 4, 45 28, 70 16 S90 4, 100 16"
      stroke="url(#fa-g)"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Arrowhead */}
    <path d="M88 10 L100 16 L88 22" stroke="#4EA3E0" strokeWidth="1.2"
      fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="fa-g" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#4EA3E0" stopOpacity="0.05" />
        <stop offset="50%"  stopColor="#4EA3E0" stopOpacity="0.9"  />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  </svg>
);

/** Minimal neural mesh — 5-node graph */
const NeuralMesh = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden
    className="inline-block align-middle shrink-0">
    {/* Edges */}
    {[
      [26, 6,  6, 26], [26, 6, 46, 26],
      [6, 26,  26, 46], [46, 26, 26, 46],
      [6, 26, 46, 26],
    ].map(([x1, y1, x2, y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#4EA3E0" strokeOpacity="0.25" strokeWidth="0.8" />
    ))}
    {/* Nodes */}
    {[[26, 6], [6, 26], [46, 26], [26, 46]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.5"
        fill={["#4EA3E0","#a855f7","#22d3ee","#4EA3E0"][i]}
        fillOpacity="0.85" />
    ))}
    {/* Core */}
    <circle cx="26" cy="26" r="5" fill="#4EA3E0" fillOpacity="0.12" />
    <circle cx="26" cy="26" r="2" fill="#4EA3E0" />
  </svg>
);

/** Abstract velocity mark — three tapering lines */
const VelocityMark = () => (
  <svg width="48" height="28" viewBox="0 0 48 28" fill="none" aria-hidden
    className="inline-block align-middle shrink-0">
    <line x1="0" y1="7"  x2="38" y2="7"  stroke="#4EA3E0" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.6" />
    <line x1="0" y1="14" x2="48" y2="14" stroke="white"   strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.18" />
    <line x1="0" y1="21" x2="30" y2="21" stroke="#a855f7" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

/** 4-point star ornament */
const StarAccent = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden
    className="inline-block align-middle shrink-0">
    <path d="M11 1 L12.6 9.4 L21 11 L12.6 12.6 L11 21 L9.4 12.6 L1 11 L9.4 9.4 Z"
      fill="url(#st-g)" />
    <defs>
      <radialGradient id="st-g" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#4EA3E0" stopOpacity="0.2" />
      </radialGradient>
    </defs>
  </svg>
);

/** Minimal bracket / code symbol */
const CodeBracket = () => (
  <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden
    className="inline-block align-middle shrink-0">
    <path d="M18 2 L8 18 L18 34" stroke="#4EA3E0" strokeWidth="1.5"
      fill="none" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
  </svg>
);

// ─── Story Definition ────────────────────────────────────────
// Text phrases and inline SVG glyphs living in one flat array.
// This is what renders as the continuous sentence.

type Phrase = { k: "phrase"; text: string; weight?: "bold" | "light" | "accent" };
type Glyph  = { k: "glyph";  el: React.ReactNode; parallaxFactor?: number };
type Gap    = { k: "gap";    size: number }; // variable horizontal breathing room
type Story  = Phrase | Glyph | Gap;

const story: Story[] = [
  { k: "phrase", text: "Building",       weight: "bold"   },
  { k: "gap",    size: 32                                  },
  { k: "glyph",  el: <FlowArrow />,      parallaxFactor: 0.6 },
  { k: "gap",    size: 32                                  },
  { k: "phrase", text: "scalable",       weight: "light"  },
  { k: "gap",    size: 12                                  },
  { k: "phrase", text: "digital",        weight: "bold"   },
  { k: "gap",    size: 12                                  },
  { k: "phrase", text: "experiences",    weight: "bold"   },
  { k: "gap",    size: 56                                  },
  { k: "glyph",  el: <NodeDot />,        parallaxFactor: 0.4 },
  { k: "gap",    size: 56                                  },
  { k: "phrase", text: "powered by",     weight: "light"  },
  { k: "gap",    size: 16                                  },
  { k: "glyph",  el: <NeuralMesh />,     parallaxFactor: 0.55 },
  { k: "gap",    size: 16                                  },
  { k: "phrase", text: "AI",             weight: "accent" },
  { k: "gap",    size: 48                                  },
  { k: "glyph",  el: <VelocityMark />,   parallaxFactor: 0.5 },
  { k: "gap",    size: 48                                  },
  { k: "phrase", text: "creativity",     weight: "bold"   },
  { k: "gap",    size: 16                                  },
  { k: "glyph",  el: <NodeDot size={6} color="#a855f7" />, parallaxFactor: 0.3 },
  { k: "gap",    size: 16                                  },
  { k: "phrase", text: "strategy",       weight: "bold"   },
  { k: "gap",    size: 56                                  },
  { k: "glyph",  el: <FlowArrow />,      parallaxFactor: 0.65 },
  { k: "gap",    size: 56                                  },
  { k: "phrase", text: "and modern",     weight: "light"  },
  { k: "gap",    size: 12                                  },
  { k: "phrase", text: "development",    weight: "bold"   },
  { k: "gap",    size: 48                                  },
  { k: "glyph",  el: <CodeBracket />,    parallaxFactor: 0.45 },
  { k: "gap",    size: 48                                  },
  { k: "phrase", text: "that helps",     weight: "light"  },
  { k: "gap",    size: 12                                  },
  { k: "phrase", text: "businesses",     weight: "bold"   },
  { k: "gap",    size: 48                                  },
  { k: "glyph",  el: <StarAccent />,     parallaxFactor: 0.4 },
  { k: "gap",    size: 48                                  },
  { k: "phrase", text: "grow faster",    weight: "bold"   },
  { k: "gap",    size: 32                                  },
  { k: "glyph",  el: <NodeDot size={8} color="#22d3ee" />, parallaxFactor: 0.35 },
  { k: "gap",    size: 32                                  },
  { k: "phrase", text: "together",       weight: "accent" },
  { k: "gap",    size: 80                                  },
];

// ─── Typography helpers ──────────────────────────────────────
const weightClass: Record<string, string> = {
  bold:   "font-semibold text-white/90",
  light:  "font-light text-white/40",
  accent: "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4EA3E0] to-[#a855f7]",
};

// ─── Component ───────────────────────────────────────────────
export default function CinematicStoryScroll() {
  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const glyphRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const floatTimers = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    // ── Responsive: disable pin on mobile (too small to make sense)
    const isMobile = window.innerWidth < 768;

    // ── 1. Main horizontal scrub tween ──────────────────────
    const getDistance = () =>
      Math.max(0, track.scrollWidth - window.innerWidth + 160); // +160px breathing room

    const mainTween = gsap.to(track, {
      x:    () => -getDistance(),
      ease: "none",
    });

    const trigger = ScrollTrigger.create({
      trigger:            section,
      start:              "top top",
      end:                () => `+=${isMobile ? getDistance() * 0.6 : getDistance()}`,
      pin:                !isMobile,
      anticipatePin:      1,
      scrub:              isMobile ? 0.8 : 1.6, // more lag on desktop = more cinematic
      animation:          mainTween,
      invalidateOnRefresh: true,
    });

    // ── 2. Layered parallax on glyphs ────────────────────────
    // Each glyph has a parallaxFactor — they move slightly slower
    // than the main track, creating depth illusion.
    glyphRefs.current.forEach((el, i) => {
      if (!el) return;
      const factor = el.dataset.parallax ? parseFloat(el.dataset.parallax) : 0.5;
      gsap.to(el, {
        x:    () => getDistance() * factor * 0.25, // counter-translate
        ease: "none",
        scrollTrigger: {
          trigger:            section,
          start:              "top top",
          end:                () => `+=${getDistance()}`,
          scrub:              1.6,
          invalidateOnRefresh: true,
        },
      });
    });

    // ── 3. Subtle floating micro-animations on glyphs ────────
    // Independent of scroll — they breathe on their own clock.
    glyphRefs.current.forEach((el, i) => {
      if (!el) return;
      const t = gsap.to(el, {
        y:        gsap.utils.random(-5, 5),
        rotation: gsap.utils.random(-4, 4),
        duration: gsap.utils.random(2.2, 3.8),
        ease:     "sine.inOut",
        repeat:   -1,
        yoyo:     true,
        delay:    i * 0.3,
      });
      floatTimers.current.push(t);
    });

    // ── 4. Fade-in the section gracefully ────────────────────
    gsap.from(section, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start:   "top 85%",
        once:    true,
      },
    });

    return () => {
      trigger.kill();
      mainTween.kill();
      floatTimers.current.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  // Track glyph index separately for refs
  let glyphIndex = 0;

  return (
    <section
      ref={sectionRef}
      aria-label="Our story"
      style={{
        position:     "relative",
        height:       "100vh",
        overflow:     "hidden",
        background:   "#030712",
        borderTop:    "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Ambient light bloom ── */}
      <div
        aria-hidden
        style={{
          position:   "absolute",
          top: "50%", left: "50%",
          transform:  "translate(-50%, -50%)",
          width:      "900px",
          height:     "300px",
          background: "radial-gradient(ellipse at center, rgba(78,163,224,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Edge fade masks ── */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 10,
          pointerEvents: "none",
          background:
            "linear-gradient(to right, #030712 0%, transparent 6%, transparent 94%, #030712 100%)",
        }}
      />

      {/* ── Eyebrow label ── */}
      <p
        aria-hidden
        style={{
          position: "absolute", top: "24px", left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          fontSize: "9px", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.15)", whiteSpace: "nowrap",
        }}
      >
        Our story — scroll to explore
      </p>

      {/* ── Horizontal track ── */}
      <div
        ref={trackRef}
        style={{
          display:     "flex",
          alignItems:  "center",
          height:      "100%",
          paddingLeft: "max(6vw, 40px)",
          paddingRight: "max(12vw, 80px)",
          gap:         "0",        // gaps are controlled inline via spacer divs
          whiteSpace:  "nowrap",
          willChange:  "transform",
          userSelect:  "none",
        }}
      >
        {story.map((item, i) => {
          // Spacer (gap)
          if (item.k === "gap") {
            return (
              <div key={i} style={{ flexShrink: 0, width: `${item.size}px` }} aria-hidden />
            );
          }

          // Text phrase
          if (item.k === "phrase") {
            const isBoldWeight  = item.weight === "bold";
            const isLightWeight = item.weight === "light";
            const isAccent      = item.weight === "accent";

            return (
              <span
                key={i}
                style={{
                  display:     "inline-block",
                  flexShrink:  0,
                  fontSize:    "clamp(2.25rem, 5.5vw, 5.25rem)",
                  fontWeight:  isBoldWeight ? 650 : isAccent ? 700 : 300,
                  letterSpacing: "-0.025em",
                  lineHeight:  1,
                  // Accent gets gradient via inline style (bg-clip doesn't work inline)
                  ...(isAccent
                    ? {
                        background: "linear-gradient(90deg, #4EA3E0, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {
                        color: isBoldWeight
                          ? "rgba(255,255,255,0.88)"
                          : "rgba(255,255,255,0.32)",
                      }),
                  fontFamily: "inherit",
                  textShadow: isBoldWeight
                    ? "0 0 80px rgba(78,163,224,0.08)"
                    : "none",
                }}
              >
                {item.text}
              </span>
            );
          }

          // Glyph (inline SVG)
          if (item.k === "glyph") {
            const refIdx = glyphIndex++;
            return (
              <span
                key={i}
                ref={(el) => { glyphRefs.current[refIdx] = el; }}
                data-parallax={(item as Glyph).parallaxFactor ?? 0.5}
                style={{
                  display:     "inline-flex",
                  alignItems:  "center",
                  flexShrink:  0,
                  willChange:  "transform",
                }}
                aria-hidden
              >
                {(item as Glyph).el}
              </span>
            );
          }

          return null;
        })}
      </div>

      {/* ── Bottom scroll hint ── */}
      <p
        aria-hidden
        style={{
          position: "absolute", bottom: "24px", left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          display: "flex", alignItems: "center", gap: "8px",
          fontSize: "9px", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.12)", whiteSpace: "nowrap",
        }}
      >
        {/* Minimal chevron right */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2 L10 6 L2 10" stroke="currentColor" strokeWidth="1.2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Keep scrolling
      </p>
    </section>
  );
}
