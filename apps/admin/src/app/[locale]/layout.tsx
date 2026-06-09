import { Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { DirectionProvider } from "@workspace/ui/components/direction"
import { ThemeProvider } from "@/src/providers/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/src/i18n/routing"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getDirection } from "@/src/i18n/config"

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <DirectionProvider dir={getDirection(locale)}>
          <ThemeProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  )
}
