"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ultra-smooth exponential easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Dynamic Scroll Skew effect for elements with class 'scroll-skew'
    const skewElements = document.querySelectorAll(".scroll-skew");
    let skewTrigger: ScrollTrigger | null = null;
    
    if (skewElements.length > 0) {
      const proxy = { skew: 0 };
      const skewSetters = Array.from(skewElements).map(el => gsap.quickSetter(el, "skewY", "deg"));
      const clamp = gsap.utils.clamp(-6, 6); // clamp between -6 and +6 degrees

      skewTrigger = ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -400);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.6,
              ease: "power2.out",
              overwrite: "auto",
              onUpdate: () => {
                skewSetters.forEach(setter => setter(proxy.skew));
              }
            });
          }
        }
      });
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      if (skewTrigger) {
        skewTrigger.kill();
      }
    };
  }, []);

  return null;
}
