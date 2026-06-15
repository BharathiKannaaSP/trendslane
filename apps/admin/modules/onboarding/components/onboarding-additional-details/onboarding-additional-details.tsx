"use client"

import { EntityForm } from "@/components/forms/entity-form"
import { useOnboardingAdditionalDetails } from "../../hooks/use-onboarding-additional-details-form"

const OnboardingAdditionalDetails = () => {
  const { form, config, actions, onSubmit } = useOnboardingAdditionalDetails()
  return (
    <EntityForm
      form={form}
      config={config}
      onSubmit={onSubmit}
      actions={actions}
    />
  )
}

export default OnboardingAdditionalDetails
