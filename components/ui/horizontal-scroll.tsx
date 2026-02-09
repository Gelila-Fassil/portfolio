"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const HorizontalScroll = ({
  items,
}: {
  items: React.ReactNode[]
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Mapping vertical scroll to horizontal scroll
  // As we scroll down, we essentially translate the content to the left
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {items.map((item, index) => (
            <div key={index} className="relative h-[50vh] w-[80vw] md:w-[40vw] flex-shrink-0">
               {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
