"use client"
import { motion } from "framer-motion"
import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import SectionWrapper from "@/components/SectionWrapper"

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Salom, men <span className="text-primary">Sizning Ismingiz</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Men Full-Stack Dasturchiman, zamonaviy veb-ilovalar va ajoyib foydalanuvchi tajribalarini yaratishga
          ixtisoslashganman.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" onClick={scrollToProjects} className="group">
            Loyihalarimni Ko'rish <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <div className="flex space-x-3">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary/10 hover:border-primary"
              >
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary/10 hover:border-primary"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
