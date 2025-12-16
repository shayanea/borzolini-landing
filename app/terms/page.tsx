import { ContactSection, LegalLayout, LegalSection } from "@/components/legal";
import { siteConfig } from "@/lib/config/site";
import {
  contactInfo,
  lastUpdated,
  termsContent,
} from "@/lib/content/terms-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Borzolini - AI Pet Healthcare Platform",
  description:
    "Read the terms and conditions for using Borzolini's AI-powered pet healthcare platform, including telemedicine services, AI health monitoring, and veterinary care services.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "veterinary services terms",
    "AI health monitoring terms",
    "telemedicine terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Borzolini",
    description:
      "Review the terms and conditions for using Borzolini's AI-powered pet healthcare platform and services.",
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Borzolini",
    description:
      "Review the terms and conditions for using Borzolini's pet healthcare platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated={lastUpdated}>
      {termsContent.map((section, index) => (
        <LegalSection
          key={index}
          title={section.title}
          content={section.content}
          items={section.items}
          index={index}
        />
      ))}

      <ContactSection
        email={contactInfo.email}
        phone={contactInfo.phone}
        address={contactInfo.address}
      />
    </LegalLayout>
  );
}
