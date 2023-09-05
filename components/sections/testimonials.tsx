import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Carousel } from "../animators/carousel"
import { Icons } from "../icons"
import { Button } from "../ui/button"

export function Testimonials() {
  return (
    <section className="relative flex w-full flex-col pb-20">
      <div
        className={cn(
          "flex w-full flex-col items-start justify-between border-b bg-primary py-8 text-white lg:flex-row lg:items-end lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
          styles.paddingX
        )}
      >
        <h2
          className={cn(
            "flex pb-4 text-4xl lg:pb-0 lg:text-7xl",
            archivo.className
          )}
        >
          client <br /> testimonials
        </h2>

        <div className="flex gap-2 lg:max-w-lg">
          <Button variant={"outline"} className="px-2">
            <Icons.left className="" />
          </Button>
          <Button variant={"outline"} className="px-2">
            <Icons.right className="" />
          </Button>
        </div>
      </div>

      <Carousel />
    </section>
  )
}
