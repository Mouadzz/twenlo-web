'use client'

import CountUp from '@/components/ui/CountUp'
import { Activity } from 'lucide-react'

export default function StatsSection() {
    return (
        <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
            <div className="pb-14 max-w-4xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Activity className="h-8 w-8 text-emerald-500 animate-pulse" />
                        Our Results in Numbers
                    </h2>
                </div>

                <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                <CountUp
                                    from={0}
                                    to={492}
                                    separator=","
                                    direction="up"
                                    duration={2}
                                    className="count-up-text"
                                />
                            </div>
                            <div className="text-muted-foreground">Markets Explored</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                <CountUp
                                    from={0}
                                    to={3856}
                                    separator=","
                                    direction="up"
                                    duration={2}
                                    className="count-up-text"
                                />
                            </div>
                            <div className="text-muted-foreground">Pain Points Found</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                <CountUp
                                    from={0}
                                    to={1842}
                                    separator=","
                                    direction="up"
                                    duration={2}
                                    className="count-up-text"
                                />
                            </div>
                            <div className="text-muted-foreground">Ideas Generated</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}