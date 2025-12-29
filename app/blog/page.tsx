import { siteConfig } from "@/lib/config/site";
import { Metadata } from "next";
import { BlogGrid } from "./components/blog-grid";
import { BlogHero } from "./components/blog-hero";

export const metadata: Metadata = {
  title: "Blog | Borzi - Pet Health Tips & Insights",
  description:
    "Weekly pet health tips, AI-powered insights, and expert advice for British Shorthair owners. Learn about cat health, nutrition, and preventive care.",
  keywords: [
    "pet health blog",
    "cat care tips",
    "British Shorthair health",
    "pet nutrition",
    "veterinary advice",
    "AI pet health",
    "cat wellness",
  ],
  openGraph: {
    title: "Blog | Borzi",
    description:
      "Weekly pet health tips and AI-powered insights for cat owners.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Borzi",
    description: "Weekly pet health tips and AI-powered insights.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
