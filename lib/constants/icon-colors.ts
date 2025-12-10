import type { IconBackgroundColor } from "@/lib/types/section";

export interface IconColorConfig {
  color: string;
  backgroundColor: IconBackgroundColor;
  gradient: string;
}

export const ICON_COLOR_MAP: Record<IconBackgroundColor, IconColorConfig> = {
  red: {
    color: "#FB7185",
    backgroundColor: "red",
    gradient: "from-[#FF69B4]/30 to-[#FF69B4]/10",
  },
  purple: {
    color: "#9C5CF6",
    backgroundColor: "purple",
    gradient: "from-[#9c5cf6]/30 to-[#9c5cf6]/10",
  },
  green: {
    color: "#35D399",
    backgroundColor: "green",
    gradient: "from-[#00FF00]/30 to-[#00FF00]/10",
  },
  yellow: {
    color: "#FBBF23",
    backgroundColor: "yellow",
    gradient: "from-[#FFA500]/30 to-[#FFA500]/10",
  },
  blue: {
    color: "#60A5FA",
    backgroundColor: "blue",
    gradient: "from-[#00BFFF]/30 to-[#00BFFF]/10",
  },
  pink: {
    color: "#F472B6",
    backgroundColor: "pink",
    gradient: "from-[#FF00FF]/30 to-[#FF00FF]/10",
  },
  teal: {
    color: "#22D3EE",
    backgroundColor: "teal",
    gradient: "from-[#00FFFF]/30 to-[#00FFFF]/10",
  },
};

export function getIconColorConfig(
  backgroundColor?: IconBackgroundColor
): IconColorConfig | null {
  if (!backgroundColor) return null;
  return ICON_COLOR_MAP[backgroundColor];
}

export function getIconGradient(backgroundColor?: IconBackgroundColor): string {
  const config = getIconColorConfig(backgroundColor);
  return config?.gradient ?? "from-slate-800 to-slate-800";
}
