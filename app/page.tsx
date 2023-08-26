import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"

export default function IndexPage() {
  return (
    <main className="grid items-center 2xl:container">
      <Hero />
      <Services />
    </main>
  )
}
