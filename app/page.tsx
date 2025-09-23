import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import VideoEmbed from '@/components/VideoEmbed'   // ← add this
import Clients from '@/components/Clients'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BlogPreview from '@/components/BlogPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />

      {/* YouTube section — big black panel */}
      <VideoEmbed videoId="YOUR_YOUTUBE_ID" title="Theqliq — video" />

      <Clients />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTA />
      <Footer />
    </main>
  )
}
