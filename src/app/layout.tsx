import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "nickels.vc - Ultra-Early Stage Venture Capital | Micro-funding, $0.05 at a time",
  description:
    "nickels.vc - Ultra-Early Stage Venture Capital | Micro-funding, $0.05 at a time",
  keywords: [
    "venture capital",
    "VC",
    "early stage",
    "ultra-early stage",
    "micro-funding",
    "startup funding",
    "seed funding",
    "angel investing",
    "startup investment",
    "pre-seed",
    "micro VC",
    "startup accelerator",
    "startup incubator",
  ],
  authors: [
    {
      name: "_0xGifted",
      url: "https://x.com/_0xgifted",
    },
  ],
  creator: "_0xGifted",
  openGraph: {
    type: "website",
    url: "https://nickels.vc",
    title:
      "nickels.vc - Ultra-Early Stage Venture Capital | Micro-funding, $0.05 at a time",
    description:
      "nickels.vc - Ultra-Early Stage Venture Capital | Micro-funding, $0.05 at a time",
    siteName: "nickels.vc",
    images: [
      {
        url: "https://nickels.vc/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nickels.vc",
    description:
      "nickels.vc - Ultra-Early Stage Venture Capital | Micro-funding, $0.05 at a time",
    images: "https://nickels.vc/og-image.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://nickels.vc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
