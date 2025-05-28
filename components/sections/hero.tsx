"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/ui/animated-text";
import ParticleBackground from "@/components/ui/particle-background";
import { Parallax } from 'react-scroll-parallax';
import TypingText from "@/components/ui/typing-text";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#1e1912]"
      ref={containerRef}
    >
      {/* Fond dynamique avec plusieurs couches */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Première couche - Cercles lumineux */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-[#dab18b]/10 via-[#9e634a]/15 to-[#4c7c9d]/20 rounded-full blur-[120px] animate-pulse transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#c53121]/15 via-[#9e634a]/10 to-[#70624e]/20 rounded-full blur-[100px] animate-pulse transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Deuxième couche - Motif géométrique */}
        <div className="absolute inset-0 opacity-30 bg-[url('/assets/grid.png')] bg-repeat bg-center"></div>
        
        {/* Troisième couche - Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1912]/80 via-transparent to-[#1e1912]/80"></div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* En-tête avec effet de surlignage */}
          <div className="relative">
            <motion.div
              className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#dab18b] to-[#9e634a]"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div 
              className="overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#1e1912]/90 to-[#1e1912]/50 p-6 rounded-2xl border border-[#dab18b]/20 shadow-[0_0_30px_rgba(218,177,139,0.1)]"
              whileHover={{ scale: 1.02, borderColor: "rgba(218,177,139,0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <motion.div className="absolute -inset-2 bg-gradient-to-r from-[#dab18b]/20 via-[#9e634a]/20 to-[#70624e]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <motion.p 
                  className="text-[#dab18b] text-sm font-medium bg-gradient-to-r from-[#dab18b] to-[#9e634a] bg-clip-text text-transparent inline-block tracking-wider uppercase relative"
                >
                  <TypingText text="Bonjour, je suis" delay={0.5} />
                </motion.p>
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 bg-gradient-to-r from-[#dab18b] via-[#9e634a] to-[#70624e] text-transparent bg-clip-text leading-tight relative"
                >
                  <TypingText text="Lionel Rakotomalala" delay={1} />
                </motion.h1>
                <motion.div className="flex items-center gap-3 mt-3 relative">
                  <motion.h2 
                    className="text-lg md:text-xl bg-gradient-to-r from-[#9d9c84] to-[#70624e] bg-clip-text text-transparent"
                  >
                    <TypingText text="Développeur Fullstack" delay={1.5} />
                  </motion.h2>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c53121] animate-pulse"></span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Description avec effet de carte moderne */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#dab18b]/20 via-[#9e634a]/20 to-[#70624e]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
            />
            <motion.div 
              className="relative text-[#9d9c84] text-base leading-relaxed backdrop-blur-md bg-gradient-to-br from-[#1e1912]/90 to-[#1e1912]/60 p-6 rounded-xl border border-[#70624e]/20 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#dab18b]/5 via-transparent to-[#9e634a]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <TypingText 
                text="Je conçois des expériences numériques exceptionnelles alliant fonctionnalité et esthétique. Je me concentre sur la création d'applications web intuitives, accessibles et performantes."
                delay={2}
                className="relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Boutons avec effets modernes */}
          <motion.div 
            className="flex flex-wrap gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#dab18b] via-[#9e634a] to-[#c53121] rounded-xl blur group-hover:blur-md transition-all duration-300 opacity-75 group-hover:opacity-100"
              />
              <Button asChild size="lg" className="relative bg-gradient-to-r from-[#9e634a] to-[#643a29] hover:from-[#c53121] hover:to-[#9e634a] text-[#dab18b] shadow-lg shadow-[#9e634a]/20 rounded-xl px-8 py-6 border border-[#dab18b]/20 group-hover:border-[#dab18b]/40 transition-all duration-300">
                <Link href="#contact" className="flex items-center gap-2 relative">
                  <motion.span
                    animate={{
                      textShadow: ["0 0 8px rgba(218,177,139,0)", "0 0 16px rgba(218,177,139,0.5)", "0 0 8px rgba(218,177,139,0)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Me contacter
                  </motion.span>
                  <ArrowRight className="h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#70624e] via-[#9d9c84] to-[#dab18b] rounded-xl blur opacity-20 group-hover:opacity-30 group-hover:blur-md transition-all duration-300"
              />
              <Button variant="outline" size="lg" className="relative backdrop-blur-xl bg-[#1e1912]/50 border-[#70624e] text-[#dab18b] hover:bg-[#1e1912]/70 rounded-xl px-8 py-6 group-hover:border-[#70624e]/60 transition-all duration-300">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <motion.span
                    animate={{
                      textShadow: ["0 0 8px rgba(218,177,139,0)", "0 0 16px rgba(218,177,139,0.3)", "0 0 8px rgba(218,177,139,0)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    CV
                  </motion.span>
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                </Link>
              </Button>
            </motion.div>

            {/* GitHub button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#dab18b] via-[#9e634a] to-[#70624e] rounded-xl blur opacity-0 group-hover:opacity-30 group-hover:blur-md transition-all duration-300"
              />
              <Button variant="ghost" size="icon" className="relative backdrop-blur-xl bg-[#1e1912]/40 text-[#dab18b] hover:text-[#c53121] hover:bg-[#1e1912]/60 rounded-xl border border-[#70624e]/30 group-hover:border-[#70624e]/60 transition-all duration-300">
                <Link href="https://github.com/votreutilisateur" className="p-2">
                  <motion.div
                    animate={{
                      filter: ["drop-shadow(0 0 8px rgba(218,177,139,0))", "drop-shadow(0 0 16px rgba(218,177,139,0.3))", "drop-shadow(0 0 8px rgba(218,177,139,0))"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.div>
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section image avec effets modernes */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cadre décoratif */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#dab18b]/20 to-[#9e634a]/20 rounded-2xl blur-xl"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Conteneur de l'image */}
          <motion.div 
            className="relative w-full h-[600px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#1e1912]/90 to-[#1e1912]/50 border-2 border-[#dab18b]/20 shadow-[0_0_50px_rgba(218,177,139,0.1)]"
            whileHover={{ scale: 1.02 }}
          >
            {/* Badges flottants */}
            <motion.div
              className="absolute top-8 right-8 z-20 bg-gradient-to-r from-[#c53121] to-[#9e634a] px-4 py-2 rounded-xl shadow-lg text-[#dab18b] font-semibold"
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Ai
            </motion.div>
            <motion.div
              className="absolute top-8 left-8 z-20 bg-gradient-to-r from-[#dab18b] to-[#70624e] px-4 py-2 rounded-xl shadow-lg text-[#1e1912] font-semibold"
              animate={{
                y: [0, 10, 0],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              Js
            </motion.div>
            <motion.div
              className="absolute top-[50%] -translate-y-1/2 right-8 z-20 bg-white/10 backdrop-blur-sm p-2 rounded-xl shadow-lg"
              animate={{
                x: [0, -8, 0],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
            >
              <svg width="24" height="24" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Community/Instance - Violet */}
                <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#A259FF"/>
                {/* Prototype - Bleu */}
                <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#1ABCFE"/>
                {/* Design - Rouge */}
                <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                {/* Draft - Orange */}
                <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                {/* Dev Mode - Vert */}
                <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#0ACF83"/>
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 z-20 bg-gradient-to-r from-[#70624e] to-[#4c7c9d] px-4 py-2 rounded-xl shadow-lg text-[#dab18b] font-semibold"
              animate={{
                y: [0, -8, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Ps
            </motion.div>

            {/* Image avec effets */}
            <div className="relative w-full h-full group">
              <Image 
                src="/assets/lionel.jpg"
                alt="Lionel Rakotomalala" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                priority
                style={{
                  objectFit: "cover",
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`,
                }}
                className="rounded-2xl transition-all duration-300 group-hover:scale-105"
              />

              {/* Overlay dynamique */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-[#9e634a]/40 via-transparent to-[#4c7c9d]/40 mix-blend-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              />

              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dab18b]/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Badge d'expérience */}
          <motion.div 
            className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-gradient-to-br from-[#1e1912]/90 to-[#1e1912]/50 p-6 rounded-xl border border-[#dab18b]/20 shadow-[0_0_30px_rgba(218,177,139,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
            }}
          >
            <motion.p 
              className="font-bold bg-gradient-to-r from-[#dab18b] to-[#9e634a] bg-clip-text text-transparent text-xl"
              animate={{ 
                x: mousePosition.x * 0.1,
                y: mousePosition.y * 0.1
              }}
            >
              5+ ans d'expérience
            </motion.p>
            <motion.p 
              className="text-[#9d9c84] mt-1"
              animate={{ 
                x: mousePosition.x * 0.05,
                y: mousePosition.y * 0.05
              }}
            >
              dans le développement web
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de défilement modernisé */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link href="#about" className="group flex flex-col items-center">
          <motion.div 
            className="relative backdrop-blur-xl bg-gradient-to-br from-[#1e1912]/90 to-[#1e1912]/50 px-6 py-3 rounded-full border border-[#dab18b]/20 group-hover:border-[#dab18b]/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-[#dab18b] text-sm relative z-10 group-hover:text-[#c53121] transition-colors duration-300"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Faire défiler
            </motion.span>
          </motion.div>
          <motion.svg 
            width="20" 
            height="28" 
            viewBox="0 0 16 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mt-4 text-[#dab18b] group-hover:text-[#c53121] transition-colors duration-300"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <path 
              d="M8 4V20M8 20L14 14M8 20L2 14" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </section>
  );
}
