import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import type { ThemePreset } from "../types"
import { PRESET_OPTIONS } from "@/modules/preferences/constants/preset-options"
import { cn } from "@workspace/ui/lib/utils"
import { ACCENT_DOT_CLASS } from "@/modules/preferences/constants/accent-options"
import { useTranslations } from "next-intl"

interface PresetSelectorProps {
  value: ThemePreset
  onChange: (value: ThemePreset) => void
}

export function PresetSelector({ value, onChange }: PresetSelectorProps) {
  const t = useTranslations("Preferences.Appearance.appearanceOptions.presets")
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full text-xs">
        <SelectValue placeholder={t("default")} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {PRESET_OPTIONS.map((preset) => (
            <SelectItem
              className="text-xs"
              key={preset.value}
              value={preset.value}
            >
              <div
                className={cn(
                  "size-2 rounded-full",
                  ACCENT_DOT_CLASS[preset.accent]
                )}
              />
              {t(preset.value)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
