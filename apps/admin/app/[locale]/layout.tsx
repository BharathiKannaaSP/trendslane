import { Geist_Mono, Inter } from "next/font/google"
import "@workspace/ui/globals.css"
import { DirectionProvider } from "@workspace/ui/components/direction"
import { cn } from "@workspace/ui/lib/utils"
import { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Suspense } from "react"
import { routing } from "@/i18n/routing"
import { getDirection } from "@/i18n/config"
import CountryProviderServer from "@/providers/country-provider-server"
import { ThemeProvider } from "@/providers/theme-provider"
import { notFound } from "next/navigation"
import { AppearanceProvider } from "@/providers/appearance-provider"
import { ClerkProvider } from "@clerk/nextjs"
import NextTopLoader from "nextjs-toploader"
import { shadcn } from "@clerk/themes"
import { mapClerkLocale } from "@workspace/shared"

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
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    return notFound()
  }

  const clerkLocale = mapClerkLocale(locale)
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
        <Suspense fallback={null}>
          <NextTopLoader color="oklch(0.556 0 0)" />
          <NextIntlClientProvider>
            <DirectionProvider dir={getDirection(locale)}>
              <ClerkProvider
                localization={clerkLocale}
                appearance={{
                  theme: shadcn,
                }}
              >
                <CountryProviderServer>
                  <ThemeProvider>
                    <AppearanceProvider>{children}</AppearanceProvider>
                  </ThemeProvider>
                </CountryProviderServer>
              </ClerkProvider>
            </DirectionProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}
