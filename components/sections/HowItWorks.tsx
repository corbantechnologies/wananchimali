import { Section } from "@/components/ui/section"
import { CheckCircle } from "lucide-react"

const steps = [
    {
        step: "01",
        title: "SACCO Configuration",
        desc: "We set up your SACCO profile — fee types, savings products, loan products, and GL chart of accounts. Your branding is applied from day one.",
    },
    {
        step: "02",
        title: "Payment Accounts & M-Pesa",
        desc: "Your M-Pesa paybill, bank accounts, and Daraja API credentials are linked. Every channel maps to a General Ledger control account automatically.",
    },
    {
        step: "03",
        title: "Member Onboarding",
        desc: "Members are loaded via bulk CSV upload. Each receives a unique member number, auto-created savings and fee accounts, and an email activation link.",
    },
    {
        step: "04",
        title: "Go Live",
        desc: "Admins process bulk payments, receive M-Pesa deposits in real-time, and approve loans from the admin portal. Members self-serve through the member portal.",
    },
]

const trustPoints = [
    "No lengthy procurement process",
    "Full setup handled by our team",
    "Staff training included",
    "Ongoing technical support",
]

export function HowItWorks() {
    return (
        <Section id="how-it-works" className="bg-corporate-cream">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

                {/* Left — content */}
                <div>
                    <div className="text-xs font-semibold text-corporate-emerald uppercase tracking-widest mb-4">
                        How It Works
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy mb-4 leading-snug">
                        From Contract to Go-Live — We Handle Everything
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                        You focus on running your SACCO. We configure the system, load your members, and train your team. Most SACCOs are fully operational within a week.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {trustPoints.map((p) => (
                            <li key={p} className="flex items-center gap-2.5 text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-corporate-emerald flex-shrink-0" />
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — steps */}
                <div className="space-y-4">
                    {steps.map((s, i) => (
                        <div
                            key={s.step}
                            className="flex gap-5 bg-white border border-gray-100 rounded p-5 shadow-sm"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded bg-corporate-navy text-white flex items-center justify-center text-xs font-bold">
                                {s.step}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-corporate-navy mb-1">{s.title}</div>
                                <div className="text-xs text-gray-500 leading-relaxed">{s.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    )
}
