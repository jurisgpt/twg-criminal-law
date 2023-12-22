import Header from "@/components/Header"
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
      <Analytics />
    </main>
  )
}
