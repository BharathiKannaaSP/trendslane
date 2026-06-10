import { AccentColor, ThemePreset } from "../components/header-appearance/types"

export const PRESET_OPTIONS: {
  value: ThemePreset
  label: string
  accent: AccentColor
}[] = [
  {
    value: "default",
    label: "Default",
    accent: "default",
  },
  {
    value: "underground",
    label: "Underground",
    accent: "violet",
  },
  {
    value: "lakeview",
    label: "Lakeview",
    accent: "cyan",
  },
  {
    value: "forest-whisper",
    label: "Forest Whisper",
    accent: "green",
  },
  {
    value: "ocean-breeze",
    label: "Ocean Breeze",
    accent: "blue",
  },
]
