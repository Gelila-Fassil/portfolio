"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Award, Star, Medal } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Annual Entrepreneurship Contest",
    organization: "Wollo University",
    year: "2020",
    description: "Won first place at the annual entrepreneurship contest and received certification with recognition.",
  },
  {
    icon: Medal,
    title: "Summer Code Camp - 3rd Place",
    organization: "Federal Institute of Technology and Innovations",
    year: "2019",
    description: "Secured third place with a Store Managing Software project at the summer code camp.",
  },
  {
    icon: Star,
    title: "Science Fair Recognition",
    organization: "Wollo University",
    year: "2018",
    description:
      "Received recognition for developing and implementing a free lost and found mobile application for campus community.",
  },
  {
    icon: Award,
    title: "Sister Cities Summer Camp - China",
    organization: "Addis Ababa Education Bureau",
    year: "2016",
    description:
      "Won first place in activities after earning third place in IT at the annual exhibition in Addis Ababa.",
  },
]

export function Achievements() {
  return (
    <section className="relative py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Awards & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Recognition for innovation, leadership, and technical excellence throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground text-balance">{achievement.title}</h3>
                      <span className="text-xs font-mono text-primary border border-primary/30 rounded-full px-2 py-1 bg-primary/10 flex-shrink-0">
                        {achievement.year}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground font-medium">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
