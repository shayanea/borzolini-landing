import {
  FutureConsiderations,
  RoadmapFooter,
  RoadmapTimeline,
} from "@/components/roadmap";
import { siteConfig } from "@/lib/config/site";
import {
  futureConsiderations,
  roadmapFooter,
  roadmapIntro,
  roadmapPhases,
} from "@/lib/content/roadmap-content";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Product Roadmap | Borzi - AI Pet Healthcare Platform",
  description:
    "See what we've built, what we're working on, and what's coming next. Our transparent roadmap shows you how Borzi is evolving to better serve pet owners.",
  keywords: [
    "Borzi roadmap",
    "pet app features",
    "upcoming features",
    "pet health app updates",
    "Borzi development",
  ],
  openGraph: {
    title: "Product Roadmap | Borzi",
    description:
      "See what we've built, what we're working on, and what's coming next for Borzi.",
    url: `${siteConfig.url}/roadmap`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Product Roadmap | Borzi",
    description:
      "See what we've built, what we're working on, and what's coming next for Borzi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoadmapPage() {
  const roadmapSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Borzi Product Roadmap",
    description: metadata.description,
    url: `${siteConfig.url}/roadmap`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: roadmapPhases.map((phase, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: phase.title,
        description: phase.description,
      })),
    },
  };

  return (
    <>
      <Script id="roadmap-schema" type="application/ld+json">
        {JSON.stringify(roadmapSchema)}
      </Script>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              {roadmapIntro.headline}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              {roadmapIntro.subheadline}
            </p>
          </div>

          {/* Timeline */}
          <RoadmapTimeline phases={roadmapPhases} />

          {/* Future Considerations */}
          <div className="mt-16">
            <FutureConsiderations
              title={futureConsiderations.title}
              description={futureConsiderations.description}
              items={futureConsiderations.items}
            />
          </div>

          {/* Footer CTA */}
          <RoadmapFooter
            title={roadmapFooter.title}
            description={roadmapFooter.description}
            email={roadmapFooter.email}
          />
        </div>
      </div>
    </>
  );
}
