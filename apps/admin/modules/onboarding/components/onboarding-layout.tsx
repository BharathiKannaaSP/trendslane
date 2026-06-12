import React from "react"

type OnboardingLayoutProps = {
  stepper: React.ReactNode
  children: React.ReactNode
  sidebar?: React.ReactNode
}

const OnboardingLayout = ({
  stepper,
  children,
  sidebar,
}: OnboardingLayoutProps) => {
  return (
    <div className="mx-auto max-w-450 px-6 py-8">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr_320px]">
        {/* Stepper */}
        <aside>{stepper}</aside>
        {/* Forms */}
        <main>{children}</main>
        {/* Onboarding Sidebar */}
        <aside>{sidebar}</aside>
      </div>
    </div>
  )
}

export default OnboardingLayout
