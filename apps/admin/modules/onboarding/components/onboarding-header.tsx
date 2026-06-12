"use client"

import { LogoutButton } from "@/components/logout-button"
import { ThemeSelector } from "@/modules/preferences/components/header-appearance/selectors/theme-selector"
import LanguageSwitcher from "@/modules/preferences/components/page-components/localization/language-switcher"
import { useAppearance } from "@/providers/appearance-provider"
import { Logo } from "@workspace/ui/components/logo"

export function OnboardingHeader() {
  const { settings, update, isHydrated } = useAppearance()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between px-4 shadow-md">
      <div className="flex items-center gap-4">
        <Logo />
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {isHydrated && (
          <ThemeSelector
            value={settings.mode}
            variant="icon"
            onChange={(mode) =>
              update({
                ...settings,
                mode,
              })
            }
          />
        )}
        <LanguageSwitcher />
        <LogoutButton />
      </div>
    </header>
  )
}
