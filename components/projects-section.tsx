"use client"
import ProjectCard from "./project-card"
import SectionWrapper from "@/components/SectionWrapper"

const projectsData = [
  {
    title: "E-tijorat Platformasi",
    description:
      "Keng qamrovli funksiyalarga ega zamonaviy elektron tijorat platformasi. Mahsulotlar katalogi, savat, buyurtma berish tizimi va administrator paneli mavjud.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Sayti",
    description:
      "Kontentni boshqarish tizimi (CMS) bilan integratsiyalashgan shaxsiy blog platformasi. Maqolalar, kategoriyalar va izohlar qo'shish imkoniyati.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Gatsby", "GraphQL", "Markdown", "Netlify"],
    liveUrl: "#",
  },
  {
    title: "Vazifalar Boshqaruvchisi",
    description:
      "Foydalanuvchilarga vazifalarni yaratish, tahrirlash va kuzatib borish imkonini beruvchi interaktiv ilova. Drag-and-drop funksiyasi mavjud.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    tags: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Mening Loyihalarim</h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto">
          Bu yerda men ishlagan ba'zi loyihalarimni ko'rishingiz mumkin. Har bir loyiha o'ziga xos muammo va yechimlarga
          ega.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
