"use client";

import Link from "next/link";

interface FooterProps {
  brandName?: string;
  brandInitial?: string;
}

export function Footer({ brandName = "Borzi" }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-500">
          © 2025 {brandName}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@borzi.app"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            hello@borzi.app
          </a>
          <Link
            href="/privacy-policy"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
