import Container from './Container'
import Badge from './Badge'
import Image from 'next/image'

export default function About(){
  return (
    <section id="about" className="py-24 bg-cloud">
      <Container>
        <div className="text-center"><Badge>ABOUT US</Badge></div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">Shaping brands with clarity and creativity</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-6 border border-black/5 shadow-sm">
            <div className="pill mb-3 inline-block">Our mission</div>
            <h3 className="font-semibold mb-2">Build with structure.</h3>
            <p className="text-sm opacity-80">We help businesses stop leaking growth by installing systems, strategy, and creativity that turn ideas into consistent results.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 border border-black/5 shadow-sm">
            <div className="pill mb-3 inline-block">Who we work with</div>
            <h3 className="font-semibold mb-2">For founders and growing teams.</h3>
            <p className="text-sm opacity-80">We partner with entrepreneurs, startups, and small businesses who want more than noise — they want real momentum.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 border border-black/5 shadow-sm md:col-span-1">
            <blockquote className="text-xl font-semibold leading-snug">
              “I started Theqliq because I saw too many brands fail, not because they were bad, but because they lacked structure. We built Theqliq to give businesses clarity, strategy, and creativity — and that’s how we still work today.”
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-8 rounded-full bg-brand" aria-hidden />
              <div className="text-sm"><span className="font-medium">Damilola</span>, Founder at Theqliq</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm">
            <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="" width={1200} height={900}/>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[['50+','Campaigns launched'],['5+','Years experience'],['10+','Industries served']].map(([n,l])=> (
            <div key={n} className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
              <div className="text-3xl font-extrabold">{n}</div>
              <div className="text-sm opacity-70">{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
