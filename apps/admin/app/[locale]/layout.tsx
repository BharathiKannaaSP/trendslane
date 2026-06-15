import { Geist_Mono, Inter } from "next/font/google"
import "@workspace/ui/globals.css"
import { DirectionProvider } from "@workspace/ui/components/direction"
import { cn } from "@workspace/ui/lib/utils"
import { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { getDirection } from "@/i18n/config"
import { ThemeProvider } from "@/providers/theme-provider"
import { notFound } from "next/navigation"
import { AppearanceProvider } from "@/providers/appearance-provider"
import { ClerkProvider } from "@clerk/nextjs"
import NextTopLoader from "nextjs-toploader"
import { shadcn } from "@clerk/themes"
import { mapClerkLocale } from "@workspace/shared"
import { QueryProvider } from "@/providers/query-provider"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "@workspace/ui/components/sonner"

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
        {/* <Suspense fallback={null}> */}
        <NextTopLoader color="oklch(0.556 0 0)" />
        <NextIntlClientProvider>
          <DirectionProvider dir={getDirection(locale)}>
            <ClerkProvider
              localization={clerkLocale}
              appearance={{
                theme: shadcn,
              }}
            >
              <QueryProvider>
                <ThemeProvider>
                  <AppearanceProvider>
                    <main className="min-h-screen w-full overflow-x-hidden">
                      {children}
                    </main>
                  </AppearanceProvider>
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryProvider>
            </ClerkProvider>
          </DirectionProvider>
        </NextIntlClientProvider>
        <Toaster position="top-right" />
        {/* </Suspense> */}
      </body>
    </html>
  )
}
