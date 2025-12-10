"use client";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "AI Scanner", href: "#ai-scanner" },
      { label: "Vet Finder", href: "#find-vets" },
      { label: "Training", href: "#training" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Pet Care Guides", href: "#guides" },
      { label: "Community", href: "#community" },
      { label: "Partners", href: "#partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
];

interface FooterProps {
  brandName?: string;
  brandInitial?: string;
}

export function Footer({
  brandName = "Borzolini",
  brandInitial = "B",
}: FooterProps) {
  return (
    <footer className="border-t border-slate-800 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#9c5cf6]">
                <span className="text-lg font-bold text-white">
                  {brandInitial}
                </span>
              </div>
              <span className="text-lg font-semibold text-white">
                {brandName}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Your companion through every moment of pet ownership.
            </p>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 font-medium text-white">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-[#9c5cf6]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
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
      </div>
    </footer>
  );
}
