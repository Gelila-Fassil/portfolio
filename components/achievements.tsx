"use client"

import { Card } from "@/components/ui/card"
const achievements = [
  {
    title: "Full-Stack MERN Development",
    organization: "Evangadi Tech Network",
    year: "Academic Award",
    image: "/ser2.jpg",
    description: "Academic Achievement Award for MERN Stack Development.",
  },
  {
    title: "AI Career Essential",
    organization: "ALX Ethiopia",
    year: "Academic Award",
    image: "/cer1.jpg",
    description: "Academic Achievement Award in AI Career Essentials.",
  },
  {
    title: "Programming Instructor",
    organization: "California Training Institute",
    year: "Certificate",
    image: "/ser3.jpg",
    description: "Certificate of recognition for working as a Programming Instructor.",
  },
]

export function Achievements() {
  return (
    <section className="relative py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Education & <span className="text-primary">Awards</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Academic background and professional recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden bg-muted p-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6 flex-1 flex flex-col space-y-4">
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-foreground text-balance leading-tight">{item.title}</h3>
                  </div>
                  
                  <p className="text-sm font-medium text-primary/80">{item.organization}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                
                 <div className="pt-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                      {item.year}
                    </span>
                 </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
