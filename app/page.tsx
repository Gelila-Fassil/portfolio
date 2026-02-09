import { Hero } from "@/components/hero"
import { SkillsGrid } from "@/components/skills-grid"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { FeaturedProjects } from "@/components/featured-projects"
import { Achievements } from "@/components/achievements"
import { ContactCTA } from "@/components/contact-cta"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Hero />
      <SkillsGrid />
      <ExperienceTimeline />
      <Achievements />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  )
}
