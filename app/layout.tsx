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
  title: "Kelvurnux - Crypto Casino Software Provider | White Label iGaming Platform Solutions",
  description:
    "Launch your own crypto casino platform with our ready-made iGaming solution. 150+ APIs, sportsbook, slots and full white label system with admin & affiliate features.",
  keywords:
    "crypto casino software, white label casino, iGaming platform provider, sportsbook API, casino script provider, crypto betting platform, turnkey casino solution, online casino software, affiliate system casino",
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
      <head>
        {/* ✅ Google Tag Manager Script - LAZY LOAD */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W68CLHWT');`,
          }}
        />

        {/* ✅ Google Ads Conversion Tracking - LAZY LOAD */}
        <Script
          id="google-ads-gtag"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17927403225"
          async
        />

        {/* ✅ Google Ads Configuration */}
        <Script
          id="google-ads-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17927403225');
            `,
          }}
        />



        {/* 
          ❌ REMOVED: Duplicate/Invalid Google Analytics ID
          This was causing 404 error:
          /gtag/js?id=G-J4CGVSX4VW&cx=c&gtm=4e64u0h2:1:0
          
          We're using GTM-W68CLHWT and AW-17927403225 instead
          which are the correct IDs.
        */}
      </head>

      {/* ✅ Body with Gabarito font */}
      <body className={`min-h-full flex flex-col bg-black text-white ${gabarito.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W68CLHWT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}



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