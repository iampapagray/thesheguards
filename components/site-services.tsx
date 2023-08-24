import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function SiteServices() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex w-full items-end justify-between border-y pb-8 pt-20">
        <h2 
          className={cn("flex text-7xl", archivo.className)}
        >
          our <br /> services
        </h2>

        <div className="fle max-w-lg">
          <p className=" ">
            The SheGuards are a top-notch protection agency. The SheGuards are a top-notch protection agency. 
          </p>
        </div>
      </div>

      <div className="grid grid-col-2">
        <div className="flex">meeting security</div>
        <div className="flex">escort services</div>
        <div className="flex">wedding security</div>
        <div className="flex">party security</div>
        <div className="col-span-2 ">all events</div>
      </div>
    </section>
  )
}