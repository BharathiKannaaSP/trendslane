import { redirect } from "next/navigation"
import { requireAuth } from "./require-auth"

export async function authGate() {
  console.log("authGate start")
  const user = await requireAuth()
  console.log("status", user.onboardingStatus)
  if (user.onboardingStatus === "PENDING") {
    redirect("/onboarding")
  }

  if (user.onboardingStatus === "IN_PROGRESS") {
    if (user.selectedAccountType === "ADMIN") {
      redirect("/administrator-request")
    }

    if (user.selectedAccountType === "ORG_ADMIN") {
      redirect("/create-organization")
    }

    if (user.selectedAccountType === "ORG_MEMBER") {
      redirect("/join-organization")
    }
  }

  if (user.onboardingStatus === "WAITING_APPROVAL") {
    redirect("/request-status")
  }

  if (user.onboardingStatus === "REJECTED") {
    redirect("/rejected")
  }

  return user
}
