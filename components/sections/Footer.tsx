import { Shield, Lock, Server } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-corporate-navy text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Wananchi Mali</h3>
                        <p className="text-corporate-emerald font-medium italic">Pesa yako salama.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 md:justify-end">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                            <Lock className="h-3 w-3" />
                            <span>256-bit SSL Secured</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                            <Shield className="h-3 w-3" />
                            <span>Data Privacy Complaint</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                            <Server className="h-3 w-3" />
                            <span>99.9% Uptime SLA</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Wananchi Mali. Powered by Corban Technologies LTD.
                    </p>
                    <div className="flex gap-6">
                        <span>Privacy & Security</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
