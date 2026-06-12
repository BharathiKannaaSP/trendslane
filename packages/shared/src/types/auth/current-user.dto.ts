import z from "zod"
import { OnboardingStatus, OnboardingStep } from "../onboarding"

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
  isActive: boolean
  lastLoginAt: string | null
  createdAt: string
  updatedAt: string
  memberships: CurrentUserMembership[]
}

export interface CurrentUserResponse {
  user: CurrentUserDto
}

const requiredString = (field: string) =>
  z
    .string({
      required_error: `${field} is required`,
      invalid_type_error: `${field} must be a string`,
    })
    .trim()

export const basicInformationSchema = z
  .object({
    firstName: requiredString("First name")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long"),

    lastName: requiredString("Last name")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long"),

    username: requiredString("Username")
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username is too long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers and underscores"
      )
      .transform((value) => value.toLowerCase()),

    email: requiredString("Email address").email("Invalid email address"),

    password: requiredString("Password")
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long")
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter"
      )
      .regex(
        /(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      )
      .regex(/(?=.*\d)/, "Password must contain at least one number")
      .regex(
        /(?=.*[@$!%*?&])/,
        "Password must contain at least one special character"
      ),

    confirmPassword: requiredString("Confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  })

export type BasicInformationInputType = z.input<typeof basicInformationSchema>

export type BasicInformationOutputType = z.output<typeof basicInformationSchema>
