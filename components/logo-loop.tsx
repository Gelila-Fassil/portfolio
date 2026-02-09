"use client"

import { Code2, Database, Cloud, Cpu, Award, Users } from "lucide-react"

const skills = [
    { icon: Code2, label: "Frontend" },
    { icon: Database, label: "Backend" },
    { icon: Cpu, label: "Full Stack" },
    { icon: Cloud, label: "Cloud" },
    { icon: Award, label: "Tools" },
    { icon: Users, label: "Collaboration" },
    // Duplicate for smooth loop
    { icon: Code2, label: "Frontend" },
    { icon: Database, label: "Backend" },
    { icon: Cpu, label: "Full Stack" },
    { icon: Cloud, label: "Cloud" },
    { icon: Award, label: "Tools" },
    { icon: Users, label: "Collaboration" },
]

export function LogoLoop() {
    return (
        <div className="w-full overflow-hidden py-10 bg-background/50 backdrop-blur-sm border-y border-primary/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex w-full">
                    <div className="flex animate-infinite-scroll gap-12 group">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                            >
                                <skill.icon className="h-8 w-8" />
                                <span className="text-lg font-mono font-medium whitespace-nowrap">{skill.label}</span>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop - ensuring enough content */}
                        {skills.map((skill, index) => (
                            <div
                                key={`dup-${index}`}
                                className="flex items-center gap-3 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                            >
                                <skill.icon className="h-8 w-8" />
                                <span className="text-lg font-mono font-medium whitespace-nowrap">{skill.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
