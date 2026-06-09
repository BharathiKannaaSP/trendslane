"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { COMMANDS } from "../config/commands"

export function useCommandSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

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

      if (!open) return

      // Command shortcuts require Ctrl/Cmd
      if (!isMetaPressed) return

      const command = COMMANDS.find(
        (cmd) => cmd.shortcut === event.key.toLowerCase()
      )

      if (!command) return

      event.preventDefault()
      navigate(command.path)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])
  return {
    open,
    setOpen,
    navigate,
    commands: COMMANDS,
  }
}
