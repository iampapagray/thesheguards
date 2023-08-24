import { archivo } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteValue } from "./site-value";

export function SiteHero(){
  return (
    <section className="flex h-[95vh] flex-col">
      <div className="flex h-2/3 flex-col border-b lg:flex-row">
        <div className="flex h-1/2 w-full flex-col items-start justify-center gap-4 border-b px-8 lg:h-full lg:w-1/2 lg:gap-16 lg:border-b-0 lg:border-r lg:px-14">
          <h1 className={cn(
            "text-4xl lg:text-7xl",
            archivo.className
          )}>
            integrity<span className="text-primary">,</span><br/>
            transparency<span className="text-primary">,</span><br/>
            vigilance<span className="text-primary">.</span>
          </h1>
          <p className="">
            marketing and communications investments of the world&apos;s largest and most creative clients accross channels
          </p>
        </div>
        <div className="flex h-1/2 w-full flex-col items-start justify-center lg:h-full lg:w-1/2">
          Promo/Advertising Video
        </div>
      </div>
      <div className="grid h-1/3 w-full grid-cols-1 lg:grid-cols-3">
        <div className="border-b p-4 px-8 lg:px-14 lg:py-10">
          <SiteValue
            head={2500}
            title={'protected'}
            desc="Mollit minim ut incididunt culpa minim velit tempor culpa. Minim culpa ea duis sit adipisicing adipisicing occaecat."
          />
        </div>
        <div className="border-b p-4 px-8 lg:border-x lg:border-t-0 lg:px-14 lg:py-10">
          <SiteValue
            head={67}
            title={'events'}
            desc="Mollit minim ut incididunt culpa minim velit tempor culpa. Minim culpa ea duis sit adipisicing adipisicing occaecat."
          />
        </div>
        <div className="border-b p-4 px-8 lg:px-14 lg:py-10">
          <SiteValue
            head={24}
            title={'clients'}
            desc="Mollit minim ut incididunt culpa minim velit tempor culpa. Minim culpa ea duis sit adipisicing adipisicing occaecat."
          /></div>
      </div>
    </section>
  )
}