import { CreditCard, Settings, User } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type CommandItem = {
  label: string
  shortcut: string
  path: string
  icon: LucideIcon
}

export const COMMANDS: CommandItem[] = [
  {
    label: "Profile",
    shortcut: "p",
    path: "/profile",
    icon: User,
  },
  {
    label: "Billing",
    shortcut: "b",
    path: "/billing",
    icon: CreditCard,
  },
  {
    label: "Settings",
    shortcut: "s",
    path: "/settings",
    icon: Settings,
  },
]
