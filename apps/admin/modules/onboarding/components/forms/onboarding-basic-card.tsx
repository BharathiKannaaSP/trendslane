"use client"
import {
  useCurrentUser,
  useOnboardingUpdate,
} from "@/modules/users/api/auth.repository.hooks"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { InfoField } from "@workspace/ui/components/info-field"
import { Spinner } from "@workspace/ui/components/spinner"
import { Badge } from "@workspace/ui/components/badge"
import { BadgeCheck, Loader2, Mail, Pencil, User } from "lucide-react"
import Image from "next/image"
import React from "react"
import { OnboardingStatus, OnboardingStep } from "@workspace/shared"

const OnboardBasicInfoCard = () => {
  const { data: user, isLoading, isError } = useCurrentUser()
  const onboardingUpdate = useOnboardingUpdate("/onboarding-additional-details")

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return "No data found"
  }

  const handleNext = async () => {
    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.ADDITIONAL_DETAILS,
      onboardingStatus: OnboardingStatus.PENDING,
      onboardingStepNo: 2,
    })
  }

  const currentUser = user?.user
  return (
    <div>
      <Card>
        <CardHeader className="ml-4 p-3">
          <CardTitle>
            <div className="flex items-center gap-3">
              <div className="hidden size-10 items-center justify-center rounded-full bg-primary/10 text-primary md:flex">
                {currentUser?.imageUrl ? (
                  <Image
                    src={currentUser.imageUrl}
                    alt={currentUser.username}
                    width={20}
                    className="size-10 rounded-full object-cover"
                    height={20}
                  />
                ) : (
                  <User className="size-5" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h1>Basic Information</h1>
                <p className="hidden text-xs text-muted-foreground md:block">
                  Let&apos;s start with some basic details about you.
                </p>
                <p className="hidden text-xs text-muted-foreground md:block">
                  This information will be used to personalize your experience.
                </p>
              </div>
            </div>
          </CardTitle>

          <CardAction>
            <Button variant="link">
              <Pencil />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <InfoField
              label="First Name"
              icon={<User className="size-4" />}
              value={currentUser?.firstName}
            />

            <InfoField
              label="Last Name"
              icon={<User className="size-4" />}
              value={currentUser?.lastName}
            />
          </div>

          <InfoField
            label="Username"
            icon={<span className="text-lg">@</span>}
            value={currentUser?.username}
          />

          <InfoField
            label="Email Address"
            icon={<Mail className="size-4" />}
            value={currentUser?.email}
            endContent={
              <Badge variant="success">
                <BadgeCheck data-icon="inline-start" />
                Verified
              </Badge>
            }
          />
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-2">
          <div></div>
          <Button
            onClick={handleNext}
            disabled={onboardingUpdate.isPending}
            className="w-24"
          >
            {onboardingUpdate.isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              "Continue"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default OnboardBasicInfoCard
