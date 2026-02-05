import React from "react"
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
    default: "NYAAKU STUDIO | Creative Digital Studio",
    template: "%s | NYAAKU STUDIO",
  },
  description:
    "NYAAKU STUDIO is a futuristic creative studio specializing in graphic design, video editing, and reel editing. Founded by PIYUSH DAS.",
  keywords: [
    "graphic design",
    "video editing",
    "reel editing",
    "creative studio",
    "digital design",
    "instagram reels",
    "youtube shorts",
    "NYAAKU STUDIO",
    "PIYUSH DAS",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NYAAKU STUDIO",
    title: "NYAAKU STUDIO | Creative Digital Studio",
    description:
      "Crafting visual stories for the digital generation. Graphic design, video editing, & reel editing services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NYAAKU STUDIO - Creative Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYAAKU STUDIO | Creative Digital Studio",
    description:
      "Crafting visual stories for the digital generation. Graphic design, video editing, & reel editing services.",
    images: ["/og-image.jpg"],
    creator: "@irealpiyush",
  },

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

  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  alternates: {
    canonical: "/",
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWorkSeries",
              name: "NYAAKU STUDIO",
              description:
                "Futuristic creative post-production studio crafting visual stories for the digital generation.",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyaakustudio.com",
              founder: {
                "@type": "Person",
                name: "PIYUSH DAS",
              },
              sameAs: [
                "https://www.instagram.com/nyaakustudio",
                "https://www.instagram.com/irealpiyush",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
