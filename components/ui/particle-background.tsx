"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDarkMode = theme === "dark";
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = Math.floor(canvas.width * canvas.height / 15000);
    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Function to connect particles with lines
    function connectParticles() {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.strokeStyle = isDarkMode 
              ? `rgba(255, 255, 255, ${opacity * 0.15})` 
              : `rgba(0, 0, 0, ${opacity * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;
        
        // Boundary check for wrapping
        if (particles[i].x > canvas.width) particles[i].x = 0;
        else if (particles[i].x < 0) particles[i].x = canvas.width;
        
        if (particles[i].y > canvas.height) particles[i].y = 0;
        else if (particles[i].y < 0) particles[i].y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${particles[i].opacity})`
          : `rgba(0, 0, 0, ${particles[i].opacity * 0.7})`;
        ctx.fill();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    // Handle window resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
}