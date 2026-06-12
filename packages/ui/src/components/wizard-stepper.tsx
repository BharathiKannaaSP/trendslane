"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

export enum StepperStepStatus {
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  WAITING_APPROVAL = "WAITING_APPROVAL",
  REJECTED = "REJECTED",
  FAILED = "FAILED",
}

export type StepperStep = {
  id: string
  title: string
  description?: string
  status?: StepperStepStatus
}

export interface StepperProps {
  steps: StepperStep[]
  currentStep: number
  orientation?: "horizontal" | "vertical"
  className?: string
}

const specialStatusStyles = {
  [StepperStepStatus.SUCCESS]: {
    circle: "border-green-600 bg-green-600 text-white",
    text: "text-green-600",
    line: "bg-green-600",
    ring: "",
    icon: true,
  },

  [StepperStepStatus.WARNING]: {
    circle: "border-yellow-600 bg-yellow-600 text-white",
    text: "text-yellow-600",
    line: "bg-yellow-600",
    ring: "",
    icon: false,
  },

  [StepperStepStatus.WAITING_APPROVAL]: {
    circle: "border-blue-600 bg-blue-600 text-white",
    text: "text-blue-600",
    line: "bg-blue-600",
    ring: "ring-blue-600/10",
    icon: false,
  },

  [StepperStepStatus.REJECTED]: {
    circle: "border-destructive bg-destructive text-destructive-foreground",
    text: "text-destructive",
    line: "bg-destructive",
    ring: "",
    icon: false,
  },

  [StepperStepStatus.FAILED]: {
    circle: "border-destructive bg-destructive text-destructive-foreground",
    text: "text-destructive",
    line: "bg-destructive",
    ring: "",
    icon: false,
  },
} as const

function getStepStyles(
  step: StepperStep,
  stepNumber: number,
  currentStep: number
) {
  if (step.status) {
    return specialStatusStyles[step.status]
  }

  const isCompleted = currentStep > stepNumber
  const isCurrent = currentStep === stepNumber

  if (isCompleted) {
    return {
      circle: "border-primary bg-primary text-primary-foreground",
      text: "text-foreground",
      line: "bg-primary",
      ring: "",
      icon: true,
    }
  }

  if (isCurrent) {
    return {
      circle: "border-primary text-primary",
      text: "text-primary",
      line: "bg-border",
      ring: "ring-primary/10",
      icon: false,
    }
  }

  return {
    circle: "border-border text-muted-foreground",
    text: "text-muted-foreground",
    line: "bg-border",
    ring: "",
    icon: false,
  }
}

export function Stepper({
  steps,
  currentStep,
  orientation,
  className,
}: StepperProps) {
  if (orientation === "horizontal") {
    return (
      <HorizontalStepper
        steps={steps}
        currentStep={currentStep}
        className={className}
      />
    )
  }

  if (orientation === "vertical") {
    return (
      <VerticalStepper
        steps={steps}
        currentStep={currentStep}
        className={className}
      />
    )
  }

  return (
    <>
      <div className={cn("xl:hidden", className)}>
        <HorizontalStepper steps={steps} currentStep={currentStep} />
      </div>

      <div className={cn("hidden xl:block", className)}>
        <VerticalStepper steps={steps} currentStep={currentStep} />
      </div>
    </>
  )
}

function HorizontalStepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-start">
        {steps.map((step, index) => {
          const style = getStepStyles(step, index + 1, currentStep)

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <StepCircle number={index + 1} style={style} />

                <div className="mt-3 text-center">
                  <p className={cn("text-xs font-medium", style.text)}>
                    {step.title}
                  </p>

                  {step.description && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="mt-5 flex-1 px-4">
                  <div className={cn("h-px w-full", style.line)} />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

function VerticalStepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {steps.map((step, index) => {
        const style = getStepStyles(step, index + 1, currentStep)

        return (
          <div
            key={step.id}
            className={cn(
              "grid grid-cols-[40px_1fr] gap-4",
              index !== steps.length - 1 && "pb-8"
            )}
          >
            <div className="relative flex justify-center">
              {index !== steps.length - 1 && (
                <div
                  className={cn("absolute top-10 -bottom-8 w-px", style.line)}
                />
              )}

              <StepCircle number={index + 1} style={style} />
            </div>

            <div className="pt-1">
              <p className={cn("text-sm font-medium", style.text)}>
                {step.title}
              </p>

              {step.description && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function StepCircle({
  number,
  style,
}: {
  number: number
  style: {
    circle: string
    text: string
    line: string
    ring: string
    icon: boolean
  }
}) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-sm font-semibold transition-colors",
        style.circle,
        style.ring && `ring-4 ${style.ring}`
      )}
    >
      {style.icon ? <CheckIcon className="h-4 w-4" /> : number}
    </div>
  )
}
