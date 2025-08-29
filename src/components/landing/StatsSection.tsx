'use client'

import { useState, useEffect } from 'react'
import { Activity } from 'lucide-react'

export default function StatsSection() {
    const [ideasCount, setIdeasCount] = useState(0)
    const [entrepreneursCount, setEntrepreneursCount] = useState(0)
    const [marketsCount, setMarketsCount] = useState(0)

    // Animated counter effect
    useEffect(() => {
        const animateCounter = (setter: (value: number) => void, target: number, duration = 2000) => {
            let start = 0
            const increment = target / (duration / 16)
            const timer = setInterval(() => {
                start += increment
                if (start >= target) {
                    setter(target)
                    clearInterval(timer)
                } else {
                    setter(Math.floor(start))
                }
            }, 16)
        }

        animateCounter(setIdeasCount, 12847)
        animateCounter(setEntrepreneursCount, 3246)
        animateCounter(setMarketsCount, 847)
    }, [])

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5"></div>
            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
                            <Activity className="h-5 w-5 mr-2 animate-pulse" />
                            <span className="font-medium text-sm">Live Reddit Analysis</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Real-Time Market Intelligence
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Powered by AI analysis of millions of discussions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-muted/30 rounded-lg p-6 text-center relative overflow-hidden group hover:bg-muted/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {ideasCount.toLocaleString()}
                            </div>
                            <div className="text-foreground font-semibold mb-1">Ideas Generated</div>
                            <div className="text-sm text-muted-foreground">From verified discussions</div>
                        </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6 text-center relative overflow-hidden group hover:bg-muted/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                                {entrepreneursCount.toLocaleString()}
                            </div>
                            <div className="text-foreground font-semibold mb-1">Entrepreneurs Helped</div>
                            <div className="text-sm text-muted-foreground">Building validated products</div>
                        </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6 text-center relative overflow-hidden group hover:bg-muted/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                                {marketsCount}+
                            </div>
                            <div className="text-foreground font-semibold mb-1">Markets Discovered</div>
                            <div className="text-sm text-muted-foreground flex items-center justify-center">
                                And counting...
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse ml-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}