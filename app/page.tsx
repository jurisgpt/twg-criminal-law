import Header from "@/components/Header"
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Testimonial3 from '@/components/Testimonials3'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Testimonial3 />
      <FAQ />
      <Footer />
      <Analytics />
    </main>
  )
}
