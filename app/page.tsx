import {
  AIScanner,
  ComingSoon,
  CompanionJourney,
  Features,
  FinalCTA,
  Hero,
  Testimonials,
  VetFinder,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanionJourney />
      <Features />
      <AIScanner />
      <VetFinder />
      <ComingSoon />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
