"use client";

import { SectionWrapper } from "@/components/ui";
import { ArrowRight, Bell, Check, House, Video } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ComingSoon() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement email submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <SectionWrapper
      maxWidth="4xl"
      customClassName="overflow-hidden"
      backdrop={
        <div className="absolute inset-0 bg-linear-to-br from-[#9c5cf6]/5 via-transparent to-transparent" />
      }
    >
      <div className="relative">
        {/* Header Section */}
        <div className="text-center">
          {/* Coming Soon Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#9c5cf6]/20 bg-[#9c5cf6]/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9c5cf6] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9c5cf6]" />
            </span>
            <span className="text-sm font-medium text-[#9c5cf6]">
              Coming Soon
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            The future of pet care
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
            We&apos;re building new ways to connect you with veterinary care
            from anywhere
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Video Consultations Card */}
          <div className="group rounded-2xl border border-slate-800 bg-[#1f1f26] p-8 transition-all duration-300 hover:border-[#9c5cf6]/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9c5cf6]/10 transition-colors group-hover:bg-[#9c5cf6]/20">
              <Video className="h-7 w-7 text-[#9c5cf6]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Video Consultations
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              Connect with licensed veterinarians from the comfort of your home.
              Get expert advice without the stress of travel.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9c5cf6]/10">
                  <Check className="h-2.5 w-2.5 text-[#9c5cf6]" />
                </div>
                24/7 availability
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9c5cf6]/10">
                  <Check className="h-2.5 w-2.5 text-[#9c5cf6]" />
                </div>
                Recorded sessions
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9c5cf6]/10">
                  <Check className="h-2.5 w-2.5 text-[#9c5cf6]" />
                </div>
                Prescription service
              </li>
            </ul>
          </div>

          {/* Home Veterinary Visits Card */}
          <div className="group rounded-2xl border border-slate-800 bg-[#1f1f26] p-8 transition-all duration-300 hover:border-[#9c5cf6]/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9c5cf6]/10 transition-colors group-hover:bg-[#9c5cf6]/20">
              <House className="h-7 w-7 text-[#9c5cf6]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Home Veterinary Visits
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              Schedule in-home visits for routine checkups, vaccinations, or
              when your pet needs extra comfort.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9c5cf6]/10">
                  <Check className="h-2.5 w-2.5 text-[#9c5cf6]" />
                </div>
                Flexible scheduling
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9c5cf6]/10">
                  <Check className="h-2.5 w-2.5 text-[#9c5cf6]" />
                </div>
                Full service care
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9c5cf6]/10">
                  <Check className="h-2.5 w-2.5 text-[#9c5cf6]" />
                </div>
                Follow-up support
              </li>
            </ul>
          </div>
        </div>

        {/* Early Access Form */}
        <div className="rounded-2xl border border-[#9c5cf6]/20 bg-linear-to-br from-[#9c5cf6]/10 to-transparent p-8 text-center">
          <Bell className="mx-auto mb-4 h-10 w-10 text-[#9c5cf6]" />
          <h3 className="mb-2 text-xl font-semibold text-white">
            Get early access
          </h3>
          <p className="mb-6 text-slate-400">
            Be the first to know when these features launch
          </p>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-12 flex-1 rounded-xl border border-slate-700 bg-[#17171c] px-3 text-white placeholder:text-slate-500 focus:border-[#9c5cf6] focus:ring-1 focus:ring-[#9c5cf6] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-primary-foreground focus-visible:ring-ring inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#9c5cf6] px-6 py-2 font-medium whitespace-nowrap shadow transition-all hover:bg-[#8b4ae6] focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              >
                Notify me
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
