import { useEffect, useRef, useState, useTransition } from "react"
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
  DEFAULT_APPEARANCE,
  OnboardingStatus,
  OnboardingStep,
  UserThemePreferences,
} from "@workspace/shared"

import {
  useCurrentUserUpdate,
  useOnboardingUpdate,
} from "@/modules/users/api/auth.repository.hooks"
import { EntityFormAction } from "@/components/forms/entity-form"
import { getAdditionalDetailsFormConfig } from "../constants/onboarding-additional-detail-form-config"
import {
  getLocaleFromCookie,
  setAppearanceCookie,
} from "@/lib/cookies-utils/client"
import { useRouter } from "@/i18n/navigation"

export const useOnboardingAdditionalDetailsForm = (user?: CurrentUserDto) => {
  const router = useRouter()
  const onboardingUpdate = useOnboardingUpdate()
  const updateCurrentUser = useCurrentUserUpdate()

  const [isPending, startTransition] = useTransition()
  const [direction, setDirection] = useState<"next" | "previous" | null>(null)

  const form = useForm<AdditionalDetailsFormValues>({
    resolver: zodResolver(additionalDetailsSchema),
    defaultValues: {
      ...additionalDetailsDefaultValues,
      language: getLocaleFromCookie(),
    },
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

  const previousCountryCodeRef = useRef<string>("")

  const getUserFormValues = (
    currentUser: CurrentUserDto
  ): AdditionalDetailsFormValues => ({
    selectedAccountType: currentUser.selectedAccountType ?? "ADMIN",
    countryCode: currentUser.countryCode ?? "IN",
    timezone: currentUser.timezone ?? "Asia/Kolkata",
    language: currentUser.language ?? getLocaleFromCookie(),
    address: currentUser.address ?? "",
    bio: currentUser.bio ?? "",
    phoneNumber: currentUser.phoneNumber ?? "",
    referralCode: currentUser.referralCode ?? "",
  })

  useEffect(() => {
    if (!user) return

    form.reset(getUserFormValues(user))

    previousCountryCodeRef.current = user.countryCode ?? "IN"
  }, [user, form])

  useEffect(() => {
    if (!countryCode) return

    const country = countries.find((c) => c.code === countryCode)

    if (!country) return

    const currentTimezone = form.getValues("timezone")

    if (currentTimezone !== country.timezone) {
      form.setValue("timezone", country.timezone)
    }

    const currentLanguage = form.getValues("language")

    if (!currentLanguage) {
      form.setValue("language", getLocaleFromCookie())
    }

    if (
      previousCountryCodeRef.current &&
      previousCountryCodeRef.current !== countryCode
    ) {
      const currentPhone = form.getValues("phoneNumber")

      if (currentPhone !== country.phoneCode) {
        form.reset({
          ...form.getValues(),
          countryCode,
          phoneNumber: country.phoneCode,
        })
      }
    }

    previousCountryCodeRef.current = countryCode
  }, [countryCode, form])

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

    const response = await updateCurrentUser.mutateAsync({
      ...values,
    })

    const preferences: UserThemePreferences =
      response.userThemePreferences ?? DEFAULT_APPEARANCE

    if (preferences) {
      setAppearanceCookie({
        version: preferences.themeVersion,
        themeMode: preferences.themeMode,
        preset: preferences.themePreset,
        accent: preferences.themeAccent,
        accentCustomized: preferences.themeAccentCustomized,
        radius: preferences.themeRadius,
        scale: preferences.themeScale,
      })
    }

    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.ROLE_REQUIREMENTS,
      onboardingStatus: OnboardingStatus.IN_PROGRESS,
      onboardingStepNo: 3,
    })

    startTransition(() => {
      let nextRoute = "/become-admin"

      switch (selectedAccountType) {
        case "ORG_ADMIN":
          nextRoute = "/create-organization"
          break

        case "ORG_MEMBER":
          nextRoute = "/join-organization"
          break

        case "ADMIN":
        default:
          nextRoute = "/become-admin"
          break
      }

      router.replace(nextRoute, {
        locale: values.language,
      })

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
      phoneNumber: user.phoneNumber?.replace(/\s+/g, "") ?? "",
    })
  }

  const footerActions: EntityFormAction[] = [
    {
      key: "previous",
      label: "Back",
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
