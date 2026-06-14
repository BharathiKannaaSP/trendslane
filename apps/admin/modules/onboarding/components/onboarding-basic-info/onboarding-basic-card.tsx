"use client"
import { useOnboardingUpdate } from "@/modules/users/api/auth.repository.hooks"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { InfoField } from "@workspace/ui/components/info-field"
import { Badge } from "@workspace/ui/components/badge"
import { BadgeCheck, Mail, User } from "lucide-react"
import Image from "next/image"
import React, { useTransition } from "react"
import {
  CurrentUserDto,
  OnboardingStatus,
  OnboardingStep,
} from "@workspace/shared"
import OnboardingNavigation from "../onboarding-navigation"
import { useRouter } from "next/navigation"

const OnboardBasicInfoCard = ({ user }: { user: CurrentUserDto }) => {
  const onboardingUpdate = useOnboardingUpdate()
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleNext = async () => {
    await onboardingUpdate.mutateAsync({
      onboardingStep: OnboardingStep.ADDITIONAL_DETAILS,
      onboardingStatus: OnboardingStatus.PENDING,
      onboardingStepNo: 2,
    })
    startTransition(() => {
      router.push("/onboarding-additional-details")
      router.refresh()
    })
  }

  return (
    <div>
      <Card>
        <CardHeader className="ml-4 p-3">
          <CardTitle>
            <div className="flex items-center gap-3">
              <div className="hidden size-10 items-center justify-center rounded-full bg-primary/10 text-primary md:flex">
                {user.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt={user.username}
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

          {/* <CardAction>
            <Button variant="link" onClick={() => router.push("/profile")}>
              <Pencil />
            </Button>
          </CardAction> */}
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <InfoField
              label="First Name"
              icon={<User className="size-4" />}
              value={user.firstName}
            />

            <InfoField
              label="Last Name"
              icon={<User className="size-4" />}
              value={user.lastName}
            />
          </div>

          <InfoField
            label="Username"
            icon={<span className="text-lg">@</span>}
            value={user.username}
          />

          <InfoField
            label="Email Address"
            icon={<Mail className="size-4" />}
            value={user.email}
            endContent={
              <Badge variant="success" className="hidden md:flex">
                <BadgeCheck data-icon="inline-start" />
                Verified
              </Badge>
            }
          />
        </CardContent>
        <CardFooter>
          <OnboardingNavigation
            showPrevious={false}
            onNext={handleNext}
            isNextLoading={onboardingUpdate.isPending || isPending}
            isNextDisabled={onboardingUpdate.isPending || isPending}
          />
        </CardFooter>
      </Card>
    </div>
  )
}

export default OnboardBasicInfoCard
