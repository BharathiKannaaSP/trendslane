"use client"
import React, { useRef } from "react"
import { Button } from "@workspace/ui/components/button"
import { Kbd } from "@workspace/ui/components/kbd"
import { Calculator, Calendar, Search, Smile } from "lucide-react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/command"
import { useCommandSearch } from "@/src/hooks/use-command-search"

const CommandSearch = () => {
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const { open, setOpen, navigate, commands } = useCommandSearch()

  return (
    <div className="flex flex-col gap-4">
      <Button
        ref={searchButtonRef}
        onClick={() => setOpen(true)}
        variant="outline"
        className="h-8 w-10 justify-between text-muted-foreground lg:w-60"
      >
        <div className="flex items-center gap-2 text-xs">
          <Search className="h-4 w-4" />
          <span className="hidden lg:flex">Search anything...</span>
        </div>
        <Kbd className="hidden px-1.5 text-xs lg:flex">⌘ K</Kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen)

          if (!nextOpen) {
            requestAnimationFrame(() => {
              searchButtonRef.current?.focus()
            })
          }
        }}
      >
        <Command className="border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              {commands.map((command) => {
                const Icon = command.icon

                return (
                  <CommandItem
                    key={command.path}
                    onSelect={() => navigate(command.path)}
                  >
                    <Icon className="size-4" />
                    <span>{command.label}</span>

                    <CommandShortcut>
                      ⌘{command.shortcut.toUpperCase()}
                    </CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default CommandSearch
