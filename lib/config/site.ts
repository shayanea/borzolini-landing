export const siteConfig = {
  name: "Borzi",
  title: "Borzi | AI Pet Health Monitor & Symptom Checker",
  description:
    "The #1 AI-powered pet health companion. Proactive health monitoring, instant symptom analysis, and weight tracking. Trusted by British Shorthair owners and pet lovers worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://borzi.app",
  emails: {
    general: "hello@borzi.app",
    support: "support@borzi.app",
    legal: "legal@borzi.app",
    privacy: "privacy@borzi.app",
  },
  links: {
    twitter: "https://twitter.com/borzi",
    instagram: "https://instagram.com/borzi",
  },
  keywords: [
    "AI pet health scanner",
    "Pet symptom checker",
    "Cat health monitoring",
    "Dog health app",
    "British Shorthair health care",
    "Pet weight tracking",
    "AI veterinarian insights",
    "Pet stool analysis app",
    "Pet toxicity checker",
    "Preventative pet care",
    "Vet finder app",
    "Borzi",
  ],
} as const;
