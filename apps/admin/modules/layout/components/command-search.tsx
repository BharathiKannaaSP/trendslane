"use client"
import React, { useRef } from "react"
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
import { IconButton } from "@workspace/ui/components/icon-button"
import { useTranslations } from "next-intl"
import { useCommandSearch } from "@/hooks/use-command-search"
import { commandGroups } from "@/config/commands"

const CommandSearch = () => {
  const t = useTranslations("CommandSearch")
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const { open, setOpen, navigate } = useCommandSearch()

  return (
    <div className="flex flex-col gap-4">
      <IconButton
        variant="iconButton"
        ref={searchButtonRef}
        onClick={() => setOpen(true)}
        aria-label={t("search")}
        className="w-10 text-muted-foreground text-xs lg:w-60"
        icon={<Search className="size-4" />}
        shortcut="⌘ K"
      >
        {t("searchAnything")}
      </IconButton>

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
