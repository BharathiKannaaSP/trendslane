"use client"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { SCALE_OPTIONS } from "@/modules/preferences/constants/scale-options"
import { useTranslations } from "next-intl"
import { Scale } from "@workspace/shared"

interface ScaleSelectorProps {
  value: Scale
  onChange: (value: Scale) => void
}

export function ScaleSelector({ value, onChange }: ScaleSelectorProps) {
  const t = useTranslations("Preferences.Appearance.appearanceOptions.scales")

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={0}
      value={value}
      onValueChange={(value) => {
        if (value) onChange(value as Scale)
      }}
      className="w-full"
    >
      {SCALE_OPTIONS.map((scale) => (
        <ToggleGroupItem
          key={scale.value}
          value={scale.value}
          className="flex-1 text-xs"
        >
          {t(scale.value)}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
