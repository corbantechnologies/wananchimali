import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative min-h-[90vh] w-full overflow-hidden bg-corporate-navy pt-24 pb-16 md:pt-32 lg:pt-40">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden select-none pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-corporate-blue/20 blur-3xl opacity-50"></div>
                <div className="absolute top-[20%] right-[0%] w-[50%] h-[60%] rounded-full bg-corporate-emerald/10 blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-corporate-gold backdrop-blur-sm mb-8 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-corporate-emerald mr-2"></span>
                    Trusted by Top SACCOs in Kenya
                </div>

                {/* Headline */}
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white mb-6 md:text-6xl lg:text-7xl">
                    Wananchi Mali: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">The SACCO People</span>
                </h1>

                {/* Subtext */}
                <p className="max-w-2xl text-lg text-gray-300 mb-10 md:text-xl">
                    Institutional-grade platforms for modern Cooperatives. Secure, scalable, and built for the future of finance.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                    <Button variant="gold" size="lg" className="h-12 px-8 text-base font-semibold shadow-lg shadow-corporate-gold/20">
                        View Flat Rate System
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white">
                        View Diminishing Balance
                    </Button>
                </div>

                {/* Visual Mockup */}
                <div className="relative w-full max-w-5xl aspect-[16/10] rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent z-20 pointer-events-none h-full w-full bottom-0"></div>
                    <Image
                        src="/images/hero-dashboard.png"
                        alt="Wananchi Mali Dashboard Interface"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
