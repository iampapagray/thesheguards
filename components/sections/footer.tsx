import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Icons } from "../icons"

export function Footer() {
  return (
    <div className="relative flex w-full flex-col border-b">
      <div
        className={cn(
          "flex items-center justify-between border-b border-gray-400 py-4",
          styles.paddingX
        )}
      >
        <p className="flex items-center text-sm lg:text-base ">
          made with <Icons.love className="mx-2 h-4 w-4 text-primary" /> by
          <Link href="https://iampapagray.com" className="pl-2 text-primary">
            iampapagray
          </Link>
        </p>

        <Icons.logo className="h-6 w-6" />
      </div>
      <div className="flex items-center justify-center py-4 text-center text-sm lg:text-base">
        Copyright &copy; {new Date().getFullYear()} The She Guards. All rights
        reserved.
      </div>
    </div>
  )
}
