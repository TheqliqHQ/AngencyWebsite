"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type TitleProp = string | [string, string, string];

type Props = {
  videoId?: string;
  className?: string;
  /** 3-line title; pass a string or a tuple of 3 strings */
  title?: TitleProp;
};

// Local thumbnail files
const FRONT_SRC = "/thumbnails/front.jpeg";
const BACK_SRC  = "/thumbnails/back.jpeg";

/** Normalize a 3-line title input */
function normalizeTitle(input?: TitleProp): [string, string, string] {
  if (Array.isArray(input)) {
    const [a = "", b = "", c = ""] = input;
    return [a, b, c];
  }
  const fallback = "CONTENT BRANDING STRATEGY";
  const words = (input ?? fallback).trim().split(/\s+/);
  if (words.length >= 3) return [words[0], words[1], words.slice(2).join(" ")];
  if (words.length === 2) return [words[0], words[1], ""];
  return [words[0] ?? fallback, "", ""];
}

export default function VideoThumbnailBranded({
  videoId,
  className = "",
  title,
}: Props) {
  const [l1, l2, l3] = normalizeTitle(title);

  /* ---------- Scroll-linked animation ---------- */
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 85%", "center 40%"],
  });

  // 0.79 * 852 ≈ 675 (requested start width)
  const rawScale   = useTransform(scrollYProgress, [0, 1], [0.79, 1]);
  const rawY       = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const scale   = useSpring(rawScale,   { stiffness: 120, damping: 20, mass: 0.4 });
  const y       = useSpring(rawY,       { stiffness: 120, damping: 20, mass: 0.4 });
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 25, mass: 0.4 });

  /* ---------- Inline modal for YouTube ---------- */
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : undefined;

  return (
    <>
      {/* Light page background stays; the panel itself is #111214 */}
      <section className={`py-8 bg-[#EDF4F5] ${className}`} aria-label="Video">
        {/* Animated container — borderless, slightly rounded */}
        <motion.div
          ref={wrapRef}
          style={{ scale, y, opacity, willChange: "transform" }}
          className="
            relative mx-auto w-[92%] max-w-[852px] aspect-[852/534]
            overflow-hidden bg-[#111214]
            rounded-[12px] [transform:translateZ(0)]
          "
        >
          {/* BACK image — small & above “BRANDING” */}
          <div className="absolute left-[58%] top-[35%] z-10 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] w-[14%] md:w-[13%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_16px_50px_rgba(0,0,0,0.5)]">
              <Image
                src={BACK_SRC}
                alt=""
                fill
                sizes="(max-width: 852px) 20vw, 14vw"
                className="object-cover brightness-95"
                priority
              />
            </div>
          </div>

          {/* FRONT image — small & above “BRANDING” */}
          <div className="absolute left-[42%] top-[34%] z-20 -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] w-[16%] md:w-[14.5%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
              <Image
                src={FRONT_SRC}
                alt=""
                fill
                sizes="(max-width: 852px) 22vw, 16vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Title (slightly bigger now) */}
          <div className="pointer-events-none absolute inset-0 z-30 grid place-items-center text-center text-white font-[600]">
            <div className="leading-[0.98] tracking-tight px-4">
              <div className="heading-display text-[clamp(28px,6.4vw,64px)]">{l1}</div>
              <div className="heading-display text-[clamp(28px,6.4vw,64px)]">{l2}</div>
              <div className="heading-display text-[clamp(28px,6.4vw,64px)]">{l3}</div>
            </div>
          </div>

          {/* Play button (solid #111214, not transparent) */}
          <button
            type="button"
            aria-label="Play video"
            onClick={() => videoId && setOpen(true)}
            className="
              absolute left-1/2 top-1/2 z-40 grid h-10 w-10 md:h-11 md:w-11
              -translate-x-1/2 -translate-y-1/2 place-content-center
              rounded-full bg-[#111214] text-white shadow-md
              transition hover:bg-[#111214]/90
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </motion.div>
      </section>

      {/* Inline modal */}
      {open && embedUrl && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-[min(92vw,852px)] aspect-[852/534] bg-[#111214] rounded-[12px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl}
              title="YouTube video"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
