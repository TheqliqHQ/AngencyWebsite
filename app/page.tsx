// app/page.tsx
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import VideoThumbnailBranded from '@/components/VideoThumbnailBranded'
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

      {/* Branded YouTube thumbnail with local images */}
      <VideoThumbnailBranded
        videoId="YOUR_YOUTUBE_ID"
        title={['CONTENT', 'BRANDING', 'STRATEGY']}
      />

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
