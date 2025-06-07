"use client"
import { motion, useInView } from "framer-motion"
import type React from "react"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
  delay?: number
}

export default function SectionWrapper({ children, id, className, delay = 0.2 }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("py-16 sm:py-24 min-h-screen flex items-center justify-center", className)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: isInView ? delay : 0 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  )
}
