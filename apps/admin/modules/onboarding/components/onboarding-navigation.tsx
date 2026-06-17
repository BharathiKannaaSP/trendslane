import { Button } from "@workspace/ui/components/button"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import React from "react"

type OnboardingNavigationProps = {
  onPrevious?: () => void | Promise<void>
  onNext?: () => void | Promise<void>

  showPrevious?: boolean
  showNext?: boolean

  previousLabel?: string
  nextLabel?: string

  isPreviousLoading?: boolean
  isNextLoading?: boolean

  isPreviousDisabled?: boolean
  isNextDisabled?: boolean
}

const OnboardingNavigation = ({
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
  previousLabel = "Previous",
  nextLabel = "Continue",
  isPreviousLoading = false,
  isNextLoading = false,
  isPreviousDisabled = false,
  isNextDisabled = false,
}: OnboardingNavigationProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        {showPrevious ? (
          <Button
            type="button"
            variant="outline"
            onClick={onPrevious}
            disabled={isPreviousDisabled || isPreviousLoading}
          >
            <ArrowLeft className="size-4" />
            {previousLabel}
          </Button>
        ) : (
          <div />
        )}
      </div>

      <div>
        {showNext && (
          <Button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled || isNextLoading}
          >
            {isNextLoading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <>
                {nextLabel}
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default OnboardingNavigation
