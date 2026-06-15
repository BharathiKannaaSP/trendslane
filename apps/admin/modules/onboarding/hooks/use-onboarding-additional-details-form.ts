import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  additionalDetailsDefaultValues,
  AdditionalDetailsFormValues,
  additionalDetailsSchema,
  CurrentUserDto,
} from "@workspace/shared"

export const useOnboardingAdditionalDetails = (user?: CurrentUserDto) => {
  const form = useForm<AdditionalDetailsFormValues>({
    resolver: zodResolver(additionalDetailsSchema),
    defaultValues: additionalDetailsDefaultValues,
  })

  useEffect(() => {
    if (!user) return

    form.reset({
      selectedAccountType: user.selectedAccountType ?? "ADMIN",
      countryCode: user.countryCode ?? "",
      //   themePreference: user.themePreference ?? "SYSTEM",
      //   timezone: user.timezone ?? "",
      //   language: user.language ?? "",
      //   address: user.address ?? "",
      //   bio: user.bio ?? "",
      //   phoneNumber: user.phoneNumber ?? "",
      //   referralCode: user.referralCode ?? "",
    })
  }, [user, form])

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      console.log(data)

      // await mutation.mutateAsync(data)
    } catch (error) {
      console.error(error)
    }
  })

  const resetForm = () => {
    if (!user) {
      form.reset(additionalDetailsDefaultValues)
      return
    }

    form.reset({
      selectedAccountType: user.selectedAccountType ?? "ADMIN",
      countryCode: user.countryCode ?? "",
      //   themePreference: user.themePreference ?? "SYSTEM",
      //   timezone: user.timezone ?? "",
      //   language: user.language ?? "",
      //   address: user.address ?? "",
      //   bio: user.bio ?? "",
      //   phoneNumber: user.phoneNumber ?? "",
      //   referralCode: user.referralCode ?? "",
    })
  }

  return {
    form,
    handleSubmit,
    resetForm,
    isSubmitting: false,
  }
}
