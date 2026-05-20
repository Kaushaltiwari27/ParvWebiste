"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  // Position quickTo targets
  const dotX = useRef<((val: number) => void) | null>(null);
  const dotY = useRef<((val: number) => void) | null>(null);
  const ringX = useRef<((val: number) => void) | null>(null);
  const ringY = useRef<((val: number) => void) | null>(null);

  useEffect(() => {
    // Check if device is mobile or touch-enabled
    if (window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window) {
      setIsMobile(true);
      return;
    }

    // Set initial custom cursor setup using GSAP
    gsap.set(cursorDotRef.current, { xPercent: -50, yPercent: -50, scale: 1 });
    gsap.set(cursorRingRef.current, { xPercent: -50, yPercent: -50, scale: 1, backgroundColor: "transparent" });

    // Initialize GSAP quickTo for sub-pixel smooth movements with custom duration/ease
    dotX.current = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.08, ease: "power3.out" });
    dotY.current = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.08, ease: "power3.out" });
    ringX.current = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.35, ease: "power4.out" });
    ringY.current = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.35, ease: "power4.out" });

    const onMouseMove = (e: MouseEvent) => {
      if (dotX.current && dotY.current && ringX.current && ringY.current) {
        dotX.current(e.clientX);
        dotY.current(e.clientY);
        ringX.current(e.clientX);
        ringY.current(e.clientY);
      }
    };

    // Global mouseenter/mouseleave hover events for links, buttons & inputs (Invert Blend Effect)
    const onMouseEnterLink = (e: Event) => {
      gsap.to(cursorRingRef.current, {
        scale: 1.6,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(255, 255, 255, 1)",
        duration: 0.25,
        ease: "power2.out"
      });
      gsap.to(cursorDotRef.current, {
        scale: 0,
        duration: 0.2,
      });
    };

    const onMouseLeaveLink = (e: Event) => {
      gsap.to(cursorRingRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(78, 163, 224, 1)", // brand accent electric
        duration: 0.25,
        ease: "power2.out"
      });
      gsap.to(cursorDotRef.current, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Dynamic Badge hover effects (e.g. data-cursor="VIEW")
    const onMouseEnterBadge = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-cursor") || "VIEW";
      setCursorText(text);

      gsap.to(cursorRingRef.current, {
        width: 80,
        height: 80,
        backgroundColor: "rgba(3, 7, 18, 0.8)", // deep brand dark
        borderColor: "rgba(78, 163, 224, 0.4)", // transparent glow
        borderRadius: "50%",
        borderWidth: "1.5px",
        backdropFilter: "blur(4px)",
        duration: 0.3,
        ease: "back.out(1.5)"
      });

      gsap.to(cursorDotRef.current, {
        scale: 0,
        duration: 0.2,
      });

      gsap.to(cursorTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
        delay: 0.05
      });
    };

    const onMouseLeaveBadge = (e: Event) => {
      setCursorText("");

      gsap.to(cursorRingRef.current, {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "rgba(78, 163, 224, 1)",
        borderWidth: "1.5px",
        backdropFilter: "none",
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(cursorDotRef.current, {
        scale: 1,
        duration: 0.2,
      });

      gsap.to(cursorTextRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.in"
      });
    };

    // Attach listeners
    window.addEventListener("mousemove", onMouseMove);

    // Track active DOM modifications (e.g., page navigation/state changes)
    const attachHoverEvents = () => {
      // Standard interactive elements (links, buttons, custom interactive widgets)
      const interactives = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .interactive-hover");
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
        
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });

      // Special data-cursor elements (Portfolios, grids)
      const badgeElements = document.querySelectorAll("[data-cursor]");
      badgeElements.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterBadge);
        el.removeEventListener("mouseleave", onMouseLeaveBadge);
        
        el.addEventListener("mouseenter", onMouseEnterBadge);
        el.addEventListener("mouseleave", onMouseLeaveBadge);
      });
    };

    // Initial attachment
    attachHoverEvents();

    // Re-attach elements if DOM updates
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();

      const interactives = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .interactive-hover");
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });

      const badgeElements = document.querySelectorAll("[data-cursor]");
      badgeElements.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterBadge);
        el.removeEventListener("mouseleave", onMouseLeaveBadge);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Target Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent-electric rounded-full pointer-events-none z-[99999] mix-blend-difference"
      />
      {/* Floating/Trailing Outer Ring & Text Badge */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-accent-electric rounded-full pointer-events-none z-[99998] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: "0 0 15px rgba(78, 163, 224, 0.15)",
        }}
      >
        <span
          ref={cursorTextRef}
          className="text-white text-[10px] tracking-[0.2em] font-medium opacity-0 scale-90 select-none uppercase font-general"
          style={{
            // Keep text always crisp and fully white without invert in mix-blend-difference if inside a dark backdrop
            color: "#ffffff"
          }}
        >
          {cursorText}
        </span>
      </div>
    </>
  );
}
