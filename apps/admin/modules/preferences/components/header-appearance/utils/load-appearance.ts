import { AppearanceSettings, DEFAULT_APPEARANCE } from "@workspace/shared"

const STORAGE_KEY = "appearance"

export function loadAppearance(): AppearanceSettings {
  if (typeof window === "undefined") {
    return DEFAULT_APPEARANCE
  }

  try {
    const value = localStorage.getItem(STORAGE_KEY)

    if (!value) {
      return DEFAULT_APPEARANCE
    }

    return JSON.parse(value)
  } catch {
    return DEFAULT_APPEARANCE
  }
}

export function saveAppearance(settings: AppearanceSettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}
