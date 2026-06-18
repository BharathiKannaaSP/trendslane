import { prisma } from "@workspace/auth-db"
import {
  currentUserInclude,
  UpdateCurrentUserInput,
  UpdateOnboardingInput,
} from "./user.types"
import { countries } from "@workspace/shared"
import { getThemePreferences } from "./utils/get-theme-preference-based-on-role"

export async function getUserByClerkIdRepository(clerkUserId: string) {
  const user = await prisma.user.findUnique({
    where: {
      clerkUserId,
    },
    ...currentUserInclude,
  })
  return user
}

export async function updateUserLanguageRepository(
  clerkUserId: string,
  language: string
) {
  return prisma.user.update({
    where: { clerkUserId },
    data: { language },
  })
}

export async function updateCurrentUserRepository(
  clerkUserId: string,
  data: UpdateCurrentUserInput
) {
  const findCountryName = countries.find(
    (country) => country.code === data.countryCode
  )
  const countryName = findCountryName?.name

  const themePreferences = getThemePreferences(data.selectedAccountType)

  return prisma.user.update({
    where: {
      clerkUserId,
    },
    data: {
      selectedAccountType: data.selectedAccountType,
      countryCode: data.countryCode,
      countryName,
      address: data.address,
      bio: data.bio,
      phoneNumber: data.phoneNumber,
      timezone: data.timezone,
      language: data.language,
      referralCode: data.referralCode,
      preferences: {
        upsert: {
          create: {
            themeAccent: themePreferences.accentColor,
            themePreset: themePreferences.themePreset,
          },
          update: {
            themeAccent: themePreferences.accentColor,
            themePreset: themePreferences.themePreset,
          },
        },
      },
    },
  })
}

export async function updateOnboardingRepository(
  clerkUserId: string,
  data: UpdateOnboardingInput
) {
  return prisma.user.update({
    where: {
      clerkUserId,
    },
    data: {
      onboardingStep: data.onboardingStep,
      onboardingStatus: data.onboardingStatus,
      onboardingStepNo: data.onboardingStepNo,
    },
  })
}
