import Link from "next/link"
import { TrendingDown, Handshake, ArrowRight, Activity, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DualEngine() {
    return (
        <Section id="systems" className="bg-corporate-cream relative overflow-hidden">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-corporate-navy mb-4">
                    The Dual-Engine Advantage
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Choose the calculation logic that powers your cooperative. Tailored for corporate institutions and community groups alike.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
                {/* Engine A: corporate */}
                <div className="group relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 hover:border-corporate-emerald/30 transition-all hover:shadow-2xl flex flex-col items-start">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Activity className="w-48 h-48 text-corporate-navy" />
                    </div>

                    <div className="h-14 w-14 rounded-lg bg-corporate-navy/10 flex items-center justify-center mb-6 text-corporate-navy">
                        <TrendingDown className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-corporate-navy mb-2">The Growth Engine</h3>
                    <p className="text-sm font-semibold text-corporate-emerald mb-6 uppercase tracking-wider">Diminishing Balance</p>

                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                        Designed for corporate SACCOs. Advanced logic where interest reduces as the principal is paid, maximizing fairness for long-term borrowers.
                    </p>

                    <ul className="mb-8 space-y-3 text-sm text-gray-700 w-full">
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-corporate-emerald"></span>
                            Automated Interest Projections
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-corporate-emerald"></span>
                            Reducing Balance Amortization
                        </li>
                    </ul>

                    <Link href="https://sproutsacco.vercel.app/" target="_blank" className="w-full">
                        <Button className="w-full bg-corporate-navy hover:bg-corporate-navy/90 text-white h-12 text-base">
                            Launch Corporate Demo
                        </Button>
                    </Link>
                </div>

                {/* Engine B: Community */}
                <div className="group relative bg-corporate-navy rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 flex flex-col items-start">
                    <div className="absolute top-0 right-0 p-6 opacity-5 transition-opacity">
                        <Users className="w-48 h-48 text-white" />
                    </div>

                    <div className="h-14 w-14 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-corporate-gold">
                        <Handshake className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">The Community Engine</h3>
                    <p className="text-sm font-semibold text-corporate-gold mb-6 uppercase tracking-wider">Flat Rate Method</p>

                    <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                        Perfect for Chamas and micro-finance. Fixed, predictable interest rates that simplify repayment planning for members.
                    </p>

                    <ul className="mb-8 space-y-3 text-sm text-gray-300 w-full">
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-corporate-gold"></span>
                            Straight-line Interest
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-corporate-gold"></span>
                            Predictable Repayments
                        </li>
                    </ul>

                    <Link href="https://mwandamzedusacco.vercel.app/" target="_blank" className="w-full">
                        <Button variant="gold" className="w-full h-12 text-base">
                            Launch Chama Demo
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    )
}
