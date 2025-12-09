import type { Metadata } from "next";
import { siteConfig } from "./site";

export const seoSiteConfig = {
  ...siteConfig,
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
  },
} as const;

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title
    ? `${title} | ${seoSiteConfig.name}`
    : seoSiteConfig.name;
  const metaDescription = description || seoSiteConfig.description;
  const metaImage = image || `${seoSiteConfig.url}${seoSiteConfig.ogImage}`;

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: seoSiteConfig.url,
      siteName: seoSiteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
