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
        "text-lg text-primary md:text-xl lg:text-2xl my-1 md:my-4",
        archivo.className
      )}>
        {title}
      </h5>
      <p>{desc}</p>
    </div>
  )
}