import {
  AIScanner,
  ComingSoon,
  CompanionJourney,
  Features,
  FinalCTA,
  Hero,
  Testimonials,
  VetFinder,
} from "@/components/sections";

import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Borzolini",
            "description": "AI-powered proactive pet health monitoring and veterinary services.",
            "url": "https://borzolini.com",
            "telephone": "+1-555-000-0000",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://instagram.com/borzolini",
              "https://twitter.com/borzolini"
            ]
          }
        `}
      </Script>
      <Hero />
      <CompanionJourney />
      <Features />
      <AIScanner />
      <VetFinder />
      <ComingSoon />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
