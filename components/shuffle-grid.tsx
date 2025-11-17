"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const squareData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408472/269_lh0rtj.jpg",
    position: "top",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408472/1206_syu3rx.jpg",
    position: "top",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408468/272_rmghcf.jpg",
    position: "top",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408441/144927_bd4fsa.jpg",
    position: "top",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408437/4407_l7sghj.jpg",
    position: "top",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408437/15185_u9kjsl.jpg",
    position: "top",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408437/15242_eqdep9.jpg",
    position: "top",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408435/2592_vwnw6d.jpg",
    position: "top",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1763408434/1655_rpk899.jpg",
    position: "top",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387611/Screenshot_20230914-170209_rcm830.png",
    position: "top",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387611/IMG_20230906_104330_102_iposty.jpg",
    position: "top",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387609/Screenshot_20230914-170235_yjtwtq.png",
    position: "top",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387601/IMG_20230829_122631_474_li6u4r.webp",
    position: "top",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387554/IMG_20230807_041815_056_pik7jd.webp",
    position: "top",
  },
  {
    id: 15,
    src: "/logo_with_waves.jpg",
    position: "center",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692995982/she_group_llyrdy.jpg",
    position: "top",
  },
]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="h-full w-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: sq.position,
      }}
    ></motion.div>
  ))
}

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null)
  const [squares, setSquares] = useState(generateSquares())

  useEffect(() => {
    shuffleSquares()

    return () => clearTimeout(timeoutRef.current)
  }, [])

  const shuffleSquares = () => {
    setSquares(generateSquares())

    timeoutRef.current = setTimeout(shuffleSquares, 5000)
  }

  return (
    <div className="grid h-[450px] w-full grid-cols-4 grid-rows-4 gap-1 lg:h-full">
      {squares.map((sq) => sq)}
    </div>
  )
}

export default ShuffleGrid
