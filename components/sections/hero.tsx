// import { TextSpan } from "./text-span";
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Analytics } from "../analytics"
import { JustReveal } from "../animators/reveal-only"
import { HeroHeading } from "../hero-heading"
import ShuffleGrid from "../shuffle-grid"

export function Hero() {
  return (
    <section className="relative flex h-fit flex-col lg:h-[95vh]">
      <div className="flex h-2/3 flex-col border-b lg:flex-row">
        <div className="lg:py-auto flex h-1/2 w-full flex-col items-start justify-center gap-4 border-b p-8 lg:h-full lg:w-1/2 lg:gap-16 lg:border-b-0 lg:border-r lg:px-14">
          <HeroHeading />
          <JustReveal>
            <p className="">
              We believe protection and asset management should be grounded on
              providing world-class security detail that is safe, excellent,
              effective, reliable and meets the specific needs of the client.
              <span className="text-primary font-bold">
                {" "}
                That is who we are!
              </span>
            </p>
          </JustReveal>
        </div>
        {/* <div className="flex h-1/2 w-full flex-col items-start justify-center lg:h-full lg:w-1/2">
          <Image
            // src="https://res.cloudinary.com/dxpsehxqj/image/upload/v1692995982/she_group_llyrdy.jpg"
            src="https://res.cloudinary.com/dxpsehxqj/image/upload/v1692990171/group_photo_vvpcyq.jpg"
            alt="video"
            height={500}
            width={500}
            className='h-full w-full object-cover'
          />
        </div> */}
        <div className="flex h-1/2 w-full lg:h-full lg:w-1/2">
          <ShuffleGrid />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:h-1/3 lg:grid-cols-3">
        <div className="border-b p-4 px-8 lg:px-14 lg:py-10">
          <Analytics
            head={"4700+"}
            title={"solo + collab protected"}
            desc="Whatever the size of your event, be rest assured that we got you covered. Even if we need to collab with other agencies."
          />
        </div>
        <div className="border-b p-4 px-8 lg:border-x lg:border-t-0 lg:px-14 lg:py-10">
          <Analytics
            head={"30+"}
            title={"events, escorts & private parties"}
            desc="we have handled many events just like the one you're planning. Hit us up and let's provide you with excellent services."
          />
        </div>
        <div className="border-b p-4 px-8 lg:px-14 lg:py-10">
          <Analytics
            head={"20+"}
            title={"clients"}
            desc="the number of brands and individuals that trust us is fast rising. It's your turn to do same. We are grateful to you all for choosing us."
          />
        </div>
      </div>
    </section>
  )
}
