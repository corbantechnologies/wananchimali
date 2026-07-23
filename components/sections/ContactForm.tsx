"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"

const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+254 740 964 423" },
    { icon: Mail, label: "Email", value: "sacco@corbantechnologies.org" },
    { icon: MapPin, label: "Based in", value: "Mombasa, Kenya" },
]

export function ContactForm() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
    const [message, setMessage] = React.useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus("submitting")

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            const result = await response.json()
            if (response.ok && result.success) {
                setStatus("success")
            } else {
                setStatus("error")
                setMessage(result.error || "Something went wrong. Please try again.")
            }
        } catch {
            setStatus("error")
            setMessage("Failed to connect to the server. Please try again.")
        }
    }

    return (
        <Section id="contact" className="bg-corporate-navy text-white">
            <div className="grid lg:grid-cols-5 gap-14 items-start">

                {/* Left — context */}
                <div className="lg:col-span-2">
                    <div className="text-xs font-semibold text-corporate-gold uppercase tracking-widest mb-4">
                        Get in Touch
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                        Ready to Modernise Your SACCO?
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-10">
                        Send us your details and we will reach out to discuss your SACCO's needs, walk you through the platform, and plan a setup that works for your team.
                    </p>

                    <div className="space-y-5">
                        {contactInfo.map((c) => (
                            <div key={c.label} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <c.icon className="h-4 w-4 text-corporate-emerald" />
                                </div>
                                <div>
                                    <div className="text-[11px] text-gray-400 uppercase tracking-wider">{c.label}</div>
                                    <div className="text-sm text-white font-medium">{c.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — form */}
                <div className="lg:col-span-3">
                    {status === "success" ? (
                        <div className="bg-white/5 border border-white/10 rounded p-10 text-center">
                            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                                <CheckCircle2 className="h-7 w-7 text-corporate-emerald" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Inquiry Received</h3>
                            <p className="text-gray-400 text-sm">
                                Thank you. Our team will be in touch within one business day.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-6 text-xs text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
                            >
                                Submit another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded p-6 md:p-8 space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text" name="name" id="name" required placeholder="Jane Mwangi"
                                        className="w-full h-10 px-3 rounded bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corporate-emerald/60 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="phone" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel" name="phone" id="phone" required placeholder="+254 7..."
                                        className="w-full h-10 px-3 rounded bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corporate-emerald/60 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email" name="email" id="email" required placeholder="jane@sacco.co.ke"
                                        className="w-full h-10 px-3 rounded bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corporate-emerald/60 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="organization" className="text-xs font-medium text-gray-300 uppercase tracking-wider">SACCO / Organization</label>
                                    <input
                                        type="text" name="organization" id="organization" placeholder="e.g. Wananchi SACCO"
                                        className="w-full h-10 px-3 rounded bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corporate-emerald/60 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="interest" className="text-xs font-medium text-gray-300 uppercase tracking-wider">What best describes your need?</label>
                                <select
                                    name="interest" id="interest"
                                    className="w-full h-10 px-3 rounded bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-corporate-emerald/60 transition-colors"
                                >
                                    <option value="General Inquiry" className="bg-corporate-navy">General Inquiry</option>
                                    <option value="New SACCO Setup" className="bg-corporate-navy">New SACCO Setup</option>
                                    <option value="Migrating from Existing System" className="bg-corporate-navy">Migrating from an Existing System</option>
                                    <option value="Feature or Pricing Information" className="bg-corporate-navy">Feature or Pricing Information</option>
                                    <option value="Technical Support" className="bg-corporate-navy">Technical Support</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Additional Details (optional)</label>
                                <textarea
                                    name="message" id="message" rows={3}
                                    placeholder="Tell us about your SACCO — number of members, current challenges, etc."
                                    className="w-full px-3 py-2.5 rounded bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corporate-emerald/60 transition-colors resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <div className="p-3 text-red-400 bg-red-500/10 border border-red-500/20 rounded text-xs">
                                    {message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-corporate-emerald hover:bg-emerald-700 text-white font-semibold h-11"
                                disabled={status === "submitting"}
                            >
                                {status === "submitting" ? (
                                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                                ) : (
                                    "Send Inquiry"
                                )}
                            </Button>
                        </form>
                    )}
                </div>

            </div>
        </Section>
    )
}
