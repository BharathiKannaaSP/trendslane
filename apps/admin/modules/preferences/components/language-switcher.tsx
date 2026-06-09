"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import React from "react"
import { LANGUAGES } from "../constants/languages"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"

const LanguageSwitcher = () => {
  const locale = useLocale()

  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (newLocale: string) => {
    router.replace(pathname, {
      locale: newLocale,
    })
  }

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-full" aria-label="Select language">
        <SelectValue placeholder="Select a language" aria-label={locale} />
      </SelectTrigger>

      <SelectContent>
        {LANGUAGES.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            <div className="flex items-center gap-2">
              <span>{language.nativeLabel}</span>
              <span className="text-xs text-muted-foreground">
                ({language.label})
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher
