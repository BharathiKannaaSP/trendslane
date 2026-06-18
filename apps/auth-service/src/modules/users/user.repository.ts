import { prisma } from "@workspace/auth-db"
import {
  currentUserInclude,
  UpdateCurrentUserInput,
  UpdateOnboardingInput,
  UpdateUserThemePreferencesInput,
} from "./user.types"
import { getThemePreferences } from "./utils/get-theme-preference-based-on-role"
import { ApiError } from "../../errors/api-error"
import { countries } from "@workspace/shared"

export async function getUserByClerkIdRepository(clerkUserId: string) {
  const user = await prisma.user.findUnique({
    where: {
      clerkUserId,
    },
    ...currentUserInclude,
  })
  return user
}

export async function updateUserThemePreferencesRepository(
  clerkUserId: string,
  data: UpdateUserThemePreferencesInput
) {
  const user = await prisma.user.findUnique({
    where: { clerkUserId },
    select: { id: true },
  })

  if (!user) {
    throw new ApiError(404, "User not found")
  }

  return prisma.userThemePreferences.upsert({
    where: {
      userId: user.id,
    },
    create: {
      userId: user.id,
      ...data,
    },
    update: {
      ...data,
    },
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
      userThemePreferences: {
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
    include: {
      userThemePreferences: true,
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
