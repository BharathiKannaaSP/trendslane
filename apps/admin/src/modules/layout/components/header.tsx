import React from "react"
import CommandSearch from "./command-search"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import CountrySwitcher from "./country-switcher"
import Notification from "./notification"
import UserMenu from "./user-menu"
import { Logo } from "@workspace/ui/components/logo"
import { Role } from "@/src/config/sidebar/types"

const Header = () => {
  const role = Role[0] // TODO: Replace with actual role from auth context
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Logo className="mt-1 block h-6 w-6 md:hidden" />
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <CommandSearch />
        {role === Role[0] && <CountrySwitcher />}
        <Notification />
        <UserMenu />
      </div>
    </header>
  )
}

export default Header
