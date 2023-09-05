import { Featured } from "@/components/sections/featured"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"

export default function IndexPage() {
  return (
    <main className="grid items-center 2xl:container">
      <Hero />
      <Services />
      <Featured />
      <Testimonials />
    </main>
  )
}
