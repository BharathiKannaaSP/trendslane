"use client"

import { RadiusSelector } from "./selectors/radius-selector"
import { AppearanceSettings } from "./types"
import { Label } from "@workspace/ui/components/label"
import { PresetSelector } from "./selectors/preset-selector"
import { ScaleSelector } from "./selectors/scale-selector"
import { PRESET_OPTIONS } from "../../constants/preset-options"
import { AccentSelector } from "./selectors/accent-selector"

interface Props {
  value: AppearanceSettings
  onChange: (value: AppearanceSettings) => void
}

export function AppearanceForm({ value, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-xs">Theme preset</Label>
        <PresetSelector
          value={value.preset}
          onChange={(preset) => {
            const selectedPreset = PRESET_OPTIONS.find(
              (item) => item.value === preset
            )

            onChange({
              ...value,
              preset,
              accent: selectedPreset?.accent ?? value.accent,
            })
          }}
        />
      </div>
      <div className="space-y-2">
        <Label className="text-xs">Scale</Label>

        <ScaleSelector
          value={value.scale}
          onChange={(scale) =>
            onChange({
              ...value,
              scale,
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label className="text-xs">Radius</Label>

        <RadiusSelector
          value={value.radius}
          onChange={(radius) =>
            onChange({
              ...value,
              radius,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <Label className="text-xs">Accent Selector</Label>

        <AccentSelector
          value={value.accent}
          onChange={(accent) =>
            onChange({
              ...value,
              accent,
            })
          }
        />
      </div>
    </div>
  )
}
