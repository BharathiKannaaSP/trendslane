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
    <div className="w-full px-4 py-6 md:px-6 md:py-8">
      <div className="flex w-full flex-col gap-8 xl:flex-row">
        {/* Stepper */}
        <aside className="xl:flex-1">{stepper}</aside>
        {/* Forms */}
        <main className="w-full min-w-0 xl:flex-2">{children}</main>
        {/* Onboarding Sidebar */}
        {sidebar && <aside className="xl:flex-1">{sidebar}</aside>}
      </div>
    </div>
  )
}

export default OnboardingLayout
