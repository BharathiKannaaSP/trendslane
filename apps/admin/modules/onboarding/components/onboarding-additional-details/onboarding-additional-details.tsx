"use client"

import { EntityForm } from "@/components/forms/entity-form"
import { useOnboardingAdditionalDetailsForm } from "../../hooks/use-onboarding-additional-details-form"
import { CurrentUserDto } from "@workspace/shared"

const OnboardingAdditionalDetails = ({ user }: { user: CurrentUserDto }) => {
  const { form, config, actions, onSubmit, countryCode } =
    useOnboardingAdditionalDetailsForm(user)
  return (
    <EntityForm
      form={form}
      config={config}
      onSubmit={onSubmit}
      actions={actions}
      countryCode={countryCode}
    />
  )
}

export default OnboardingAdditionalDetails
