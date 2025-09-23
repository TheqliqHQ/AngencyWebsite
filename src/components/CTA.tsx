import Container from './Container'
import Button from './Button'
import RotatingWord from './RotatingWord'

export default function CTA(){
  return (
    <section className="py-24 bg-white bg-grid">
      <Container className="text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold">Let&apos;s build something</h2>
        <div className="mt-1 text-5xl sm:text-6xl font-extrabold"><RotatingWord words={['cool','real','structured','impactful']} /></div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-ink/70">Tell us about your brand, challenge, or goal. We’ll provide clarity, strategy, and structure to help your business grow.</p>
        <div className="mt-8"><Button href="#contact">Let&apos;s talk</Button></div>
      </Container>
    </section>
  )
}
