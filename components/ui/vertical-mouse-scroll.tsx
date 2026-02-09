"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"

export const VerticalMouseScroll = ({ items }: { items: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  // Smooth out the mouse movement
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })

  const [dimensions, setDimensions] = useState({ 
    containerWidth: 0, 
    contentHeight: 0,
    containerHeight: 0 
  })

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        setDimensions({
          containerWidth: window.innerWidth, // Use window width for full range
          contentHeight: contentRef.current.scrollHeight,
          containerHeight: containerRef.current.clientHeight
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
  const scrollRange = Math.max(0, dimensions.contentHeight - dimensions.containerHeight)
  
  const y = useTransform(
    smoothMouseX, 
    [0, dimensions.containerWidth], 
    [0, -scrollRange]
  )


  return (
    <div 
        ref={containerRef} 
        className="relative h-[80vh] w-full overflow-hidden bg-background"
    >
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="absolute left-0 right-0 top-0 w-full flex flex-col items-center gap-8 py-20 px-4"
      >
        {items.map((item, index) => (
          <div key={index} className="w-full max-w-2xl">
            {item}
          </div>
        ))}
      </motion.div>
      
      {/* Mobile/Touch Fallback: On touch devices, this overlay could be hidden or adjusted */}
      <div className="md:hidden absolute inset-0 overflow-y-auto">
         {/* Simple vertical scroll for mobile if needed, or rely on the motion div if touch events are passed through (tracking mouseX might fail on touch) */}
      </div>
    </div>
  )
}
