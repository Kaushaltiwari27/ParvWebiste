"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastParticleTime = useRef(0);

  // Use motion values for raw mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animation config for the outer ring for that "trailing" fluid effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Glitter trail logic
      const now = Date.now();
      if (now - lastParticleTime.current > 15) { // Extremely fast spawning
        const newParticle = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 10 + 6, // Massive particles: 6px to 16px
        };
        
        setParticles(prev => [...prev.slice(-40), newParticle]); // keep max 40 particles
        lastParticleTime.current = now;

        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== now));
        }, 1000); // Last a full second
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Attach hover listeners to all links and buttons
    const interactiveElements = document.querySelectorAll("a, button, input, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Glitter Trail Particles */}
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: 0.1, 
              x: p.x + (Math.random() * 100 - 50), // Huge spread
              y: p.y + (Math.random() * 100 - 50) 
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 rounded-full bg-accent-electric pointer-events-none z-[9997]"
            style={{
              width: p.size,
              height: p.size,
              translateX: "-50%",
              translateY: "-50%",
              boxShadow: "0 0 25px 2px rgba(78, 163, 224, 1)" // Massive intense glow
            }}
          />
        ))}
      </AnimatePresence>

      {/* Tiny solid dot that exactly tracks the mouse */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-electric rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Outer trailing ring that expands on hover */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-accent-electric rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(45, 156, 219, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
