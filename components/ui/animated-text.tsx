"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.04,
        duration: 0.5
      },
    }));
  }, [controls, text]);

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}