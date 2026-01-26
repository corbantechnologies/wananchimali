"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Loader2, CheckCircle2 } from "lucide-react"

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok && result.success) {
                setStatus("success")
            } else {
                setStatus("error")
                setMessage(result.error || "Something went wrong. Please try again.")
            }
        } catch (error) {
            setStatus("error")
            setMessage("Failed to connect to the server.")
        }
    }

    if (status === "success") {
        return (
            <Section id="contact" className="bg-gray-50">
                <div className="max-w-xl mx-auto text-center p-12 bg-white rounded-2xl shadow-xl border border-corporate-emerald/20">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-corporate-navy mb-2">Request Received!</h3>
                    <p className="text-gray-600">
                        Thank you for your interest. Our team will contact you shortly to schedule your demo.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-8"
                        onClick={() => setStatus("idle")}
                    >
                        Submit Another Request
                    </Button>
                </div>
            </Section>
        )
    }

    return (
        <Section id="contact" className="bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-corporate-navy mb-4">Ready to Modernize?</h2>
                    <p className="text-gray-600">
                        Book a personalized demo or start your onboarding process today.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text" name="name" id="name" required placeholder="John Doe"
                                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-emerald/50 text-corporate-navy bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel" name="phone" id="phone" required placeholder="+254 7..."
                                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-emerald/50 text-corporate-navy bg-white"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email" name="email" id="email" required placeholder="john@company.com"
                                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-emerald/50 text-corporate-navy bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="organization" className="text-sm font-medium text-gray-700">Organization / SACCO Name</label>
                            <input
                                type="text" name="organization" id="organization" placeholder="e.g. Wananchi SACCO"
                                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-emerald/50 text-corporate-navy bg-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-8">
                        <label htmlFor="interest" className="text-sm font-medium text-gray-700">Primary Interest</label>
                        <select
                            name="interest" id="interest"
                            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-emerald/50 bg-white text-corporate-navy"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Corporate System (Diminishing)">Corporate System (Diminishing Balance)</option>
                            <option value="Chama System (Flat Rate)">Chama System (Flat Rate)</option>
                            <option value="Ventures (Asset Finance)">Ventures (Asset Finance)</option>
                        </select>
                    </div>

                    {status === "error" && (
                        <div className="mb-6 p-4 text-red-600 bg-red-50 rounded-lg text-sm">
                            {message}
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-corporate-emerald hover:bg-corporate-emerald/90 text-white font-bold h-12"
                        disabled={status === "submitting"}
                    >
                        {status === "submitting" ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending Request...
                            </>
                        ) : (
                            "Request Demo / Onboarding"
                        )}
                    </Button>
                </form>
            </div>
        </Section>
    )
}
