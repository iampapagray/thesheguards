'use client'

import { container } from "@/lib/animations"
import {motion, useAnimation, useInView } from "framer-motion"
import {useRef, useEffect} from 'react'

interface Props {
  children: JSX.Element
  width?: "fit-content" | "100%"
}

export function DelayedReveal({children, width = "fit-content"}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }

  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={mainControls}
        // transition={{
        //   duration: 0.5, delay: 0.25
        // }}
      >
        {children}
      </motion.div>
    </div>
  )
}