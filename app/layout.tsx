import "./globals.css";

import { Footer, Navbar } from "@/components/ui";
import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata({
  title: undefined,
  description:
    "Your trusted healthcare partner. We provide exceptional medical care with a focus on your well-being.",
});

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
        <Navbar brandName="Borzolini" brandInitial="B" />
        {children}
        <Footer brandName="Borzolini" brandInitial="B" />
      </body>
    </html>
  );
}
