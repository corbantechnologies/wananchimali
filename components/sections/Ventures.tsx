import { ShoppingBag, Truck, CreditCard, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

export function Ventures() {
    return (
        <Section id="ventures" className="bg-corporate-navy text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-corporate-emerald/5 skew-x-12 transform translate-x-1/4"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/20 text-corporate-gold text-sm font-medium mb-6">
                        <ShoppingBag className="h-4 w-4" />
                        <span>New Module Available</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Unlock Revenue with <br />
                        <span className="text-corporate-emerald">Wananchi Ventures</span>
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Transform your SACCO into a marketplace. Enable members to acquire assets—phones, furniture, solar kits, and more—on credit, while you automate the repayments and earn margins.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-corporate-emerald">
                                <CreditCard className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Asset Financing Management</h4>
                                <p className="text-sm text-gray-400">Automated eligibility checks and repayment scheduling for equipment loans.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-corporate-emerald">
                                <Truck className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Supplier Integration</h4>
                                <p className="text-sm text-gray-400">Connect directly with vendors for seamless order tracking and delivery.</p>
                            </div>
                        </div>
                    </div>

                    <Button variant="gold" size="lg" className="h-12 px-8">
                        Explore Ventures Module
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="relative">
                    {/* Abstract visual representation of products/financing */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <div className="h-32 rounded-lg bg-gradient-to-br from-corporate-emerald to-corporate-blue opacity-50 mb-4 w-full"></div>
                                <div className="h-4 w-2/3 bg-white/20 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <div className="h-24 rounded-lg bg-gradient-to-br from-corporate-gold to-orange-500 opacity-50 mb-4 w-full"></div>
                                <div className="h-4 w-2/3 bg-white/20 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-corporate-emerald p-6 rounded-2xl border border-white/10 shadow-2xl transform translate-y-4">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-white/80 text-sm font-medium">Monthly Collection</span>
                                    <span className="text-white font-bold">+24%</span>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">KES 4.2M</div>
                                <div className="text-xs text-emerald-100">From Asset Finance Interests</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <div className="h-40 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 opacity-50 mb-4 w-full"></div>
                                <div className="h-4 w-2/3 bg-white/20 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
