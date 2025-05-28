"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Créer des interfaces réactives avec Tailwind CSS",
    summary: "Découvrez comment concevoir de belles interfaces utilisateur réactives en utilisant les classes utilitaires de Tailwind CSS.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "15 Mai 2023",
    readTime: "6 min de lecture",
    slug: "creer-interfaces-reactives-avec-tailwind-css"
  },
  {
    id: 2,
    title: "La puissance des routes API dans Next.js",
    summary: "Apprenez à exploiter les routes API de Next.js pour construire des fonctionnalités backend robustes dans vos applications web.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "22 Avril 2023",
    readTime: "8 min de lecture",
    slug: "puissance-des-routes-api-nextjs"
  },
  {
    id: 3,
    title: "Bonnes pratiques TypeScript pour les développeurs React",
    summary: "Découvrez des techniques et modèles TypeScript essentiels pour améliorer la qualité et la maintenabilité de votre code React.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "10 Mars 2023",
    readTime: "10 min de lecture",
    slug: "bonnes-pratiques-typescript-pour-react"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Derniers articles</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Réflexions, conseils et tutoriels techniques issus de mon expérience de développeur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center text-muted-foreground mb-4 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.summary}</p>
                </CardContent>

                <CardFooter className="pt-4 pb-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              Voir tous les articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
