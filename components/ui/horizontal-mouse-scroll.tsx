"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"

export const HorizontalMouseScroll = ({ items }: { items: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  // Smooth out the mouse movement
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })

  const [dimensions, setDimensions] = useState({ 
    containerWidth: 0, 
    contentWidth: 0
  })

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        setDimensions({
          containerWidth: window.innerWidth, 
          contentWidth: contentRef.current.scrollWidth,
        })
      }
    }

    // Initial calculation
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX])

  // Map Window Width (0 -> Width) to Scroll Range (0 -> -TotalScrollParams)
  // If content is shorter than container, don't scroll
  const scrollRange = Math.max(0, dimensions.contentWidth - dimensions.containerWidth)
  
  const x = useTransform(
    smoothMouseX, 
    [0, dimensions.containerWidth], 
    [0, -scrollRange]
  )


  return (
    <div 
        ref={containerRef} 
        className="relative h-[60vh] w-full overflow-hidden bg-background"
    >
      <motion.div
        ref={contentRef}
        style={{ x }}
        className="absolute left-0 top-0 h-full flex items-center gap-8 px-8"
      >
        {/* Connecting Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary/30 -translate-y-1/2 w-full min-w-full" />
        
        {items.map((item, index) => (
          <div key={index} className="w-[350px] md:w-[450px] flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
      
      {/* Mobile/Touch Fallback */}
      <div className="md:hidden absolute inset-0 overflow-x-auto">
         {/* Simple horizontal scroll for mobile if needed */}
      </div>
    </div>
  )
}
