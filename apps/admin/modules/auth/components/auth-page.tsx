import Link from "next/link"
import Image from "next/image"
import { Suspense, ReactNode } from "react"

import { TextAnimate } from "@workspace/ui/components/text-animate"
import { MorphingText } from "@workspace/ui/components/morphing-text"
import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

import AuthHeader from "@/modules/auth/components/auth-header"
import { cn } from "@workspace/ui/lib/utils"
import { getDirection } from "@/i18n/config"
import { getLocale, getTranslations } from "next-intl/server"
import { footerLinks } from "../constants/auth-constants"

interface AuthLayoutProps {
  children: ReactNode
  description: string
}

export async function AuthLayout({ children, description }: AuthLayoutProps) {
  const t = await getTranslations("Auth")
  const locale = await getLocale()
  const dir = getDirection(locale)
  const morphingText = t.raw("morphingText") as string[]

  return (
    <div className="relative h-screen overflow-hidden">
      <AuthHeader />

      <div className="flex h-screen bg-background">
        {/* Left Visual */}
        <div className="relative hidden lg:flex lg:flex-1">
          <Image
            src="/SignInUp_BG_Image.png"
            alt="Authentication Background"
            fill
            priority
            className={cn("object-cover", dir === "rtl" && "-scale-x-100")}
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full flex-col justify-between p-14">
            <div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <TextAnimate
                  as="h1"
                  className="text-3xl text-white xl:text-5xl 2xl:text-6xl"
                >
                  {t("build")}
                </TextAnimate>

                <MorphingText
                  className="transform-gpu text-white"
                  texts={morphingText}
                />
              </div>

              <p className="mt-8 max-w-xl text-sm leading-6 text-neutral-300">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 text-xs xl:flex xl:flex-wrap xl:gap-6">
              {footerLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="link"
                  className="max-w-max justify-start p-0 text-muted-foreground"
                  asChild
                >
                  <Link href={link.href}>{t(`footerLinks.${link.key}`)}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Auth Section - Only this side scrolls */}
        <div className="flex-1 overflow-y-auto pt-10">
          <div className="flex min-h-full justify-center px-6 py-8 lg:items-center">
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
