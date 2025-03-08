import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "Node.js", "MongoDB", "Stripe"]}
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management application with real-time updates and team collaboration features."
            image="/placeholder.svg?height=600&width=800"
            tags={["Next.js", "TypeScript", "PostgreSQL", "WebSockets"]}
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A responsive portfolio website with neumorphic glass design, dark mode, and smooth animations."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "Tailwind CSS", "Framer Motion"]}
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="Weather Dashboard"
            description="A weather dashboard that displays current conditions and forecasts for multiple locations."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "OpenWeather API", "Chart.js"]}
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="Social Media App"
            description="A social media application with user profiles, posts, comments, and real-time notifications."
            image="/placeholder.svg?height=600&width=800"
            tags={["React Native", "Firebase", "Redux"]}
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="AI Image Generator"
            description="An application that generates images based on text prompts using AI models."
            image="/placeholder.svg?height=600&width=800"
            tags={["Python", "TensorFlow", "React", "Flask"]}
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}) {
  return (
    <div className="neumorphic-glass rounded-3xl overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

