import { redirect } from "next/navigation"
import { requireAuth } from "./require-auth"

export async function authGate() {
  const user = await requireAuth()

  if (user.onboardingStatus === "PENDING") {
    redirect("/onboarding")
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

    redirect("/onboarding")
  }

  if (user.onboardingStatus === "WAITING_APPROVAL") {
    redirect("/waiting-approval")
  }

  if (user.onboardingStatus === "REJECTED") {
    redirect("/rejected")
  }

  return user
}
