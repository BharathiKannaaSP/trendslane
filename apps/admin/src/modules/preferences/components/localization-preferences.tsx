import { SettingsCard } from "@/src/components/settings/settings-card"
import { SettingsCardBody } from "@/src/components/settings/settings-card-body"
import { SettingsCardHeader } from "@/src/components/settings/settings-card-header"
import { SettingsField } from "@/src/components/settings/settings-field"
import { Calendar, Clock3, Globe, Languages } from "lucide-react"
import React from "react"
import LanguageSwitcher from "./language-switcher"
import TimezoneSwitcher from "./timezone-switcher"

const LocalizationPreferences = () => {
  return (
    <SettingsCard>
      <SettingsCardHeader
        icon={Globe}
        title="Localization"
        description="Customize language and regional settings."
      />

      <SettingsCardBody>
        <SettingsField
          icon={Languages}
          label="Language"
          description="Choose your preferred language."
        >
          <LanguageSwitcher />
        </SettingsField>

        <SettingsField
          label="Timezone"
          description="Set your local timezone."
          icon={Clock3}
        >
          <TimezoneSwitcher />
        </SettingsField>

        <SettingsField
          icon={Calendar}
          label="Date Format"
          description="Choose how dates are displayed."
        >
          h3
          {/* <DateFormatSelect /> */}
        </SettingsField>
      </SettingsCardBody>
    </SettingsCard>
  )
}

export default LocalizationPreferences
