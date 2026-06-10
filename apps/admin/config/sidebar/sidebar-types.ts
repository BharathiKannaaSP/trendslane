import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  url?: string
  icon?: LucideIcon
  children?: NavItem[]
}

export const Role = ["ADMIN", "ORG_ADMIN", "ORG_MEMBER"] as const
export type RoleType = (typeof Role)[number]
