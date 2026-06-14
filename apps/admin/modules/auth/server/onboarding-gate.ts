import { redirect } from "next/navigation"
import { requireAuth } from "./require-auth"
import type { AccountType } from "@workspace/shared"

type OnboardingGateOptions =
  | {
      type: "ONBOARDING"
    }
  | {
      type: "ADDITIONAL_DETAILS"
    }
  | {
      type: "ACCOUNT_SELECTION"
      accountType: AccountType
    }
  | {
      type: "REQUEST_STATUS"
    }
  | {
      type: "REJECTED"
    }

export async function onboardingGate(options: OnboardingGateOptions) {
  const user = await requireAuth()

  // ONBOARDING
  if (options.type === "ONBOARDING") {
    if (user.onboardingStatus === "PENDING") {
      if (user.onboardingStep === "ADDITIONAL_DETAILS") {
        redirect("/onboarding-additional-details")
      }

      return user
    }
    if (user.onboardingStatus === "IN_PROGRESS") {
      if (user.selectedAccountType === "ADMIN") {
        redirect("/become-admin")
      }

      if (user.selectedAccountType === "ORG_ADMIN") {
        redirect("/create-organization")
      }

      if (user.selectedAccountType === "ORG_MEMBER") {
        redirect("/join-organization")
      }
    }

    if (user.onboardingStatus === "WAITING_APPROVAL") {
      redirect("/waiting-approval")
    }

    if (user.onboardingStatus === "REJECTED") {
      redirect("/rejected")
    }

    if (user.onboardingStatus === "APPROVED") {
      redirect("/")
    }

    return user
  }

  if (options.type === "ADDITIONAL_DETAILS") {
    if (
      user.onboardingStatus !== "PENDING" ||
      user.onboardingStep !== "ADDITIONAL_DETAILS"
    ) {
      redirect("/onboarding")
    }

    return user
  }

  // ACCOUNT SELECTION PAGES
  if (options.type === "ACCOUNT_SELECTION") {
    if (user.onboardingStatus === "WAITING_APPROVAL") {
      redirect("/waiting-approval")
    }

    if (user.onboardingStatus === "REJECTED") {
      redirect("/rejected")
    }

    if (user.onboardingStatus === "APPROVED") {
      redirect("/")
    }

    if (user.onboardingStatus !== "IN_PROGRESS") {
      redirect("/onboarding")
    }

    if (!user.selectedAccountType) {
      redirect("/onboarding")
    }

    if (user.selectedAccountType !== options.accountType) {
      redirect("/onboarding")
    }

    return user
  }

  // REQUEST STATUS

  if (options.type === "REQUEST_STATUS") {
    if (user.onboardingStatus !== "WAITING_APPROVAL") {
      redirect("/onboarding")
    }

    return user
  }

  // REJECTED

  if (user.onboardingStatus !== "REJECTED") {
    redirect("/onboarding")
  }

  return user
}
