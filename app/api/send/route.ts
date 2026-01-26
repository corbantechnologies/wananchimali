import { NextResponse } from "next/server";
import { Resend } from "resend";
import SaccoInquiryNotificationTemplate from "@/components/templates/sacco-inquiry-notification-template";
import SaccoInquiryReceivedTemplate from "@/components/templates/sacco-inquiry-received-template";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "";
  const FROM_EMAIL = process.env.FROM_EMAIL || "";
  const ALTERNATE_EMAIL = process.env.ALTERNATE_EMAIL || "";

  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      organization, 
      interest 
    } = body;

    // Validate required fields
    if (!name || !email || !phone) {
        return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // 1. Send notification to Business Team
    const { error: businessError } = await resend.emails.send({
      from: `Wananchi Mali Notifications <${FROM_EMAIL}>`,
      to: [BUSINESS_EMAIL, ALTERNATE_EMAIL],
      subject: `New Demo Request: ${organization} - ${name}`,
      react: SaccoInquiryNotificationTemplate({
        name,
        email,
        phone,
        organization,
        interest,
      }),
    });

    if (businessError) {
        console.error("Business Email Error:", businessError);
        return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
    }

    // 2. Send acknowledgement to User
    const { error: customerError } = await resend.emails.send({
      from: `Wananchi Mali <${FROM_EMAIL}>`,
      to: [email],
      subject: "We received your inquiry - Wananchi Mali",
      react: SaccoInquiryReceivedTemplate({
        name,
      }),
    });

    if (customerError) {
        console.warn("Customer Email Error:", customerError);
        // Continue, as business notification is more critical
    }

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
