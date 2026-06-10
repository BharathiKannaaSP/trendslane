import { AppearanceSettings } from "../appearance-types"

export function applyAppearance(settings: AppearanceSettings) {
  const root = document.documentElement
  root.style.setProperty("--radius", getRadius(settings.radius))
  root.style.setProperty("--font-size-base", getScale(settings.scale))
  applyAccent(settings.accent)
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

function applyAccent(accent: string) {
  const root = document.documentElement

  switch (accent) {
    case "violet":
      root.style.setProperty("--primary", "oklch(0.62 0.22 300)")
      break

    case "blue":
      root.style.setProperty("--primary", "oklch(0.6 0.2 250)")
      break

    case "green":
      root.style.setProperty("--primary", "oklch(0.65 0.2 145)")
      break

    default:
      root.style.setProperty("--primary", "oklch(0.205 0 0)")
  }
}
