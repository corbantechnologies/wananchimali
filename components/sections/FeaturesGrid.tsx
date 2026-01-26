import {
    UserCheck,
    PiggyBank,
    Calculator,
    Smartphone,
    BarChart3
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"

const features = [
    {
        title: "Member 360 Ecosystem",
        description: "Comprehensive CRM for member onboarding, Next of Kin (NOK) tracking, and role-based access control (RBAC).",
        icon: UserCheck,
        span: "col-span-1 md:col-span-2 lg:col-span-1",
        bg: "bg-white",
    },
    {
        title: "Dynamic Savings Wallets",
        description: "Support for multi-pot savings: Share Capital, Deposits, Holiday Accounts, and Emergency Funds with automated ledger tracking.",
        icon: PiggyBank,
        span: "col-span-1 lg:col-span-2",
        bg: "bg-corporate-navy text-white",
        iconColor: "text-corporate-gold",
        textColor: "text-white",
        descColor: "text-gray-300"
    },
    {
        title: "Smart Loan Logic",
        description: "Automated loan appraisal based on savings multiples. Includes guarantor management workflows and immediate eligibility projections.",
        icon: Calculator,
        span: "col-span-1",
        bg: "bg-white",
    },
    {
        title: "Integrated Fintech Rails",
        description: "Seamless Daraja API integration. Features automated STK Push for deposits and B2C instant disbursements to mobile wallets.",
        icon: Smartphone,
        span: "col-span-1",
        bg: "bg-white",
    },
    {
        title: "Executive Reporting Suite",
        description: "Real-time generation of Dividend reports, Defaulter Aging Analysis, and Trial Balances. Exportable to PDF/Excel.",
        icon: BarChart3,
        span: "col-span-1 md:col-span-2 lg:col-span-1", // Mobile span full to keep grid nice
        bg: "bg-white",
    }
]

export function FeaturesGrid() {
    return (
        <Section id="features" className="bg-white">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-corporate-navy mb-4">
                    Key Capabilities
                </h2>
                <div className="h-1 w-20 bg-corporate-emerald rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {features.map((feature, i) => {
                    const isDark = feature.bg.includes('text-white')
                    return (
                        <div
                            key={i}
                            className={cn(
                                "p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex flex-col",
                                feature.bg,
                                feature.span
                            )}
                        >
                            <div className={cn(
                                "h-12 w-12 rounded-lg flex items-center justify-center mb-6",
                                isDark ? "bg-white/10" : "bg-corporate-emerald/10 text-corporate-emerald"
                            )}>
                                <feature.icon className={cn("h-6 w-6", feature.iconColor || "")} />
                            </div>

                            <h3 className={cn("text-xl font-bold mb-3", feature.textColor || "text-corporate-navy")}>
                                {feature.title}
                            </h3>
                            <p className={cn("text-sm leading-relaxed", feature.descColor || "text-gray-600")}>
                                {feature.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
