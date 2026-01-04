"use client";

import {
  DesktopNavigation,
  DownloadButtons,
  Logo,
  MobileButton,
  MobileNavigation,
} from "./components";

import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { useState } from "react";

interface NavbarProps {
  brandName?: string;
  brandInitial?: string;
}

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Scanner", href: "#ai-scanner" },
  { label: "Find Vets", href: "#find-vets" },
  { label: "Blog", href: "/blog" },
  { label: "Roadmap", href: "/roadmap" },
];

export const Navbar = ({
  brandName = "Borzi",
  brandInitial = "B",
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollThreshold({ threshold: 100 });

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 text-white transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-800 bg-[#18181C]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <Logo brandInitial={brandInitial} brandName={brandName} />

          {/* Desktop Navigation */}
          <DesktopNavigation navItems={navItems} />

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <DownloadButtons />

            {/* Mobile Menu Button */}
            <MobileButton setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <MobileNavigation setIsOpen={setIsOpen} navItems={navItems} />
        )}
      </div>
    </nav>
  );
};
