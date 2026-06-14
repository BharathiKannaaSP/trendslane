"use client"

import { LogOut } from "lucide-react"
import { useClerk } from "@clerk/nextjs"
import { useTranslations } from "next-intl"
import { IconButton } from "@workspace/ui/components/icon-button"

export function LogoutButton() {
  const { signOut } = useClerk()
  const t = useTranslations("UserMenu")

  return (
    <IconButton
      variant="destructive"
      onClick={() => signOut()}
      className="gap-2"
      icon={<LogOut className="size-4" />}
    >
      {t("logout")}
    </IconButton>
  )
}
