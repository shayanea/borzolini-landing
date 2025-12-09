"use client";

import { Background, LeftContent, PhoneMock } from "./components";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 px-6 py-24 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <Background />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <LeftContent />

          {/* Right Content - Phone Mockup */}
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
