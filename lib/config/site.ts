export const siteConfig = {
  name: "Borzolini",
  description:
    "AI-powered emergency pet health triage. Know if your cat needs a vet in 30 seconds. Built for British Shorthair owners. Free poop/urine scanning.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://borzolini.com",
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
