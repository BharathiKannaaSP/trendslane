import { ThemeMode, ThemePreset, AccentColor, Scale, Radius } from "../theme"
import { OnboardingStatus, OnboardingStep } from "../onboarding/onboarding.dto"

export type SystemRole = "ADMIN" | "USER"

export type OrganizationRole = "ORG_ADMIN" | "ORG_MEMBER"

export type OrganizationStatus =
  | "PENDING"
  | "ACTIVE"
  | "REJECTED"
  | "SUSPENDED"
  | "NEEDS_ADDITIONAL_INFO"

export type MembershipStatus = "PENDING" | "APPROVED" | "REJECTED"

export type AccountType = "ADMIN" | "ORG_ADMIN" | "ORG_MEMBER"

export interface CurrentUserOrganization {
  id: string
  name: string
  slug: string
  logoUrl: string | null
  status: OrganizationStatus
  isActive: boolean
  countryId: string
  createdAt: string
  updatedAt: string
}

export interface CurrentUserMembership {
  id: string
  role: OrganizationRole
  status: MembershipStatus
  isActive: boolean
  joinedAt: string | null
  organization: CurrentUserOrganization
}

export interface UserThemePreferences {
  id: string
  userId: string
  themeMode: ThemeMode
  themeAccent: AccentColor
  themePreset: ThemePreset
  themeSidebar: string
  themeRadius: Radius
  themeScale: Scale
  themeAccentCustomized: boolean
  themeVersion: number
  createdAt: Date
  updatedAt: Date
}

export type UpdateUserThemePreferences = Partial<UserThemePreferences>

export interface CurrentUserDto {
  id: string
  clerkUserId: string
  email: string
  username: string
  firstName: string | null
  lastName: string | null
  imageUrl: string | null
  systemRole: SystemRole
  onboardingStatus: OnboardingStatus
  onboardingStep: OnboardingStep
  onboardingStepNo: number
  selectedAccountType: AccountType | null
  countryCode: string | null
  countryName: string | null
  phoneNumber: string | null
  address: string | null
  bio: string | null
  timezone: string | null
  language: string | null
  referralCode: string | null
  isActive: boolean
  lastLoginAt: string | null
  createdAt: string
  updatedAt: string
  memberships: CurrentUserMembership[]
  userThemePreferences: UserThemePreferences
}

export interface CurrentUserResponse {
  user: CurrentUserDto
}

export type UpdateCurrentUserInput = {
  selectedAccountType?: AccountType
  countryCode?: string
  address?: string
  bio?: string
  phoneNumber?: string
  timezone?: string
  language?: string
  referralCode?: string
}
