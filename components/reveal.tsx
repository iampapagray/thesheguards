'use client'

import { revealAnimation, slideAnimation } from "@/lib/animations"
import {motion, useAnimation, useInView } from "framer-motion"
import {useRef, useEffect} from 'react'

interface Props {
  children: JSX.Element
  width?: "fit-content" | "100%"
}

export function Reveal({children, width = "fit-content"}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }

  }, [isInView, mainControls, slideControls])
  

  return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
      <motion.div
        variants={revealAnimation}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5, delay: 0.25
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideAnimation}
        initial="hidden"
        animate={slideControls}
        transition={{duration: 0.5, ease: "easeIn"}}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
        className="bg-primary"
      />
    </div>
  )
}