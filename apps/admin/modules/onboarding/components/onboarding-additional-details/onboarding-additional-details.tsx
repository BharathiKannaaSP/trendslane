"use client"
import { useOnboardingUpdate } from "@/modules/users/api/auth.repository.hooks"
import {
  CurrentUserDto,
  OnboardingStatus,
  OnboardingStep,
} from "@workspace/shared"
import React, { useTransition } from "react"
import OnboardingNavigation from "../onboarding-navigation"
import { useRouter } from "next/navigation"

const OnboardingAdditionalDetails = ({ user }: { user: CurrentUserDto }) => {
  const onboardingUpdate = useOnboardingUpdate()
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const [direction, setDirection] = React.useState<"next" | "previous" | null>(
    null
  )

  const handleNext = async () => {
    setDirection("next")

    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.ROLE_REQUIREMENTS,
      onboardingStatus: OnboardingStatus.IN_PROGRESS,
      onboardingStepNo: 3,
    })

    startTransition(() => {
      router.push("/become-admin")
      router.refresh()
    })
  }

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

  return (
    <OnboardingNavigation
      onNext={handleNext}
      onPrevious={handlePrevious}
      isNextLoading={
        direction === "next" && (onboardingUpdate.isPending || isPending)
      }
      isPreviousLoading={
        direction === "previous" && (onboardingUpdate.isPending || isPending)
      }
      isNextDisabled={onboardingUpdate.isPending || isPending}
      isPreviousDisabled={onboardingUpdate.isPending || isPending}
    />
  )
}

export default OnboardingAdditionalDetails
