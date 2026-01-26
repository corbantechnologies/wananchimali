import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wananchimali.com"),
  title: {
    default: "Wananchi Mali | Institutional-Grade SACCO Systems",
    template: "%s | Wananchi Mali",
  },
  description: "The SACCO People. Secure, scalable management platforms for modern Cooperatives, Chamas, and Investment Groups. Features Asset Finance, Diminishing Balance, and Flat Rate engines.",
  keywords: ["SACCO System", "Fintech Kenya", "Cooperative Management", "Asset Finance", "Chama System", "Wananchi Mali", "Corban Technologies"],
  authors: [{ name: "Corban Technologies LTD" }],
  openGraph: {
    title: "Wananchi Mali | The SACCO People",
    description: "Institutional-grade platforms for modern Cooperatives. Unlocking growth with Smart Loan Logic and Asset Finance.",
    url: "https://www.wananchimali.com",
    siteName: "Wananchi Mali",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/hero-dashboard.png", // We will use the hero image as the OG image
        width: 1200,
        height: 630,
        alt: "Wananchi Mali Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wananchi Mali | The SACCO People",
    description: "Institutional-grade platforms for modern Cooperatives.",
    images: ["/images/hero-dashboard.png"],
  },
  icons: {
    icon: "/logo.png", // Assuming we have or will have a logo.png, otherwise it falls back to favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
