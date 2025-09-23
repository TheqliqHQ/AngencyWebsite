'use client'

import Container from './Container'
import Button from './Button'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cloud backdrop-blur border-b border-black/5">
      <Container className="relative flex h-16 items-center">
        {/* Brand (left) */}
        <Link href="/" className="font-semibold tracking-tight">
          Theqliq
        </Link>

        {/* Centered nav (desktop) */}
        <nav
          data-ql="nav"
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8"
        >
          <Link href="/" className="ql-nav-link">Home</Link>
          <Link href="#work" className="ql-nav-link">Work</Link>
          <Link href="#about" className="ql-nav-link">About</Link>

          {/* Careers with static 'Hiring' tooltip (NOT a separate link) */}
          <div className="flex items-center gap-2">
            <Link href="#careers" className="ql-nav-link">Careers</Link>
            <span className="ql-hiring-pill">Hiring</span>
          </div>

          <Link href="#blog" className="ql-nav-link">Blog</Link>
        </nav>

        {/* CTA (right) — Geist 500 · 14/22 */}
        <div className="ml-auto hidden md:block">
          <Button href="#contact" variant="outline" className="ql-nav-cta px-5 py-3">
            Let&apos;s talk
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="ml-auto md:hidden p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-cloud">
          <Container className="py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="ql-nav-link">Home</Link>
            <Link href="#work" onClick={() => setOpen(false)} className="ql-nav-link">Work</Link>
            <Link href="#about" onClick={() => setOpen(false)} className="ql-nav-link">About</Link>

            {/* Careers + static tooltip on mobile too */}
            <div className="flex items-center gap-2">
              <Link href="#careers" onClick={() => setOpen(false)} className="ql-nav-link">Careers</Link>
              <span className="ql-hiring-pill">Hiring</span>
            </div>

            <Link href="#blog" onClick={() => setOpen(false)} className="ql-nav-link">Blog</Link>

            <Button href="#contact" className="ql-nav-cta mt-2" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
