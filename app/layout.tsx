import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateMetadata as generateSEOMetadata } from "@/lib/config/seo";
import { Navbar } from "@/components/ui/navbar";
import "./globals.css";

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
      </body>
    </html>
  );
}
