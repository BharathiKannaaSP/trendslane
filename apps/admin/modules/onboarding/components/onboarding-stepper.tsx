import { cn } from "@workspace/ui/lib/utils"
import { OnboardingStatus, OnboardingStep } from "@workspace/shared"
import { CheckIcon } from "lucide-react"
import { ONBOARDING_STEPS } from "../constants/onboarding-constants"
import {
  getStepperStatus,
  getStepState,
  STATUS_CONTENT,
} from "./onboarding-stepper-get-status"

type OnboardingStepperProps = {
  onboardingStatus: OnboardingStatus
  onboardingStep: OnboardingStep
}

const OnboardingStepper = ({
  onboardingStatus,
  onboardingStep,
}: OnboardingStepperProps) => {
  const currentIndex = Math.max(
    ONBOARDING_STEPS.findIndex((step) => step.id === onboardingStep),
    0
  )

  const currentStep = ONBOARDING_STEPS[currentIndex]

  const content =
    onboardingStatus === OnboardingStatus.PENDING ||
    onboardingStatus === OnboardingStatus.IN_PROGRESS
      ? {
          title: `Step ${currentIndex + 1} of ${ONBOARDING_STEPS.length}`,
          description: currentStep?.title ?? "Onboarding",
        }
      : STATUS_CONTENT[onboardingStatus]

  return (
    <div className="sticky top-24 space-y-8">
      <div>
        <p className="text-xs tracking-wide text-muted-foreground uppercase">
          {content.title}
        </p>

        <h3 className="mt-2 text-lg font-semibold">{content.description}</h3>
      </div>

      <div className="space-y-0">
        {ONBOARDING_STEPS.map((step, index) => {
          const status = getStepperStatus(
            step.id,
            onboardingStep,
            onboardingStatus
          )

          const { isCompleted, isCurrent, isRejected, isUpcoming } =
            getStepState(status)

          return (
            <div
              key={step.id}
              className={cn(
                "grid grid-cols-[40px_1fr] gap-4",
                index !== ONBOARDING_STEPS.length - 1 && "pb-8"
              )}
            >
              <div className="relative flex justify-center">
                {index !== ONBOARDING_STEPS.length - 1 && (
                  <div
                    className={cn(
                      "absolute top-10 -bottom-8 w-px",
                      isCompleted ? "bg-primary" : "bg-border"
                    )}
                  />
                )}

                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-sm font-semibold transition-colors",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isCurrent &&
                      "border-primary bg-background text-primary ring-4 ring-primary/10",
                    isUpcoming && "border-border text-muted-foreground",
                    isRejected &&
                      "border-destructive bg-destructive/10 text-destructive"
                  )}
                >
                  {isCompleted ? <CheckIcon className="h-4 w-4" /> : step.order}
                </div>
              </div>

              <div className="min-w-0 pt-1">
                <p
                  className={cn(
                    "text-sm font-medium",
                    isCurrent && "text-primary",
                    isUpcoming && "text-muted-foreground",
                    isRejected && "text-destructive"
                  )}
                >
                  {step.title}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {step.description}
                </p>

                {isCurrent && (
                  <span className="mt-2 inline-flex rounded-full border px-2 py-1 text-[10px] font-medium text-primary">
                    Current Step
                  </span>
                )}

                {isCompleted && (
                  <span className="mt-2 inline-flex rounded-full border px-2 py-1 text-[10px] font-medium">
                    Completed
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {onboardingStatus === OnboardingStatus.WAITING_APPROVAL && (
        <div className="rounded-xl border p-4">
          <h4 className="text-sm font-medium">Review in progress</h4>

          <p className="mt-2 text-xs text-muted-foreground">
            Our team is reviewing your submission. You will be notified once a
            decision has been made.
          </p>
        </div>
      )}

      {onboardingStatus === OnboardingStatus.APPROVED && (
        <div className="rounded-xl border border-primary/30 p-4">
          <h4 className="text-sm font-medium text-primary">Account approved</h4>

          <p className="mt-2 text-xs text-muted-foreground">
            Your onboarding has been approved and your account is ready to use.
          </p>
        </div>
      )}

      {onboardingStatus === OnboardingStatus.REJECTED && (
        <div className="rounded-xl border border-destructive/30 p-4">
          <h4 className="text-sm font-medium text-destructive">
            Request rejected
          </h4>

          <p className="mt-2 text-xs text-muted-foreground">
            Please review the rejection reason, update your information, and
            submit the request again.
          </p>
        </div>
      )}
    </div>
  )
}

export default OnboardingStepper
