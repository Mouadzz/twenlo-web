import { Search } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="relative">
                                <Search className="h-6 w-6 text-primary" />
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
                            </div>
                            <span className="text-xl font-bold text-foreground">Twenlo</span>
                        </div>
                        <p className="text-muted-foreground mb-4 max-w-md leading-relaxed text-sm">
                            Discover validated startup ideas from real Reddit discussions. Transform customer pain points into profitable business opportunities with AI-powered market intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Product</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">How it works</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">Examples</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">About</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">Contact</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors duration-200">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
                    <p>&copy; 2025 Twenlo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}