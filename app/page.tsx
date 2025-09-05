import { Contact } from "@/components/sections/contact"
import { Featured } from "@/components/sections/featured"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"

export default function IndexPage() {
  return (
    <main className="w-full 2xl:container">
      <Hero />
      <Services />
      <Featured />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
