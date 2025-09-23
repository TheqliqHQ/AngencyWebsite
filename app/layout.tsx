// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { interDisplay } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Theqliq — Structure for brand growth",
    template: "%s · Theqliq",
  },
  description:
    "We help brands grow with clarity, structure, and creativity.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Load Geist from Google so body/nav text uses it */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* 
        - Attach Inter variable (for headings) from next/font
        - Background uses rgb(237,244,245) via bg-cloud (globals.css)
        - Body font-family is Geist from globals.css
      */}
      <body
        className={`${interDisplay.variable} min-h-screen antialiased bg-cloud text-[rgb(16,18,19)]`}
      >
        {children}
      </body>
    </html>
  );
}
