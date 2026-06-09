import {
  Bell,
  FolderTree,
  HelpCircle,
  History,
  Home,
  Languages,
  LockKeyhole,
  LogOut,
  Navigation,
  Package,
  Pencil,
  Settings,
  Shield,
  SlidersHorizontal,
  User,
  Users,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

export interface CommandItem {
  label: string
  path: string
  icon: LucideIcon
  shortcut?: string
}

export interface CommandGroup {
  heading: string
  items: CommandItem[]
}

export const commandGroups: CommandGroup[] = [
  {
    heading: "groups.organization",
    items: [
      {
        label: "items.dashboard",
        path: "/",
        icon: Home,
        shortcut: "d",
      },
      {
        label: "items.myTasks",
        path: "/tasks",
        icon: Bell,
      },
      {
        label: "items.activity",
        path: "/activity",
        icon: History,
      },
      {
        label: "items.notifications",
        path: "/notifications",
        icon: Bell,
      },
      {
        label: "items.helpSupport",
        path: "/support",
        icon: HelpCircle,
      },
    ],
  },

  {
    heading: "groups.catalog",
    items: [
      {
        label: "items.products",
        path: "/products",
        icon: Package,
        shortcut: "p",
      },
      {
        label: "items.categories",
        path: "/categories",
        icon: FolderTree,
        shortcut: "c",
      },
      {
        label: "items.audiences",
        path: "/audiences",
        icon: Users,
      },
      {
        label: "items.navigation",
        path: "/navigation",
        icon: Navigation,
      },
    ],
  },

  {
    heading: "groups.settings",
    items: [
      {
        label: "items.preferences",
        path: "/preferences",
        icon: SlidersHorizontal,
      },
      {
        label: "items.accountSettings",
        path: "/account",
        icon: Settings,
        shortcut: "s",
      },
      {
        label: "items.security",
        path: "/security",
        icon: Shield,
      },
      {
        label: "items.notificationPreferences",
        path: "/notifications",
        icon: Bell,
      },
      {
        label: "items.language",
        path: "/language",
        icon: Languages,
      },
    ],
  },

  {
    heading: "groups.profile",
    items: [
      {
        label: "items.myProfile",
        path: "/profile",
        icon: User,
        shortcut: "u",
      },
      {
        label: "items.editProfile",
        path: "/profile/edit",
        icon: Pencil,
      },
      {
        label: "items.changePassword",
        path: "/security/password",
        icon: LockKeyhole,
      },
      {
        label: "items.sessions",
        path: "/security/sessions",
        icon: Shield,
      },
      {
        label: "items.signOut",
        path: "/logout",
        icon: LogOut,
      },
    ],
  },
]
