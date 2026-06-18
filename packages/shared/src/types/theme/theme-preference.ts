export type ThemeMode = "LIGHT" | "DARK" | "SYSTEM"

export type ThemePreset =
  | "default"
  | "underground"
  | "lakeview"
  | "forest-whisper"
  | "ocean-breeze"

export type AccentColor =
  | "default"
  | "violet"
  | "blue"
  | "green"
  | "orange"
  | "rose"
  | "cyan"
  | "red"
  | "yellow"
  | "lime"
  | "emerald"
  | "teal"
  | "sky"
  | "indigo"
  | "pink"

export type Radius = "SM" | "MD" | "LG"

export type Scale = "COMPACT" | "COMFORTABLE" | "SPACIOUS"

export type SidebarMode = "DEFAULT" | "ICON"

export interface AppearanceSettings {
  version: number
  themeMode: ThemeMode
  preset: ThemePreset
  accent: AccentColor
  accentCustomized: boolean
  radius: Radius
  scale: Scale
}
export const DEFAULT_APPEARANCE: AppearanceSettings = {
  version: 1,
  themeMode: "SYSTEM",
  preset: "default",
  accent: "default",
  accentCustomized: false,
  radius: "MD",
  scale: "COMFORTABLE",
}
