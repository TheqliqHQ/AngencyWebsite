import Container from './Container'
import Badge from './Badge'

const steps = [
  { title:'Consult', body:'We listen first — goals, audience, challenges — to shape a plan that fits your vision.'},
  { title:'Strategize', body:'We build a clear growth strategy blending marketing, social, and creative direction.'},
  { title:'Create', body:'We produce content and campaigns that tell your story and move people to act.'},
  { title:'Scale', body:'We track, optimize, and expand what works for long‑term impact.'},
]

export default function Process(){
  return (
    <section className="py-24 bg-ink text-white" id="process">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Badge>PROCESS</Badge>
            <h2 className="mt-6 text-3xl font-extrabold">A clear process to grow brands</h2>
            <p className="mt-3 text-white/70 max-w-md">From consultation to scale, we keep things lean, collaborative, and results‑driven.</p>
          </div>
          <ol className="relative border-s-2 border-brand/60 pl-8 space-y-10">
            {steps.map((s, i)=>(
              <li key={s.title} className="relative">
                <span className="absolute -left-[34px] top-0 grid size-7 place-items-center rounded-full bg-brand text-ink text-xs font-bold">{i+1}</span>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-white/70 text-sm mt-1">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
