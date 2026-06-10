"use client"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import { cn } from "@workspace/ui/lib/utils"

import type { AccentColor } from "../appearance-types"
import { ACCENT_OPTIONS } from "@/modules/preferences/constants/accent-options"

interface AccentSelectorProps {
  value: AccentColor
  onChange: (value: AccentColor) => void
}

export function AccentSelector({ value, onChange }: AccentSelectorProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) {
          onChange(value as AccentColor)
        }
      }}
      className="grid w-full grid-cols-5 gap-px overflow-hidden rounded-md border bg-border"
    >
      {ACCENT_OPTIONS.map((accent) => (
        <ToggleGroupItem
          key={accent.value}
          value={accent.value}
          className="h-10 w-full rounded-none border-0 bg-background"
        >
          <span
            className={cn("size-5 rounded-full border", accent.className)}
          />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
