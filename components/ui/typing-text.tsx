"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypingText({ text, className = "", delay = 0 }: TypingTextProps) {
  const controls = useAnimation();
  const words = text.split(" ");

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0, delay }
      });

      await controls.start(i => ({
        opacity: 1,
        transition: { duration: 0.2, delay: i * 0.1 + delay }
      }));
    };

    animate();
  }, [controls, delay]);

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={controls}
          custom={wordIndex * 10}
        >
          {word}
          {wordIndex < words.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={controls}
              custom={wordIndex * 10 + word.length}
              className="inline-block"
            >
              &nbsp;
            </motion.span>
          )}
        </motion.span>
      ))}
    </span>
  );
} 