"use client";

/**
 * CinematicStoryScroll.tsx
 * ─────────────────────────────────────────────────────────────
 * Premium GSAP + ScrollTrigger horizontal storytelling strip.
 * - Single pinned section, scrub-driven horizontal flow
 * - Inline SVG glyphs act as punctuation between text phrases
 * - Matches ParvInfoSoft's dark premium aesthetic
 * - Cleans up GSAP instances properly on unmount
 * ─────────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ── Inline SVG primitives ─────────────────────────────────────

/** Glowing electric dot  */
const GlowDot = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="3" fill="#4EA3E0" />
    <circle cx="10" cy="10" r="7" fill="#4EA3E0" fillOpacity="0.15" />
    <circle cx="10" cy="10" r="10" fill="#4EA3E0" fillOpacity="0.06" />
  </svg>
);

/** Flowing curved arrow  */
const CurveArrow = () => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" aria-hidden>
    <path
      d="M0 14 Q20 2 40 14 Q60 26 80 14"
      stroke="url(#ca-grad)"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M68 8 L80 14 L68 20"
      stroke="#4EA3E0"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="ca-grad" x1="0" y1="0" x2="80" y2="0">
        <stop offset="0%" stopColor="#4EA3E0" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#4EA3E0" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

/** Minimalist AI neural node  */
const NeuralNode = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
    {/* Connecting lines */}
    <line x1="24" y1="8"  x2="8"  y2="24" stroke="#4EA3E0" strokeOpacity="0.3" strokeWidth="1" />
    <line x1="24" y1="8"  x2="40" y2="24" stroke="#4EA3E0" strokeOpacity="0.3" strokeWidth="1" />
    <line x1="8"  y1="24" x2="24" y2="40" stroke="#4EA3E0" strokeOpacity="0.3" strokeWidth="1" />
    <line x1="40" y1="24" x2="24" y2="40" stroke="#4EA3E0" strokeOpacity="0.3" strokeWidth="1" />
    {/* Nodes */}
    <circle cx="24" cy="8"  r="3" fill="#4EA3E0" fillOpacity="0.9" />
    <circle cx="8"  cy="24" r="2" fill="#a855f7" fillOpacity="0.7" />
    <circle cx="40" cy="24" r="2" fill="#22d3ee" fillOpacity="0.7" />
    <circle cx="24" cy="40" r="3" fill="#4EA3E0" fillOpacity="0.9" />
    {/* Core */}
    <circle cx="24" cy="24" r="4" fill="#4EA3E0" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="2" fill="#4EA3E0" />
  </svg>
);

/** Abstract speed / growth lines  */
const SpeedLines = () => (
  <svg width="60" height="30" viewBox="0 0 60 30" fill="none" aria-hidden>
    <line x1="0" y1="8"  x2="50" y2="8"  stroke="#4EA3E0" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="0" y1="15" x2="60" y2="15" stroke="white"   strokeOpacity="0.2" strokeWidth="1"   strokeLinecap="round" />
    <line x1="0" y1="22" x2="40" y2="22" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/** Star / spark ornament  */
const Spark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
      fill="url(#spark-g)" />
    <defs>
      <radialGradient id="spark-g" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#ffffff" />
        <stop offset="100%" stopColor="#4EA3E0" stopOpacity="0.4" />
      </radialGradient>
    </defs>
  </svg>
);

// ── Story content — text phrases interleaved with SVG glyphs ──
type TextChunk = { kind: "text"; value: string };
type GlyphChunk = { kind: "glyph"; el: React.ReactNode };
type Chunk = TextChunk | GlyphChunk;

