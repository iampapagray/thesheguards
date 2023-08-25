"use client"

import { motion } from "framer-motion"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { TextSpan } from "./text-span"

export function HeroHeading() {
  const firstWord = "integrity".split("")
  const secondWord = "transparency".split("")
  const thirdWord = "vigilance".split("")

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className={cn("text-4xl lg:text-7xl", archivo.className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}  className="flex">
        {firstWord.map((char, i) => {
          return <TextSpan key={i}>{char}</TextSpan>
        })}
        <span className="text-primary">,</span>
      </motion.div>
      <motion.div variants={item}  className="flex">
        {secondWord.map((char, i) => {
          return <TextSpan key={i}>{char}</TextSpan>
        })}
        <span className="text-primary">,</span>
      </motion.div>
      <motion.div variants={item}  className="flex">
        {thirdWord.map((char, i) => {
          return <TextSpan key={i}>{char}</TextSpan>
        })}
        <span className="text-primary">.</span>
      </motion.div>
    </motion.div>
  )
}
