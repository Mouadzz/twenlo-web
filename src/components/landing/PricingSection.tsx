import { Check } from 'lucide-react'

export default function PricingSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Choose Your Discovery Plan
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Start free, upgrade when you're ready to scale your idea generation
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Free Trial */}
                    <div className="bg-muted/30 rounded-lg p-6 relative hover:bg-muted/40 transition-all duration-300">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                            <p className="text-muted-foreground mb-4">No Credit Card Required</p>
                            <div className="text-4xl font-bold text-primary">$0</div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">30 market expansions</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">15 total startup ideas</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">Basic market metrics</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">All core features to evaluate</span>
                            </li>
                        </ul>

                        <button className="w-full bg-primary hover:bg-primary/90 text-foreground py-3 rounded-lg font-medium transition-all duration-200">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Paid Plan */}
                    <div className="bg-muted/30 border-2 border-primary/50 rounded-lg p-6 relative overflow-hidden hover:border-primary/70 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-primary text-foreground px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </span>
                        </div>

                        <div className="mb-6 relative z-10">
                            <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
                            <p className="text-muted-foreground mb-4">For serious entrepreneurs</p>
                            <div className="text-4xl font-bold text-primary">
                                $19<span className="text-base text-muted-foreground">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8 relative z-10">
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">1,500 market expansions</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">750 total startup ideas</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">Advanced market intelligence</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">Competition & volume analysis</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">12-month trend graphs</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                <span className="text-sm">Real user quotes & validation</span>
                            </li>
                        </ul>

                        <button className="w-full bg-primary hover:bg-primary/90 text-foreground py-3 rounded-lg font-medium transition-all duration-200 relative z-10">
                            Upgrade to Pro
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}