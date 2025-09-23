// app/fonts.ts
import { Inter } from "next/font/google";

// Inter for headings (Display) — 600
export const interDisplay = Inter({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-inter",
});
