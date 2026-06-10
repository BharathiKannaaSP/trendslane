import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { ThemeMode } from "../types"
import { THEME_OPTIONS } from "@/modules/preferences/constants/theme-options"

interface ThemeSelectorProps {
  value: ThemeMode
  onChange: (value: ThemeMode) => void
}

export function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={0}
      value={value}
      onValueChange={(value) => {
        if (value) {
          onChange(value as ThemeMode)
        }
      }}
      className="w-full"
    >
      {THEME_OPTIONS.map((theme) => (
        <ToggleGroupItem
          key={theme.value}
          value={theme.value}
          className="flex-1 text-xs"
        >
          <theme.icon className="size-4" />
          {theme.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
