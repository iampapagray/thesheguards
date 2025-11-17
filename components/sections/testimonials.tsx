"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, motionValue } from "framer-motion"

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
    name: "Oheneyere Gifty Anti",
    message:
      "The SheGuards is a highly professional all-female security agency that continues to impress with their discipline, dedication, and excellence. Their work reflects the strength and capability of the Ghanaian woman, and I am proud to support their mission",
    role: "Ghanaian journalist & broadcaster",
    image: "",
  },
  {
    name: "Abeiku Santana",
    message:
      "Breaking Barriers, setting standards and carving a niche for your business is the best way to stand out... i recommend you to any well minded business or person who needs professional event security assistance, I really admire your dedication and commitment to excellence services",
    role: "Media personality, entrepreneur & politician",
    image: "",
  },
  {
    name: "Aequitas Foundation",
    message:
      "The She Guards exemplifies discipline, integrity, and excellence. Their commitment to professionalism and their dedication to empowering young women aligns strongly with the values of the Aequitas Foundation. It has been a privilege to support their journey, and I commend their remarkable contribution to safety and women’s leadership in Ghana.",
    role: "",
    image: "",
  }
]

export function Testimonials() {
  const [width, setWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const box = useRef<any>()
  const carousel = useRef<any>()
  const startX = motionValue(0)
  const autoScrollInterval = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (box.current) {
      setWidth(box.current.scrollWidth - box.current.offsetWidth)
      setTimeout(() => {
        getScrollWidth()
      }, 1500)
    }

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

  // Auto scroll functionality
  useEffect(() => {
    if (!isPaused && scrollWidth > 0) {
      autoScrollInterval.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          // Reset to start when we've shown all original testimonials
          if (nextIndex >= testimonials.length) {
            // Instantly jump to the beginning of the duplicated set
            const resetPosition = 0
            startX.set(0)
            if (carousel.current) {
              carousel.current.style.transform = `translateX(0px)`
            }
            return 0
          }
          return nextIndex
        })
      }, 4000) // Change testimonial every 4 seconds
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [isPaused, scrollWidth, testimonials.length])

  // Animate to current testimonial
  useEffect(() => {
    if (carousel.current && scrollWidth > 0) {
      const targetX = -currentIndex * scrollWidth
      animate(
        carousel.current,
        { x: targetX },
        { type: "spring", duration: 0.8 }
      )
      startX.set(targetX)
    }
  }, [currentIndex, scrollWidth])

  function scrollLeft() {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      if (nextIndex >= testimonials.length) {
        return 0
      }
      return nextIndex
    })
  }

  function scrollRight() {
    setCurrentIndex((prev) => {
      const nextIndex = prev - 1
      if (nextIndex < 0) {
        return testimonials.length - 1
      }
      return nextIndex
    })
  }

  function handleMouseEnter() {
    setIsPaused(true)
  }

  function handleMouseLeave() {
    setIsPaused(false)
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
        className="flex w-full overflow-hidden border-b"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
                  <Avatar className="size-10">
                    <AvatarImage src={testimony.image} />
                    <AvatarFallback>
                      {testimony.name.charAt(0)}{" "}
                      {testimony.name.split(" ")[1].charAt(0)}
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
