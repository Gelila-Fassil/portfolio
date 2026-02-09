"use client"

import React, { useEffect, useRef, useState } from "react"

interface ScrollStackProps {
    items: {
        id: string | number
        content: React.ReactNode
    }[]
    offset?: number
}

export function ScrollStack({ items, offset = 40 }: ScrollStackProps) {
    return (
        <div className="relative w-full max-w-4xl mx-auto pb-20">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="sticky top-0 w-full"
                    style={{
                        top: `calc(10vh + ${index * offset}px)`,
                        zIndex: index,
                    }}
                >
                    <div
                        className="relative w-full origin-top transition-all duration-500"
                        style={{
                            // Simple scale effect based on index could be added here if we track scroll, 
                            // but purely sticky stacking is robust and performs well.
                        }}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    )
}
