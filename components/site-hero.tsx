import { archivo } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteValue } from "./site-value";
// import { TextSpan } from "./text-span";
// import {motion} from "framer-motion";
import { HeroHeading } from "./hero-heading";

export function SiteHero(){
 
  return (
    <section className="flex h-[95vh] flex-col">
      <div className="flex h-2/3 flex-col border-b lg:flex-row">
        <div className="flex h-1/2 w-full flex-col items-start justify-center gap-4 border-b px-8 lg:h-full lg:w-1/2 lg:gap-16 lg:border-b-0 lg:border-r lg:px-14">
          <HeroHeading />
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