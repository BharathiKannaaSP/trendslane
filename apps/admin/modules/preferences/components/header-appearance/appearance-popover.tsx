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
  if (!settings) return
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="Appearance" variant="ghost" size="icon">
          <Palette />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-120" sideOffset={8}>
        <div className="flex flex-col">
          <AppearanceForm value={settings} onChange={update} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
