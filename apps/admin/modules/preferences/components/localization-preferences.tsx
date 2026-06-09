import { Calendar, Clock3, Globe, Languages } from "lucide-react"
import React from "react"
import LanguageSwitcher from "./language-switcher"
import TimezoneSwitcher from "./timezone-switcher"
import { SettingsCard } from "@/components/settings/settings-card"
import { SettingsCardHeader } from "@/components/settings/settings-card-header"
import { SettingsCardBody } from "@/components/settings/settings-card-body"
import { SettingsField } from "@/components/settings/settings-field"
import { useTranslations } from "next-intl"

const LocalizationPreferences = () => {
  const t = useTranslations("LocalizationPreferences")
  return (
    <SettingsCard>
      <SettingsCardHeader
        icon={Globe}
        title={t("title")}
        description={t("description")}
      />

      <SettingsCardBody>
        <SettingsField
          icon={Languages}
          label={t("language")}
          description={t("languageDescription")}
        >
          <LanguageSwitcher />
        </SettingsField>

        <SettingsField
          icon={Clock3}
          label={t("timezone")}
          description={t("timezoneDescription")}
        >
          <TimezoneSwitcher />
        </SettingsField>

        <SettingsField
          icon={Calendar}
          label={t("dateFormat")}
          description={t("dateFormatDescription")}
        >
          h3
          {/* <DateFormatSelect /> */}
        </SettingsField>
      </SettingsCardBody>
    </SettingsCard>
  )
}

export default LocalizationPreferences
