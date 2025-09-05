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
    name: "Akosua Mensah",
    message:
      "The SheGuards provided exceptional security for our corporate retreat in Accra. Their professionalism and attention to detail gave us complete peace of mind. The team was discreet yet vigilant, allowing our executives to focus entirely on business discussions. I highly recommend their services for any high-level corporate event.",
    role: "CEO, Mensah Holdings Ltd",
    image: "",
  },
  {
    name: "Kwame Asante",
    message:
      "We hired The SheGuards for our daughter's wedding reception, and they exceeded all expectations. Their crowd management was seamless, and they handled gate security with grace and efficiency. The guests felt safe and comfortable throughout the celebration. Outstanding service from a truly professional team.",
    role: "Managing Director, Asante Construction Group",
    image: "",
  },
  {
    name: "Ama Darko",
    message:
      "As a frequent international traveler, I require reliable close protection services. The SheGuards have consistently provided top-tier escort security, ensuring my safety from airport pickup to hotel accommodation. Their female security personnel are highly trained and incredibly professional. I wouldn't trust anyone else with my security needs.",
    role: "Deputy Minister of Trade & Industry",
    image: "",
  },
  {
    name: "Nana Osei Bonsu",
    message:
      "The SheGuards conducted a comprehensive security assessment for our hospitality chain across Ghana. Their consultancy recommendations were practical, cost-effective, and significantly improved our overall security posture. The team's expertise in risk analysis is unmatched. They are now our preferred security consultants.",
    role: "Chairman, Golden Tulip Hotels Ghana",
    image: "",
  },
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
