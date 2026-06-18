import { ACCENTS } from "@/modules/preferences/constants/theme-accents"
import { PRESETS } from "@/modules/preferences/constants/theme-presets"
import { AppearanceSettings, ThemePreset } from "@workspace/shared"

export function applyAppearance(settings: AppearanceSettings, theme?: string) {
  const root = document.documentElement
  root.style.setProperty("--radius", getRadius(settings.radius))
  root.style.setProperty("--font-size-base", getScale(settings.scale))
  applyPreset(settings.preset, theme === "dark")
  applyAccent(settings.accent, theme === "dark")
}

function getRadius(radius: string) {
  switch (radius) {
    case "none":
      return "0px"

    case "xs":
      return "0.25rem"

    case "md":
      return "0.625rem"

    case "lg":
      return "0.875rem"

    case "xl":
      return "1rem"

    default:
      return "0.625rem"
  }
}

function getScale(scale: string) {
  switch (scale) {
    case "compact":
      return "14px"

    case "comfortable":
      return "16px"

    case "spacious":
      return "18px"

    default:
      return "16px"
  }
}

export function applyAccent(
  accent: AppearanceSettings["accent"],
  isDark: boolean
) {
  const root = document.documentElement
  const colors = ACCENTS[accent][isDark ? "dark" : "light"]

  root.style.setProperty("--primary", colors.primary)
  root.style.setProperty("--primary-foreground", colors.primaryForeground)
  root.style.setProperty("--sidebar-primary", colors.primary)
  root.style.setProperty("--ring", colors.primary)
  root.style.setProperty(
    "--sidebar-primary-foreground",
    colors.primaryForeground
  )
}

export function applyPreset(preset: ThemePreset, isDark: boolean) {
  const root = document.documentElement
  const theme = PRESETS[preset][isDark ? "dark" : "light"]

  Object.entries({
    "--background": theme.background,
    "--card": theme.card,
    "--popover": theme.popover,
    "--sidebar": theme.sidebar,
    "--muted": theme.muted,
    "--border": theme.border,
    "--input": theme.border,
    "--sidebar-border": theme.border,
  }).forEach(([property, value]) => {
    root.style.setProperty(property, value)
  })
}
