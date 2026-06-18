import React from "react"
import CommandSearch from "./command-search"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
// import CountrySwitcher from "./country-switcher"
import Notification from "./notification"
import UserMenu from "./user-menu"
// import { Role } from "@/config/sidebar/sidebar-types"
import { AppearancePopover } from "@/modules/preferences/components/header-appearance/appearance-popover"

const Header = () => {
  // const role = Role[0] // TODO: Replace with actual role from auth context
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <CommandSearch />
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* {role === Role[0] && <CountrySwitcher />} */}
        <Notification />
        <AppearancePopover />
        <UserMenu />
      </div>
    </header>
  )
}

export default Header
