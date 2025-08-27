'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedHeader() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const headlines = [
        {
            text: "Find Your",
            highlight: "$1 Million Idea",
            secondLine: "Using AI & Real Market Demand"
        },
        {
            text: "Discover",
            highlight: "Validated Business Ideas",
            secondLine: "From Actual Customer Pain Points"
        },
        {
            text: "Explore",
            highlight: "Markets & Sub-Markets",
            secondLine: "Until You Find Profitable Micro-Niches"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % headlines.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [])

    const current = headlines[currentIndex]

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                <span className="block mb-2 text-foreground">
                    {current.text} <span className="text-emerald-500">{current.highlight}</span>
                </span>
                <span className="block text-foreground">{current.secondLine}</span>
            </motion.div>
        </AnimatePresence>
    )
}