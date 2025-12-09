import {
  AIScanner,
  CompanionJourney,
  Features,
  Hero,
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
    </main>
  );
}
