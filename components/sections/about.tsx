"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SkillBar from "@/components/ui/skill-bar";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const skills = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Express", level: 80 },
  { name: "MongoDB / PostgreSQL", level: 75 },
  { name: "HTML / CSS / Tailwind", level: 95 },
  { name: "UI/UX Design", level: 70 },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

const skillVariants = {
  initial: { width: 0, opacity: 0 },
  animate: (level: number) => ({
    width: `${level}%`,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  })
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section 
      id="about" 
      className="py-24 bg-muted/30"
      ref={containerRef}
    >
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">À propos de moi</h2>
          <motion.div 
            className="w-16 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous trouverez ici plus d'informations sur moi, mes compétences actuelles et mes passions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Apprenez à me connaître !
            </motion.h3>

            <motion.div className="space-y-4">
              {[
                "Je suis un <span class='font-semibold text-foreground'>Développeur Web Fullstack</span> passionné par la création d'expériences numériques attrayantes et fonctionnelles qui résolvent des problèmes concrets.",
                "Je me spécialise dans la création d'applications web dynamiques en utilisant des technologies modernes et les meilleures pratiques. Mon approche allie expertise technique et sens du design pour garantir des applications à la fois fonctionnelles, esthétiques et faciles à utiliser.",
                "Quand je ne code pas, je découvre de nouvelles technologies, je contribue à des projets open source ou je partage mes connaissances via des articles techniques sur mon blog."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              {[
                { number: "5+", text: "Années d'expérience" },
                { number: "30+", text: "Projets réalisés" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <motion.h4 
                        className="text-4xl font-bold text-primary mb-2"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        {item.number}
                      </motion.h4>
                      <p className="text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Mes compétences
            </motion.h3>

            <motion.div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <motion.h4 
                className="text-lg font-medium mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Autres compétences :
              </motion.h4>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {["Git", "Docker", "AWS", "Firebase", "GraphQL", "Redux", "Jest", "Figma"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
