"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionWrapper from "@/components/SectionWrapper"
import { Mail, Phone, MapPin } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useState } from "react"

type Inputs = {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    // Bu yerda siz form ma'lumotlarini serverga yuborish logikasini qo'shishingiz mumkin
    // Masalan, API endpointga POST so'rov yuborish
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulyatsiya

    // Simulyatsiya natijasi
    const success = Math.random() > 0.2 // 80% muvaffaqiyatli
    if (success) {
      setSubmitStatus({ type: "success", message: "Xabaringiz muvaffaqiyatli yuborildi!" })
      reset()
    } else {
      setSubmitStatus({ type: "error", message: "Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring." })
    }
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      text: "sizning.emailingiz@example.com",
      href: "mailto:sizning.emailingiz@example.com",
    },
    { icon: <Phone className="h-6 w-6 text-primary" />, text: "+998 XX XXX XX XX", href: "tel:+998XXXXXXXXX" },
    { icon: <MapPin className="h-6 w-6 text-primary" />, text: "Toshkent, O'zbekiston" },
  ]

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Men Bilan Aloqa</h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto">
          Agar savollaringiz bo'lsa yoki hamkorlik qilishni istasangiz, men bilan bog'laning.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Aloqa Ma'lumotlari</h3>
          <ul className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.icon}
                {info.href ? (
                  <a href={info.href} className="text-foreground/80 hover:text-primary transition-colors">
                    {info.text}
                  </a>
                ) : (
                  <span className="text-foreground/80">{info.text}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <Input
              {...register("name", { required: "Ismingizni kiriting" })}
              placeholder="Ismingiz"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Input
              {...register("email", {
                required: "Email manzilingizni kiriting",
                pattern: { value: /^\S+@\S+$/i, message: "Noto'g'ri email format" },
              })}
              type="email"
              placeholder="Email manzilingiz"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea
              {...register("message", { required: "Xabaringizni kiriting" })}
              placeholder="Xabaringiz"
              rows={5}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Yuborilmoqda..." : "Xabarni Yuborish"}
          </Button>
          {submitStatus && (
            <p
              className={`text-sm mt-2 text-center ${submitStatus.type === "success" ? "text-green-600" : "text-destructive"}`}
            >
              {submitStatus.message}
            </p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
