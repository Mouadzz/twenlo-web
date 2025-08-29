'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <nav className="fixed w-full bg-background/80 backdrop-blur-sm border-b border-border/50 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3 md:py-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Twenlo"
                                width={120}
                                height={60}
                                className="h-10 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:flex items-center space-x-4">
                            <Link
                                href="/signin"
                                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-primary hover:bg-primary/90 text-foreground px-6 py-2 rounded-lg transition-colors font-medium text-sm"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="sm:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`relative w-10 h-10 flex flex-col justify-center items-center transition-all duration-300 rounded-lg hover:bg-muted/30 ${mobileMenuOpen ? 'hamburger-open' : ''}`}
                            >
                                <span className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <div className="sm:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-xl z-40">
                    <div className="bg-muted/30 backdrop-blur-sm border border-border/50 m-4 rounded-2xl p-8 space-y-6">
                        <Link
                            href="/signin"
                            className="block w-full text-left text-muted-foreground hover:text-foreground px-6 py-4 rounded-xl transition-all duration-200 hover:bg-muted/50 border border-transparent hover:border-primary/30"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="block w-full bg-primary hover:bg-primary/90 text-foreground px-6 py-4 rounded-xl transition-all duration-200 font-medium text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}