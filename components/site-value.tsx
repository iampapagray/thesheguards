import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface Props {
  head: number
  title: String
  desc: String
}

export function SiteValue({head, title, desc}: Props) {
  return (
    <div className="flex flex-col">
      <h3 className={cn(
        "text-2xl md:text-5xl lg:text-7xl",
        archivo.className
      )}>
        {head}
      </h3>
      <h5 className={cn(
        "my-1 text-lg text-primary md:my-4 md:text-xl lg:text-2xl",
        archivo.className
      )}>
        {title}
      </h5>
      <p>{desc}</p>
    </div>
  )
}
