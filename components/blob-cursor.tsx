"use client"

import { useEffect, useRef, useState } from "react"

export function BlobCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setTargetPosition({ x: e.clientX, y: e.clientY })

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer'

            setIsHovering(isClickable)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // Smooth follow logic (LERP)
    useEffect(() => {
        let animationFrameId: number

        const animate = () => {
            setPosition((prev) => {
                const dx = targetPosition.x - prev.x
                const dy = targetPosition.y - prev.y

                // LERP factor (adjust for speed/lag)
                const ease = 0.15

                return {
                    x: prev.x + dx * ease,
                    y: prev.y + dy * ease,
                }
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        animate()
        return () => cancelAnimationFrame(animationFrameId)
    }, [targetPosition])

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none; /* Hide default cursor */
        }
        a, button, [role="button"] {
          cursor: none; /* Hide default cursor on interactive elements */
        }
      `}</style>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                }}
            >
                <div
                    className={`
            rounded-full bg-white transition-all duration-300 ease-out
            ${isHovering
                            ? "w-8 h-8 opacity-80"
                            : "w-4 h-4 opacity-100"
                        }
          `}
                />
                {/* Glow effect */}
                <div
                    className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-full bg-white blur-md transition-all duration-300
            ${isHovering
                            ? "w-12 h-12 opacity-40"
                            : "w-8 h-8 opacity-20"
                        }
          `}
                />
            </div>
        </>
    )
}
