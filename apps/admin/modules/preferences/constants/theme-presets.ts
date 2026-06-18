import { ThemePreset } from "@workspace/shared"

export type PresetColors = {
  background: string
  card: string
  popover: string
  sidebar: string
  muted: string
  border: string
}

export const PRESETS: Record<
  ThemePreset,
  {
    light: PresetColors
    dark: PresetColors
  }
> = {
  default: {
    light: {
      background: "oklch(1 0 0)",
      card: "oklch(1 0 0)",
      popover: "oklch(1 0 0)",
      sidebar: "oklch(0.985 0 0)",
      muted: "oklch(0.97 0 0)",
      border: "oklch(0.922 0 0)",
    },
    dark: {
      background: "oklch(0.145 0 0)",
      card: "oklch(0.205 0 0)",
      popover: "oklch(0.205 0 0)",
      sidebar: "oklch(0.205 0 0)",
      muted: "oklch(0.269 0 0)",
      border: "oklch(1 0 0 / 10%)",
    },
  },

  underground: {
    light: {
      background: "oklch(0.96 0 0)",
      card: "oklch(1 0 0)",
      popover: "oklch(1 0 0)",
      sidebar: "oklch(0.92 0 0)",
      muted: "oklch(0.9 0 0)",
      border: "oklch(0.82 0 0)",
    },
    dark: {
      background: "oklch(0.12 0 0)",
      card: "oklch(0.16 0 0)",
      popover: "oklch(0.16 0 0)",
      sidebar: "oklch(0.14 0 0)",
      muted: "oklch(0.2 0 0)",
      border: "oklch(0.26 0 0)",
    },
  },

  lakeview: {
    light: {
      background: "oklch(0.985 0.01 240)",
      card: "oklch(1 0 0)",
      popover: "oklch(1 0 0)",
      sidebar: "oklch(0.96 0.02 240)",
      muted: "oklch(0.95 0.01 240)",
      border: "oklch(0.9 0.01 240)",
    },
    dark: {
      background: "oklch(0.18 0.02 240)",
      card: "oklch(0.22 0.02 240)",
      popover: "oklch(0.22 0.02 240)",
      sidebar: "oklch(0.2 0.02 240)",
      muted: "oklch(0.26 0.02 240)",
      border: "oklch(0.32 0.02 240)",
    },
  },

  "forest-whisper": {
    light: {
      background: "oklch(0.985 0.01 145)",
      card: "oklch(1 0 0)",
      popover: "oklch(1 0 0)",
      sidebar: "oklch(0.96 0.02 145)",
      muted: "oklch(0.95 0.01 145)",
      border: "oklch(0.9 0.01 145)",
    },
    dark: {
      background: "oklch(0.18 0.02 145)",
      card: "oklch(0.22 0.02 145)",
      popover: "oklch(0.22 0.02 145)",
      sidebar: "oklch(0.2 0.02 145)",
      muted: "oklch(0.26 0.02 145)",
      border: "oklch(0.32 0.02 145)",
    },
  },

  "ocean-breeze": {
    light: {
      background: "oklch(0.985 0.01 220)",
      card: "oklch(1 0 0)",
      popover: "oklch(1 0 0)",
      sidebar: "oklch(0.96 0.02 220)",
      muted: "oklch(0.95 0.01 220)",
      border: "oklch(0.9 0.01 220)",
    },
    dark: {
      background: "oklch(0.18 0.02 220)",
      card: "oklch(0.22 0.02 220)",
      popover: "oklch(0.22 0.02 220)",
      sidebar: "oklch(0.2 0.02 220)",
      muted: "oklch(0.26 0.02 220)",
      border: "oklch(0.32 0.02 220)",
    },
  },
}
