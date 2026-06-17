import { useEffect, useState, useTransition } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input"
import type { Country } from "react-phone-number-input"
import {
  additionalDetailsDefaultValues,
  AdditionalDetailsFormValues,
  additionalDetailsSchema,
  countries,
  CurrentUserDto,
  OnboardingStatus,
  OnboardingStep,
} from "@workspace/shared"

import { useRouter } from "next/navigation"
import {
  useCurrentUserUpdate,
  useOnboardingUpdate,
} from "@/modules/users/api/auth.repository.hooks"
import { EntityFormAction } from "@/components/forms/entity-form"
import { getAdditionalDetailsFormConfig } from "../constants/onboarding-additional-detail-form-config"

export const useOnboardingAdditionalDetails = (user?: CurrentUserDto) => {
  const router = useRouter()
  const onboardingUpdate = useOnboardingUpdate()
  const updateCurrentUser = useCurrentUserUpdate()

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

  const selectedAccountType = useWatch({
    control: form.control,
    name: "selectedAccountType",
  })

  const selectedCountry = countries.find(
    (country) => country.code === countryCode
  )

  const getUserFormValues = (
    currentUser: CurrentUserDto
  ): AdditionalDetailsFormValues => ({
    selectedAccountType: currentUser.selectedAccountType ?? "ADMIN",
    countryCode: currentUser.countryCode ?? "IN",
    timezone: currentUser.timezone ?? "Asia/Kolkata",
    language: currentUser.language ?? "en",
    address: currentUser.address ?? "",
    bio: currentUser.bio ?? "",
    phoneNumber: currentUser.phoneNumber ?? "",
    referralCode: currentUser.referralCode ?? "",
  })

  useEffect(() => {
    if (!user) return

    form.reset(getUserFormValues(user))
  }, [user, form])

  const [previousCountryCode, setPreviousCountryCode] = useState<string>()

  useEffect(() => {
    if (!selectedCountry) return

    form.setValue("timezone", selectedCountry.timezone, {
      shouldValidate: true,
    })

    form.setValue("language", selectedCountry.defaultLanguage, {
      shouldValidate: true,
    })

    if (previousCountryCode && previousCountryCode !== selectedCountry.code) {
      form.setValue("phoneNumber", selectedCountry.phoneCode, {
        shouldValidate: true,
        shouldDirty: true,
      })
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPreviousCountryCode(selectedCountry.code)
  }, [selectedCountry, form, previousCountryCode])

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
    const isPhoneValid =
      isValidPhoneNumber(values.phoneNumber) &&
      isPossiblePhoneNumber(values.phoneNumber)

    if (!isPhoneValid) {
      form.setError("phoneNumber", {
        message: "Invalid phone number",
      })
      return
    }

    setDirection("next")

    await updateCurrentUser.mutateAsync({
      ...values,
    })

    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.ROLE_REQUIREMENTS,
      onboardingStatus: OnboardingStatus.IN_PROGRESS,
      onboardingStepNo: 3,
    })

    startTransition(() => {
      switch (selectedAccountType) {
        case "ADMIN":
          router.push("/become-admin")
          break

        case "ORG_ADMIN":
          router.push("/create-organization")
          break

        case "ORG_MEMBER":
          router.push("/join-organization")
          break
      }

      router.refresh()
    })
  }

  const resetForm = () => {
    if (!user) {
      form.reset(additionalDetailsDefaultValues)
      return
    }

    form.reset({
      ...getUserFormValues(user),
      selectedAccountType: user.selectedAccountType ?? "ADMIN",
      phoneNumber: user.phoneNumber?.replace(/\s+/g, "") ?? "",
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
    countryCode: selectedCountry?.code as Country,
  }
}
