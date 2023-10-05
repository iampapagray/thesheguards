"use client"

import { useState } from "react"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { RevealAndSlide } from "./animators/full-reveal"
import { JustReveal } from "./animators/reveal-only"
import { Icons } from "./icons"

export function Features() {
  const features = ["disruption", "integrity", "transparency"]
  const descriptions = [
    "we are the first all-female security agency in the country and we are proud to have cause such a stir in the media. As female security operatives have been proven to often have a better ability to de-escalate a potentially violent situation between agressive males, we position ourselves to render exceptional services.",
    "integrity is the most important quality of professional security guards have and we are proud to posses it. We, The SheGuards, value integrity and it comes with respect, reliability, honesty and being principled. We definitely stand by our promise to keep you and your guests safe and be discreet in our operations.",
    "it is the quality of being easily seen through. This is very important because it helps create a stronger bond between the company and our clientele. Improving communication, collaborations, and trust is critical to the process of providing security. This helps our clients feel respoected, valued and safe with us.",
  ]

  const [active, setActive] = useState(0)

  return (
    <div className="grid w-full grid-cols-2 border-b">
      <div className="col-span-2 flex flex-col lg:col-span-1 lg:border-r">
        {features.map((feat, i) => {
          return (
            <JustReveal key={i} width="100%">
              <div
                className={cn(
                  "group flex w-full items-center gap-4 pl-8 lg:pl-14",
                  i < 2 ? "border-b" : "border-b lg:border-none",
                  active == i ? "text-primary" : ""
                )}
                onMouseEnter={() => setActive(i)}
              >
                <h5
                  className={cn(
                    "my-2 text-lg md:text-xl lg:my-4 lg:text-3xl",
                    archivo.className
                  )}
                >
                  {feat}
                </h5>

                <Icons.longArrow
                  className={cn(
                    "hidden stroke-[4px] ",
                    active == i ? "lg:flex" : ""
                  )}
                />
                <Icons.arrowDown
                  className={cn(
                    "hidden stroke-2 ",
                    active == i ? "flex lg:hidden" : ""
                  )}
                />
              </div>
            </JustReveal>
          )
        })}
      </div>
      <div className="col-span-2 flex items-center px-8 lg:col-span-1 lg:px-14">
        <RevealAndSlide>
          <p>{descriptions[active]}</p>
        </RevealAndSlide>
      </div>
    </div>
  )
}
