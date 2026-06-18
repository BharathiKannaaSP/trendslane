import {
  OnboardingStatus,
  OnboardingStep,
  Prisma,
  ThemeMode,
  ThemeRadius,
  ThemeScale,
} from "@workspace/auth-db"

export const currentUserInclude = Prisma.validator<Prisma.UserDefaultArgs>()({
  include: {
    userThemePreferences: true,
    memberships: {
      include: {
        organization: true,
      },
    },
  },
})

export type CurrentUser = Prisma.UserGetPayload<typeof currentUserInclude>

export type UpdateUserThemePreferencesInput = Partial<{
  themeMode: ThemeMode
  themeAccent: string
  themePreset: string
  themeSidebar: string
  themeRadius: ThemeRadius
  themeScale: ThemeScale
  themeAccentCustomized: boolean
  themeVersion: number
}>

export type UpdateCurrentUserInput = Prisma.UserUpdateInput

export type UpdateOnboardingInput = {
  onboardingStep: OnboardingStep
  onboardingStatus: OnboardingStatus
  onboardingStepNo: number
}
