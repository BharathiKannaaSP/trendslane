/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"

import { applyAppearance } from "@/modules/preferences/components/header-appearance/utils/apply-appearance"
import { useCurrentUser } from "@/modules/users/api/auth.repository.hooks"

import { AppearanceSettings, DEFAULT_APPEARANCE } from "@workspace/shared"

type ContextValue = {
  settings: AppearanceSettings | null
  update: (settings: AppearanceSettings) => void
  toggleMode: () => void
  isHydrated: boolean
}

const AppearanceContext = createContext<ContextValue | null>(null)

export function AppearanceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { setTheme, resolvedTheme } = useTheme()

  const { data: user, isLoading } = useCurrentUser()

  const [settings, setSettings] = useState<AppearanceSettings | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  const userPreferences = useMemo<AppearanceSettings>(() => {
    const preferences = user?.user?.preferences

    if (!preferences) {
      return DEFAULT_APPEARANCE
    }

    return {
      version: preferences.themeVersion,
      mode: preferences.themeMode.toLowerCase() as AppearanceSettings["mode"],
      preset: preferences.themePreset,
      accent: preferences.themeAccent,
      accentCustomized: preferences.themeAccentCustomized,
      radius:
        preferences.themeRadius.toLowerCase() as AppearanceSettings["radius"],
      scale:
        preferences.themeScale.toLowerCase() as AppearanceSettings["scale"],
    }
  }, [user])

  useEffect(() => {
    if (isLoading) return

    setSettings(userPreferences)
    setIsHydrated(true)
  }, [isLoading, userPreferences])

  useEffect(() => {
    if (!settings) return

    setTheme(settings.mode)
  }, [settings?.mode, setTheme, settings])

  useEffect(() => {
    if (!settings) return

    const activeTheme =
      settings.mode === "system" ? (resolvedTheme ?? "light") : settings.mode

    applyAppearance(settings, activeTheme)
  }, [settings, resolvedTheme])

  function update(next: AppearanceSettings) {
    setSettings(next)
  }

  function toggleMode() {
    setSettings((prev) => {
      if (!prev) return DEFAULT_APPEARANCE

      return {
        ...prev,
        mode: prev.mode === "dark" ? "light" : "dark",
      }
    })
  }

  const value = useMemo(
    () => ({
      settings,
      update,
      toggleMode,
      isHydrated,
    }),
    [settings, isHydrated]
  )

  return (
    <AppearanceContext.Provider value={value}>
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
