"use client"

import { ScrollStack } from "@/components/scroll-stack"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    year: "Jan 2024 - Present",
    role: "Full-Stack Web Developer",
    company: "TechVision Solutions",
    description:
      "Developing responsive web applications using React and Node.js, collaborating with design and product teams to deliver high-quality user experiences across multiple projects.",
    achievements: ["React & Next.js development", "API integration", "UI/UX implementation"],
  },
  {
    year: "Jun 2023 - Dec 2023",
    role: "Frontend Developer",
    company: "Digital Innovations Ltd",
    description:
      "Built interactive frontend applications using React, implemented responsive designs with Tailwind CSS, and optimized performance for enhanced user engagement.",
    achievements: ["Component development", "CSS animations", "Performance optimization"],
  },
  {
    year: "Feb 2023 - May 2023",
    role: "Junior Web Developer",
    company: "StartupFlow",
    description:
      "Contributed to full-stack development of web applications, working with React and Node.js, learning best practices in code structure and collaborative development.",
    achievements: ["MERN stack experience", "Bug fixing & debugging", "Code review participation"],
  },
  {
    year: "Aug 2022 - Jan 2023",
    role: "Web Development Intern",
    company: "CloudNet Systems",
    description:
      "Interned on frontend projects, working with HTML, CSS, and JavaScript to implement static and dynamic web pages, and learning modern web development practices.",
    achievements: ["HTML/CSS/JS fundamentals", "Git version control", "Team collaboration"],
  },
]

export function ExperienceTimeline() {
  const stackItems = experiences.map((exp, index) => ({
    id: index,
    content: (
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/4 space-y-2 shrink-0">
          <div className="flex items-center gap-2 text-primary font-mono text-sm py-1 px-3 rounded-full bg-primary/10 w-fit">
            <Calendar className="h-4 w-4" />
            {exp.year}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Briefcase className="h-4 w-4" />
            <span>{exp.company}</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold font-heading">{exp.role}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>

          <div className="flex flex-wrap gap-2 pt-4">
            {exp.achievements.map((achievement, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-foreground"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  }))

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            A track record of delivering excellence and driving innovation
          </p>
        </div>

        <ScrollStack items={stackItems} />
      </div>
    </section>
  )
}
