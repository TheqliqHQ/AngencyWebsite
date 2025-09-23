// app/fonts.ts
import { Inter } from "next/font/google";

/**
 * Inter (used as "Inter Display" for headings)
 * We load 600/700 so headings can stay bold across the site.
 * Add more weights if you need them later.
 */
export const interDisplay = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-inter",
});
