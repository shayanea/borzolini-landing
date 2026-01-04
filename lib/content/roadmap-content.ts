export interface RoadmapPhase {
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  timeline: string;
  description: string;
  features: string[];
}

export interface RoadmapItem {
  title: string;
  description: string;
  timeline: string;
  status: "completed" | "in-progress" | "upcoming";
}

export const roadmapIntro = {
  headline: "What We're Building",
  subheadline:
    "We believe in transparency. Here's a look at what we've accomplished, what we're working on right now, and where we're headed next.",
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    title: "Foundation",
    status: "completed",
    timeline: "Completed",
    description:
      "We built and launched the core platform that helps pet owners take better care of their companions.",
    features: [
      "AI-powered skin condition scanner with confidence scores",
      "Weight tracking with historical trends and charts",
      "Toxicity checker for foods and plants",
      "Breed encyclopedia with 50+ breeds and care guides",
      "Pet profiles with photo management",
      "Clinic finder with interactive map",
      "Adoption browser",
    ],
  },
  {
    title: "Community and Training",
    status: "completed",
    timeline: "Completed",
    description:
      "We introduced features that connect pet owners and help them train their pets effectively.",
    features: [
      "Pet hosting and sitting marketplace",
      "Walk groups with invite codes and compatibility rules",
      "Training programs with daily exercises",
      "Progress tracking and assignments",
      "Reviews and ratings system",
    ],
  },
  {
    title: "Clinic Dashboard",
    status: "completed",
    timeline: "Completed",
    description:
      "A complete management system for veterinary clinics to serve their clients better.",
    features: [
      "Appointment scheduling with conflict detection",
      "Customer and pet database with full histories",
      "Staff management with roles and specializations",
      "Service catalog with pricing",
      "Analytics and statistics",
      "Telemedicine and home visit support",
    ],
  },
  {
    title: "Health Reminders",
    status: "in-progress",
    timeline: "Q1 2025",
    description:
      "Helping pet owners stay on top of their pet's health schedule with timely reminders.",
    features: [
      "Medication and supplement reminders",
      "Push notifications when it's time",
      "Medication history tracking",
      "Flea, tick, and vaccination schedules",
      "Share schedules with your vet",
    ],
  },
  {
    title: "Advanced AI Features",
    status: "upcoming",
    timeline: "Q2-Q3 2025",
    description:
      "Taking our AI capabilities further to help you create a safer home for your pets.",
    features: [
      "Home safety audits with hazard detection",
      "Toxic plant identification in your space",
      "Behavioral environment recommendations",
      "Multi-pet household optimization",
      "Stress-free zone identification",
    ],
  },
  {
    title: "Premium Training Programs",
    status: "upcoming",
    timeline: "Q3-Q4 2025",
    description:
      "Specialized training content for pet owners who want to go beyond the basics.",
    features: [
      "Behavioral modification programs",
      "Breed-specific training courses",
      "Competition preparation guides",
      "Advanced obedience training",
      "Problem behavior solutions",
    ],
  },
  {
    title: "Pet Memories & Timeline",
    status: "upcoming",
    timeline: "Q1-Q2 2026",
    description:
      "Never forget a moment with your pet. We're building a beautiful timeline of your pet's life.",
    features: [
      "Automatic milestone detection (birthdays, gotcha days)",
      '"On This Day" memories from previous years',
      "AI-generated photo captions",
      "Year in Review - shareable pet life summary",
      "Health journey visualization",
    ],
  },
  {
    title: "AI Health Intelligence",
    status: "upcoming",
    timeline: "Q2 2026",
    description:
      "Our AI learns what's normal for YOUR pet and alerts you when something changes.",
    features: [
      "Personalized health baselines for each pet",
      "Anomaly detection and smart alerts",
      "Weight trend analysis with recommendations",
      "Predictive health insights",
      "Proactive care suggestions",
    ],
  },
];

export const futureConsiderations = {
  title: "On Our Radar",
  description:
    "These are features we're exploring for the future. Nothing is set in stone, but we're thinking about them.",
  items: [
    "In-app video consultations with vets",
    "Built-in payment processing",
    "Pet insurance partnerships",
    "Recurring appointment scheduling",
    "Multi-language support",
    "Smart collar and wearable integrations",
  ],
};

export const roadmapFooter = {
  title: "Have a feature request?",
  description:
    "We're always listening to our users. If there's something you'd love to see in Borzi, let us know.",
  email: "feedback@borzi.app",
};
