import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

export function SiteServices() {
  return (
    <section className="flex h-screen w-full flex-col ">
      <div className={cn(
        "flex w-full flex-col items-start justify-between border-b py-8 lg:flex-row lg:items-end lg:pb-8 lg:pt-20",
        styles.paddingX
      )}>
        <h2
          className={cn("flex pb-4 text-4xl lg:pb-0 lg:text-7xl", archivo.className)}
        >
          our <br /> services
        </h2>

        <div className="flex lg:max-w-lg">
          <p className=" ">
            The SheGuards are a top-notch protection agency. The SheGuards are a top-notch protection agency. The SheGuards are a top-notch protection agency.
          </p>
        </div>
      </div>

      {/* <div className="grid-col-2 grid">
        <div className="flex">meeting security</div>
        <div className="flex">escort services</div>
        <div className="flex">wedding security</div>
        <div className="flex">party security</div>
        <div className="col-span-2 ">all events</div>
      </div> */}
    </section>
  )
}
