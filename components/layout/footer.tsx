import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Lionel</span><span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground">
              Fullstack Developer focused on creating beautiful, functional applications with attention to detail and performance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Experience
              </Link>
              <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Blog
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/Lionel-RAKOTOMALALA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-muted-foreground">contact@lioneldev.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {currentYear} Lionel Rakotomalala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}