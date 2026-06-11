"use client"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { ThemeMode } from "../appearance-types"
import { THEME_OPTIONS } from "@/modules/preferences/constants/theme-options"
import { useTranslations } from "next-intl"
import { Button } from "@workspace/ui/components/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface ThemeSelectorProps {
  value: ThemeMode
  onChange: (value: ThemeMode) => void
  variant?: "default" | "icon"
}

export function ThemeSelector({
  value,
  onChange,
  variant = "default",
}: ThemeSelectorProps) {
  const t = useTranslations("Preferences.Appearance.appearanceOptions.theme")

  const { resolvedTheme } = useTheme()

  if (variant === "icon") {
    const isDark = resolvedTheme === "dark"

    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label={isDark ? t("switchToLightMode") : t("switchToDarkMode")}
        title={isDark ? t("switchToLightMode") : t("switchToDarkMode")}
        onClick={() => onChange(isDark ? "light" : "dark")}
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
      value={value}
      onValueChange={(value) => {
        if (value) {
          onChange(value as ThemeMode)
        }
      }}
      className="w-full"
    >
      {THEME_OPTIONS.map((theme) => (
        <ToggleGroupItem
          key={theme.value}
          value={theme.value}
          className="flex-1 text-xs"
        >
          <theme.icon className="size-4" />
          {t(theme.value)}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
