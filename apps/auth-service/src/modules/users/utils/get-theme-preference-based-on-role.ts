import { Prisma } from "@workspace/auth-db"
import { AccentColor, ThemePreset } from "@workspace/shared"

export function getThemePreferences(
  selectedAccountType:
    | string
    | Prisma.NullableEnumAccountTypeFieldUpdateOperationsInput
    | null
    | undefined
): {
  accentColor: AccentColor
  themePreset: ThemePreset
} {
  switch (selectedAccountType) {
    case "ADMIN":
      return {
        accentColor: "violet",
        themePreset: "underground",
      }

    case "ORG_ADMIN":
      return {
        accentColor: "green",
        themePreset: "forest-whisper",
      }

    case "ORG_MEMBER":
      return {
        accentColor: "orange",
        themePreset: "default",
      }

    default:
      return {
        accentColor: "default",
        themePreset: "default",
      }
  }
}
