"use client"

import { LogOut } from "lucide-react"
import { useClerk } from "@clerk/nextjs"
import { Button } from "@workspace/ui/components/button"
import { useTranslations } from "next-intl"

export function LogoutButton() {
  const { signOut } = useClerk()
  const t = useTranslations("UserMenu")

  return (
    <Button
      variant="destructive"
      onClick={() => signOut()}
      className="gap-2"
    >
      <LogOut className="size-4" />
      {t("logout")}
    </Button>
  )
}
