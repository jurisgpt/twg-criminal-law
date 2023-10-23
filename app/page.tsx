import Image from 'next/image'
import Header from "@/components/Header";
import Hero from '@/components/Hero'
import Doc from '@/components/Doc'
import Testimonial3 from '@/components/Testimonials3'

export default function Home() {
  return (

    <main>
      <Header />
      <Hero />
      {/* <Doc /> */}
      <Testimonial3 />
    </main>
  )
}
