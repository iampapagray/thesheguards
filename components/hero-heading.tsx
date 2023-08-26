"use client"

import { motion } from "framer-motion"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { TextSpan } from "./animators/text-span"
import { revealAnimation } from "@/lib/animations"
import { DelayedReveal } from "./animators/delayed-reveal"

export function HeroHeading() {
  const firstWord = "integrity".split("")
  const secondWord = "transparency".split("")
  const thirdWord = "vigilance".split("")

  return (
    <DelayedReveal>
      <div 
        className={cn("pb-2 text-4xl lg:text-7xl", archivo.className)}
      >
        <motion.div variants={revealAnimation} className="flex">
          {firstWord.map((char, i) => {
            return <TextSpan key={i}>{char}</TextSpan>
          })}
          <span className="text-primary">,</span>
        </motion.div>
        <motion.div variants={revealAnimation}  className="flex">
          {secondWord.map((char, i) => {
            return <TextSpan key={i}>{char}</TextSpan>
          })}
          <span className="text-primary">,</span>
        </motion.div>
        <motion.div variants={revealAnimation}  className="flex">
          {thirdWord.map((char, i) => {
            return <TextSpan key={i}>{char}</TextSpan>
          })}
          <span className="text-primary">.</span>
        </motion.div>
      </div>
    </DelayedReveal>
  )
}
