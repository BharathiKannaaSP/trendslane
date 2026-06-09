import PageHeader from "@/src/components/page-header"
import LocalizationPreferences from "@/src/modules/preferences/components/localization-preferences"
import React from "react"

const UserPreferences = () => {
  return (
    <>
      <PageHeader
        title="Preferences"
        description="Manage your personal settings and preferences."
      />

      <div className="mt-6">
        <LocalizationPreferences />
      </div>
    </>
  )
}

export default UserPreferences
