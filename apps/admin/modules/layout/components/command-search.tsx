"use client"
import React, { useRef } from "react"
import { Button } from "@workspace/ui/components/button"
import { Kbd } from "@workspace/ui/components/kbd"
import { Search } from "lucide-react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command"
import { useTranslations } from "next-intl"
import { useCommandSearch } from "@/hooks/use-command-search"
import { commandGroups } from "@/config/commands"

const CommandSearch = () => {
  const t = useTranslations("CommandSearch")
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const { open, setOpen, navigate } = useCommandSearch()

  return (
    <div className="flex flex-col gap-4">
      <Button
        ref={searchButtonRef}
        onClick={() => setOpen(true)}
        variant="outline"
        aria-label={t("search")}
        className="h-8 w-10 justify-between text-muted-foreground lg:w-60"
      >
        <div className="flex items-center gap-2 text-xs">
          <Search className="h-4 w-4" />
          <span className="hidden lg:flex">{t("searchAnything")}</span>
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
          <CommandInput placeholder={t("searchPlaceholder")} />
          <CommandList>
            <CommandEmpty>{t("noResults")}</CommandEmpty>
            {commandGroups.map((group) => (
              <CommandGroup key={group.heading} heading={t(group.heading)}>
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <CommandItem
                      key={item.path}
                      onSelect={() => navigate(item.path)}
                    >
                      <Icon className="size-4" />
                      <span>{t(item.label)}</span>

                      {item.shortcut && (
                        <CommandShortcut>
                          ⌘{item.shortcut.toUpperCase()}
                        </CommandShortcut>
                      )}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default CommandSearch
