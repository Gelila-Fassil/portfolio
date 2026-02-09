"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce application featuring product catalogs, shopping cart functionality, secure payment integration, and user authentication with responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/modern-dashboard-analytics-interface.jpg",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Developed a collaborative task management application with real-time updates, team collaboration features, and intuitive UI using modern web technologies and best practices.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/ai-machine-learning-neural-network.jpg",
  },
  {
    title: "Portfolio & Blog Platform",
    description:
      "Created a dynamic portfolio and blog platform with content management, SEO optimization, and responsive design, showcasing modern web development practices and performance optimization.",
    tech: ["React", "Express", "PostgreSQL", "AWS"],
    image: "/cloud-infrastructure-microservices.jpg",
  },
  {
    title: "Image Project 1",
    description: "Project visual using the public/pic1.png image.",
    tech: ["Design"],
    image: "/pic1.png",
  },
  {
    title: "Image Project 2",
    description: "Project visual using the public/pic2.png image.",
    tech: ["Design"],
    image: "/pic2.png",
  },
  {
    title: "Image Project 3",
    description: "Project visual using the public/pic3.png image.",
    tech: ["Design"],
    image: "/pic3.png",
  },
  {
    title: "Image Project 4",
    description: "Project visual using the public/pic4.png image.",
    tech: ["Design"],
    image: "/pic4.png",
  },
  {
    title: "Image Project 5",
    description: "Project visual using the public/pic5.png image.",
    tech: ["Design"],
    image: "/pic5.png",
  },
  {
    title: "Image Project 6",
    description: "Project visual using the public/pic6.png image.",
    tech: ["Design"],
    image: "/pic6.png",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A selection of impactful projects that showcase technical excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground text-balance">{project.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/30 text-primary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
