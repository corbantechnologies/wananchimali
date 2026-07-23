import {
    Users, PiggyBank, CreditCard, Smartphone, BarChart3,
    BookOpen, Receipt, Settings, Globe, ShieldCheck
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"

const features = [
    {
        icon: Users,
        title: "Member Management",
        desc: "Bulk CSV onboarding, unique member numbers, Next of Kin tracking, role-based access, and active member exports for physical register audits.",
        accent: "bg-blue-50 text-blue-600",
        wide: false,
    },
    {
        icon: PiggyBank,
        title: "Multi-Pot Savings",
        desc: "Support for Share Capital, Deposits, Holiday, and Emergency savings pots. Real-time balances, M-Pesa STK Push deposits, and bulk CSV upload with smart pre-filled templates.",
        accent: "bg-emerald-50 text-corporate-emerald",
        wide: true,
    },
    {
        icon: Receipt,
        title: "Fee Payments",
        desc: "Multiple fee types with per-member accounts. Bulk CSV templates pre-filled with outstanding balances and end-of-month transaction dates. Per-row payment method support.",
        accent: "bg-yellow-50 text-yellow-600",
        wide: false,
    },
    {
        icon: CreditCard,
        title: "Loan Management",
        desc: "Member loan applications, auto-computed eligibility from savings multiples, guarantor workflows, admin appraisal, repayment scheduling, and penalty tracking.",
        accent: "bg-purple-50 text-purple-600",
        wide: false,
    },
    {
        icon: Smartphone,
        title: "M-Pesa Integration",
        desc: "Full Daraja API (Safaricom). STK Push for deposits, B2C disbursements for loans, real-time callback processing, and automatic GL posting on confirmation.",
        accent: "bg-green-50 text-green-600",
        wide: false,
    },
    {
        icon: BookOpen,
        title: "Full GL Accounting",
        desc: "Automatic double-entry journal entries on every transaction. Trial Balance, Balance Sheet, P&L, Cash Book, and Debtors aging reports — live and exportable.",
        accent: "bg-red-50 text-red-600",
        wide: true,
    },
    {
        icon: BarChart3,
        title: "Executive Reports",
        desc: "SACCO-wide annual summaries, year-filtered dashboards, member financial snapshots, and downloadable PDF statements.",
        accent: "bg-indigo-50 text-indigo-600",
        wide: false,
    },
    {
        icon: Globe,
        title: "Member Portal",
        desc: "A self-service portal where members deposit via M-Pesa, apply for loans, manage guarantors, view statements, and update their profiles.",
        accent: "bg-teal-50 text-teal-600",
        wide: false,
    },
    {
        icon: ShieldCheck,
        title: "Security & Infrastructure",
        desc: "JWT authentication, role-based access control, 256-bit SSL, audit log trail, Cloudinary storage, and 99.9% uptime SLA.",
        accent: "bg-slate-50 text-slate-600",
        wide: false,
    },
]

export function FeaturesGrid() {
    return (
        <Section id="features" className="bg-white">
            {/* Header */}
            <div className="mb-14 max-w-2xl">
                <div className="text-xs font-semibold text-corporate-emerald uppercase tracking-widest mb-4">
                    Platform Features
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy mb-3 leading-snug">
                    Every Tool Your SACCO Needs — In One Place
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    No patchwork of spreadsheets or disconnected tools. Wananchi Mali is a single, integrated system where every module — members, loans, savings, and accounting — shares the same data.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className={cn(
                            "border border-gray-100 rounded p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4",
                            f.wide ? "lg:col-span-2" : ""
                        )}
                    >
                        <div className={cn("w-9 h-9 rounded flex items-center justify-center flex-shrink-0", f.accent)}>
                            <f.icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-corporate-navy mb-1.5">{f.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
