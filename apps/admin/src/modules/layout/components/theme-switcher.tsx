"use client"

import React from "react"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Moon } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex w-full items-center justify-between space-x-2">
      <div className="flex items-center gap-2 text-xs">
        <Moon className="inset-2 h-[1.2rem] w-[1.2rem]" />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
      <Switch
        id="dark-mode"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  )
}

export default ThemeSwitcher
