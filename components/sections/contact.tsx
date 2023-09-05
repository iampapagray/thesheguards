import Link from "next/link"

import { siteConfig } from "@/config/site"
import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Icons } from "../icons"
import { Button, buttonVariants } from "../ui/button"

export function Contact() {
  return (
    <div className="relative flex w-full flex-col">
      <div
        className={cn(
          "flex w-full flex-col items-start justify-between border-b bg-primary py-8 text-white lg:flex-row lg:items-end lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
          styles.paddingX
        )}
      >
        <h2
          className={cn(
            "flex pb-4 text-4xl lg:pb-0 lg:text-7xl",
            archivo.className
          )}
        >
          let&apos;s <br />
          get talking
        </h2>

        <div className="flex flex-col gap-2 lg:max-w-md">
          <p>
            <Link
              href={siteConfig.links.mail}
              className="text-black lg:text-primary"
            >
              Send us an email
            </Link>{" "}
            or start a conversation by filling out the form below. We are okay
            with social media too.
          </p>

          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 " />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.phone}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
