import { JetBrains_Mono as FontMono, Inter as FontSans, Archivo_Black } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})
