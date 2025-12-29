# Blog Section - Content Management Guide

## 📁 Structure

```
app/blog/
├── page.tsx                    # Main blog listing page
├── components/
│   ├── blog-hero.tsx          # Hero section with title
│   ├── blog-grid.tsx          # Grid of blog posts
│   └── index.ts               # Component exports
└── [slug]/
    ├── page.tsx               # Individual blog post page
    └── components/
        ├── blog-post-content.tsx  # Post content renderer
        └── index.ts           # Component exports
```

## ✍️ Adding New Blog Posts

### Step 1: Add Post Data

Edit `app/blog/components/blog-grid.tsx` and add your post to the `blogPosts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "A brief description of your post (1-2 sentences)",
  date: "2025-12-29",  // YYYY-MM-DD format
  readTime: "5 min read",
  category: "Health" | "Nutrition" | "Technology" | "Tips",
}
```

### Step 2: Add Post Content

Edit `app/blog/[slug]/page.tsx` and add your post to the `blogPosts` object:

```typescript
"your-post-slug": {
  title: "Your Post Title",
  excerpt: "Brief description",
  content: `
# Your Post Title

Your markdown content here...

## Section 1
Content...

## Section 2
More content...
  `,
  date: "2025-12-29",
  readTime: "5 min read",
  category: "Health",
  author: "Your Name, DVM",
}
```

## 📝 Markdown Formatting

The blog supports full Markdown syntax:

```markdown
# Heading 1

## Heading 2

### Heading 3

**Bold text**
_Italic text_

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

> Quote or important note

[Link text](https://example.com)
```

## 🎨 Categories

Available categories:

- **Health**: Medical advice, disease prevention
- **Nutrition**: Diet, feeding guides
- **Technology**: AI features, app updates
- **Tips**: General pet care advice

## 📊 SEO Optimization

Each blog post automatically includes:

- ✅ Meta title and description
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Structured data (Article schema)
- ✅ Canonical URLs

## 🚀 Future Enhancements

Consider adding:

1. **CMS Integration**: Connect to Contentful, Sanity, or Strapi
2. **MDX Support**: For interactive components in posts
3. **Comments**: Add Disqus or custom comment system
4. **Newsletter**: Integrate email subscription
5. **Search**: Add blog search functionality
6. **Tags**: Implement tag-based filtering
7. **Related Posts**: Show similar articles
8. **Social Sharing**: Add share buttons

## 📱 Current Features

✅ Responsive design
✅ Animated transitions
✅ Category badges
✅ Read time estimates
✅ Author attribution
✅ Back to blog navigation
✅ CTA sections
✅ Mobile-optimized

## 🔗 URLs

- Blog listing: `https://borzi.app/blog`
- Individual posts: `https://borzi.app/blog/[slug]`

## 📸 Adding Images (Future)

To add images to blog posts:

1. Place images in `public/blog/`
2. Reference in markdown: `![Alt text](/blog/image-name.jpg)`

## 🎯 Best Practices

1. **Consistency**: Post weekly on the same day
2. **Length**: Aim for 800-1500 words
3. **SEO**: Include keywords naturally
4. **Value**: Provide actionable advice
5. **Images**: Add relevant visuals (coming soon)
6. **Links**: Link to related posts and resources
7. **CTA**: Include app download prompts

## 📈 Analytics

Track blog performance with:

- Google Analytics 4
- Page views per post
- Time on page
- Bounce rate
- Social shares

---

**Need help?** Contact the development team for assistance with blog management.
