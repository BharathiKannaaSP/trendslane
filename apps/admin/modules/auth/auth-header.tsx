"use client"

import React from "react"
import { Logo } from "@workspace/ui/components/logo"
import LanguageSwitcher from "../preferences/components/page-components/localization/language-switcher"
import { ThemeSelector } from "../preferences/components/header-appearance/selectors/theme-selector"
import { useAppearance } from "@/providers/appearance-provider"

const AuthHeader = () => {
  const { settings, update, isHydrated } = useAppearance()

  return (
    <div className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-4 lg:px-6">
      <Logo className="text-white" />

      <div className="flex items-center gap-2">
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
      </div>
    </div>
  )
}

export default AuthHeader
