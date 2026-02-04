import React from "react"
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NYAAKU STUDIO | Creative Post-Production Studio",
    template: "%s | NYAAKU STUDIO",
  },
  description:
    "NYAAKU STUDIO is a futuristic creative post-production studio specializing in graphic design, video editing, reel editing, and digital post-production. Founded by PIYUSH DAS.",
  keywords: [
    "graphic design",
    "video editing",
    "reel editing",
    "post production",
    "creative studio",
    "digital design",
    "instagram reels",
    "youtube shorts",
    "NYAAKU STUDIO",
    "PIYUSH DAS",
  ],
  authors: [{ name: "PIYUSH DAS" }],
  creator: "PIYUSH DAS",
  publisher: "NYAAKU STUDIO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NYAAKU STUDIO",
    title: "NYAAKU STUDIO | Creative Post-Production Studio",
    description:
      "Crafting visual stories for the digital generation. Graphic design, video editing, reel editing & post-production services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NYAAKU STUDIO - Creative Post-Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYAAKU STUDIO | Creative Post-Production Studio",
    description:
      "Crafting visual stories for the digital generation. Graphic design, video editing, reel editing & post-production services.",
    images: ["/og-image.jpg"],
    creator: "@irealpiyush",
  },
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  alternates: {
    canonical: "/",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
