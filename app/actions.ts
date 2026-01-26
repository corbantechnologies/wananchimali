"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitDemoRequest(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const organization = formData.get("organization") as string
  const interest = formData.get("interest") as string

  if (!name || !email || !phone) {
    return { success: false, message: "Missing required fields" }
  }
  
  // Basic validation shim, in production use Zod
  if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Email would have been sent to:", email)
      return { success: true, message: "Demo request received! (Mock mode: API Key missing)" }
  }

  try {
    const data = await resend.emails.send({
      from: "Wananchi Mali <onboarding@wananchimali.com>", // Update this with your verified domain
      to: ["corbantechnologies@gmail.com", 'info@corbantechnologies.org'], // Send to yourself or admin email
      subject: `New Demo Request: ${organization}`,
      html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
      `,
    })

    return { success: true, message: "Request sent successfully!", data }
  } catch (error) {
    console.error("Resend Error:", error)
    return { success: false, message: "Failed to send request. Please try again." }
  }
}
