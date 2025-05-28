import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-xl font-bold tracking-tight hover-glow">
              <span className="text-gradient">Lionel</span>
              <span className="text-text-muted">.dev</span>
            </Link>
            <p className="text-text-muted">
              Fullstack Developer focused on creating beautiful, functional applications with attention to detail and performance.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-text">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["About", "Projects", "Experience", "Blog", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-text">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/Lionel-RAKOTOMALALA" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:contact@lioneldev.com" }
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.icon.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-text-muted">contact@lioneldev.com</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-border text-center text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>&copy; {currentYear} Lionel Rakotomalala. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}