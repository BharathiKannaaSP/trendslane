"use client"
import Link from "next/link"
import React from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  ActivityIcon,
  HelpCircle,
  LogOut,
  Settings,
  SlidersHorizontal,
  User,
} from "lucide-react"

import ThemeSwitcher from "./theme-switcher"

const menuItems = [
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Account Settings",
    href: "/account",
    icon: Settings,
  },
  {
    label: "Preferences",
    href: "/preferences",
    icon: SlidersHorizontal,
  },
  {
    label: "Activity Logs",
    href: "/activity",
    icon: ActivityIcon,
  },
  {
    label: "Help & Support",
    href: "/help",
    icon: HelpCircle,
  },
]

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="CN" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="hidden flex-col gap-1 md:flex">
          <p className="text-xs font-semibold">Rachel Green</p>
          <p className="self-start text-xs text-muted-foreground">Admin</p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="flex w-64 flex-col gap-2"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href}>
                <Icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            </DropdownMenuItem>
          )
        })}
        <div className="px-1.5 py-1">
          <ThemeSwitcher />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
