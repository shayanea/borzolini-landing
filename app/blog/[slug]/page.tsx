import { siteConfig } from "@/lib/config/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "./components/blog-post-content";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Sample blog posts data - replace with your CMS or database
const blogPosts = {
  "early-kidney-disease-detection": {
    title: "Early Kidney Disease Detection in British Shorthairs",
    excerpt:
      "Learn how AI-powered monitoring can detect kidney issues months before symptoms appear.",
    content: `
# Early Kidney Disease Detection in British Shorthairs

British Shorthairs are prone to kidney disease, particularly as they age. Early detection is crucial for effective treatment and can add years to your cat's life.

## Why British Shorthairs Are at Risk

British Shorthairs have a genetic predisposition to kidney disease, especially:
- Polycystic Kidney Disease (PKD)
- Chronic Kidney Disease (CKD)
- Kidney stones

## AI-Powered Early Detection

Our AI scanner can detect early warning signs months before traditional vet visits:

1. **Eye Clarity Analysis**: Cloudiness can indicate kidney issues
2. **Coat Quality**: Dull coat may signal nutritional deficiencies from kidney problems
3. **Behavior Patterns**: Changes in water consumption and litter box habits

## What to Watch For

- Increased thirst
- More frequent urination
- Weight loss
- Decreased appetite
- Lethargy

## Prevention Tips

1. **Regular Monitoring**: Use AI scanning weekly
2. **Proper Hydration**: Ensure fresh water is always available
3. **Quality Diet**: Feed kidney-friendly food
4. **Annual Vet Visits**: Professional checkups are essential

## When to See a Vet

If your AI scan shows high-priority concerns or you notice any of the symptoms above, contact your veterinarian immediately.

---

*This article is for informational purposes only and does not replace professional veterinary advice.*
		`,
    date: "2025-12-20",
    readTime: "5 min read",
    category: "Health",
    author: "Dr. Sarah Mitchell, DVM",
  },
  "nutrition-guide-british-shorthair": {
    title: "Complete Nutrition Guide for British Shorthairs",
    excerpt:
      "Discover the optimal diet for your British Shorthair, including portion sizes and supplements.",
    content: `
# Complete Nutrition Guide for British Shorthairs

Proper nutrition is essential for your British Shorthair's health and longevity. This comprehensive guide covers everything you need to know.

## Nutritional Needs

British Shorthairs require:
- High-quality protein (30-40% of diet)
- Moderate fat (15-20%)
- Limited carbohydrates
- Essential vitamins and minerals

## Recommended Foods

### Wet Food
- Higher moisture content (good for kidney health)
- More palatable
- Better for weight management

### Dry Food
- Convenient
- Helps with dental health
- Should be high-quality, grain-free

## Portion Sizes

Adult British Shorthair (4-8 kg):
- 200-300 calories per day
- Adjust based on activity level
- Monitor weight regularly

## Foods to Avoid

❌ Dairy products
❌ Raw fish
❌ Onions and garlic
❌ Chocolate
❌ Grapes and raisins

## Supplements

Consider adding:
- Omega-3 fatty acids
- Probiotics
- Joint support (for older cats)

---

*Consult your veterinarian before making significant dietary changes.*
		`,
    date: "2025-12-13",
    readTime: "7 min read",
    category: "Nutrition",
    author: "Dr. Emily Chen, DVM",
  },
  "ai-health-monitoring-benefits": {
    title: "How AI Health Monitoring Saves Lives",
    excerpt:
      "Real stories from pet owners who caught serious health issues early using AI.",
    content: `
# How AI Health Monitoring Saves Lives

AI-powered health monitoring is revolutionizing pet care. Here are real stories from Borzi users.

## Luna's Story: Early Kidney Detection

Sarah noticed her British Shorthair, Luna, seemed fine. But weekly AI scans showed concerning eye clarity changes.

> "The AI flagged potential kidney issues 6 months before my vet detected them. Early treatment saved Luna's life." - Sarah M.

## Oliver's Emergency: Lily Poisoning

James' cat ate a lily plant at 11 PM. The AI scan immediately showed:
- **URGENT: RUSH TO VET NOW**
- Connected to emergency vet in 2 minutes

> "The $29 video call saved me a $2,000 ER visit and potentially Oliver's life." - James K.

## How AI Monitoring Works

1. **Regular Scans**: Weekly photos of eyes, coat, stool
2. **Pattern Recognition**: AI detects subtle changes
3. **Early Alerts**: Warnings before symptoms appear
4. **Vet Connection**: Instant access to professionals

## The Technology

Our AI analyzes:
- 🔍 Eye clarity and color
- 🐱 Coat quality and shine
- 💩 Stool consistency and color
- 📊 Behavioral patterns

## Success Rate

- 94% accuracy in detecting health issues
- Average 4-6 months earlier than traditional methods
- Thousands of lives saved

## Getting Started

1. Download Borzi app
2. Create your pet's profile
3. Take weekly scans
4. Get instant AI analysis

---

*AI monitoring complements, not replaces, regular veterinary care.*
		`,
    date: "2025-12-06",
    readTime: "6 min read",
    category: "Technology",
    author: "Borzi Team",
  },
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Borzi Blog`,
    description: post.excerpt,
    keywords: [post.category, "pet health", "British Shorthair", "cat care"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${params.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
