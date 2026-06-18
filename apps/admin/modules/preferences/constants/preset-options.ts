import { AccentColor, ThemePreset } from "@workspace/shared"

export const PRESET_OPTIONS: {
  value: ThemePreset
  accent: AccentColor
}[] = [
  {
    value: "default",
    accent: "default",
  },
  {
    value: "underground",
    accent: "violet",
  },
  {
    value: "lakeview",
    accent: "cyan",
  },
  {
    value: "forest-whisper",
    accent: "green",
  },
  {
    value: "ocean-breeze",
    accent: "blue",
  },
]
