"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">Men Haqimda</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Men dasturlashga ishtiyoqmand bo'lgan va doimiy ravishda yangi texnologiyalarni o'rganishga intiladigan
            Full-Stack dasturchiman. Mening asosiy maqsadim - foydalanuvchilarga qulay va samarali raqamli yechimlar
            yaratish.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
            React, Next.js, Node.js va boshqa zamonaviy texnologiyalar bilan ishlash tajribam bor. Har bir loyihaga
            ijodiy yondashaman va eng yaxshi natijaga erishish uchun harakat qilaman.
          </p>
          <p className="text-lg text-foreground/80">
            Bo'sh vaqtlarimda yangi dasturlash tillarini o'rganishni, ochiq kodli loyihalarda ishtirok etishni va
            texnologik bloglarni o'qishni yaxshi ko'raman.
          </p>
        </motion.div>
        <motion.div
          className="relative w-full max-w-sm mx-auto md:max-w-md h-80 md:h-96 rounded-lg overflow-hidden shadow-xl group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Sizning Rasmingiz"
            layout="fill"
            objectFit="cover"
            className="rounded-lg group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
