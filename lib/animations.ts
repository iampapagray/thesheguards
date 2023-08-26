export const container = {
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

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const revealAnimation = {
  hidden: {opacity: 0, y:75},
  visible: {opacity: 1, y:0},
}

export const slideAnimation = {
  hidden: {left: 0},
  visible: {left: "100%"},
}