"use client"

import React from "react"
import { Logo } from "@workspace/ui/components/logo"
import LanguageSwitcher from "../../preferences/components/page-components/localization/language-switcher"
import { ThemeSelector } from "../../preferences/components/header-appearance/selectors/theme-selector"

const AuthHeader = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-4 lg:px-6">
      <Logo className="text-white" />

      <div className="flex items-center gap-2">
        <ThemeSelector variant="icon" />
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default AuthHeader
