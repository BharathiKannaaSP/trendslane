"use client"

import { RadiusSelector } from "./selectors/radius-selector"
import { Label } from "@workspace/ui/components/label"
import { PresetSelector } from "./selectors/preset-selector"
import { ScaleSelector } from "./selectors/scale-selector"
import { PRESET_OPTIONS } from "../../constants/preset-options"
import { AccentSelector } from "./selectors/accent-selector"
import { ThemeSelector } from "./selectors/theme-selector"
import { Button } from "@workspace/ui/components/button"
import { useTranslations } from "next-intl"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { AppearanceSettings, DEFAULT_APPEARANCE } from "@workspace/shared"

interface AppearanceFormProps {
  value: AppearanceSettings
  onChange: (value: AppearanceSettings) => void
}

export function AppearanceForm({
  value,
  onChange,
}: AppearanceFormProps) {
  const t = useTranslations("Preferences.Appearance")
  return (
    <>
      <ScrollArea className="h-94">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs">{t("themePreset")}</Label>
            <PresetSelector
              value={value.preset}
              onChange={(preset) => {
                const selectedPreset = PRESET_OPTIONS.find(
                  (item) => item.value === preset
                )
                onChange({
                  ...value,
                  preset,
                  accent: value.accentCustomized
                    ? value.accent
                    : (selectedPreset?.accent ?? value.accent),
                })
              }}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">{t("scale")}</Label>

            <ScaleSelector
              value={value.scale}
              onChange={(scale) =>
                onChange({
                  ...value,
                  scale,
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">{t("radius")}</Label>

            <RadiusSelector
              value={value.radius}
              onChange={(radius) =>
                onChange({
                  ...value,
                  radius,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs">{t("accent")}</Label>

            <AccentSelector
              value={value.accent}
              onChange={(accent) =>
                onChange({
                  ...value,
                  accent,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs">{t("themeMode")}</Label>
            <ThemeSelector />
          </div>

          {/* <div className="hidden space-y-2 md:block">
            <Label className="text-xs">{t("sidebarMode")}</Label>
            <SidebarSelector
              value={value.sidebar}
              onChange={(sidebar) =>
                onChange({
                  ...value,
                  sidebar,
                })
              }
            />
          </div> */}
        </div>
      </ScrollArea>
      <div className="border-tpt-4 sticky bottom-0 mt-4">
        <Button className="w-full" onClick={() => onChange(DEFAULT_APPEARANCE)}>
          {t("reset")}
        </Button>
      </div>
    </>
  )
}
