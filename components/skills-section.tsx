"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import SectionWrapper from "@/components/SectionWrapper"
import { Code, Database, Server, Palette } from "lucide-react" // Example icons

const skillsData = [
  {
    category: "Frontend",
    icon: <Palette className="h-8 w-8 mb-2 text-primary" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-2 text-primary" />,
    skills: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Ma'lumotlar Bazasi",
    icon: <Database className="h-8 w-8 mb-2 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
  },
  {
    category: "Asboblar va Boshqalar",
    icon: <Code className="h-8 w-8 mb-2 text-primary" />,
    skills: ["Git & GitHub", "Docker", "CI/CD", "Jest", "Webpack", "Agile Metodologiyalari"],
  },
]

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-secondary/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Mening Ko'nikmalarim</h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto">
          Men turli texnologiyalar va vositalar bilan ishlash tajribasiga egaman. Quyida ularning ba'zilarini
          ko'rishingiz mumkin.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center text-center">
              {skillCategory.icon}
              <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {skillCategory.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
