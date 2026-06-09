"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { commandGroups } from "../config/commands"

export function useCommandSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const commands = useMemo(
    () => commandGroups.flatMap((group) => group.items),
    []
  )

  const navigate = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMetaPressed = event.metaKey || event.ctrlKey

      // Cmd/Ctrl + K
      if (isMetaPressed && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen(true)
        return
      }

      if (!open || !isMetaPressed) {
        return
      }

      const command = commands.find(
        (cmd) =>
          cmd.shortcut && cmd.shortcut.toLowerCase() === event.key.toLowerCase()
      )

      if (!command) {
        return
      }

      event.preventDefault()
      navigate(command.path)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, commands])

  return {
    open,
    setOpen,
    navigate,
    commands,
    commandGroups,
  }
}
