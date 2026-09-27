import type { Metadata } from "next";
import Script from 'next/script';
import { Gabarito } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "./footer";
import FloatingContactIcons from "@/src/components/FloatingContactIcons";

// ✅ Google Font setup
const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kvaornux.com"),
  title: {
    default: "iGaming Technology, Casino & Sportsbook Platform | Kvaornux",
    template: "%s | Kvaornux",
  },
  description:
    "Kvaornux provides B2B iGaming technology for casino, sportsbook, game aggregation, payments, player management and custom platform development.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google7f27b3c54a20333a",
  },
  openGraph: {
    type: "website",
    siteName: "Kvaornux",
    title: "iGaming Technology, Casino & Sportsbook Platform | Kvaornux",
    description:
      "Kvaornux provides B2B iGaming technology for casino, sportsbook, game aggregation, payments, player management and custom platform development.",
    url: "https://kvaornux.com/",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kvaornux iGaming Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iGaming Technology, Casino & Sportsbook Platform | Kvaornux",
    description:
      "Kvaornux provides B2B iGaming technology for casino, sportsbook, game aggregation, payments, player management and custom platform development.",
    images: ["https://kvaornux.com/assets/og-image.png"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head />

      {/* ✅ Body with Gabarito font */}
      <body className={`min-h-full flex flex-col bg-black text-white ${gabarito.className}`}>



        <Header />
        <FloatingContactIcons />
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}