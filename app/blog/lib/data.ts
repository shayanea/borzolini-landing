export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-silent-killers-british-shorthairs",
    title:
      "5 Silent Killers in British Shorthairs (And How AI Detects Them Early)",
    excerpt:
      "Discover the hidden health threats that affect British Shorthairs and learn how AI-powered monitoring can detect them months before symptoms appear.",
    date: "2025-12-29",
    readTime: "8 min read",
    category: "Health",
    image: "/blog/5-silent-killers-hero.webp",
  },
  {
    slug: "ai-health-monitoring-benefits",
    title: "How AI Health Monitoring Saves Lives",
    excerpt:
      "Real stories from pet owners who caught serious health issues early using AI. These stories changed how I think about pet care.",
    date: "2026-02-05",
    readTime: "12 min read",
    category: "Technology",
    image: "/blog/ai-health-monitoring-hero.webp",
  },
  {
    slug: "british-shorthair-health-costs",
    title:
      "Why British Shorthairs Are the Most Expensive Cats to Keep Healthy (And What Most Owners Don't Know)",
    excerpt:
      "I did the math on what British Shorthair owners actually spend on health. The numbers shocked me. But the real problem isn't the money - it's what happens when you don't spend it.",
    date: "2026-02-12",
    readTime: "14 min read",
    category: "Health",
    image: "/blog/british-shorthair-health-costs-hero.webp",
  },
  {
    slug: "i-scanned-my-living-room-with-ai",
    title: "I Scanned My Living Room With AI. What It Found Scared Me.",
    excerpt:
      "I thought my apartment was safe for cats. I was wrong. When I pointed my phone camera at my living room, the AI found 4 things that could seriously hurt a cat.",
    date: "2026-02-19",
    readTime: "13 min read",
    category: "Technology",
    image: "/blog/i-scanned-my-living-room-with-ai-hero.webp",
  },
  {
    slug: "wait-you-cant-feed-them-that",
    title: "Wait, You Can't Feed Them That?",
    excerpt:
      "I used to think that because my cat was smart, he wouldn't eat anything bad for him. I was wrong. I almost made a huge mistake that could have cost me everything.",
    date: "2026-03-22",
    readTime: "11 min read",
    category: "Health",
    image: "/blog/wait-you-cant-feed-them-that-hero.webp",
  },
  {
    slug: "chunky-british-shorthair-weight-risks",
    title: "Your 'Chunky' British Shorthair Isn't Cute. He's Dying.",
    excerpt:
      "I used to laugh at 'chonky' cat videos on Instagram. Everyone does. But when I talked to a vet specializing in British Shorthairs, she told me something that made me feel sick with guilt.",
    date: "2026-03-31",
    readTime: "12 min read",
    category: "Health",
    image: "/blog/chunky-british-shorthair-weight-hero.jpg.webp",
  },
  {
    slug: "i-pointed-my-phone-at-my-cats-dinner",
    title: "I Pointed My Phone at My Cat's Dinner. The AI Said Stop.",
    excerpt:
      "My friend gave my cat a piece of avocado. I thought it was fine. Then I opened Borzi and pointed the camera at it. What the AI told me made my stomach drop.",
    date: "2026-04-08",
    readTime: "11 min read",
    category: "Technology",
    image: "/blog/i-pointed-my-phone-at-my-cats-dinner.webp",
  },
  {
    slug: "talking-to-your-vet-about-ai-findings",
    title:
      "How to Tell Your Vet 'The AI Found Something' (Without Them Rolling Their Eyes)",
    excerpt:
      "I was terrified to tell my vet I was using an app. I thought he'd see me as just another 'Dr. Google' obsessive. But then I realized: vets don't hate tech, they hate noise.",
    date: "2026-04-17",
    readTime: "10 min read",
    category: "Tips",
    image: "/blog/how-to-talk-to-your-vet-ai-hero.webp",
  },
];
