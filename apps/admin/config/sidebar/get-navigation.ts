import { getAdminNavigation } from "./admin-navigation"
import { getOrgAdminNavigation } from "./org-admin-navigation"
import { getOrgMemberNavigation } from "./org-member-navigation"
import { NavItem, RoleType } from "./types"

export function getNavigation(
  role: RoleType,
  t: (key: string) => string
): NavItem[] {
  switch (role) {
    case "ADMIN":
      return getAdminNavigation(t)

    case "ORG_ADMIN":
      return getOrgAdminNavigation(t)

    case "ORG_MEMBER":
      return getOrgMemberNavigation(t)

    default:
      return []
  }
}
