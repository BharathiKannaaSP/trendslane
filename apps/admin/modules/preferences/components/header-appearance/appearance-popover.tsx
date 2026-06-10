"use client"

import { Palette } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

import { Button } from "@workspace/ui/components/button"

import { AppearanceForm } from "./appearance-form"
import { AppearanceSettings, DEFAULT_APPEARANCE } from "./types"
import { useState } from "react"

const UserAppearanceSettings = DEFAULT_APPEARANCE

export function AppearancePopover() {
  const [settings, setSettings] = useState<AppearanceSettings>(
    UserAppearanceSettings
  )
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="Appearance" variant="ghost" size="icon">
          <Palette />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-max" sideOffset={8}>
        <AppearanceForm
          value={settings}
          onChange={(value) => {
            setSettings(value)
            console.log(value)
            // save mutation
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
