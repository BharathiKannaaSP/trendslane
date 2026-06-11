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

import { useTranslations } from "next-intl"
import { useClerk } from "@clerk/nextjs"

const UserMenu = () => {
  const { signOut } = useClerk()
  const t = useTranslations("UserMenu")
  const menuItems = [
    {
      label: t("profile"),
      href: "/profile",
      icon: User,
    },
    {
      label: t("accountSettings"),
      href: "/account",
      icon: Settings,
    },
    {
      label: t("preferences"),
      href: "/preferences",
      icon: SlidersHorizontal,
    },
    {
      label: t("activityLogs"),
      href: "/activity",
      icon: ActivityIcon,
    },
    {
      label: t("helpSupport"),
      href: "/help",
      icon: HelpCircle,
    },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="CN" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="hidden flex-col gap-1 md:flex">
          <p className="text-xs font-semibold">Rachel Green</p>
          <p className="self-start text-xs text-muted-foreground">
            {t("admin")}
          </p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="flex w-64 flex-col gap-2"
      >
        <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
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

        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => signOut()}>
          <LogOut className="size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
