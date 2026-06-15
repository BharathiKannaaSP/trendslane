import { useEffect, useState, useTransition } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  additionalDetailsDefaultValues,
  AdditionalDetailsFormValues,
  additionalDetailsSchema,
  countries,
  CurrentUserDto,
  OnboardingStatus,
  OnboardingStep,
} from "@workspace/shared"

import { getAdditionalDetailsFormConfig } from "../constants/onboading-additional-detail-form-config"
import { useRouter } from "next/navigation"
import { useOnboardingUpdate } from "@/modules/users/api/auth.repository.hooks"
import { EntityFormAction } from "@/components/forms/entity-form"

export const useOnboardingAdditionalDetails = (user?: CurrentUserDto) => {
  const router = useRouter()
  const onboardingUpdate = useOnboardingUpdate()

  const [isPending, startTransition] = useTransition()

  const [direction, setDirection] = useState<"next" | "previous" | null>(null)
  const form = useForm<AdditionalDetailsFormValues>({
    resolver: zodResolver(additionalDetailsSchema),
    defaultValues: additionalDetailsDefaultValues,
  })

  const countryCode = useWatch({
    control: form.control,
    name: "countryCode",
  })

  const selectedCountry = countries.find(
    (country) => country.code === countryCode
  )

  useEffect(() => {
    if (!user) return

    form.reset({
      selectedAccountType: user.selectedAccountType ?? "ORG_MEMBER",
      countryCode: user.countryCode ?? "IN",
      timezone: user.timezone ?? "Asia/Kolkata",
      language: user.language ?? "en",
      address: user.address ?? "",
      bio: user.bio ?? "",
      phoneNumber: user.phoneNumber ?? "",
      referralCode: user.referralCode ?? "",
    })
  }, [user, form])

  useEffect(() => {
    if (!selectedCountry) return

    form.setValue("timezone", selectedCountry.timezone, {
      shouldValidate: true,
    })

    form.setValue("phoneNumber", selectedCountry.phoneCode, {
      shouldValidate: true,
    })

    form.setValue("language", selectedCountry.defaultLanguage, {
      shouldValidate: true,
    })
  }, [selectedCountry, form])

  const config = getAdditionalDetailsFormConfig()

  const handlePrevious = async () => {
    setDirection("previous")

    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.BASIC_INFORMATION,
      onboardingStatus: OnboardingStatus.PENDING,
      onboardingStepNo: 1,
    })

    startTransition(() => {
      router.push("/onboarding")
      router.refresh()
    })
  }

  const handleNext = async (values: AdditionalDetailsFormValues) => {
    setDirection("next")
    // save values
    console.log(values)

    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.ROLE_REQUIREMENTS,
      onboardingStatus: OnboardingStatus.IN_PROGRESS,
      onboardingStepNo: 3,
    })

    startTransition(() => {
      router.push("/onboarding/organization")
      router.refresh()
    })
  }

  const resetForm = () => {
    if (!user) {
      form.reset(additionalDetailsDefaultValues)
      return
    }

    form.reset({
      selectedAccountType: user.selectedAccountType ?? "ADMIN",
      countryCode: user.countryCode ?? "IN",
      timezone: user.timezone ?? "Asia/Kolkata",
      language: user.language ?? "en",
      address: user.address ?? "",
      bio: user.bio ?? "",
      phoneNumber: user.phoneNumber ?? "",
      referralCode: user.referralCode ?? "",
    })
  }

  const footerActions: EntityFormAction[] = [
    {
      key: "previous",
      label: "Previous",
      variant: "outline",
      loading:
        direction === "previous" && (onboardingUpdate.isPending || isPending),
      disabled: onboardingUpdate.isPending || isPending,
      onClick: handlePrevious,
    },
    {
      key: "reset",
      label: "Reset",
      variant: "ghost",
      onClick: resetForm,
    },
    {
      key: "next",
      label: "Continue",
      type: "submit",
      loading:
        direction === "next" && (onboardingUpdate.isPending || isPending),
      disabled: onboardingUpdate.isPending || isPending,
    },
  ]

  return {
    form,
    config,
    resetForm,
    onSubmit: handleNext,
    actions: footerActions,
  }
}
