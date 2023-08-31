'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744071/samples/animals/three-dogs.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692990171/group_photo_vvpcyq.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744093/cld-sample.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744094/cld-sample-3.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744095/cld-sample-4.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744091/samples/look-up.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744088/samples/two-ladies.jpg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744076/samples/food/spices.jpg",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744074/samples/ecommerce/accessories-bag.jpg",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744070/samples/people/jazz.jpg",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744071/samples/landscapes/architecture-signs.jpg",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744069/samples/bike.jpg",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744068/samples/landscapes/girl-urban-view.jpg",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744075/samples/imagecon-group.jpg",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744067/samples/food/pot-mussels.jpg",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dxpsehxqj/image/upload/v1692744066/samples/food/fish-vegetables.jpg",
  },
];

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
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  },[]);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  return (
    <div className="grid h-[450px] w-full grid-cols-4 grid-rows-4 gap-1 lg:h-full">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleGrid;
