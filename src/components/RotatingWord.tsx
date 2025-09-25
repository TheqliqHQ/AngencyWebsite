'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  words?: string[];
  /** ms between word changes */
  interval?: number;
  /** additional classes for the word */
  className?: string;
};

/**
 * Countdown/slot-style word switcher (no framer-motion required).
 * Old letters slide up & out; new letters slide up from below.
 */
export default function RotatingWord({
  words = ['cool', 'real', 'better'],
  interval = 2000,
  className = '',
}: Props) {
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0); // bumps to retrigger CSS animations

  const current = words[i];
  const longest = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), ''),
    [words]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(words[i]);
      setI((v) => (v + 1) % words.length);
      // kick CSS animations
      setAnimKey((k) => k + 1);

      // clear prev after animation completes
      const clear = setTimeout(() => setPrev(null), 520);
      return () => clearTimeout(clear);
    }, interval);

    return () => clearInterval(id);
  }, [i, interval, words]);

  const lettersIn = useMemo(() => current.split(''), [current]);
  const lettersOut = useMemo(() => (prev ?? '').split(''), [prev]);

  return (
    <span
      className={`relative inline-flex items-baseline justify-center leading-none ${className}`}
      style={{ minWidth: `${longest.length}ch` }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* outgoing letters */}
      {prev && (
        <span
          key={`out-${animKey}`}
          className="absolute inset-0 inline-flex justify-center gap-[0.02em] will-change-transform"
          aria-hidden="true"
        >
          {lettersOut.map((ch, idx) => (
            <span key={`o-${idx}`} className="inline-block overflow-hidden">
              <span className="rw-out inline-block">{ch}</span>
            </span>
          ))}
        </span>
      )}

      {/* incoming letters */}
      <span
        key={`in-${animKey}`}
        className="relative inline-flex justify-center gap-[0.02em] will-change-transform"
      >
        {lettersIn.map((ch, idx) => (
          <span key={`i-${idx}`} className="inline-block overflow-hidden">
            <span className="rw-in inline-block">{ch}</span>
          </span>
        ))}
      </span>

      {/* component-scoped CSS animations */}
      <style jsx>{`
        @keyframes rwSlideIn {
          from {
            transform: translateY(110%);
            opacity: 0.001;
          }
          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes rwSlideOut {
          from {
            transform: translateY(0%);
            opacity: 1;
          }
          to {
            transform: translateY(-110%);
            opacity: 0.001;
          }
        }
        .rw-in {
          animation: rwSlideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .rw-out {
          animation: rwSlideOut 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </span>
  );
}
