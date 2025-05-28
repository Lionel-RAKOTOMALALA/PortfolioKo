"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  GraduationCap,
  Building
} from "lucide-react";
import TimelineItem from "@/components/ui/timeline-item";

// Données d'expérience (exemple)
const experiences = [
  {
    id: 1,
    title: "Développeur Frontend Senior",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    date: "Janv. 2023 - Présent",
    description: "Dirigé le développement d'une application SaaS complexe, amélioré les performances de 40 % et mis en œuvre une architecture front-end moderne avec Next.js et TypeScript.",
    skills: ["Next.js", "TypeScript", "Redux", "TailwindCSS"],
    type: "work"
  },
  {
    id: 2,
    title: "Développeur Fullstack",
    company: "InnovateTech",
    location: "À distance",
    date: "Mars 2020 - Déc. 2022",
    description: "Développement et maintenance de plusieurs applications web pour des clients de divers secteurs. Mise en place d'API RESTful et optimisation des performances de bases de données.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    type: "work"
  },
  {
    id: 3,
    title: "Développeur Frontend",
    company: "WebSolutions Ltd.",
    location: "New York, NY",
    date: "Juin 2018 - Fév. 2020",
    description: "Création de sites web et d'applications web responsives pour des clients. Collaboration avec des designers pour améliorer l'UI/UX.",
    skills: ["JavaScript", "React", "CSS", "HTML"],
    type: "work"
  },
  {
    id: 4,
    title: "Licence en Informatique",
    company: "Université de Technologie",
    location: "Boston, MA",
    date: "2014 - 2018",
    description: "Licence en informatique avec une spécialisation en développement web et ingénierie logicielle. Diplômé avec mention.",
    skills: [],
    type: "education"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animations parallax améliorées
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Animations pour les éléments de la timeline
  const titleY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="experience" 
      className="py-24 bg-muted/30 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Fond parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted/50"
        style={{ y: backgroundY }}
      />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
          style={{ y: titleY }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expérience professionnelle</h2>
          <motion.div 
            className="w-16 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mon parcours professionnel et les entreprises avec lesquelles j'ai eu le privilège de collaborer.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Ligne centrale animée avec effet parallax */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary/50 via-border to-primary/50"
              style={{
                height: "100%",
                scaleY: lineProgress,
                originY: 0
              }}
            />

            {/* Points de connexion animés */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-primary"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-3 h-3 rounded-full bg-primary"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            />

            {/* Éléments de la timeline avec effet parallax */}
            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const offset = index % 2 === 0 ? 1 : -1;
                const itemY = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [50 * offset, -50 * offset]
                );
                const itemX = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [20 * offset, -20 * offset]
                );

                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      bounce: 0.4
                    }}
                    style={{
                      y: itemY,
                      x: itemX
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <TimelineItem 
                      experience={experience}
                      index={index}
                      isEven={index % 2 === 0}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Particules d'arrière-plan améliorées */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 150 - 75],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
