import { adminNavigation } from "./admin-navigation"
import { orgAdminNavigation } from "./org-admin-navigation"
import { orgMemberNavigation } from "./org-member-navigation"
import { NavItem, Roles } from "./types"

export function getNavigation(role: Roles): NavItem[] {
  switch (role) {
    case "ADMIN":
      return adminNavigation

    case "ORG_ADMIN":
      return orgAdminNavigation

    case "ORG_MEMBER":
      return orgMemberNavigation

    default:
      return []
  }
}
