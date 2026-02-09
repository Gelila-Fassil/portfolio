"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Cloud, Cpu, Award, Users } from "lucide-react"
import { LogoLoop } from "@/components/logo-loop"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, Tailwind CSS, HTML, CSS",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Nest.js, Strapi, Sanity",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    icon: Cpu,
    title: "Full-Stack Development",
    description: "MERN Stack, Application Development",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Cloud,
    title: "Tools & Technologies",
    description: "Docker, Git, Github, Agile",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Communication, Teamwork, Problem Sensitivity",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    icon: Award,
    title: "Languages",
    description: "English, Amharic",
    gradient: "from-primary/10 to-primary/5",
  },
]

export function SkillsGrid() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive skill set built over years of solving complex problems and delivering high-impact solutions
          </p>
        </div>

        <div className="mb-16">
          <LogoLoop />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
