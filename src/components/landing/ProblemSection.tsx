import { TrendingUp, Users, Target } from 'lucide-react'
import React from 'react'

export default function ProblemSection() {
    const problems = [
        {
            icon: TrendingUp,
            title: "No Market Need",
            description: "70% fail by skipping proper market validation before building",
            iconColor: "text-red-500",
            gradient: "from-red-500/10 to-orange-500/10"
        },
        {
            icon: Users,
            title: "Poor Customer Research",
            description: "Most founders assume they know what customers want without asking",
            iconColor: "text-orange-400",
            gradient: "from-orange-500/10 to-yellow-500/10"
        },
        {
            icon: Target,
            title: "Twenlo's Solution",
            description: "Find real problems being discussed by real people right now",
            iconColor: "text-primary",
            gradient: "from-primary/10 to-purple-500/10"
        }
    ]

    return (
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-section">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    Why Do 90% of Startups Fail?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    The #1 reason businesses fail is building something{' '}
                    <span className="text-primary font-semibold">nobody wants</span>. Most entrepreneurs build products based on assumptions, not real customer needs. The result?
                    Wasted time, money, and dreams.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-muted/25 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full">
                            <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative z-10">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4 md:mb-6 w-fit mx-auto">
                                    {React.createElement(problem.icon, { className: `h-8 w-8 ${problem.iconColor}` })}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-4">{problem.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}