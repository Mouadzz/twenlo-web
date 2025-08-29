import { TrendingUp, Users, Target } from 'lucide-react'

export default function ProblemSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    Why Do 90% of Startups Fail?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    The #1 reason businesses fail is building something{' '}
                    <span className="text-primary font-semibold">nobody wants</span>. Most entrepreneurs build products based on assumptions, not real customer needs. The result?
                    Wasted time, money, and dreams.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-muted/30 p-6 rounded-lg">
                        <TrendingUp className="h-11 w-11 text-red-500 mb-4 mx-auto" />
                        <h3 className="text-base sm:text-lg font-semibold mb-2">No Market Need</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">70% fail by skipping proper market validation before building</p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-lg">
                        <Users className="h-11 w-11 text-orange-400 mb-4 mx-auto" />
                        <h3 className="text-base sm:text-lg font-semibold mb-2">Poor Customer Research</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Most founders assume they know what customers want without asking</p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-lg">
                        <Target className="h-11 w-11 text-primary mb-4 mx-auto" />
                        <h3 className="text-base sm:text-lg font-semibold mb-2">Twenlo's Solution</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Find real problems being discussed by real people right now</p>
                    </div>
                </div>
            </div>
        </section>
    )
}