"use client"

import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    year: "Oct 2024 - Dec 2024",
    role: "Full stack web developer",
    company: "Digital Addis",
    description:
      "Involved in various projects using tech stacks such as React, Next.js, Node.js, and Strapi. Collaborated with cross-functional teams to improve functionality and scalability. Gained hands-on experience across multiple technologies and diverse projects.",
    achievements: ["React & Next.js", "Strapi", "Scalability"],
  },
  {
    year: "Feb 2023 - Jun 2024",
    role: "Assistant Programming Lab Instructor",
    company: "Bits College",
    description:
      "Assisted students during practical lab sessions, helping them debug code and understand complex algorithms. Evaluated lab exercises, provided constructive feedback, and supported the lead instructor in delivering course material.",
    achievements: ["Mentoring", "Debugging Support", "Code Review"],
  },
  {
    year: "Jun 2022 - Sept 2022",
    role: "Programming Instructor",
    company: "California Training Institute (CTI)",
    description:
      "Taught basic HTML and CSS concepts to children aged 7-15. Developed project-based lessons to create interactive web pages. Provided hands-on support and personalized feedback. Guided students in building final projects showcasing their skills.",
    achievements: ["Teaching", "HTML/CSS", "Mentorship"],
  },
]

export function ExperienceTimeline() {
  const stackItems = experiences.slice(0, 3).map((exp, index) => ({
    id: index,
    content: (
      <div className="relative rounded-xl border border-primary/20 bg-card/95 backdrop-blur-sm shadow-sm p-6 h-full flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="space-y-4">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-mono text-sm py-1 px-3 rounded-full bg-primary/10 w-fit">
                    <Calendar className="h-4 w-4" />
                    {exp.year}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company}</span>
                </div>
            </div>

            <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">{exp.role}</h3>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-6">
            {exp.achievements.map((achievement, i) => (
                <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                {achievement}
                </span>
            ))}
        </div>
      </div>
    ),
  }))

  return (
    <section className="relative py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Professional <span className="text-primary">Journey</span>
        </h2>
        <p className="text-muted-foreground text-lg text-pretty">
          A track record of delivering excellence and driving innovation
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary/30 -translate-y-1/2 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {stackItems.map((item) => (
             <div key={item.id} className="h-full">
                {item.content}
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