const story: Chunk[] = [
  { kind: "text",  value: "Building scalable" },
  { kind: "glyph", el: <CurveArrow /> },
  { kind: "text",  value: "digital experiences" },
  { kind: "glyph", el: <GlowDot /> },
  { kind: "text",  value: "powered by AI" },
  { kind: "glyph", el: <NeuralNode /> },
  { kind: "text",  value: "creativity" },
  { kind: "glyph", el: <SpeedLines /> },
  { kind: "text",  value: "strategy" },
  { kind: "glyph", el: <GlowDot /> },
  { kind: "text",  value: "and modern development" },
  { kind: "glyph", el: <CurveArrow /> },
  { kind: "text",  value: "that helps businesses" },
  { kind: "glyph", el: <Spark /> },
  { kind: "text",  value: "grow faster" },
  { kind: "glyph", el: <NeuralNode /> },
  { kind: "text",  value: "together" },
  { kind: "glyph", el: <Spark /> },
];

// ── Component ─────────────────────────────────────────────────

export default function CinematicStoryScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register plugin only on client
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    // Calculate how far to scroll horizontally
    // (track width  minus  one viewport width = total travel)
    const getDistance = () => track.scrollWidth - window.innerWidth;

    // Build the GSAP tween
    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none", // linear — scrub handles easing
    });

    // Pin the section and scrub tween to vertical scroll
    const trigger = ScrollTrigger.create({
      trigger: section,
      start:   "top top",
      // end scales with track width so speed feels constant
      end:     () => `+=${getDistance()}`,
      pin:     true,
      anticipatePin: 1,
      scrub:   1.2,           // slightly lagged for cinematic feel
      animation: tween,
      invalidateOnRefresh: true, // recalculate on resize
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, []);

  return (
    /**
     * SECTION — height: 100vh (the visible pinned frame)
     * The extra scroll length comes from ScrollTrigger's end value.
     */
    <section
      ref={sectionRef}
      aria-label="Our story — horizontal scroll"
      style={{
        position: "relative",
        height:   "100vh",
        overflow: "hidden",
        /* Match site background */
        background: "#030712",
        borderTop:    "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Edge fade masks ── */}
      <div
        aria-hidden
        style={{
          position:   "absolute",
          inset:      0,
          zIndex:     10,
          pointerEvents: "none",
          background: "linear-gradient(to right, #030712 0%, transparent 8%, transparent 92%, #030712 100%)",
        }}
      />

      {/* ── Ambient background glow ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width:  "600px",
          height: "200px",
          background: "radial-gradient(ellipse at center, rgba(78,163,224,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Centred label ── */}
      <p
        aria-hidden
        style={{
          position:        "absolute",
          top:             "18px",
          left:            "50%",
          transform:       "translateX(-50%)",
          fontSize:        "10px",
          fontWeight:      600,
          letterSpacing:   "0.25em",
          textTransform:   "uppercase",
          color:           "rgba(255,255,255,0.18)",
          whiteSpace:      "nowrap",
          zIndex:          20,
        }}
      >
        Scroll to explore our story
      </p>

      {/* ── Horizontal track ─────────────────────────────────
           This is the element GSAP translates on x.
           It must be wide enough to create scroll distance.
      ─────────────────────────────────────────────────── */}
      <div
        ref={trackRef}
        style={{
          display:        "flex",
          alignItems:     "center",
          height:         "100%",
          padding:        "0 8vw",
          gap:            "clamp(24px, 4vw, 72px)",
          whiteSpace:     "nowrap",
          willChange:     "transform",
        }}
      >
        {story.map((chunk, i) => {
          if (chunk.kind === "text") {
            return (
              <span
                key={i}
                style={{
                  fontSize:      "clamp(2rem, 5vw, 5rem)",
                  fontWeight:    600,
                  letterSpacing: "-0.02em",
                  lineHeight:    1,
                  color:         "rgba(255,255,255,0.75)",
                  // Subtle glow on key words
                  textShadow:    "0 0 60px rgba(78,163,224,0.12)",
                  fontFamily:    "inherit",
                  userSelect:    "none",
                  flexShrink:    0,
                }}
              >
                {chunk.value}
              </span>
            );
          }

          // Glyph — inline SVG acting as punctuation
          return (
            <span
              key={i}
              aria-hidden
              style={{
                display:    "inline-flex",
                alignItems: "center",
                flexShrink: 0,
                opacity:    0.8,
              }}
            >
              {chunk.el}
            </span>
          );
        })}
      </div>
    </section>
  );
}
