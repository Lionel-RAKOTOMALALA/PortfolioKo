"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  sourceCode: string;
  category: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(
    240px at ${mouseX}px ${mouseY}px,
    rgba(var(--primary-rgb), 0.15),
    transparent
  )`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition duration-300"
        style={{ background: maskImage }}
      />
      
      <Card className="overflow-hidden h-full flex flex-col group relative bg-card">
        <motion.div 
          className="relative aspect-[16/9] overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <CardContent className="py-6 flex-grow relative z-10">
          <motion.h3 
            className="text-xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.tags.map((tag, index) => (
              <motion.span 
                key={tag} 
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.2,
                  delay: 0.3 + index * 0.1
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
        
        <CardFooter className="border-t border-border pt-4 pb-4 flex justify-between relative z-10">
          {project.liveDemo ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="sm" asChild className="group">
                <Link 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                  </motion.div>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Live Demo
                  </span>
                </Link>
              </Button>
            </motion.div>
          ) : (
            <Button variant="outline" size="sm" disabled>
              <ExternalLink className="mr-2 h-4 w-4" />
              Private Project
            </Button>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" size="sm" asChild className="group">
              <Link 
                href={project.sourceCode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                </motion.div>
                <span className="group-hover:translate-x-1 transition-transform">
                  Source
                </span>
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}