"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="relative py-20 px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />

          <div className="relative p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Let's Create Something <span className="text-primary">Exceptional</span>
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                I'm passionate about building beautiful, functional web applications. Let's discuss your project ideas,
                collaborate on something innovative, or just connect!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:gelilafassil659@gmail.com">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  gelilafassil659@gmail.com
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="flex flex-col gap-2 items-center">
                 <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent w-full"
                    asChild
                 >
                    <a href="tel:+251962464070">
                       +251962464070
                    </a>
                 </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  2+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  12+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  100%
                </div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
