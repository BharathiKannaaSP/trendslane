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
        <aside>{stepper}</aside>

        {/* Forms */}
        <main className="w-full flex-1">{children}</main>

        {/* Sidebar */}
        {sidebar && <aside>{sidebar}</aside>}
      </div>
    </div>
  )
}

export default OnboardingLayout
