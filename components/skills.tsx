import type React from "react"
import { Code, Database, Layout, Server, Smartphone, Figma, GitBranch, Cpu } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<Layout />}
            title="Frontend Development"
            skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          />
          <SkillCard
            icon={<Server />}
            title="Backend Development"
            skills={["Node.js", "Express", "Python", "Django"]}
          />
          <SkillCard icon={<Database />} title="Database" skills={["PostgreSQL", "MongoDB", "Redis", "Prisma"]} />
          <SkillCard
            icon={<Smartphone />}
            title="Mobile Development"
            skills={["React Native", "Flutter", "iOS", "Android"]}
          />
          <SkillCard icon={<Code />} title="Languages" skills={["JavaScript", "TypeScript", "Python", "Go"]} />
          <SkillCard icon={<Figma />} title="Design" skills={["Figma", "Adobe XD", "UI/UX", "Wireframing"]} />
          <SkillCard icon={<GitBranch />} title="DevOps" skills={["Git", "CI/CD", "Docker", "AWS"]} />
          <SkillCard icon={<Cpu />} title="Other" skills={["GraphQL", "REST API", "WebSockets", "Testing"]} />
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode
  title: string
  skills: string[]
}) {
  return (
    <div className="neumorphic-glass rounded-3xl p-6">
      <div className="neumorphic-icon-container mb-4 inline-flex p-3 rounded-xl">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-slate-700 dark:text-slate-300 flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

