"use client"

import { Palette } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Button } from "@workspace/ui/components/button"
import { AppearanceForm } from "./appearance-form"
import { useAppearance } from "@/providers/appearance-provider"

export function AppearancePopover() {
  const { settings, update } = useAppearance()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="Appearance" variant="ghost" size="icon">
          <Palette />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-max" sideOffset={8}>
        <AppearanceForm value={settings} onChange={update} />
      </PopoverContent>
    </Popover>
  )
}
