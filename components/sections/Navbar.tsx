"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Platform", href: "/platform" },
    { label: "Contact", href: "/#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled || isOpen
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                    : "bg-transparent pt-2"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                    <Image
                        src="/logo.png"
                        alt="Wananchi Mali"
                        width={140}
                        height={40}
                        className="h-9 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-corporate-emerald",
                                isScrolled ? "text-corporate-navy" : "text-white/90"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center">
                    <Link href="/#contact">
                        <Button
                            size="sm"
                            className="bg-corporate-emerald hover:bg-emerald-700 text-white font-semibold px-5"
                        >
                            Get in Touch
                        </Button>
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className={cn("md:hidden p-2 rounded", isScrolled ? "text-corporate-navy" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-corporate-navy hover:text-corporate-emerald py-2 border-b border-gray-50"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full mt-2 bg-corporate-emerald hover:bg-emerald-700 text-white font-semibold">
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            )}
        </header>
    )
}
