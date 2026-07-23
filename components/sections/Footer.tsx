import Link from "next/link"
import Image from "next/image"
import { Lock, Shield, Server } from "lucide-react"

const footerLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Platform", href: "/platform" },
    { label: "Contact", href: "/#contact" },
]

const trust = [
    { icon: Lock, label: "256-bit SSL" },
    { icon: Shield, label: "Data Privacy Compliant" },
    { icon: Server, label: "99.9% Uptime SLA" },
]

export function Footer() {
    return (
        <footer className="bg-corporate-navy border-t border-white/10 pt-14 pb-8 text-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Top row */}
                <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

                    {/* Brand */}
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Wananchi Mali"
                            width={130}
                            height={36}
                            className="h-9 w-auto object-contain mb-4"
                        />
                        <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                            An integrated SACCO management platform built for Kenya's cooperatives, Chamas, and microfinances. Delivered by Corban Technologies LTD.
                        </p>
                        <p className="text-corporate-emerald text-xs font-medium italic mt-3">Pesa yako salama.</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">Navigation</div>
                        <ul className="space-y-2.5">
                            {footerLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trust badges */}
                    <div>
                        <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">Infrastructure</div>
                        <div className="space-y-3">
                            {trust.map((t) => (
                                <div key={t.label} className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                                        <t.icon className="h-3.5 w-3.5 text-corporate-emerald" />
                                    </div>
                                    <span className="text-xs text-gray-400">{t.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom row */}
                <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Wananchi Mali. A division of{" "}
                        <a
                            href="https://www.corbantech.co.ke"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Corban Technologies LTD
                        </a>.
                    </p>
                    <span>Privacy &amp; Security</span>
                </div>
            </div>
        </footer>
    )
}
