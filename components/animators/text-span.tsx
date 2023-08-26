'use client'

import { motion, useAnimationControls } from "framer-motion"
import { useState } from "react";

interface Props {
  children: string
}

export function TextSpan({children}: Props) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false)
  const rawChars = [',','.']

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, .4, .5, .7, .8, .9]
      }
    })
    setIsPlaying(true)
  }

  return (
    <>
      {children == '&' 
        ? <br />
        : (
          <motion.span
            className="hover:text-primary"
            animate={controls}
            onMouseOver={() => {
              if(!isPlaying && !rawChars.includes(children)) rubberBand()
            }}
            onAnimationComplete={() => setIsPlaying(false)}
          >
            {children}
          </motion.span>
        )
      }
    </>
  )
}