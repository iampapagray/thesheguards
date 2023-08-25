import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import styles from "@/styles/styles"
import { archivo } from "@/lib/fonts"

interface Props {
  title: string
  summary: string
  description: string
}

export function Service({title, summary, description}:Props) {
  return (
    <div className={cn(
      "group flex h-60 flex-col justify-between py-6 lg:h-80 lg:py-12",
      styles.paddingX
    )}>
      <h2 className={cn(
        "text-2xl group-hover:text-primary lg:text-4xl",
        archivo.className
      )}>{title}</h2>
      <p className="">{summary}</p>
      <Button
        variant="outline"
        className="w-fit group-hover:border-primary group-hover:bg-primary group-hover:text-white"
      >
        Learn more&nbsp;
        <Icons.longArrow className="h-4" />
      </Button>
    </div>
  )
}
