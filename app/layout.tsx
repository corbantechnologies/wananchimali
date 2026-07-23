import type { Metadata } from "next";
import "./globals.css";

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
        url: "/images/hero-dashboard.png",
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
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
