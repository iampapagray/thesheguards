"use client"

import { useState } from "react"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { RevealAndSlide } from "./animators/full-reveal"
import { JustReveal } from "./animators/reveal-only"
import { Icons } from "./icons"

export function Features() {
  const features = ["disruption", "innovation", "transparency"]
  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac. Varius duis at consectetur lorem donec massa. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Adipiscing elit pellentesque habitant morbi. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. ",
    "Nibh nisl condimentum id venenatis a condimentum vitae. Magna sit amet purus gravida quis blandit turpis cursus in. Eu lobortis elementum nibh tellus molestie nunc non blandit. Sagittis vitae et leo duis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Iaculis at erat pellentesque adipiscing commodo. Aenean vel elit scelerisque mauris. Nisi scelerisque eu ultrices vitae auctor. Leo in vitae turpis massa sed elementum tempus egestas. Cras semper auctor neque vitae.",
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
                    "hidden stroke-[4px] ",
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
