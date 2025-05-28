"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      // Animate progress value
      const timer = setTimeout(() => {
        setProgress(level);
      }, 100);
      
      // Animate label
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, controls]);

  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <div className="flex justify-between items-center">
        <motion.p
          className="font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
        >
          {name}
        </motion.p>
        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
        >
          {level}%
        </motion.p>
      </div>
      <Progress value={progress} className="h-2" />
    </motion.div>
  );
}