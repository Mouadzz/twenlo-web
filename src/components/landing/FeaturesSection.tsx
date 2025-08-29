import React from 'react'
import { Rocket, TrendingUp, Search, Lightbulb } from 'lucide-react'

// Custom hand-drawn arrow component
const CustomArrow = () => (
    <img
        src="/images/arrow.png"
        alt="Arrow"
        className="w-10"
    />
)

export default function FeaturesSection() {
    const features = [
        {
            icon: TrendingUp,
            title: "Market Explorer",
            description: "Start broad and drill down through markets → sub-markets → niches with real-time metrics, competition data, and market potential scores.",
            gradient: "from-primary/10 to-purple-500/10"
        },
        {
            icon: Search,
            title: "Pain Point Scanner",
            description: "Automatically scan Reddit, forums, and community platforms to uncover real user frustrations and unmet needs in your target market.",
            gradient: "from-blue-500/10 to-primary/10"
        },
        {
            icon: Lightbulb,
            title: "AI Idea Generator",
            description: "Generate validated startup ideas for any market you explore, built from real pain points discovered in online discussions.",
            gradient: "from-emerald-500/10 to-primary/10"
        }
    ]

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-section">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Rocket className="h-4 w-4 mr-2" />
                        Discover, Validate & Build
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore markets, then generate validated startup ideas from real pain points discovered in Reddit, forums, and online communities.
                    </p>
                </div>

                {/* Flow-based Feature Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="relative">
                            {/* Arrow between cards */}
                            {index < features.length - 1 && (
                                <div className="hidden lg:flex absolute -right-5 top-1/2 transform -translate-y-1/2 z-20 items-center justify-center">
                                    <CustomArrow />
                                </div>
                            )}

                            {/* Feature Card */}
                            <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mb-6 w-fit">
                                        {React.createElement(feature.icon, { className: "h-8 w-8 text-primary" })}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}