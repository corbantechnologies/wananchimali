import type { Metadata } from "next"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import {
    Users, PiggyBank, CreditCard, Smartphone, BarChart3,
    FileSpreadsheet, ShieldCheck, Settings, GitBranch,
    Banknote, Scale, Receipt, BookOpen, ArrowRight,
    CheckCircle, Clock, Upload, Download, Mail, Lock,
    TrendingUp, Building2, UserCheck, Wallet, Activity,
    AlertCircle, FileDown, CalendarDays, Globe
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Platform Features | CTLTD SACCO System",
    description: "A complete breakdown of all features in the Wananchi Mali SACCO platform — covering member management, loan engines, savings, accounting, and admin tools.",
    keywords: ["SACCO Features", "SACCO Platform", "Member Portal", "Admin Portal", "Loan Management", "Savings", "Kenya Fintech"],
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const onboardingSteps = [
    {
        step: "01",
        title: "SACCO Configuration",
        description: "Set up your SACCO profile — name, logo, fiscal year, and core settings. Configure fee types, savings products, and loan products with their rules.",
        detail: ["Upload SACCO logo & branding", "Define savings account types (Deposits, Share Capital, Holiday, Emergency)", "Create fee types (Registration, Annual, etc.)", "Configure loan products with rates and tenors"],
    },
    {
        step: "02",
        title: "Payment Accounts Setup",
        description: "Link your real-world payment channels to the system. Each channel maps to a General Ledger account for automatic double-entry posting.",
        detail: ["Add M-Pesa Paybill / Till accounts", "Link bank accounts", "Set default payment method", "Connect Daraja API credentials"],
    },
    {
        step: "03",
        title: "Chart of Accounts",
        description: "Build or import your GL chart of accounts. The system organises them into Assets, Liabilities, Income, and Expense classifications.",
        detail: ["Create GL accounts per category", "Map accounts to modules (Loans, Savings, Fees)", "Set opening balances via journal batches", "Assign control accounts to payment channels"],
    },
    {
        step: "04",
        title: "Member Onboarding",
        description: "Register members individually or in bulk via CSV upload. Each member receives a unique member number and portal activation email.",
        detail: ["Single or bulk CSV member creation", "Automatic savings & fee account generation", "Email invitation with temporary credentials", "Member portal self-activation flow"],
    },
    {
        step: "05",
        title: "Go Live",
        description: "Start processing transactions. The admin portal handles payments, disbursements, and reporting while members self-serve through the member portal.",
        detail: ["Process bulk savings & fee payments via CSV", "Receive M-Pesa deposits in real-time", "Approve and disburse loans", "Generate financial statements"],
    },
]

const moduleFeatures = [
    {
        category: "Member Management",
        icon: Users,
        color: "text-corporate-blue",
        bg: "bg-blue-50",
        features: [
            "Unique auto-generated member numbers",
            "Role-based access (Member, Admin, Superuser)",
            "Next of Kin (NOK) profile management",
            "Member approval workflow by admin",
            "Bulk CSV member creation & upload",
            "Admin-initiated password reset",
            "Account activation via email link",
            "Member photo / avatar upload",
            "Active members CSV export for audits",
            "Custom attributes per member",
        ],
    },
    {
        category: "Savings & Accounts",
        icon: PiggyBank,
        color: "text-corporate-emerald",
        bg: "bg-emerald-50",
        features: [
            "Multiple savings account types per member",
            "Share Capital, Deposits, Holiday, Emergency pots",
            "Real-time balance tracking",
            "M-Pesa STK Push deposits (Daraja API)",
            "Bulk savings deposit via CSV template",
            "Pre-filled template with last-day-of-month date",
            "Current Balance shown in CSV template",
            "Transaction history per account",
            "Savings statement export",
            "Minimum balance enforcement rules",
        ],
    },
    {
        category: "Fee Payments",
        icon: Receipt,
        color: "text-corporate-gold",
        bg: "bg-yellow-50",
        features: [
            "Multiple fee types (Registration, Annual, etc.)",
            "Per-member fee accounts with limits",
            "Outstanding Balance shown in CSV template",
            "Bulk fee payment via CSV upload",
            "Pre-filled Transaction Date in template",
            "Per-row Payment Method support in CSV",
            "Selective template by fee type",
            "Cleared account detection (can't exceed limit)",
            "Fee payment confirmation emails",
            "GL auto-posting on payment",
        ],
    },
    {
        category: "Loan Management",
        icon: CreditCard,
        color: "text-purple-600",
        bg: "bg-purple-50",
        features: [
            "Loan application submission by members",
            "Eligibility auto-computed from savings multiples",
            "Guarantor request & acceptance workflow",
            "Admin loan appraisal and approval",
            "Diminishing Balance & Flat Rate engines",
            "Loan disbursement (bulk CSV or individual)",
            "M-Pesa B2C disbursement to phone",
            "Repayment schedule generation",
            "Loan penalty tracking",
            "Loan account statement per member",
        ],
    },
    {
        category: "M-Pesa / Fintech",
        icon: Smartphone,
        color: "text-green-600",
        bg: "bg-green-50",
        features: [
            "Daraja API (Safaricom) full integration",
            "STK Push initiation for savings deposits",
            "B2C disbursement for loan payout",
            "Real-time callback processing",
            "Transaction reconciliation",
            "M-Pesa receipt number capture",
            "Phone number validation",
            "Automatic GL entry on M-Pesa confirm",
            "Failed transaction logging & retry",
            "Multi-paybill / till support",
        ],
    },
    {
        category: "Accounting & GL",
        icon: BookOpen,
        color: "text-red-600",
        bg: "bg-red-50",
        features: [
            "Full double-entry General Ledger",
            "Chart of Accounts (Assets, Liabilities, Income, Expense)",
            "Automatic journal entries per transaction",
            "Manual journal batches for adjustments",
            "Trial Balance report",
            "Balance Sheet generation",
            "Profit & Loss statement",
            "Cash Book report",
            "Year-based financial filtering",
            "Journal batch posting with Transaction Date",
        ],
    },
    {
        category: "Reporting & Analytics",
        icon: BarChart3,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        features: [
            "SACCO annual summary dashboard",
            "Total savings, loans, fees overview cards",
            "New member count per year",
            "Year selector for all summary data",
            "Debtors aging list",
            "Downloadable PDF annual summary",
            "Member financial summary (per year)",
            "Transaction reports per module",
            "Audit logs for admin actions",
            "Responsive 2-column card layout",
        ],
    },
    {
        category: "Admin Portal",
        icon: Settings,
        color: "text-slate-600",
        bg: "bg-slate-50",
        features: [
            "Full member directory with search & filter",
            "Member detail view with financial summary",
            "Bulk CSV upload for all modules",
            "Selective template download (by type & date)",
            "Popover action menus on member list",
            "Active members CSV export",
            "Fee & savings payment dialogs",
            "Single-account auto-selection in forms",
            "Yearly filtering in member summary",
            "Role-protected routes & actions",
        ],
    },
    {
        category: "Member Portal",
        icon: Globe,
        color: "text-teal-600",
        bg: "bg-teal-50",
        features: [
            "Self-service savings deposit (M-Pesa)",
            "Loan application submission",
            "Loan eligibility calculator",
            "Guarantor request acceptance",
            "Account statement views",
            "Next of Kin management",
            "Profile & password management",
            "Transaction history per module",
            "Notification emails on key events",
            "Mobile-responsive interface",
        ],
    },
    {
        category: "Security & Infrastructure",
        icon: ShieldCheck,
        color: "text-corporate-navy",
        bg: "bg-gray-50",
        features: [
            "JWT token-based authentication",
            "Role-based access control (RBAC)",
            "Superuser & staff excluded from member tables",
            "256-bit SSL encryption",
            "Cloudinary media storage",
            "Background task processing (Django Q2)",
            "Email notifications via async task queue",
            "Per-request audit trail logging",
            "99.9% uptime SLA (Railway / Vercel)",
            "Multi-SACCO white-label architecture",
        ],
    },
]

const stats = [
    { value: "3", label: "Loan Interest Engines", sub: "Diminishing, Flat Rate, Asset Finance" },
    { value: "10+", label: "Core Modules", sub: "From member CRM to full GL" },
    { value: "2", label: "Portals", sub: "Member self-service & Admin control" },
    { value: "Real-time", label: "M-Pesa Integration", sub: "STK Push & B2C via Daraja API" },
]

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="bg-corporate-navy pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none select-none">
                    <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-corporate-blue/20 blur-3xl opacity-40" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-corporate-emerald/10 blur-3xl opacity-30" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-corporate-gold text-sm font-medium mb-8">
                        <Activity className="h-4 w-4" />
                        <span>Full Platform Overview</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
                        The Complete SACCO Management Platform
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10">
                        Built for cooperatives in Kenya. Every module — members, loans, savings, fees, accounting, and fintech — in one integrated system.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#onboarding" className="inline-flex items-center gap-2 px-6 py-2.5 bg-corporate-emerald text-white text-sm font-semibold rounded hover:bg-emerald-700 transition-colors">
                            Onboarding Guide <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="#modules" className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors">
                            Browse All Features
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ─────────────────────────────────────────────── */}
            <section className="bg-corporate-cream border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                        {stats.map((s) => (
                            <div key={s.value} className="py-8 px-6 text-center">
                                <div className="text-2xl font-bold text-corporate-navy">{s.value}</div>
                                <div className="text-sm font-semibold text-corporate-navy mt-1">{s.label}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ONBOARDING STEPS ──────────────────────────────────────── */}
            <section id="onboarding" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-14 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-corporate-emerald text-sm font-semibold uppercase tracking-wider mb-4">
                            <CalendarDays className="h-4 w-4" />
                            Getting Started
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy mb-3">
                            From Setup to Go-Live in 5 Steps
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The platform is designed for fast, structured onboarding. Each step builds on the last so no configuration is missed.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical connector line */}
                        <div className="absolute left-[29px] top-0 bottom-0 w-px bg-gray-100 hidden md:block" />

                        <div className="space-y-8">
                            {onboardingSteps.map((s, i) => (
                                <div key={s.step} className="flex gap-6 md:gap-8 items-start relative">
                                    {/* Step number */}
                                    <div className="flex-shrink-0 w-[60px] flex flex-col items-center">
                                        <div className="w-[60px] h-[60px] rounded-full bg-corporate-navy text-white flex items-center justify-center text-sm font-bold z-10 relative">
                                            {s.step}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-2">
                                        <div className="bg-white border border-gray-100 rounded p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-base font-bold text-corporate-navy mb-1">{s.title}</h3>
                                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{s.description}</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                                {s.detail.map((d) => (
                                                    <li key={d} className="flex items-start gap-2 text-xs text-gray-600">
                                                        <CheckCircle className="h-3.5 w-3.5 text-corporate-emerald flex-shrink-0 mt-0.5" />
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MODULE FEATURES ────────────────────────────────────────── */}
            <section id="modules" className="py-20 bg-corporate-cream">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-14 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-corporate-emerald text-sm font-semibold uppercase tracking-wider mb-4">
                            <GitBranch className="h-4 w-4" />
                            Platform Modules
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy mb-3">
                            10 Modules. One Integrated System.
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Every module is tightly connected — a loan disbursement auto-posts to the GL, an M-Pesa payment auto-updates balances, and a fee payment triggers an email. Nothing is siloed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {moduleFeatures.map((mod) => (
                            <div key={mod.category} className="bg-white rounded border border-gray-100 shadow-sm overflow-hidden">
                                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                                    <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${mod.bg}`}>
                                        <mod.icon className={`h-4 w-4 ${mod.color}`} />
                                    </div>
                                    <h3 className="text-sm font-bold text-corporate-navy">{mod.category}</h3>
                                </div>
                                <ul className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                    {mod.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-corporate-emerald flex-shrink-0 mt-1.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BULK UPLOAD HIGHLIGHT ─────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-corporate-emerald text-sm font-semibold uppercase tracking-wider mb-4">
                                <Upload className="h-4 w-4" />
                                Bulk Operations
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy mb-4">
                                Process Hundreds of Payments in One Upload
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Every month, SACCOs collect contributions from dozens or hundreds of members. Our intelligent CSV system handles bulk savings deposits, fee payments, and loan disbursements — all with pre-filled, smart templates.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    { icon: Download, label: "Download pre-filled CSV template (with outstanding balances)" },
                                    { icon: CalendarDays, label: "Select transaction date or end-of-month auto-fill" },
                                    { icon: FileSpreadsheet, label: "Filter template by fee type or savings type" },
                                    { icon: Banknote, label: "Specify payment method per row in the CSV" },
                                    { icon: Upload, label: "Upload CSV — GL entries post automatically" },
                                    { icon: Mail, label: "Members receive confirmation emails (async)" },
                                ].map((item) => (
                                    <li key={item.label} className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-7 h-7 rounded bg-corporate-emerald/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="h-3.5 w-3.5 text-corporate-emerald" />
                                        </div>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual: Template mockup */}
                        <div className="bg-corporate-navy rounded p-5 shadow-xl text-xs font-mono">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                                <span className="text-gray-400 ml-2 text-[11px]">fee_payments_bulk_template.csv</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            {["Member Name", "Fee Type", "Acc. No.", "Balance", "Amount", "Pay Method", "Date"].map(h => (
                                                <th key={h} className="text-left text-corporate-gold py-1 pr-4 whitespace-nowrap border-b border-white/10 font-medium">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        {[
                                            ["Jane Doe", "Annual Fee", "FA-001", "2,000", "", "", "2026-07-31"],
                                            ["John Mwangi", "Annual Fee", "FA-002", "2,000", "", "", "2026-07-31"],
                                            ["Alice Wanjiru", "Annual Fee", "FA-003", "1,500", "", "", "2026-07-31"],
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-white/5">
                                                {row.map((cell, j) => (
                                                    <td key={j} className={`py-1.5 pr-4 whitespace-nowrap ${cell === "" ? "text-white/20" : ""}`}>
                                                        {cell === "" ? "—" : cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-corporate-emerald text-[11px]">
                                <CheckCircle className="h-3.5 w-3.5" />
                                <span>Template filters only accounts with outstanding balances</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GL & ACCOUNTING HIGHLIGHT ─────────────────────────────── */}
            <section className="py-20 bg-corporate-navy text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 text-corporate-gold text-sm font-semibold uppercase tracking-wider mb-4">
                            <BookOpen className="h-4 w-4" />
                            Accounting Engine
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            Every Transaction Posts to the GL
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            No manual bookkeeping. Every savings deposit, loan disbursement, fee payment, and M-Pesa transaction is automatically journalised in the General Ledger using double-entry accounting.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: Scale, label: "Trial Balance", desc: "Live debit/credit balances across all GL accounts" },
                            { icon: Building2, label: "Balance Sheet", desc: "Real-time Assets vs Liabilities & Equity view" },
                            { icon: TrendingUp, label: "Profit & Loss", desc: "Income vs Expense reporting by period" },
                            { icon: Wallet, label: "Cash Book", desc: "Chronological ledger of all cash movements" },
                            { icon: AlertCircle, label: "Debtors List", desc: "Aging analysis of overdue loan accounts" },
                            { icon: FileDown, label: "PDF Export", desc: "Download full annual summary report as PDF" },
                        ].map((r) => (
                            <div key={r.label} className="bg-white/5 border border-white/10 rounded p-4 hover:bg-white/10 transition-colors">
                                <r.icon className="h-5 w-5 text-corporate-emerald mb-3" />
                                <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
                                <div className="text-xs text-gray-400 leading-relaxed">{r.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────────────── */}
            <section className="py-16 bg-corporate-cream border-t border-gray-200">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-bold text-corporate-navy mb-3">
                        Ready to Modernise Your SACCO?
                    </h2>
                    <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                        Get in touch with the Wananchi Mali team. We set up, configure, and train your team — so you can focus on your members.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-7 py-2.5 bg-corporate-navy text-white text-sm font-semibold rounded hover:bg-corporate-blue transition-colors"
                    >
                        Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
