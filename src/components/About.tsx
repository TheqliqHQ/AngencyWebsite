// src/components/About.tsx
'use client';

import Container from './Container';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function About() {
  // === Base styles (no shadows) ===
  const cardBase  = 'rounded-2xl bg-white border border-black/5 shadow-none';
  const cardSm    = `${cardBase} flex-none w-full h-auto p-8 md:w-[566px] md:h-[200px]`;
  const cardQuote = `${cardBase} flex-none w-full h-auto p-8 md:w-[700px] md:h-[400px] flex flex-col justify-between`;
  const imgBlock  = 'relative flex-none w-full h-[260px] md:w-[432.67px] md:h-[400px] overflow-hidden rounded-2xl';

  const chipBase =
    'inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1';

  const smallTitle =
    'text-[20px] leading-[24px] font-semibold text-[rgb(16,18,19)]';

  const body =
    'text-[16px] leading-[24px] text-[rgb(77,82,83)] max-w-[55ch]';

  // ===== Per-line reveal with late "hold" (after last line appears) =====
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ['start 90%', 'end 10%'], // broad active range for smoothness
  });

  // Lines to reveal in order
  const quoteLines = [
    'I started Theqliq because I saw too many brands fail —',
    'not because they were bad, but because they lacked structure.',
    'We built Theqliq to give businesses clarity, strategy, and creativity —',
    'and that’s how we still work today.',
  ];

  // Distribute line centers across [0..1]
  const L = quoteLines.length;
  const step = 1 / (L + 1);
  const windowSize = step * 0.75; // wider window = slower/slicker reveal

  // "Hold all visible" only AFTER the last line has fully revealed
  const lastCenter = (L) * step; // center of last line
  const holdStart = clamp(lastCenter + windowSize / 2 + 0.02, 0, 0.92);
  const holdEnd   = 0.98;

  // 0..holdStart -> 0, then 1 until near end, then 0 again
  const holdRaw = useTransform(scrollYProgress, [0, holdStart, holdEnd, 1], [0, 0, 1, 0]);
  const hold = useSpring(holdRaw, { stiffness: 60, damping: 24, mass: 0.5 });

  // Per-line springs (reveal sequentially; stay visible unless scrolling back above start)
  const lineSprings = quoteLines.map((_, i) => {
    const center = (i + 1) * step;
    const start = clamp(center - windowSize / 2, 0, 1);
    const end   = clamp(center + windowSize / 2, 0, 1);

    // 0..start -> 0; start..end -> fade to 1; end..1 -> stay 1
    const lineOpacityRaw = useTransform(scrollYProgress, [0, start, end, 1], [0, 0, 1, 1]);
    const opacityCombinedRaw = useTransform([lineOpacityRaw, hold], ([o, h]) => Math.max(o, h));
    const opacity = useSpring(opacityCombinedRaw, { stiffness: 60, damping: 24, mass: 0.5 });

    // Slide up gently; if hold is active, lock to 0 for steadiness
    const lineYRaw = useTransform(scrollYProgress, [0, start, end, 1], [16, 16, 0, 0]);
    const yCombinedRaw = useTransform([lineYRaw, hold], ([y, h]) => (h > 0.5 ? 0 : y));
    const y = useSpring(yCombinedRaw, { stiffness: 60, damping: 24, mass: 0.5 });

    return { opacity, y };
  });

  return (
    <section id="about" className="bg-cloud py-24 scroll-smooth">
      <Container>
        {/* ABOUT US chip (Inter Display 500 · 14/17) */}
        <div className="text-center">
          <span
            className={`${chipBase} heading-display font-[500] text-[14px] leading-[17px] text-[rgb(16,18,19)]`}
            style={{ fontFamily: '"Inter Display","Inter Display Placeholder",sans-serif' }}
          >
            ABOUT US
          </span>
        </div>

        {/* Heading (Inter Display 600 · 48/56) */}
        <h2
          className="mt-6 text-center heading-display font-[600] text-[48px] leading-[56px] tracking-tight text-[rgb(16,18,19)]"
          style={{ fontFamily: '"Inter Display","Inter Display Placeholder",sans-serif' }}
        >
          <span className="block">Shaping brands with</span>
          <span className="block">clarity and creativity</span>
        </h2>

        {/* Row 1 — two small cards */}
        <div className="mt-6 mx-auto md:max-w-[1200px] flex flex-wrap md:flex-nowrap justify-center gap-3">
          <div className={cardSm}>
            <span
              className={`${chipBase} mb-3 font-[500] text-[14px] leading-[22px] text-[rgb(77,82,83)]`}
              style={{ fontFamily: 'Geist, "Geist Placeholder", sans-serif' }}
            >
              Our mission
            </span>
            <h3 className={`${smallTitle} mb-2`}>Build with structure.</h3>
            <p className={body}>
              We help businesses stop leaking growth by installing systems,
              strategy, and creativity that turn ideas into consistent results — fast,
              scalable, and user-first from day one.
            </p>
          </div>

          <div className={cardSm}>
            <span
              className={`${chipBase} mb-3 font-[500] text-[14px] leading-[22px] text-[rgb(77,82,83)]`}
              style={{ fontFamily: 'Geist, "Geist Placeholder", sans-serif' }}
            >
              Who we work with
            </span>
            <h3 className={`${smallTitle} mb-2`}>For founders and growing teams.</h3>
            <p className={body}>
              We partner with entrepreneurs, startups, and small businesses who want
              more than noise — they want real momentum.
            </p>
          </div>
        </div>

        {/* Row 2 — quote + image */}
        <div className="mt-3 mx-auto md:max-w-[1200px] flex flex-wrap md:flex-nowrap justify-center gap-3">
          {/* QUOTE: line-by-line reveal; hold all visible after last line */}
          <div ref={quoteRef} className={cardQuote}>
            <div
              className="heading-display font-[600] text-[28px] leading-[30px] tracking-tight text-[rgb(16,18,19)] max-w-[58ch] space-y-2"
              style={{ fontFamily: '"Inter Display","Inter Display Placeholder",sans-serif' }}
            >
              {quoteLines.map((line, i) => (
                <motion.div key={i} style={{ opacity: lineSprings[i].opacity, y: lineSprings[i].y }}>
                  {line}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {/* Avatar 40×40 round */}
              <div className="h-10 w-10 rounded-full overflow-hidden relative">
                <Image
                  src="/myavarter.jpeg"
                  alt="Damilola"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[14px] leading-[22px]"
                  style={{
                    fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                    fontWeight: 700,
                    color: 'rgb(0,0,0)',
                  }}
                >
                  Damilola
                </span>
                <span
                  className="text-[14px] leading-[22px] text-[rgb(77,82,83)]"
                  style={{
                    fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Founder at Theqliq
                </span>
              </div>
            </div>
          </div>

          {/* Pure image (no card chrome) */}
          <div className={imgBlock}>
            <Image
              src="/aboutimage.jpeg"
              alt="Team at work"
              fill
              sizes="(max-width: 768px) 100vw, 432px"
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
