"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, motionValue, transform } from "framer-motion"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/styles/styles"

// import { Carousel } from "../animators/carousel";
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
    image:
      "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1692744089/samples/smile.jpg",
  },
  {
    name: "Prince Leilani",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image:
      "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1692744068/samples/people/smiling-man.jpg",
  },
  {
    name: "Frederick Jones",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image:
      "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1692744069/samples/bike.jpg",
  },
  {
    name: "Patrick Thomspon",
    message:
      "Magna et commodo ex reprehenderit. Ullamco cupidatat aliquip anim enim amet culpa. Aute proident tempor occaecat ea quis. Laboris et commodo sit pariatur adipisicing enim occaecat eiusmod occaecat elit irure excepteur adipisicing qui.",
    role: "Director, KKN Supply Management",
    image:
      "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1692744065/samples/people/kitchen-bar.jpg",
  },
]

export function Testimonials() {
  const [width, setWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const box = useRef<any>()
  const carousel = useRef<any>()
  const startX = motionValue(0)

  useEffect(() => {
    setWidth(box.current.scrollWidth - box.current.offsetWidth)
    setTimeout(() => {
      getScrollWidth()
    }, 1500)

    function getScrollWidth() {
      if (width < 600) {
        var multiplier = 0.8
      } else {
        var multiplier = 0.66
      }
      console.log("Mul", multiplier)
      console.log("Width", width)
      setScrollWidth(
        parseInt((box.current.offsetWidth * multiplier).toFixed(0))
      )
    }
  }, [scrollWidth, width])

  function scrollLeft() {
    console.log(width)
    console.log(scrollWidth)
    if (Math.abs(startX.get()) < width) {
      animate(
        carousel.current,
        { x: [startX.get(), startX.get() - scrollWidth] },
        { type: "spring", duration: 2 }
      )
      startX.set(startX.getPrevious() - scrollWidth)
    }
  }

  function scrollRight() {
    console.log(scrollWidth)
    if (startX.get() != 0) {
      animate(
        carousel.current,
        { x: [startX.get(), startX.get() + scrollWidth] },
        { type: "spring", duration: 2 }
      )
      startX.set(startX.getPrevious() + scrollWidth)
    }
  }

  return (
    <section className="relative flex w-full flex-col pb-20">
      <div
        className={cn(
          "flex w-full flex-col items-start justify-between border-b bg-primary py-8 text-white lg:flex-row lg:items-end lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
          styles.paddingX
        )}
      >
        <h2
          className={cn(
            "flex pb-4 text-4xl lg:pb-0 lg:text-7xl",
            archivo.className
          )}
        >
          client <br /> testimonials
        </h2>

        <div className="flex gap-2 lg:max-w-lg">
          <Button variant={"outline"} className="px-2" onClick={scrollRight}>
            <Icons.left className="" />
          </Button>
          <Button variant={"outline"} className="px-2" onClick={scrollLeft}>
            <Icons.right className="" />
          </Button>
        </div>
      </div>

      {/* <Carousel /> */}
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