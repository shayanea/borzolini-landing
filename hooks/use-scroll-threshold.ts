import { useEffect, useState } from "react";

interface UseScrollThresholdOptions {
  threshold?: number;
}

export function useScrollThreshold(
  options: UseScrollThresholdOptions = {}
): boolean {
  const { threshold = 100 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
