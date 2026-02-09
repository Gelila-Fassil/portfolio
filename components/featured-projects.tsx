"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Ethiopian Diaspora Service",
    description: "I built a full-stack web platform for the Ethiopian Diaspora Service using Next.js to connect global citizens with their homeland. The site streamlines access to investment opportunities, community resources, and government services in one seamless interface.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL",],
    image: "/pic1.png",
    link: "https://www.ethiopiandiasporaservice.gov.et/", 
  },
  {
    title: "Macro General Contractor",
    description: "I developed this professional corporate platform for a leading Ethiopian construction firm using Next.js and Strapi CMS. This architecture empowers the client to independently manage their project portfolio, equipment rentals, and real estate listings through a user-friendly admin dashboard",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Strapi CMS",],
    image: "/pic7.webp",
    link: "https://macrogc.com/", 
  },
  {
    title: "AutoLink Ethiopia Car Rental",
    description: "I developed this full-stack automotive marketplace using Next.js to connect car buyers and sellers in Ethiopia. I also integrated Sanity.io to build a custom admin dashboard, allowing for seamless real-time management of vehicle listings and site content.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Sanity.io",],
    image: "/pic2.png",
    link: "https://auto-link-ethiopia.vercel.app/",
  },
  {
    title: "IMS MAKEUP School",
    description: "I built this full-stack educational platform for Ethiopia’s premier makeup academy using Next.js. The site features a professional course management system and a creative showcase to help aspiring artists transition from students to industry professionals.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/pic3.png",
    link: "https://imsmakeupschool.com/", 
  },
  {
    title: "Beteseb Restaurant",
    description: "I am currently developing this full-stack restaurant platform using Next.js to provide a modern digital dining experience. The project is in the development phase, focusing on streamlined menu management and an intuitive interface for online customers.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/pic4.png",
    link: "https://beteseb-restorant.vercel.app/#",
  },
  {
    title: "Origin Land Coffee",
    description: "I developed this official business website for a premium coffee exporter using WordPress. The site showcases high-quality coffee products and origin stories, providing a professional digital presence to connect Ethiopian coffee with the global market.",
    tech: ["WordPress"],
    image: "/pic5.png",
    link: "https://originlandcoffee.com/#",
  },
  {
    title: "Mademoiselle Emma Beauty",
    description: "I developed this full-stack beauty and wellness platform using Next.js, featuring a custom admin side built with Sanity. This setup allows the client to easily manage service listings, galleries, and content updates in real-time through a streamlined dashboard.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Sanity.io"],
    image: "/pic6.png",
    link: "https://mademoiselle-emma-beauty.vercel.app/#",
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
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                    </a>
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
