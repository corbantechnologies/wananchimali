"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
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
                    "bg-white/80 backdrop-blur-md shadow-sm dark:bg-corporate-navy/80": isScrolled,
                    "bg-transparent pt-4": !isScrolled,
                }
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-corporate-emerald text-white">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight text-white", {
                        "text-corporate-navy dark:text-white": isScrolled
                    })}>
                        Wananchi Mali
                    </span>
                </Link>

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
                    <Link href="#contact">
                        <Button variant="gold" size="sm" className="hidden md:flex font-semibold">
                            Get Started
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden text-white">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
