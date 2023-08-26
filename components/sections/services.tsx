import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"
import { Service } from "../service"

export function Services() {
  return (
    <section className="relative flex w-full flex-col ">
      <div className={cn(
        "flex w-full flex-col items-start justify-between border-b bg-primary py-8 text-white lg:flex-row lg:items-end lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
        styles.paddingX
      )}>
        <h2
          className={cn("flex pb-4 text-4xl lg:pb-0 lg:text-7xl", archivo.className)}
        >
          our <br /> services
        </h2>

        <div className="flex lg:max-w-lg">
          <p className=" ">
            The SheGuards are top-notch protection experts. The SheGuards are a top-notch protection agency. The SheGuards are a top-notch protection agency.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2">
        <div className="col-span-2 w-full border-b lg:col-span-1 lg:border-r">
          <Service 
            title="meeting security"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est."
          />
        </div>
        <div className="col-span-2 w-full border-b lg:col-span-1">
          <Service 
            title="escort services"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1 lg:border-r ">
          <Service 
            title="wedding security"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1">
          <Service 
            title="party security"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est."
          />
        </div>
        {/* <div className="col-span-2 ">all events</div> */}
      </div>
    </section>
  )
}
