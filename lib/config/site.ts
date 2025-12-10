export const siteConfig = {
  name: "Borzolini",
  description:
    "The world's first AI-powered pet health companion. Transform care from reactive to predictive with 24/7 monitoring, telemedicine, and trusted in-home vet visits.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://borzolini.com",
  links: {
    twitter: "https://twitter.com/borzolini",
    instagram: "https://instagram.com/borzolini",
  },
  keywords: [
    "AI pet health",
    "veterinary telemedicine",
    "in-home vet visits",
    "cat health monitoring",
    "British Shorthair care",
    "predictive pet care",
    "online vet consultation",
    "Borzolini",
    "Fariborz",
  ],
} as const;
