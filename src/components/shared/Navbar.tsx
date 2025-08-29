import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-background/90 backdrop-blur-sm border-b border-border/50 z-50">
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
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors font-medium text-sm"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu */}
                    <div className="flex items-center sm:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}