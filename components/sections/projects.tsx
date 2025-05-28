"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/project-card";
import { Github } from "lucide-react";
import Link from "next/link";

// Données fictives des projets - dans un vrai scénario, elles seraient récupérées depuis l'API GitHub
const projectsData = [
  {
    id: 1,
    title: "Plateforme E-Commerce",
    description: "Une application e-commerce complète avec catalogue de produits, panier et intégration de paiement.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveDemo: "https://example.com/ecommerce",
    sourceCode: "https://github.com/Lionel-RAKOTOMALALA/ecommerce",
    category: "web"
  },
  {
    id: 2,
    title: "Application de Gestion de Tâches",
    description: "Une application de productivité pour organiser les tâches avec fonctionnalités de glisser-déposer, catégories et rappels.",
    image: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    liveDemo: "https://example.com/taskmanager",
    sourceCode: "https://github.com/Lionel-RAKOTOMALALA/taskmanager",
    category: "web"
  },
  {
    id: 3,
    title: "API Réseau Social",
    description: "API RESTful pour une application de réseau social avec authentification, publications, commentaires et likes.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    liveDemo: "",
    sourceCode: "https://github.com/Lionel-RAKOTOMALALA/social-api",
    category: "backend"
  },
  {
    id: 4,
    title: "Tableau de Bord Météo",
    description: "Une belle application météo avec prévisions sur 7 jours, recherche par localisation et cartes interactives.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
    liveDemo: "https://example.com/weather",
    sourceCode: "https://github.com/Lionel-RAKOTOMALALA/weather-app",
    category: "web"
  },
  {
    id: 5,
    title: "Générateur de Portfolio",
    description: "Un outil pour les développeurs afin de créer rapidement des portfolios personnalisés à partir de modèles.",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "Nuxt.js", "Netlify CMS", "SCSS"],
    liveDemo: "https://example.com/portfolio-gen",
    sourceCode: "https://github.com/Lionel-RAKOTOMALALA/portfolio-gen",
    category: "web"
  },
  {
    id: 6,
    title: "Système de Gestion de Stock",
    description: "Une solution complète de gestion de stock pour les petites entreprises avec suivi, rapports et gestion des fournisseurs.",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    liveDemo: "",
    sourceCode: "https://github.com/Lionel-RAKOTOMALALA/inventory-system",
    category: "fullstack"
  }
];

// Options de catégories pour le filtrage
const categories = [
  { value: "all", label: "Tous les projets" },
  { value: "web", label: "Applications Web" },
  { value: "backend", label: "Back-end" },
  { value: "fullstack", label: "Fullstack" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden"
      ref={containerRef}
    >
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mes Projets</h2>
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
            Voici une sélection de mes travaux récents. Chaque projet met en valeur différentes compétences et technologies que j'ai maîtrisées.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.value}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category.value ? "default" : "outline"}
                onClick={() => setFilter(category.value)}
                className="rounded-full transition-colors duration-300"
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    rotate: -2
                  },
                  show: { 
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                      delay: index * 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="group"
            >
              <Link 
                href="https://github.com/Lionel-RAKOTOMALALA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                </motion.div>
                <span className="group-hover:translate-x-1 transition-transform">
                  Voir plus sur GitHub
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
