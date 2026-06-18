/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { Button } from "@workspace/ui/components/button"

import { THEME_OPTIONS } from "@/modules/preferences/constants/theme-options"
import { useAppearance } from "@/providers/appearance-provider"
import {
  useCurrentUser,
  useUpdateCurrentUserThemePreferences,
} from "@/modules/users/api/auth.repository.hooks"

interface ThemeSelectorProps {
  variant?: "default" | "icon"
}

export function ThemeSelector({ variant = "default" }: ThemeSelectorProps) {
  const t = useTranslations("Preferences.Appearance.appearanceOptions.theme")

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { settings, update } = useAppearance()
  const { data: user } = useCurrentUser()
  const updateThemePreferences = useUpdateCurrentUserThemePreferences()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (value: "light" | "dark" | "system") => {
    setTheme(value)

    const themeMode =
      value === "dark" ? "DARK" : value === "light" ? "LIGHT" : "SYSTEM"

    update({
      ...settings,
      themeMode,
    })
    if (user) {
      updateThemePreferences.mutate({
        themeMode,
      })
    }
  }

  if (!mounted) {
    return null
  }

  if (variant === "icon") {
    const isDark = resolvedTheme === "dark"

    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label={isDark ? t("switchToLightMode") : t("switchToDarkMode")}
        title={isDark ? t("switchToLightMode") : t("switchToDarkMode")}
        onClick={() => handleThemeChange(isDark ? "light" : "dark")}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>
    )
  }

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={0}
      value={theme ?? "system"}
      onValueChange={(value) => {
        if (value) {
          handleThemeChange(value as "light" | "dark" | "system")
        }
      }}
      className="w-full"
    >
      {THEME_OPTIONS.map((themeOption) => (
        <ToggleGroupItem
          key={themeOption.value}
          value={themeOption.value}
          className="flex-1 text-xs"
        >
          <themeOption.icon className="size-4" />
          {t(themeOption.value)}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
