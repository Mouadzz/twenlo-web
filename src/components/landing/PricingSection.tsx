import { Check, Rocket } from 'lucide-react'

export default function PricingSection() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-section">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Try everything free, then upgrade when you need more
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:items-stretch">
                    {/* Free Trial */}
                    <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 pt-10 hover:bg-muted/40 transition-all duration-300 flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                            <p className="text-muted-foreground mb-4">Test all features with limited credits</p>
                            <div className="text-4xl font-bold">$0</div>
                        </div>

                        <ul className="space-y-3 mb-6 flex-grow">
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-sm">30 market explorations</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-sm">15 startup idea generations</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-sm">Batch of 5 ideas per generation</span>
                            </li>
                        </ul>

                        <div className="bg-muted/20 border border-border/30 rounded-lg p-4 mb-6">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Try before you buy with free credits. Get the full experience: discover markets with detailed metrics and generate ideas. Your free credits never expire.
                            </p>
                        </div>

                        <button className="w-full bg-muted hover:bg-muted/80 text-foreground py-3 rounded-lg font-medium transition-all duration-200 border border-border/50 mt-auto cursor-pointer">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                            <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                                Most Popular
                            </span>
                        </div>

                        <div className="bg-muted/30 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-8 pt-10 hover:border-primary/70 transition-all duration-300 flex flex-col h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Pro</h3>
                                <p className="text-muted-foreground mb-4">For active entrepreneurs</p>
                                <div className="text-4xl font-bold">
                                    $19<span className="text-base text-muted-foreground">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">1,500 market explorations</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">750 startup idea generations</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">Batch sizes (5-10-15)</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">Market metrics (competition, volume, potential)</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">12 month volume graph</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">Real user quotes that support ideas</span>
                                </li>
                            </ul>

                            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-all duration-200 mt-auto cursor-pointer">
                                Get Started with Pro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}