import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AnimatedHeader from './AnimatedHeader'

export default function HeroSection() {
    return (
        <section className="bg-background min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-8 leading-tight">
                    <AnimatedHeader />
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                    Stop guessing what people want. Our platform helps you discover profitable markets, analyze them with real traffic metrics, and generate startup ideas from real customer pain points across online communities.
                </p>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Link
                        href="/signup"
                        className="bg-primary hover:bg-primary/90 text-foreground px-7 py-3 rounded-lg font-medium text-base transition-colors flex items-center group"
                    >
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-muted-foreground text-sm">No credit card required</p>
                </div>
            </div>
        </section>
    )
}