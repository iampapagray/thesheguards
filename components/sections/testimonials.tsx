"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, motionValue, transform } from "framer-motion"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/styles/styles"

import { Icons } from "../icons"
import { Button } from "../ui/button"

interface testimony {
  name: string
  message: string
  role: string
  image: string
}

const testimonials: testimony[] = [
  {
    name: "Joseph Freeley",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image: "",
  },
  {
    name: "Prince Leilani",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image: "",
  },
  {
    name: "Frederick Jones",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image: "",
  },
  {
    name: "Patrick Thomspon",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image: "",
  },
]

export function Testimonials() {
  const [width, setWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const box = useRef<any>()
  const carousel = useRef<any>()
  const startX = motionValue(0)

  useEffect(() => {
    setWidth(box.current.scrollWidth - box.current.offsetWidth)
    setTimeout(() => {
      getScrollWidth()
    }, 1500)

    function getScrollWidth() {
      if (window.innerWidth < 600) {
        var multiplier = 0.8
      } else {
        var multiplier = 0.66
      }
      setScrollWidth(
        parseInt((box.current.offsetWidth * multiplier).toFixed(0))
      )
    }
  }, [scrollWidth, width])

  function scrollLeft() {
    let currentX = startX.get()
    if (Math.abs(currentX) < width) {
      animate(
        carousel.current,
        { x: [currentX, currentX - scrollWidth] },
        { type: "spring", duration: 1 }
      )
      startX.set(startX.getPrevious() - scrollWidth)
    }
  }

  function scrollRight() {
    let currentX = startX.get()
    if (currentX != 0) {
      animate(
        carousel.current,
        { x: [currentX, currentX + scrollWidth] },
        { type: "spring", duration: 1 }
      )
      startX.set(startX.getPrevious() + scrollWidth)
    }
  }

  return (
    <section className="relative flex w-full flex-col">
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
          client <br /> testimonials
        </h2>

        <div className="flex gap-2 lg:max-w-lg">
          <Button variant={"outline"} className="px-2" onClick={scrollRight}>
            <Icons.left className="text-foreground" />
          </Button>
          <Button variant={"outline"} className="px-2" onClick={scrollLeft}>
            <Icons.right className="text-foreground" />
          </Button>
        </div>
      </div>

      <motion.div
        ref={box}
        className="flex w-screen overflow-hidden border-b lg:w-full"
      >
        <motion.div
          ref={carousel}
          drag={"x"}
          dragConstraints={{ right: 0, left: -width }}
          className="flex w-full"
        >
          {testimonials.map((testimony, i) => {
            return (
              <motion.div
                key={i}
                className={cn(
                  "h-full min-w-[80%] flex-col border-r py-8 last:border-0 lg:min-w-[66%]",
                  styles.paddingX
                )}
              >
                <p>&ldquo;{testimony.message}&rdquo;</p>

                <div className="flex items-center gap-2 pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimony.image} />
                    <AvatarFallback>
                      {testimony.name.charAt(0)}{" "}
                      {testimony.name.split("")[1].charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold">{testimony.name}</h4>
                    <p className="text-xs">{testimony.role}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
