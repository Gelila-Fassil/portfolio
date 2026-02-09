"use client"

import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import { useRef } from "react"

interface CardStackProps {
  items: {
    id: string | number
    content: React.ReactNode
  }[]
  offset?: number
  scaleFactor?: number
}

const Card = ({
  item,
  index,
  progress,
  range,
  targetScale,
}: {
  item: { content: React.ReactNode }
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}) => {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="relative flex flex-col items-center justify-center"
        style={{
          scale,
          top: `calc(-10% + ${index * 25}px)`,
        }}
      >
        {item.content}
      </motion.div>
    </div>
  )
}

export function CardStack({ items, offset = 40, scaleFactor = 0.05 }: CardStackProps) {
  const container = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={container} className="relative mt-[50vh] mb-[50vh]">
      {items.map((item, index) => {
        const targetScale = 1 - (items.length - index) * scaleFactor
        return (
          <Card
            key={item.id}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={[index * (1 / items.length), 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}
