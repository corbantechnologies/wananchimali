"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                {
                    "bg-white/80 backdrop-blur-md shadow-sm dark:bg-corporate-navy/80": isScrolled || isMobileMenuOpen,
                    "bg-transparent pt-4": !isScrolled && !isMobileMenuOpen,
                }
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {/* Logo Icon */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-corporate-emerald text-white">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight text-white", {
                        "text-corporate-navy dark:text-white": isScrolled || isMobileMenuOpen
                    })}>
                        Wananchi Mali
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#systems" className={cn("text-sm font-medium hover:text-corporate-emerald transition-colors", {
                        "text-white/90": !isScrolled,
                        "text-corporate-navy dark:text-gray-200": isScrolled
                    })}>
                        Systems
                    </Link>
                    <Link href="#ventures" className={cn("text-sm font-medium hover:text-corporate-emerald transition-colors", {
                        "text-white/90": !isScrolled,
                        "text-corporate-navy dark:text-gray-200": isScrolled
                    })}>
                        Ventures
                    </Link>
                    <Link href="/platform" className={cn("text-sm font-medium hover:text-corporate-emerald transition-colors", {
                        "text-white/90": !isScrolled,
                        "text-corporate-navy dark:text-gray-200": isScrolled
                    })}>
                        Platform
                    </Link>
                    <Link href="#features" className={cn("text-sm font-medium hover:text-corporate-emerald transition-colors", {
                        "text-white/90": !isScrolled,
                        "text-corporate-navy dark:text-gray-200": isScrolled
                    })}>
                        Features
                    </Link>
                    <Link href="#contact" className={cn("text-sm font-medium hover:text-corporate-emerald transition-colors", {
                        "text-white/90": !isScrolled,
                        "text-corporate-navy dark:text-gray-200": isScrolled
                    })}>
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#contact" className="hidden md:block">
                        <Button variant="gold" size="sm" className="font-semibold">
                            Get Started
                        </Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("md:hidden text-white", {
                            "text-corporate-navy": isScrolled || isMobileMenuOpen
                        })}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="#systems"
                            className="text-base font-medium text-corporate-navy hover:text-corporate-emerald p-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Systems
                        </Link>
                        <Link
                            href="#ventures"
                            className="text-base font-medium text-corporate-navy hover:text-corporate-emerald p-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Ventures
                        </Link>
                        <Link
                            href="/platform"
                            className="text-base font-medium text-corporate-navy hover:text-corporate-emerald p-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Platform
                        </Link>
                        <Link
                            href="#features"
                            className="text-base font-medium text-corporate-navy hover:text-corporate-emerald p-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#contact"
                            className="text-base font-medium text-corporate-navy hover:text-corporate-emerald p-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="gold" className="w-full mt-2">
                                Get Started
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
