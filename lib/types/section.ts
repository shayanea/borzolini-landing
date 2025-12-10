import type { ReactNode } from "react";

export type IconBackgroundColor =
  | "red"
  | "purple"
  | "green"
  | "yellow"
  | "blue"
  | "pink"
  | "teal";

export interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  titleSize?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center";
}

export interface SectionWrapperProps {
  children: ReactNode;
  backdrop?: ReactNode;
  customClassName?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl";
}
