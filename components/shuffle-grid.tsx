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
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387619/Screenshot_20230914-170507_pdbjpz.png",
    position: "top",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692990171/group_photo_vvpcyq.jpg",
    position: "top",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387618/Screenshot_20230914-170328_equfxw.png",
    position: "top",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387617/Screenshot_20230914-170413_wljkac.png",
    position: "top",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387616/Screenshot_20230914-170527_dzusyp.png",
    position: "top",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387613/Screenshot_20230914-170257_vm20f0.png",
    position: "top",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387613/Screenshot_20230914-170357_c3dyid.png",
    position: "top",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387612/Screenshot_20230914-170105_w6cxr5.png",
    position: "top",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1695387611/Screenshot_20230914-170311_auintf.png",
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
