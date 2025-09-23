import Container from './Container'
import Badge from './Badge'
import Image from 'next/image'

export default function Testimonials(){
  return (
    <section className="py-24 bg-cloud">
      <Container>
        <div className="text-center"><Badge>TESTIMONIALS</Badge></div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">Real words from brands we’ve worked with</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm">
            <div className="text-3xl">“</div>
            <p className="mt-4 text-lg font-medium">What our clients are saying</p>
            <div className="mt-8">
              <div className="text-2xl font-extrabold">50+</div>
              <div className="text-sm opacity-70">Satisfied businesses</div>
            </div>
            <div className="mt-6 flex -space-x-2">{[0,1,2,3].map(i=> <div key={i} className="size-8 rounded-full ring-2 ring-white bg-black/20" />)}</div>
          </div>
          <div className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm">
            <p>“Theqliq didn’t just handle our social media — they gave us structure. Engagement went up and our voice became clear.”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-8 rounded-full bg-black/20" />
              <div className="text-sm"><div className="font-medium">Amina Yusuf</div><div className="opacity-70">Marketing Lead, Fashion Startup</div></div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border">
              <Image src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" alt="" width={1200} height={800}/>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm">
            <p>“Working with Theqliq felt like adding a real partner. They brought clarity, consistency, and growth — fast.”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-8 rounded-full bg-black/20" />
              <div className="text-sm"><div className="font-medium">Chinedu Okeke</div><div className="opacity-70">Founder, Tech SME</div></div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border">
              <Image src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" alt="" width={1200} height={800}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
