"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    glowColor?: string
}

export function GlowCard({ children, className, glowColor = "#00F0FF", ...props }: GlowCardProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return

        const rect = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setOpacity(1)
    }

    const handleBlur = () => {
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-card/50 px-8 py-10 shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10",
                className
            )}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}15, transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    )
}
