"use client";

export function VetFinder() {
  return (
    <section className="relative px-6 py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17171c] via-[#1a1a21] to-[#17171c]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#9c5cf6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Find Care Nearby
            </span>

            {/* Main Title */}
            <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
              Connect with trusted veterinary clinics
            </h2>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-slate-400">
              Find the right care when you need it. Search by service type, read
              verified reviews, and check real-time availability.
            </p>

            {/* Service Filters */}
            <div className="mb-8">
              <p className="mb-3 text-sm text-slate-500">Filter by service</p>
              <div className="flex flex-wrap gap-2">
                {/* Vaccination */}
                <button
                  type="button"
                  className="hover:bg-opacity-20 inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m18 2 4 4" />
                    <path d="m17 7 3-3" />
                    <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
                    <path d="m9 11 4 4" />
                    <path d="m5 19-3 3" />
                    <path d="m14 4 6 6" />
                  </svg>
                  <span>Vaccination</span>
                </button>

                {/* Dental */}
                <button
                  type="button"
                  className="hover:bg-opacity-20 inline-flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
                  </svg>
                  <span>Dental</span>
                </button>

                {/* Emergency */}
                <button
                  type="button"
                  className="hover:bg-opacity-20 inline-flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  <span>Emergency</span>
                </button>

                {/* Surgery */}
                <button
                  type="button"
                  className="hover:bg-opacity-20 inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                  <span>Surgery</span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-[#1f1f26] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-slate-500">Partner Clinics</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-[#1f1f26] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-slate-500">Emergency Access</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-[#1f1f26] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-white">4.8</p>
                <p className="text-xs text-slate-500">Avg. Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="relative rounded-3xl border border-slate-800 bg-[#1f1f26] p-4 shadow-2xl">
              {/* Map Area */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#17171c]">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  {/* Horizontal Lines */}
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "10%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "20%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "30%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "40%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "50%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "60%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "70%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "80%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "90%" }}
                  />
                  <div
                    className="absolute right-0 left-0 h-px bg-slate-700"
                    style={{ top: "100%" }}
                  />
                  {/* Vertical Lines */}
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "10%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "20%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "30%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "40%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "50%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "60%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "70%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "80%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "90%" }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px bg-slate-700"
                    style={{ left: "100%" }}
                  />
                </div>

                {/* User Location Pin */}
                <div className="absolute" style={{ top: "30%", left: "40%" }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9c5cf6] shadow-lg shadow-[#9c5cf6]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-white"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium whitespace-nowrap text-[#17171c]">
                    You are here
                  </div>
                </div>

                {/* Clinic Markers */}
                <div className="absolute" style={{ top: "25%", left: "60%" }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-slate-400"
                    >
                      <path d="M11 2v2" />
                      <path d="M5 2v2" />
                      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                      <path d="M8 15a6 6 0 0 0 12 0v-3" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                </div>

                <div className="absolute" style={{ top: "50%", left: "30%" }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-slate-400"
                    >
                      <path d="M11 2v2" />
                      <path d="M5 2v2" />
                      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                      <path d="M8 15a6 6 0 0 0 12 0v-3" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                </div>

                <div className="absolute" style={{ top: "65%", left: "55%" }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-slate-400"
                    >
                      <path d="M11 2v2" />
                      <path d="M5 2v2" />
                      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                      <path d="M8 15a6 6 0 0 0 12 0v-3" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Nearby Clinics List */}
              <div className="absolute right-4 bottom-8 left-4">
                <div className="rounded-2xl border border-slate-800 bg-[#17171c]/95 p-4 backdrop-blur-lg">
                  <p className="mb-3 font-medium text-white">Nearby Clinics</p>
                  <div className="space-y-2">
                    {/* Clinic 1 */}
                    <div className="flex cursor-pointer items-center justify-between rounded-xl bg-[#1f1f26] p-3 transition-colors hover:bg-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-slate-400"
                          >
                            <path d="M11 2v2" />
                            <path d="M5 2v2" />
                            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                            <path d="M8 15a6 6 0 0 0 12 0v-3" />
                            <circle cx="20" cy="10" r="2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            City Veterinary Center
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3 w-3 text-amber-400"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                              </svg>
                              4.9
                            </span>
                            <span>•</span>
                            <span>0.8 km</span>
                          </div>
                        </div>
                      </div>
                      <div className="focus:ring-ring inline-flex items-center rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-400 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Open
                      </div>
                    </div>

                    {/* Clinic 2 */}
                    <div className="flex cursor-pointer items-center justify-between rounded-xl bg-[#1f1f26] p-3 transition-colors hover:bg-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-slate-400"
                          >
                            <path d="M11 2v2" />
                            <path d="M5 2v2" />
                            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                            <path d="M8 15a6 6 0 0 0 12 0v-3" />
                            <circle cx="20" cy="10" r="2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            Pet Emergency 24/7
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3 w-3 text-amber-400"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                              </svg>
                              4.8
                            </span>
                            <span>•</span>
                            <span>1.2 km</span>
                          </div>
                        </div>
                      </div>
                      <div className="focus:ring-ring inline-flex items-center rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-400 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Open
                      </div>
                    </div>

                    {/* Clinic 3 */}
                    <div className="flex cursor-pointer items-center justify-between rounded-xl bg-[#1f1f26] p-3 transition-colors hover:bg-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-slate-400"
                          >
                            <path d="M11 2v2" />
                            <path d="M5 2v2" />
                            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                            <path d="M8 15a6 6 0 0 0 12 0v-3" />
                            <circle cx="20" cy="10" r="2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            Dental Pet Clinic
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3 w-3 text-amber-400"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                              </svg>
                              4.7
                            </span>
                            <span>•</span>
                            <span>2.1 km</span>
                          </div>
                        </div>
                      </div>
                      <div className="focus:ring-ring inline-flex items-center rounded-md border border-slate-500/20 bg-slate-500/10 px-2.5 py-0.5 text-xs font-semibold text-slate-400 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
