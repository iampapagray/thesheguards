"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useDragControls } from "framer-motion"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/styles/styles"

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

export function Carousel() {
  const [width, setWidth] = useState(0)
  const box = useRef<any>()

  useEffect(() => {
    setWidth(box.current.scrollWidth - box.current.offsetWidth)
  }, [])

  return (
    <motion.div
      ref={box}
      className="flex w-screen overflow-hidden border-b lg:w-full"
    >
      <motion.div
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
  )
}
