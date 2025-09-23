// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { interDisplay } from "./fonts";

export const metadata: Metadata = {
  title: { default: "Theqliq — Structure for brand growth", template: "%s · Theqliq" },
  description: "We help brands grow with clarity, structure, and creativity.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Geist for body/UI text */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Expose Inter variable to CSS for headings */}
      <body className={`${interDisplay.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
