import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Icons } from "../icons"

export function Footer() {
  return (
    <div className="flex flex-col w-full relative border-b">
      <div
        className={cn(
          "flex justify-between items-center border-b border-gray-400 py-4",
          styles.paddingX
        )}
      >
        <p className="flex items-center text-sm lg:text-base ">
          made with <Icons.love className="h-4 w-4 mx-2 text-primary" /> by
          <Link href="https://iampapagray.com" className="text-primary pl-2">
            iampapagray
          </Link>
        </p>

        <Icons.logo className="h-6 w-6" />
      </div>
      <div className="flex items-center text-center text-sm lg:text-base justify-center py-4">
        Copyright &copy; {new Date().getFullYear()} The She Guards. All rights
        reserved.
      </div>
    </div>
  )
}
