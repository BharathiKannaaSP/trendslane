export type ThemeMode = "light" | "dark" | "system"

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

export type Radius = "none" | "xs" | "md" | "lg" | "xl"

export type Scale = "compact" | "comfortable" | "spacious"

export type SidebarMode = "default" | "icon"

export interface AppearanceSettings {
  version: 1
  mode: ThemeMode
  preset: ThemePreset
  accent: AccentColor
  radius: Radius
  scale: Scale
  sidebar: SidebarMode
}

export const DEFAULT_APPEARANCE: AppearanceSettings = {
  version: 1,
  mode: "system",
  preset: "default",
  accent: "default",
  radius: "md",
  scale: "comfortable",
  sidebar: "default",
}
