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
                className="text-muted-foreground hover:text-foreground"
                aria-label="Toggle mobile menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full md:hidden bg-muted border-t border-border">
                    <div className="px-4 py-4 space-y-2">
                        <Link
                            href="/signin"
                            className="block w-full text-left text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg transition-colors font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="block w-full bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors font-medium text-center"
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