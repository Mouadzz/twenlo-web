'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle mobile menu"
            >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full md:hidden bg-background border-y border-border/50">
                    <div className="px-6 py-6 space-y-3">
                        <Link
                            href="/signin"
                            className="block w-full text-left text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg transition-colors font-medium text-base hover:bg-muted/50"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="block w-full bg-primary hover:bg-primary/90 text-foreground px-6 py-3 rounded-lg transition-colors font-medium text-base text-center shadow-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}