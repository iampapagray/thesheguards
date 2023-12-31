import Image from "next/image"

import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Features } from "../features"

export function Featured() {
  return (
    <section className="relative flex w-full flex-col">
      <div
        className={cn(
          "flex w-full flex-col items-start border-b bg-primary py-8 text-white lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
          styles.paddingX
        )}
      >
        <div className="flex w-full flex-col items-start justify-between lg:flex-row lg:items-end ">
          <h2
            className={cn(
              "section-title flex pb-4 text-4xl lg:pb-0 lg:text-7xl",
              archivo.className
            )}
          >
            protection <br /> intelligence
          </h2>

          <div className="flex lg:max-w-lg">
            <p className="text-foreground">
              With high precision and vigilance, The She Guards, at random
              intervals search female washrooms throughout events for medical
              emergencies or illegal drug use.
            </p>
          </div>
        </div>

        <Image
          // src="https://res.cloudinary.com/dxpsehxqj/image/upload/c_fill,g_auto,h_300,w_970/c_scale/v1692995982/she_group_llyrdy.jpg"
          src="https://res.cloudinary.com/dxpsehxqj/image/upload/c_fill,g_auto,h_250,w_970/c_scale/v1692990171/group_photo_vvpcyq.jpg"
          alt="video"
          height={300}
          width={500}
          className="h-[300px] w-full object-cover pt-8"
        />
      </div>
      <Features />
    </section>
  )
}
