// packages/shared/src/types/auth/current-user.dto.ts

export type SystemRole = "ADMIN" | "USER"

export type OrganizationRole = "ORG_ADMIN" | "ORG_MEMBER"

export type OrganizationStatus =
  | "PENDING"
  | "ACTIVE"
  | "REJECTED"
  | "SUSPENDED"
  | "NEEDS_ADDITIONAL_INFO"

export type MembershipStatus = "PENDING" | "APPROVED" | "REJECTED"

export type OnboardingStatus =
  | "PENDING"
  | "WAITING_APPROVAL"
  | "APPROVED"
  | "REJECTED"

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
  selectedAccountType: AccountType | null
  countryCode: string | null
  countryName: string | null
  isActive: boolean
  lastLoginAt: string | null
  createdAt: string
  updatedAt: string
  memberships: CurrentUserMembership[]
}

export interface CurrentUserResponse {
  user: CurrentUserDto
}
