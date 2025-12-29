import { ContactSection, LegalLayout, LegalSection } from "@/components/legal";
import { siteConfig } from "@/lib/config/site";
import {
  contactInfo,
  lastUpdated,
  privacyPolicyContent,
} from "@/lib/content/privacy-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Borzi - AI Pet Healthcare Platform",
  description:
    "Learn how Borzi collects, uses, and protects your personal information and pet health data. Our commitment to privacy and data security for AI-powered pet healthcare services.",
  keywords: [
    "privacy policy",
    "data protection",
    "pet health data privacy",
    "GDPR compliance",
    "CCPA compliance",
    "veterinary data security",
  ],
  openGraph: {
    title: "Privacy Policy | Borzi",
    description:
      "Learn how Borzi protects your privacy and pet health data with industry-leading security practices.",
    url: `${siteConfig.url}/privacy-policy`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Borzi",
    description: "Learn how Borzi protects your privacy and pet health data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={lastUpdated}>
      {privacyPolicyContent.map((section, index) => (
        <LegalSection
          key={index}
          title={section.title}
          content={section.content}
          subsections={section.subsections}
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
