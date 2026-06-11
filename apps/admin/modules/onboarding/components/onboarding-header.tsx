"use client"

import UserMenu from "@/modules/layout/components/user-menu"
import { AppearancePopover } from "@/modules/preferences/components/header-appearance/appearance-popover"
import LanguageSwitcher from "@/modules/preferences/components/page-components/localization/language-switcher"
import { Logo } from "@workspace/ui/components/logo"

export function OnboardingHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-background px-4">
      <div className="flex items-center gap-4">
        <Logo />
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <LanguageSwitcher />
        <AppearancePopover />
        <UserMenu />
      </div>
    </header>
  )
}
