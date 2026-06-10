import {
  AccentColor,
  ThemePreset,
} from "../components/header-appearance/appearance-types"

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
