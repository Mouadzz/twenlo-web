import React from 'react'
import { Rocket, TrendingUp, Brain, MessageSquare, Lightbulb, BarChart } from 'lucide-react'

export default function FeaturesSection() {
    const features = [
        {
            icon: TrendingUp,
            title: "Interactive Market Explorer",
            description: "Start from broad markets and drill down into profitable sub-niches with real-time volume, competition, and potential data.",
            gradient: "from-primary/10 to-purple-500/10"
        },
        {
            icon: Brain,
            title: "AI Market Intelligence",
            description: "Get comprehensive market metrics and validation scores for every niche level you explore.",
            gradient: "from-emerald-500/10 to-primary/10"
        },
        {
            icon: Lightbulb,
            title: "Smart Idea Generator",
            description: "Generate 5-15 validated startup ideas tailored to your selected market with AI precision.",
            gradient: "from-orange-500/10 to-primary/10"
        },
        {
            icon: MessageSquare,
            title: "Reddit Discussion Analyzer",
            description: "Scan thousands of forum discussions to discover real user pain points and emerging trends.",
            gradient: "from-blue-500/10 to-primary/10"
        },
        {
            icon: BarChart,
            title: "Pain Point Converter",
            description: "Transform user complaints into actionable startup opportunities with market validation.",
            gradient: "from-pink-500/10 to-primary/10"
        },
        {
            icon: Rocket,
            title: "Opportunity Dashboard",
            description: "Track and organize your best discoveries with validation scores and market potential rankings.",
            gradient: "from-cyan-500/10 to-primary/10"
        }
    ]

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Rocket className="h-4 w-4 mr-2" />
                        Discover, Validate & Build
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Turn Reddit Insights Into
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary"> Profitable Ventures</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our AI-powered platform transforms millions of Reddit discussions into actionable startup opportunities, giving you the market intelligence to build what people actually want.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Large feature card */}
                    <div className="lg:col-span-2 lg:row-span-2 bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                        <div className={`absolute inset-0 bg-gradient-to-br ${features[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mr-4">
                                    {React.createElement(features[0].icon, { className: "h-8 w-8 text-primary" })}
                                </div>
                                <h3 className="text-2xl font-bold">{features[0].title}</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                {features[0].description}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                                    <div className="text-2xl font-bold text-primary mb-1">47</div>
                                    <div className="text-sm text-muted-foreground">Active Markets</div>
                                </div>
                                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                                    <div className="text-2xl font-bold text-emerald-400 mb-1">92%</div>
                                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Medium feature cards */}
                    {features.slice(1, 3).map((feature, index) => (
                        <div key={index} className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative z-10">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4 w-fit">
                                    {React.createElement(feature.icon, { className: "h-6 w-6 text-primary" })}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Small feature cards */}
                    {features.slice(3).map((feature, index) => (
                        <div key={index} className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative z-10">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4 w-fit">
                                    {React.createElement(feature.icon, { className: "h-6 w-6 text-primary" })}
                                </div>
                                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}