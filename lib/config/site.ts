export const siteConfig = {
  name: "Borzi",
  title: "Borzi | Smart Pet Health Tracker",
  description:
    "Monitor your pet's health with AI-powered symptom analysis, weight tracking, and personalized care tips. Built for cat and dog owners who want peace of mind.",
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
