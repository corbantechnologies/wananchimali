import Link from "next/link"
import {
    ChevronRight, Users, PiggyBank, CreditCard, Smartphone,
    TrendingUp, CheckCircle, Download, ArrowUpRight, Banknote
} from "lucide-react"

const platformPills = [
    { icon: Users, label: "Member CRM" },
    { icon: PiggyBank, label: "Savings Engine" },
    { icon: CreditCard, label: "Loan Management" },
    { icon: Smartphone, label: "M-Pesa Integrated" },
]

// ─── Mini mock data ────────────────────────────────────────────────────────

const memberRows = [
    { name: "Jane Mwangi", number: "WM-0041", savings: "KES 84,200", status: "Active" },
    { name: "Peter Ochieng", number: "WM-0042", savings: "KES 56,000", status: "Active" },
    { name: "Alice Wanjiru", number: "WM-0043", savings: "KES 121,500", status: "Active" },
    { name: "David Kamau", number: "WM-0044", savings: "KES 38,750", status: "Pending" },
]

const csvRows = [
    { name: "Jane Mwangi", acc: "FA-001", balance: "2,000", date: "2026-07-31" },
    { name: "Peter Ochieng", acc: "FA-002", balance: "2,000", date: "2026-07-31" },
    { name: "Alice Wanjiru", acc: "FA-003", balance: "1,500", date: "2026-07-31" },
]

export function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-corporate-navy flex flex-col justify-center pt-16">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute -top-[20%] -left-[10%] w-[65%] h-[65%] rounded-full bg-corporate-blue/20 blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[55%] rounded-full bg-corporate-emerald/10 blur-3xl opacity-30" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ── Left: Text ─────────────────────────────────────── */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-corporate-gold backdrop-blur-sm mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-corporate-emerald animate-pulse" />
                            The SACCO People — Built for Kenya's Cooperatives
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white mb-5 md:text-5xl leading-[1.1]">
                            A Complete Digital Platform{" "}
                            <span className="text-corporate-emerald">for SACCO Management</span>
                        </h1>

                        <p className="text-base text-gray-300 mb-8 md:text-lg leading-relaxed max-w-lg">
                            Wananchi Mali delivers an integrated system covering member onboarding, savings, loans, fees, M-Pesa, and accounting — all in one platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-corporate-emerald hover:bg-emerald-700 text-white text-sm font-semibold rounded transition-colors shadow-lg shadow-emerald-900/30"
                            >
                                Request a Setup Call <ChevronRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/platform"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
                            >
                                See All Features
                            </Link>
                        </div>

                        {/* Module pills */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {platformPills.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                                >
                                    <Icon className="h-3.5 w-3.5 text-corporate-emerald" />
                                    {label}
                                </div>
                            ))}
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                <span className="text-corporate-gold font-semibold">+6</span> more modules
                            </div>
                        </div>
                    </div>

                    {/* ── Right: UI Mockups ──────────────────────────────── */}
                    <div className="flex flex-col gap-4 text-xs">

                        {/* ── Row 1: Stats cards ─────────────────────────── */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white/5 border border-white/10 rounded p-3">
                                <div className="text-gray-400 mb-1 text-[10px] uppercase tracking-wider">Total Savings</div>
                                <div className="text-white font-bold text-base">KES 4.2M</div>
                                <div className="flex items-center gap-1 text-corporate-emerald text-[10px] mt-0.5">
                                    <TrendingUp className="h-3 w-3" /> +12% this yr
                                </div>
                            </div>
                            <div className="bg-corporate-emerald/20 border border-corporate-emerald/30 rounded p-3">
                                <div className="text-emerald-300 mb-1 text-[10px] uppercase tracking-wider">Active Members</div>
                                <div className="text-white font-bold text-base">248</div>
                                <div className="flex items-center gap-1 text-emerald-300 text-[10px] mt-0.5">
                                    <ArrowUpRight className="h-3 w-3" /> +18 new
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded p-3">
                                <div className="text-gray-400 mb-1 text-[10px] uppercase tracking-wider">Loans Active</div>
                                <div className="text-white font-bold text-base">KES 9.8M</div>
                                <div className="flex items-center gap-1 text-corporate-gold text-[10px] mt-0.5">
                                    <Banknote className="h-3 w-3" /> 63 accounts
                                </div>
                            </div>
                        </div>

                        {/* ── Row 2: Member table ────────────────────────── */}
                        <div className="bg-white/5 border border-white/10 rounded overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                                <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-300 uppercase tracking-wider">
                                    <Users className="h-3.5 w-3.5 text-corporate-emerald" />
                                    Member Directory
                                </div>
                                <span className="text-[10px] text-gray-500">248 active</span>
                            </div>
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="text-left px-3 py-1.5 text-[10px] text-gray-500 font-medium">Name</th>
                                        <th className="text-left px-3 py-1.5 text-[10px] text-gray-500 font-medium">No.</th>
                                        <th className="text-left px-3 py-1.5 text-[10px] text-gray-500 font-medium hidden sm:table-cell">Savings</th>
                                        <th className="text-left px-3 py-1.5 text-[10px] text-gray-500 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {memberRows.map((r) => (
                                        <tr key={r.number} className="border-b border-white/5 last:border-0">
                                            <td className="px-3 py-1.5 text-[11px] text-white font-medium">{r.name}</td>
                                            <td className="px-3 py-1.5 text-[11px] text-gray-400">{r.number}</td>
                                            <td className="px-3 py-1.5 text-[11px] text-gray-300 hidden sm:table-cell">{r.savings}</td>
                                            <td className="px-3 py-1.5">
                                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${r.status === "Active" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                                                    {r.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* ── Row 3: CSV template mockup ─────────────────── */}
                        <div className="bg-corporate-navy border border-white/10 rounded overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                                    </div>
                                    <span className="text-[10px] text-gray-400 ml-1">fee_payments_bulk_july_2026.csv</span>
                                </div>
                                <div className="flex items-center gap-1 text-corporate-gold text-[10px]">
                                    <Download className="h-3 w-3" /> Pre-filled template
                                </div>
                            </div>
                            <div className="overflow-x-auto px-3 py-2 font-mono">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            {["Member Name", "Acc. No.", "Balance", "Amount", "Date"].map(h => (
                                                <th key={h} className="text-left pr-4 pb-1.5 text-[10px] text-corporate-gold font-medium whitespace-nowrap">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        {csvRows.map((row, i) => (
                                            <tr key={i} className="border-b border-white/5 last:border-0">
                                                <td className="pr-4 py-1 text-[11px] whitespace-nowrap">{row.name}</td>
                                                <td className="pr-4 py-1 text-[11px] text-gray-400">{row.acc}</td>
                                                <td className="pr-4 py-1 text-[11px] text-corporate-emerald">{row.balance}</td>
                                                <td className="pr-4 py-1 text-[11px] text-white/20">—</td>
                                                <td className="pr-4 py-1 text-[11px] text-gray-400">{row.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="flex items-center gap-1.5 mt-2 text-corporate-emerald text-[10px]">
                                    <CheckCircle className="h-3 w-3" />
                                    Only members with outstanding balances — Transaction Date auto-filled
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
