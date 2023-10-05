import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Service } from "../service"

export function Services() {
  return (
    <section className="relative flex w-full flex-col ">
      <div
        className={cn(
          "flex w-full flex-col items-start justify-between border-b bg-primary py-8 text-white lg:flex-row lg:items-end lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
          styles.paddingX
        )}
      >
        <h2
          className={cn(
            "section-title flex pb-4 text-4xl lg:pb-0 lg:text-7xl",
            archivo.className
          )}
        >
          our <br /> services
        </h2>

        <div className="flex lg:max-w-lg">
          <p className="text-foreground">
            <span className="text-foreground lg:text-primary">
              The SheGuards are top-notch, private, all-female security firm.
            </span>{" "}
            We are fully licensed, exceptionally and excellently trained, and
            equiped for duty.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2">
        <div className="col-span-2 w-full border-b lg:col-span-1 lg:border-r">
          <Service
            title="official meeting security"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="offer advice and instructions to guests at meetings, assist guests find their way around the premises, monitor access points and deter crimes. We are proactive about suspicious behaviour and first line of defense in emergencies."
          />
        </div>
        <div className="col-span-2 w-full border-b lg:col-span-1">
          <Service
            title="escort services"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="We guard and watch over our client closely. Often times by keeping them away from dangerous areas and people. This also includes ensuring that client vehicles or hotel rooms are safe before allowing clients to access them."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1 lg:border-r ">
          <Service
            title="clubs | pubs | lounge security"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="we manage and monitor large-crowd behaviours to ensure safety of guest. We perform security procedures such as checking for weapons before entry. This helps prevent theft and other crimes."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1">
          <Service
            title="party(private or public) security"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="we manage guest list to ensure only invited people are allowed at the premise. Crowd control and malicious activity monitoring is of major importance to us in events like these."
          />
        </div>
        <div className="col-span-2 border-b">
          <Service
            title="airport pickups & all kinds of events"
            description="tempor sit irure consectetur quis do. Ad occaecat qui occaecat deserunt proident labore pariatur amet cillum id dolor. Veniam tempor anim minim est. Ex dolore ex voluptate eu enim irure quis do consectetur labore. Tempor pariatur Lorem culpa consequat dolore elit commodo incididunt. In cupidatat sint fugiat incididunt Lorem ex."
            summary="we offer assistance in picking up your guests from the airport and escorting them to safe locations of your choosing. We are highly trained and prepared for all kinds of events you may be organizing."
          />
        </div>
        {/* <div className="col-span-2 ">all events</div> */}
      </div>
    </section>
  )
}
