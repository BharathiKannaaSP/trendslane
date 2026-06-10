"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  AppearanceSettings,
  DEFAULT_APPEARANCE,
} from "@/modules/preferences/components/header-appearance/appearance-types"
import { applyAppearance } from "@/modules/preferences/components/header-appearance/utils/apply-appearance"

type ContextValue = {
  settings: AppearanceSettings
  update: (settings: AppearanceSettings) => void
}

const AppearanceContext = createContext<ContextValue | null>(null)

const STORAGE_KEY = "appearance"

export function AppearanceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [settings, setSettings] = useState(DEFAULT_APPEARANCE)
  const { setTheme } = useTheme()

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) return

    const parsed = JSON.parse(saved)

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSettings(parsed)

    applyAppearance(parsed)

    setTheme(parsed.mode)
  }, [setTheme])

  function update(settings: AppearanceSettings) {
    setSettings(settings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    applyAppearance(settings)
    setTheme(settings.mode)
  }

  return (
    <AppearanceContext.Provider
      value={{
        settings,
        update,
      }}
    >
      {children}
    </AppearanceContext.Provider>
  )
}

export function useAppearance() {
  const context = useContext(AppearanceContext)

  if (!context) {
    throw new Error("useAppearance must be used within AppearanceProvider")
  }

  return context
}
