import * as React from "react"

import { Button, ButtonProps } from "@workspace/ui/components/button"
import { Kbd } from "@workspace/ui/components/kbd"
import { cn } from "@workspace/ui/lib/utils"

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode
  children?: React.ReactNode
  shortcut?: string
  endContent?: React.ReactNode
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, children, shortcut, className, endContent, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "size-9 justify-center p-0 lg:h-9 lg:w-auto lg:justify-between lg:px-4",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon}
          {children && (
            <span className="hidden max-w-30 truncate lg:inline">
              {children}
            </span>
          )}
        </div>

        {shortcut && (
          <Kbd className="hidden px-1.5 text-xs lg:flex">{shortcut}</Kbd>
        )}

        {!shortcut && endContent && (
          <span className="hidden lg:flex">{endContent}</span>
        )}
      </Button>
    )
  }
)

IconButton.displayName = "IconButton"
