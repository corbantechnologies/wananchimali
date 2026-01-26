"use server"

import { Resend } from "resend"
import  SaccoInquiryNotificationTemplate  from "@/components/templates/sacco-inquiry-notification-template"
import  SaccoInquiryReceivedTemplate  from "@/components/templates/sacco-inquiry-received-template"

const resend = new Resend(process.env.RESEND_API_KEY)
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "";
const FROM_EMAIL = process.env.FROM_EMAIL || "";
const ALTERNATE_EMAIL = process.env.ALTERNATE_EMAIL || "";

export async function submitDemoRequest(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const organization = formData.get("organization") as string
  const interest = formData.get("interest") as string

  if (!name || !email || !phone) {
    return { success: false, message: "Missing required fields" }
  }
  
  // Basic validation shim
  if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Mocking success.")
      return { success: true, message: "Demo request received! (Mock mode)" }
  }

  try {
    // 1. Send Notification to Business
    const { error: businessError } = await resend.emails.send({
      from: `Wananchi Mali Notifications <${FROM_EMAIL}>`, 
      to: [BUSINESS_EMAIL, ALTERNATE_EMAIL],
      subject: `New Demo Request: ${organization}`,
      react: SaccoInquiryNotificationTemplate({ 
        name, 
        email, 
        phone, 
        organization, 
        interest 
      }),
    })

    if (businessError) {
        console.error("Business Email Failed:", businessError)
        throw new Error("Failed to send notification")
    }

    // 2. Send Confirmation to Customer
    // We don't block on this error, but we log it
    const { error: customerError } = await resend.emails.send({
      from: `Wananchi Mali <${FROM_EMAIL}>`,
      to: [email],
      subject: "We received your inquiry - Wananchi Mali",
      react: SaccoInquiryReceivedTemplate({ name }),
    })

    if (customerError) {
        console.warn("Customer Receipt Failed:", customerError)
    }

    return { success: true, message: "Request sent successfully!" }
  } catch (error) {
    console.error("Resend Error:", error)
    return { success: false, message: "Failed to send request. Please try again." }
  }
}
