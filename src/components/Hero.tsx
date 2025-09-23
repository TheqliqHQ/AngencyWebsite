import Container from './Container'
import Button from './Button'
import Badge from './Badge'
import { PenTool, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-24">
      {/* Subtle grid & soft glow */}
      <div className="absolute inset-0 bg-cloud bg-grid-hero" />
      <div className="hero-glow" />

      <Container className="relative text-center">
        {/* Badge with stronger float/halo */}
        <div className="relative inline-block mx-auto mb-6">
          <span className="absolute inset-0 rounded-full blur-lg bg-black/5" aria-hidden />
          <Badge>+20 PRODUCTS LAUNCHED</Badge>
        </div>

        {/* Headline — Inter Display 600 | 64/70 | rgb(16,18,19) */}
        <h1 className="heading-display text-[64px] leading-[70px] font-[600] text-[rgb(16,18,19)] tracking-tight">
          We design{' '}
          {/* black token with mint glyph & strong drop shadow */}
          <span className="inline-flex align-middle translate-y-1 mx-1 rounded-2xl bg-[rgb(16,18,19)] text-white p-2 drop-shadow-xl">
            <PenTool className="size-5 text-[rgb(0,150,115)]" />
          </span>{' '}
          and build
          <br />
          digital products{' '}
          <span className="inline-flex align-middle -translate-y-1 mx-1 rounded-2xl bg-[rgb(16,18,19)] text-white p-2 drop-shadow-xl">
            <Code2 className="size-5 text-[rgb(0,150,115)]" />
          </span>
        </h1>

        {/* Subtext — Geist 400 | 16/24 | rgb(77,82,83) */}
        <p className="mt-6 max-w-3xl mx-auto font-[400] text-[16px] leading-[24px] text-[rgb(77,82,83)]">
          From strategy to shipping, we partner with startups and tech teams to create scalable, user-driven products — fast, and future-ready.
        </p>

        {/* CTAs — sizes/weights per spec */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {/* Hero primary: Geist 500 | 14/22 | white */}
          <Button href="#contact" className="px-6 py-4 font-[500] text-[14px] leading-[22px] text-white">
            Let&apos;s talk
          </Button>

          {/* Outline: Geist 500 | 14/22 | rgb(16,18,19) */}
          <Button
            href="#work"
            variant="outline"
            className="px-6 py-4 font-[500] text-[14px] leading-[22px] text-[rgb(16,18,19)]"
          >
            See our work
          </Button>
        </div>

        {/* Accent mint tiles behind headline */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-[45%] top-10 size-16 rounded bg-[rgb(0,150,115)]/15" />
          <div className="absolute right-40 top-28 size-16 rounded bg-[rgb(0,150,115)]/15" />
          <div className="absolute left-24 bottom-24 size-12 rounded bg-[rgb(0,150,115)]/10" />
        </div>
      </Container>
    </section>
  )
}
