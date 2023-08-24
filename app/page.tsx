import Link from "next/link"

import { archivo } from "@/lib/fonts"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SiteHero } from "@/components/site-hero"

export default function IndexPage() {
  return (
    <main className="grid items-center 2xl:container">
      <SiteHero />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className={cn(
          "text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl",
          archivo.className
        )}>
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
    </main>
  )
}
