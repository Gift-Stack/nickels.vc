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
  title: "nickels.vc - Ultra-Early Stage Micro-Funding in Nigeria",
  description:
    "nickels.vc is a small, self-funded venture putting micro-funding into technology projects, communities and individuals in Nigeria. No fund, no LPs, $0.05 at a time.",
  keywords: [
    "micro-funding",
    "Nigeria tech funding",
    "micro-funding Nigeria",
    "Nigerian tech ecosystem",
    "early stage",
    "ultra-early stage",
    "Techfiesta",
    "Suinami Lagos",
  ],
  authors: [
    {
      name: "gifted_oc",
      url: "https://x.com/gifted_oc",
    },
  ],
  creator: "gifted_oc",
  openGraph: {
    type: "website",
    url: "https://nickels.vc",
    title: "nickels.vc - Ultra-Early Stage Micro-Funding in Nigeria",
    description:
      "A small, self-funded venture putting micro-funding into technology projects, communities and individuals in Nigeria. No fund, no LPs, $0.05 at a time.",
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
      "A small, self-funded venture putting micro-funding into technology projects, communities and individuals in Nigeria. No fund, no LPs, $0.05 at a time.",
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
