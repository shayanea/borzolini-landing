"use client";

interface FooterProps {
  brandName?: string;
  brandInitial?: string;
}

export function Footer({ brandName = "Borzolini" }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 p-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-sm text-slate-500">
          © 2025 {brandName}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#privacy"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
