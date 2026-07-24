import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wananchimali.com"),
  title: {
    default: "Wananchi Mali | SACCO Management Platform for Kenyan Cooperatives",
    template: "%s | Wananchi Mali",
  },
  description: "Wananchi Mali is an integrated digital SACCO management platform built for Kenyan cooperatives, Chamas, and microfinances. Member CRM, M-Pesa deposits, loan management, savings, and full GL accounting — in one system.",
  keywords: [
    "SACCO Management System",
    "SACCO Software Kenya",
    "Cooperative Management Kenya",
    "Chama System",
    "M-Pesa SACCO Integration",
    "Digital SACCO Platform",
    "Loan Management System Kenya",
    "Savings Management Software",
    "Wananchi Mali",
    "Corban Technologies",
    "Fintech Kenya",
    "SACCO Accounting",
  ],
  authors: [{ name: "Corban Technologies LTD", url: "https://www.corbantechnologies.org" }],
  creator: "Corban Technologies LTD",
  publisher: "Wananchi Mali",
  category: "Financial Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Wananchi Mali | SACCO Management Platform for Kenyan Cooperatives",
    description: "An integrated digital platform for SACCO management — member CRM, M-Pesa deposits, loans, savings, fees, and accounting. Built for cooperatives across Kenya.",
    url: "https://www.wananchimali.com",
    siteName: "Wananchi Mali",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wananchi Mali | SACCO Management Platform",
    description: "Integrated SACCO platform for Kenyan cooperatives — members, loans, savings, M-Pesa, and accounting in one system.",
    creator: "@wananchimali",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://www.wananchimali.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Wananchi Mali SACCO Platform",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              url: "https://www.wananchimali.com",
              description:
                "An integrated digital SACCO management platform covering member CRM, savings, loans, fee payments, M-Pesa integration, and full GL accounting for Kenyan cooperatives.",
              publisher: {
                "@type": "Organization",
                name: "Corban Technologies LTD",
                url: "https://www.corbantechnologies.org",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mombasa",
                  addressCountry: "KE",
                },
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "KES",
                description: "Contact for pricing",
                url: "https://www.wananchimali.com/#contact",
              },
              featureList: [
                "Member CRM and bulk onboarding",
                "Multi-pot savings management",
                "Loan management with Diminishing Balance and Flat Rate engines",
                "M-Pesa STK Push and B2C disbursements via Daraja API",
                "Full General Ledger double-entry accounting",
                "Bulk CSV payment processing with smart templates",
                "Executive reporting (Balance Sheet, P&L, Trial Balance)",
                "Member self-service portal",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
