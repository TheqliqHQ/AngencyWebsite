import Container from './Container'

export default function Footer(){
  return (
    <footer className="bg-ink text-white pt-16 pb-10 relative overflow-hidden">
      <Container className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="text-xl font-semibold">Theqliq</div>
          <div className="mt-4 flex gap-3">
            {['X', 'IG', 'in'].map(x=> <div key={x} className="size-10 grid place-items-center rounded-xl bg-white/10 border border-white/10">{x}</div>)}
          </div>
          <div className="mt-6 text-white/70">hello@theqliq.com</div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-white/80">
              <li><a href="#">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers <span className="ml-1 inline-block rounded-full bg-brand/20 text-brand px-2 text-xs">Hiring</span></a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Resources</div>
            <ul className="space-y-2 text-white/80">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-4">Newsletter</div>
          <p className="text-white/70 text-sm">Sign up for practical tips on branding, marketing, and growth.</p>
          <form className="mt-4 flex gap-2">
            <input aria-label="Email address" type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-3 placeholder:text-white/50"/>
            <button className="rounded-full bg-white text-ink px-5 py-3">Subscribe</button>
          </form>
          <p className="text-white/60 text-xs mt-2">Only the good stuff. Unsubscribe anytime.</p>
        </div>
      </Container>
      <div aria-hidden className="pointer-events-none absolute -bottom-10 left-0 right-0 text-[30vw] leading-none font-extrabold text-white/5 select-none">THEQLIQ</div>
    </footer>
  )
}
