"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react" // Yoki boshqa ijtimoiy tarmoq ikonkalari

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
  ]

  return (
    <motion.footer
      className="bg-muted/50 py-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }} // Delay to ensure it appears after content
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <p className="text-sm text-foreground/60">
          &copy; {currentYear} Sizning Ismingiz. Barcha huquqlar himoyalangan.
        </p>
        <p className="text-xs text-foreground/50 mt-1">Next.js va Vercel yordamida yaratildi.</p>
      </div>
    </motion.footer>
  )
}
