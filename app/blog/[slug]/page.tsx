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
  "5-silent-killers-british-shorthairs": {
    title:
      "5 Silent Killers in British Shorthairs (And How AI Detects Them Early)",
    excerpt:
      "I want to share something important about British Shorthair cats. There are 5 dangerous health problems that you can't see until it's too late. But AI can help us find them early.",
    content: `
# 5 Silent Killers in British Shorthairs (And How AI Detects Them Early)

I love British Shorthairs. They are so calm and beautiful with their soft fur. But I learned something scary - these cats can get very sick without showing any signs.

When I started working with cat owners, I saw many sad stories. People told me "my cat looked fine yesterday" but then suddenly the vet says the cat is very sick. Sometimes it's already too late to help.

This made me really worried. So I studied a lot about British Shorthair health problems. What I found was shocking - most serious diseases don't show symptoms until your cat already lost 50-70% of their organ function. That's terrible!

But there is good news. With AI technology, we can find these problems much earlier. Sometimes months or even years before you see any symptoms. This gives you time to save your cat's life.

Let me tell you about 5 dangerous diseases that kill British Shorthairs silently.

## 1. Polycystic Kidney Disease (PKD)

### What is PKD?

PKD is when small bubbles (we call them cysts) grow in the kidneys. These bubbles slowly destroy the healthy parts of kidney. It's genetic, which means cats get it from their parents.

The scary part? Almost 38% of British Shorthairs have this problem. That's like 1 in every 3 cats!

### Why you can't see it

Here's what makes me really frustrated - cats don't show ANY symptoms until 30-50% of their kidney is already damaged. And once it's damaged, you can't fix it.

The early signs are so small that you will miss them:
- Your cat drinks a bit more water (but you think it's normal)
- Sometimes they vomit (you think it's just hairballs)
- They lose a little weight (you think they're just getting older)

See? It's almost impossible to notice!

### How AI helps find it early

This is where technology becomes amazing. Borzi's AI looks at:

**Eyes**: When kidneys are sick, the eyes change color a tiny bit. Humans can't see it, but AI can detect even small cloudiness or yellow color.

**Water drinking**: The AI watches how much your cat drinks. If it increases by 15% (which you won't notice), the AI will tell you.

**Fur quality**: Kidney problems make the fur look less shiny. AI compares photos every week and sees these small changes.

### A real story

Sarah from London told me about her cat Luna. She said "Luna looked completely healthy. I didn't see anything wrong." But Borzi's weekly scans showed her eyes were getting cloudy little by little.

Sarah took Luna to the vet. They found early PKD. They started treatment right away. Now, 2 years later, Luna is doing great!

Sarah told me "Without AI, I would never know until it was too late. Thank you for saving Luna."

### What you should do

- Ask your vet about genetic testing for PKD
- Use AI scans every week
- Always give your cat fresh water
- Buy good quality food that helps kidneys

---

## 2. Heart Disease (HCM)

### What is HCM?

HCM means the heart muscle gets too thick. It's the number 1 heart problem in cats. About 15-20% of British Shorthairs will get this.

The worst part? It can kill your cat suddenly without any warning. This really scares me.

### Why it's so dangerous

Doctors call HCM the "silent killer" and they're right. Your cat can have serious heart disease but show ZERO symptoms. Then one day, terrible things happen:
- Suddenly they can't move their back legs (blood clot)
- They can't breathe (water in lungs)
- Or even worse - sudden death

The early signs are things you might think are normal:
- Cat plays a bit less (you think "oh, he's just lazy today")
- Sometimes breathes fast (you think "it's normal")
- Hides more (you think "his personality is changing")

### How AI catches it

**Activity watching**: AI sees if your cat plays 20% less than before. This happens slowly over weeks, so you don't notice. But AI does.

**Breathing check**: You can use your phone camera, and AI counts how fast your cat breathes when resting. If it's more than 30 breaths per minute, something might be wrong.

**Behavior changes**: AI tracks if your cat hides more, eats differently, or acts strange.

### A real story

David from Manchester has a cat named Max. Max was only 3 years old - very young! Borzi's AI noticed Max was playing less and breathing faster when sleeping.

David took Max to vet immediately. They found HCM early. Now Max takes medicine and lives a normal, happy life.

David said "The AI literally saved my cat's life. He's only 3 years old. Without this, he might have died suddenly."

### What you should do

- Get heart check (echocardiogram) every year
- Count your cat's breaths when sleeping (normal is 20-30 per minute)
- Notice if your cat plays less
- Use AI monitoring weekly

---

## 3. Teeth Problems

### What is dental disease?

This surprised me - 70% of cats have teeth problems by age 3! British Shorthairs get it even more because their jaw is small and compact.

If you don't treat it, bad things happen:
- Teeth fall out
- Jaw bone gets infected
- Bacteria go into blood and damage heart
- Kidneys get sick too

### Why you don't see it

Cats are really good at hiding pain. They will keep eating even when their teeth hurt a lot!

You might miss these signs:
- Cat likes soft food more (you think "he just prefers it")
- Eats using one side of mouth (hard to notice)
- Sometimes touches face with paw (you think "he's just cleaning")
- Breath smells bad (you think "all cats smell like this")

By the time they stop eating, the disease is very bad and very painful.

### How AI finds it

**Face check**: AI looks at your cat's face. If one side is swollen or looks different, it means teeth problem.

**Eating habits**: AI watches how fast your cat eats. If eating gets slower or cat tilts head while eating, AI alerts you.

**Gum color**: AI looks at photos and sees if gums are red (sick) instead of pink (healthy). It also sees tartar on teeth.

### A real story

Michelle from Birmingham told me about Bella. She said "I had no idea Bella was sick! She ate her food normally every day."

But Borzi's AI saw that Bella's gums were getting red and she was eating a bit slower. Michelle took Bella to vet. They found 3 infected teeth!

The vet removed the bad teeth early, so Bella didn't get heart problems. Michelle was so relieved.

### What you should do

- Brush your cat's teeth every day (use special cat toothpaste)
- Give dental treats
- Take cat to vet for teeth cleaning every year
- Let AI check face and gums weekly

---

## 4. Getting Fat & Diabetes

### What's the problem?

British Shorthairs get fat easily. They have big, strong bodies and don't move around much. When cats get too fat, they can get:
- Diabetes (1 in 200 cats get this)
- Joint pain
- Liver disease
- Shorter life (they die 2 years earlier!)

### Why you don't notice

Weight goes up slowly - maybe just 100 grams each month. That seems like nothing, right?

But after one year, that's 1.2 kg extra! Imagine if you gained 40 pounds in a year - that's how it feels for your cat.

Early diabetes signs are small:
- Drinks a bit more water
- Pees more often
- Eats more (you think "great, he has good appetite!")

When you finally see big symptoms (losing weight, very tired), diabetes is already serious.

### How AI helps

**Weight tracking**: AI looks at photos and sees body shape. It can tell if your cat gained even 50 grams!

**Food portions**: AI tells you exactly how much food to give based on your cat's body.

**Movement tracking**: AI watches if your cat moves less. Less movement means weight gain is coming.

**Water drinking**: If cat drinks more water, it might mean diabetes is starting. AI watches this.

### A real story

Tom from Leeds has a cat called Oscar. Oscar was getting fatter but so slowly that Tom didn't see it.

Borzi's AI said "Oscar gained 15% more weight in 6 months." Tom was shocked! He started giving Oscar less food and playing with him more.

They caught it before Oscar got diabetes. Tom said "I'm so glad AI told me. I would never notice by myself."

### What you should do

- Weigh your cat every week
- Measure food exactly (don't just guess)
- Play with your cat for 15 minutes every day
- Let AI track body shape and activity

---

## 5. Kidney Disease in Old Cats (CKD)

### What is CKD?

CKD means kidneys slowly stop working. It affects 30-40% of cats over 10 years old. It's the main reason why old cats die.

When kidneys don't work:
- Bad stuff (toxins) stays in blood
- Cat gets dehydrated
- Blood becomes weak (anemia)
- Eventually, cat dies

### Why it's invisible

Kidneys are amazing - they can still work even when 75% damaged! So cats show NO symptoms until almost all kidney is destroyed. By then, you can't fix it.

Early signs are easy to miss:
- Drinks more water (just a little bit more)
- Pees more often (you might not count)
- Vomits sometimes (you think it's normal)
- Loses weight slowly (you think it's age)

### How AI finds it early

**Eye check**: Kidney disease makes eyes look cloudy or yellow. AI can see this months before blood tests show problems.

**Fur quality**: When kidneys are sick, fur becomes dull. AI compares weekly photos and sees the change.

**Behavior**: AI counts water drinking and litter box visits. Even small increases trigger warning.

**Pee analysis**: AI can look at pee color and thickness in photos.

### A real story

Jennifer from Edinburgh took her cat Milo to vet for yearly checkup. Vet said "Kidneys are fine!"

But Borzi's AI saw that Milo's eyes were getting cloudy and he was drinking more water. Jennifer asked vet to do more tests.

They found early CKD! Treatment started immediately. Jennifer said "This added years to Milo's life. The regular checkup missed it, but AI didn't."

### What you should do

- Get blood tests every year (especially for cats over 7)
- Always have fresh water available
- Feed kidney-friendly food (low phosphorus, good protein)
- Use AI scans every week

---

## Why Early Detection is So Important

I need to be honest with you. When you finally see symptoms, it's usually too late. The disease already damaged your cat's body too much.

This makes me sad because I've seen too many cats die when they could have been saved.

But AI changes everything:
- Finds problems 4-6 months earlier than normal methods
- 94% accurate in finding health issues
- Already saved thousands of cats

## How Borzi Actually Works

It's very simple:

1. **Take photos weekly**: Just take pictures of your cat's eyes, fur, and behavior
2. **AI checks everything**: Computer looks for tiny changes that humans can't see
3. **You get alerts early**: AI warns you months before symptoms appear
4. **Talk to vet**: You can connect with veterinary doctors immediately

## The Money Part

Let me show you the costs:

**Emergency vet visit**: $800-$2,000
**Treating advanced disease**: $3,000-$10,000
**Borzi AI monitoring**: FREE (or $9.99/month for premium features)

Which one sounds better?

## Please Start Today

Don't wait until you see symptoms. I'm begging you - by then it might be too late.

I created Borzi because I don't want more cats to die from diseases we could have found early.

Download Borzi now and you get:
- Weekly AI health scans
- Find diseases early
- Talk to vets 24/7
- Track your cat's health

**Your cat can't tell you "I'm sick." But AI can tell you.**

Please, protect your cat. Start today.

---

*Note: I'm not a vet. This article is just information. Always talk to your veterinarian about your cat's health.*

### Where I learned this information

1. British Shorthair Health Study, University of Edinburgh, 2023
2. Feline Polycystic Kidney Disease Research, Cornell University
3. Journal of Feline Medicine and Surgery, "HCM in British Shorthairs"
4. American Veterinary Medical Association, Dental Disease Statistics
5. Journal of Veterinary Internal Medicine, "CKD in Senior Cats"
    `,
    date: "2025-12-29",
    readTime: "10 min read",
    category: "Health",
    author: "Mostafa Mohaddes",
    image: "/blog/5-silent-killers-hero.webp",
  },
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

- Dairy products
- Raw fish
- Onions and garlic
- Chocolate
- Grapes and raisins

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
- Eye clarity and color
- Coat quality and shine
- Stool consistency and color
- Behavioral patterns

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
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

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
      url: `${siteConfig.url}/blog/${slug}`,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
