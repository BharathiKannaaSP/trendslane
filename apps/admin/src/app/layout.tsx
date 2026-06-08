import { Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/src/providers/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Trendslane",
  description:
    "Discover the latest fashion trends. Shop clothing, shoes, bags, accessories, beauty, and lifestyle collections on Trendslane.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
