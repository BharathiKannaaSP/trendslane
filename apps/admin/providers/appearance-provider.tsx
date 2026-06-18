"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

import { applyAppearance } from "@/modules/preferences/components/header-appearance/utils/apply-appearance"

import { AppearanceSettings, DEFAULT_APPEARANCE } from "@workspace/shared"
import {
  getAppearanceCookie,
  setAppearanceCookie,
} from "@/lib/cookies-utils/client"

type ContextValue = {
  settings: AppearanceSettings
  update: (settings: AppearanceSettings) => void
}

const AppearanceContext = createContext<ContextValue | null>(null)

export function AppearanceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [settings, setSettings] = useState<AppearanceSettings>(
    () => getAppearanceCookie() ?? DEFAULT_APPEARANCE
  )

  useEffect(() => {
    if (!settings.themeMode) return

    applyAppearance(settings, settings.themeMode)
  }, [settings])

  const update = (next: AppearanceSettings) => {
    setSettings(next)
    setAppearanceCookie(next)

    if (next.themeMode) {
      applyAppearance(next, next.themeMode)
    }
  }

  const value = useMemo(
    () => ({
      settings,
      update,
    }),
    [settings]
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
