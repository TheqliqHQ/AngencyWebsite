import Container from './Container'
import Badge from './Badge'

const services = [
  { title:'Social Media Management', desc:'Build community and engagement on Instagram, Threads and TikTok with consistent, structured content.', tone:'light' },
  { title:'Digital Marketing', desc:'Campaigns that drive awareness and conversion across paid & organic channels.', tone:'brand' },
  { title:'Web Development', desc:'Modern, fast, SEO‑ready sites that support your growth.', tone:'dark' },
  { title:'Email Marketing', desc:'Lifecycle emails that nurture, convert, and retain.', tone:'light' },
  { title:'Content Creation', desc:'Copy + visuals that tell your story with clarity and impact.', tone:'brand' },
  { title:'Business Consultation', desc:'Strategy, systems, and structure to scale what works.', tone:'dark' }
]

function Card({title, desc, tone}:{title:string;desc:string;tone:'light'|'brand'|'dark'}){
  const styles = {
    light: 'bg-white border border-black/10',
    brand: 'bg-brand/15 border border-brand/20',
    dark: 'bg-ink text-white border border-white/10'
  }[tone]
  return (
    <div className={`rounded-3xl p-8 shadow-sm ${styles}`}>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm opacity-80">{desc}</p>
      <div className="mt-6 text-sm opacity-90 underline underline-offset-4">Learn more</div>
    </div>
  )
}

export default function Services(){
  return (
    <section aria-labelledby="services" className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          <div className="col-span-1"><Badge>Services</Badge></div>
          <p className="lg:col-span-2 text-sm opacity-80">At Theqliq we offer structured marketing services that bring clarity and momentum to your brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(s => <Card key={s.title} {...s} />)}
        </div>
      </Container>
    </section>
  )
}
