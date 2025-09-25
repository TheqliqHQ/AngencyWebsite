// src/components/CTA.tsx
'use client';

import Container from './Container';
import Button from './Button';
import RotatingWord from './RotatingWord';

export default function CTA() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      {/* Centered background panel ONLY behind the content */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-0 -translate-x-1/2
          w-[min(92vw,900px)] h-full
          z-0
        "
        aria-hidden
      >
        {/* pure white panel (no #edf4f5) with hero grid */}
        <div
          className="absolute inset-0 bg-white bg-grid-hero"
          style={{ backgroundColor: '#ffffff' }}
        />
        {/* same glow as hero */}
        <div className="hero-glow absolute inset-0" />
        {/* mint accents like the hero, kept subtle */}
        <div className="absolute left-[56%] top-12 size-16 rounded bg-[rgb(0,150,115)]/15" />
        <div className="absolute right-24 top-36 size-16 rounded bg-[rgb(0,150,115)]/15" />
        <div className="absolute left-20 bottom-16 size-12 rounded bg-[rgb(0,150,115)]/10" />
      </div>

      <Container className="relative z-10 text-center">
        {/* Smaller Heading */}
        <h2 className="font-[600] tracking-tight">
          <span className="block text-[clamp(28px,4.8vw,44px)] text-[rgb(16,18,19)]">
            Let’s build something
          </span>
          <span className="mt-1 block text-[clamp(30px,5.2vw,48px)] text-[rgb(153,162,165)]">
            <RotatingWord words={['cool', 'real', 'better']} interval={1800} />
          </span>
        </h2>

        {/* Subtle copy — forced to 3 lines on md+ */}
        <p className="mx-auto mt-6 max-w-[46ch] px-4 text-center text-[16px] leading-[24px] text-[rgb(77,82,83)]">
          Tell us about your product idea, challenge, or roadmap.
          <br className="hidden md:block" />
          We’ll offer honest input
          <br className="hidden md:block" />
          and see if we’re the right fit.
        </p>

        {/* CTA — same button style as Hero */}
        <div className="mt-8 flex items-center justify-center">
          <Button
            href="#contact"
            className="px-6 py-4 font-[500] text-[14px] leading-[22px] text-white"
          >
            Let&apos;s talk
          </Button>
        </div>
      </Container>
    </section>
  );
}
