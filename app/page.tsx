import Link from "next/link"

import { archivo } from "@/lib/fonts"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SiteHero } from "@/components/site-hero"
import { SiteServices } from "@/components/site-services"

export default function IndexPage() {
  return (
    <main className="grid items-center 2xl:container">
      <SiteHero />
      {/* <SiteServices /> */}
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className={cn(
          "text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl",
          archivo.className
        )}>
          Beautifully designed components <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components. Open Source. And Next.js 13 Ready.
        </p>
      </div> */}
    </main>
  )
}
