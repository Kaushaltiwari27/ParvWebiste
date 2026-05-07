"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TextDecode({ text, className = "" }: { text: string, className?: string }) {
  // Split text into words, then words into characters for smooth staggering
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-flex mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <motion.span key={letterIndex} variants={child} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
