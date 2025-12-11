import {
  AIScanner,
  CompanionJourney,
  Features,
  FinalCTA,
  Hero,
  HowItWorks,
  PricingSection,
  Testimonials,
  VetFinder,
} from "@/components/sections";

import Script from "next/script";
import { siteConfig } from "@/lib/config/site";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.links.twitter, siteConfig.links.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    medicalSpecialty: ["Veterinary Medicine", "Pet Health", "Telemedicine"],
  };

  return (
    <main>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="website-schema" type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </Script>
      <Script id="medical-business-schema" type="application/ld+json">
        {JSON.stringify(medicalBusinessSchema)}
      </Script>
      <Hero />
      <CompanionJourney />
      <Features />
      <HowItWorks />
      <AIScanner />
      <VetFinder />
      <Testimonials />
      <PricingSection />
      <FinalCTA />
    </main>
  );
}
