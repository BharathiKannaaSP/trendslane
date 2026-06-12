import type { CurrentUser } from "./user.types"

export function mapCurrentUser(user: CurrentUser) {
  return {
    user: {
      id: user.id,
      clerkUserId: user.clerkUserId,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      systemRole: user.systemRole,
      onboardingStatus: user.onboardingStatus,
      onboardingStep: user.onboardingStep,
      selectedAccountType: user.selectedAccountType,
      countryName: user.countryName,
      countryCode: user.countryCode,
      isActive: user.isActive,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },

    memberships: user.memberships.map((membership) => ({
      id: membership.id,
      role: membership.role,
      status: membership.status,
      isActive: membership.isActive,
      joinedAt: membership.joinedAt,

      organization: {
        id: membership.organization.id,
        name: membership.organization.name,
        slug: membership.organization.slug,
        logoUrl: membership.organization.logoUrl,
        status: membership.organization.status,
        isActive: membership.organization.isActive,
      },
    })),
  }
}
