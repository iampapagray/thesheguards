"use client"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { RevealAndSlide } from "./animators/full-reveal"
import { Icons } from "./icons"
import { Button } from "./ui/button"

interface Props {
  title: string
  summary: string
  description: string
}

export function Service({ title, summary, description }: Props) {
  return (
    <div
      className={cn(
        "group flex h-60 flex-col justify-between py-2 lg:h-80 lg:py-12",
        styles.paddingX
      )}
    >
      <RevealAndSlide>
        <h2
          className={cn(
            "text-xl group-hover:text-primary lg:text-4xl",
            archivo.className
          )}
        >
          {title}
        </h2>
      </RevealAndSlide>

      <RevealAndSlide>
        <p className="text-base text-justify">{summary}</p>
      </RevealAndSlide>

      <RevealAndSlide>
        <Button
          variant="outline"
          className="w-fit group-hover:border-primary group-hover:bg-primary group-hover:text-white"
        >
          Learn more&nbsp;
          <Icons.longArrow className="h-4" />
        </Button>
      </RevealAndSlide>
    </div>
  )
}
