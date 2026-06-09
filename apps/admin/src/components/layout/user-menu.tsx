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
        sideOffset={8}
        className="flex w-64 flex-col gap-2"
        align="end"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <span className="ml-1">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <span className="ml-1">Account Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SlidersHorizontal className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <span className="ml-1">Preferences</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ActivityIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <span className="ml-1">Activity Logs</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <span className="ml-1">Help & Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ThemeSwitcher />
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive">
          <LogOut className="mr-1 ml-1 h-[1.2rem] w-[1.2rem]" />
          <span className="ml-1">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
