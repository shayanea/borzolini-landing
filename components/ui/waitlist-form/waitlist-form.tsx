"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { useState } from "react";

interface WaitlistFormProps {
  className?: string;
  variant?: "default" | "minimal";
  placeholder?: string;
}

export function WaitlistForm({
  className = "",
  placeholder = "Enter your email address",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-6 py-3 text-green-400 ${className}`}
      >
        <div className="rounded-full bg-green-500/20 p-1">
          <Check className="h-4 w-4" />
        </div>
        <span className="font-medium">
          You&apos;re on the list! We&apos;ll be in touch soon.
        </span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="group relative">
        <div className="from-primary-600 absolute -inset-1 inset-0 rounded-xl bg-gradient-to-r to-pink-600 opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute left-4 text-slate-400">
            <Mail className="h-5 w-5" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="focus:border-primary-500/50 focus:ring-primary-500/50 w-full rounded-xl border border-white/10 bg-slate-900/90 py-4 pr-32 pl-12 text-base text-white shadow-xl backdrop-blur-xl transition-all placeholder:text-slate-500 focus:bg-slate-900 focus:ring-1 focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="absolute top-2 right-2 bottom-2 inline-flex items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-900 transition-all hover:scale-105 hover:bg-slate-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <span>Join Waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 flex items-center gap-2 text-sm text-red-400"
        >
          <AlertCircle className="h-4 w-4" />
          <span>{errorMessage}</span>
        </motion.div>
      )}
      {status !== "error" && (
        <p className="mt-3 pl-1 text-sm text-slate-500">
          Be the first to know when we launch.
        </p>
      )}
    </form>
  );
}
