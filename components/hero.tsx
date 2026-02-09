"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-primary border border-primary/30 rounded-full px-4 py-1.5 bg-primary/10">
                  {"<Full-Stack Developer />"}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-balance" style={{ fontFamily: "var(--font-heading)" }}>
                Crafting Modern
                <span className="text-primary block mt-2">Web Experiences</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Full-Stack Web Developer with 2+ years of experience building responsive, high-performance web applications
                using modern frameworks and best practices for seamless user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="/gelilacv.pdf" download="cv.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
                >
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Gelila-Fassil" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all">
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/gelila-fassil/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all">
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
              <a href="mailto:gelilafassil659@gmail.com" className="group">
                <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Right column - Decorative code block */}
          <div className="relative">
            <div className="relative rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-auto text-xs text-muted-foreground font-mono">portfolio.tsx</span>
              </div>

              <pre className="text-sm font-mono space-y-2 overflow-hidden">
                <code className="text-muted-foreground">
                  <span className="text-primary">const</span> <span className="text-foreground">developer</span> ={" "}
                  {"{\n"}
                  {"  "}name: <span className="text-primary">'Gelila Fassil'</span>,{"\n"}
                  {"  "}role: <span className="text-primary">'Full-Stack Web Developer'</span>,{"\n"}
                  {"  "}experience: <span className="text-primary">'3+ years'</span>,{"\n"}
                  {"  "}skills: [<span className="text-primary">'React'</span>,{" "}
                  <span className="text-primary">'Next.js'</span>, <span className="text-primary">'Node.js'</span>],
                  {"\n"}
                  {"  "}focus: <span className="text-primary">'Modern Web Development'</span>,{"\n"}
                  {"  "}status: <span className="text-green-400">'Building Amazing UX'</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>

              {/* Glowing accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
