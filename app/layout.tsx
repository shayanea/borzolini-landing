import "./globals.css";

import { FirebaseAnalytics } from "@/components/analytics/firebase-analytics";
import { Footer, Navbar } from "@/components/ui";
import { Geist, Geist_Mono } from "next/font/google";

import { generateMetadata as generateSEOMetadata } from "@/lib/config/seo";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata({
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9c5cf6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar brandName="Borzi" brandInitial="B" />
        {children}
        <FirebaseAnalytics />
        <Footer brandName="Borzi" brandInitial="B" />
      </body>
    </html>
  );
}
