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
  toggleMode: () => void
  isHydrated: boolean
}

const AppearanceContext = createContext<ContextValue | null>(null)

const STORAGE_KEY = "appearance"

export function AppearanceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { setTheme, resolvedTheme } = useTheme()

  const [settings, setSettings] =
    useState<AppearanceSettings>(DEFAULT_APPEARANCE)

  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)

      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSettings(JSON.parse(saved))
      }
    } catch {
      // ignore
    } finally {
      setIsHydrated(true)
    }
  }, [])

  function update(next: AppearanceSettings) {
    setSettings(next)
  }

  function toggleMode() {
    setSettings((prev) => ({
      ...prev,
      mode: prev.mode === "dark" ? "light" : "dark",
    }))
  }

  useEffect(() => {
    if (!isHydrated) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))

    setTheme(settings.mode)

    const activeTheme =
      settings.mode === "system" ? (resolvedTheme ?? "light") : settings.mode

    applyAppearance(settings, activeTheme)
  }, [settings, setTheme, resolvedTheme, isHydrated])

  return (
    <AppearanceContext.Provider
      value={{
        settings,
        update,
        toggleMode,
        isHydrated,
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
