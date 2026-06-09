import { Button } from "@workspace/ui/components/button"
import { Bell } from "lucide-react"
import React from "react"

const Notification = () => {
  const count = 12

  return (
    <Button
      aria-label="View Notifications"
      className="relative"
      variant="ghost"
      size="icon"
    >
      <Bell className="h-4 w-4" />
      <span className="absolute -top-2 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-800 px-1 text-[10px] font-medium text-white">
        {count > 99 ? "99+" : count}
      </span>
    </Button>
  )
}

export default Notification
