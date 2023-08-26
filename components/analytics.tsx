import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { JustReveal } from "./animators/reveal-only"

interface Props {
  head: number
  title: String
  desc: String
}

export function Analytics({head, title, desc}: Props) {
  return (
    <div className="flex flex-col">
      <JustReveal>
        <h3 className={cn(
          "text-2xl md:text-5xl lg:text-7xl",
          archivo.className
        )}>
          {head}
        </h3>
      </JustReveal>
      <JustReveal>
        <h5 className={cn(
          "my-1 text-lg text-primary md:my-4 md:text-xl lg:text-2xl",
          archivo.className
        )}>
          {title}
        </h5>
      </JustReveal>
      <JustReveal>
        <p>{desc}</p>
      </JustReveal>
    </div>
  )
}
