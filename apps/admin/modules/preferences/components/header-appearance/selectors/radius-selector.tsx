"use client"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import type { Radius } from "../types"
import { RADIUS_OPTIONS } from "@/modules/preferences/constants/radius-option"

interface RadiusSelectorProps {
  value: Radius
  onChange: (value: Radius) => void
}

export function RadiusSelector({ value, onChange }: RadiusSelectorProps) {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={0}
      value={value}
      onValueChange={(value) => {
        if (value) {
          onChange(value as Radius)
        }
      }}
      className="w-full"
    >
      {RADIUS_OPTIONS.map((radius) => (
        <ToggleGroupItem
          key={radius.value}
          value={radius.value}
          className="flex-1 text-xs"
        >
          {radius.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
