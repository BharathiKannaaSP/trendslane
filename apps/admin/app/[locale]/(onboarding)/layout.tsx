import { Suspense } from "react"
import Loading from "./loading"
import { OnboardingLayoutShell } from "./onboarding-layout-shell"

export default function OnboardingLayoutAppearance({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      <OnboardingLayoutShell>{children}</OnboardingLayoutShell>
    </Suspense>
  )
}
