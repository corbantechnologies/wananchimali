import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Users, PiggyBank, CreditCard, Smartphone } from "lucide-react"

const platformPills = [
    { icon: Users, label: "Member CRM" },
    { icon: PiggyBank, label: "Savings Engine" },
    { icon: CreditCard, label: "Loan Management" },
    { icon: Smartphone, label: "M-Pesa Integrated" },
]

export function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-corporate-navy flex flex-col justify-center pt-16">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute -top-[20%] -left-[10%] w-[65%] h-[65%] rounded-full bg-corporate-blue/20 blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[55%] rounded-full bg-corporate-emerald/10 blur-3xl opacity-30" />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center py-20">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-corporate-gold backdrop-blur-sm mb-10">
                    <span className="h-1.5 w-1.5 rounded-full bg-corporate-emerald animate-pulse" />
                    The SACCO People — Built for Kenya's Cooperatives
                </div>

                {/* Headline */}
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white mb-5 md:text-5xl lg:text-6xl leading-[1.1]">
                    A Complete Digital Platform{" "}
                    <br className="hidden md:block" />
                    <span className="text-corporate-emerald">for SACCO Management</span>
                </h1>

                {/* Subtext */}
                <p className="max-w-xl text-base text-gray-300 mb-10 md:text-lg leading-relaxed">
                    Wananchi Mali delivers an integrated, institutional-grade system covering member onboarding, savings, loans, fees, M-Pesa, and accounting — all in one platform.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-corporate-emerald hover:bg-emerald-700 text-white text-sm font-semibold rounded transition-colors shadow-lg shadow-emerald-900/30"
                    >
                        Request a Setup Call <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/platform"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
                    >
                        See All Features
                    </Link>
                </div>

                {/* Module pills */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
                    {platformPills.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                        >
                            <Icon className="h-3.5 w-3.5 text-corporate-emerald" />
                            {label}
                        </div>
                    ))}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        <span className="text-corporate-gold font-semibold">+6</span> more modules
                    </div>
                </div>

                {/* Dashboard image */}
                <div className="relative w-full max-w-5xl">
                    <div className="relative rounded border border-white/10 bg-white/5 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent z-10 pointer-events-none rounded" />
                        <Image
                            src="/images/hero-dashboard.png"
                            alt="Wananchi Mali SACCO Platform Dashboard"
                            width={1280}
                            height={800}
                            className="rounded object-cover w-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
