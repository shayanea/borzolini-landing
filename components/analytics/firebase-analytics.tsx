"use client";

import { useEffect } from "react";

export function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@/lib/firebase"); // Just trigger the import to initialize
    }
  }, []);

  return null;
}
