"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)" }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 border-border hover:border-primary/50 dark:hover:border-primary/70">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl sm:text-2xl font-semibold mb-3 text-primary">{title}</CardTitle>
          <p className="text-sm sm:text-base text-foreground/80 mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-end space-x-3">
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub sahifasi`}>
              <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} jonli sayti`}>
              <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
