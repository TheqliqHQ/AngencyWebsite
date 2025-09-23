'use client'
import Container from './Container'
import Badge from './Badge'
import { useState } from 'react'

const faqs = [
  {q:'What type of businesses do you work with?', a:'Startups, fashion brands, creative entrepreneurs, and small businesses who want structured growth.'},
  {q:'Do I need a big budget to work with Theqliq?', a:'No. We offer flexible packages sized to your stage and goals.'},
  {q:'Can you handle everything or just one service?', a:'Both — from social media only to full‑service marketing.'},
  {q:'Do you work remotely?', a:'Yes, we work with clients globally with seamless online collaboration.'},
  {q:'How soon can I expect results?', a:'Early engagement can improve within weeks; durable growth comes with consistent strategy.'}
]

function Item({q,a}:{q:string;a:string}){
  const [open,setOpen]=useState(false)
  return (
    <div className="rounded-2xl bg-white border border-black/5 p-4">
      <button className="w-full text-left flex items-center justify-between" onClick={()=>setOpen(!open)} aria-expanded={open}>
        <span>{q}</span><span className="text-xl">{open?'–':'+'}</span>
      </button>
      {open && <p className="mt-3 text-sm opacity-80">{a}</p>}
    </div>
  )
}

export default function FAQ(){
  return (
    <section className="py-24 bg-cloud">
      <Container>
        <div className="text-center"><Badge>FAQS</Badge></div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">Answers to the questions you might have</h2>
        <div className="mt-8 space-y-4 max-w-2xl mx-auto">
          {faqs.map(f=> <Item key={f.q} {...f} />)}
        </div>
        <div className="mt-10 text-center">
          <p className="font-semibold">Still have questions?</p>
          <p className="text-sm opacity-70">We’re here to help. Whether you’re exploring an idea or ready to build, let’s talk.</p>
        </div>
      </Container>
    </section>
  )
}
