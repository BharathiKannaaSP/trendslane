import PageHeader from "@/components/page-header"
import LocalizationPreferences from "@/modules/preferences/components/localization-preferences"
import { getTranslations } from "next-intl/server"
import React from "react"

const UserPreferences = async () => {
  const t = await getTranslations("Preferences")
  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <div className="mt-6">
        <LocalizationPreferences />
      </div>
    </>
  )
}

export default UserPreferences
