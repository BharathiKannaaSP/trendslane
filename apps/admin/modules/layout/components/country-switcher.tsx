"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Separator } from "@workspace/ui/components/separator"
import { Check, ChevronDown, ChevronRight, Globe, Settings } from "lucide-react"
import { useCountry } from "@/providers/country-provider"
import { setCountryCookie } from "@/lib/country-cookies-utils/country-client"
import { useRouter } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { IconButton } from "@workspace/ui/components/icon-button"

const countries = [
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w1280/sa.png",
  },
  {
    code: "FR",
    name: "France",
    flag: "https://flagcdn.com/w1280/fr.png",
  },
  {
    code: "DE",
    name: "Germany",
    flag: "https://flagcdn.com/w1280/de.png",
  },
]

const recentCountries = [
  {
    code: "ALL",
    name: "All Countries",
    flag: "https://img.magnific.com/free-vector/globe-grid-earth_78370-7981.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    code: "IN",
    name: "India",
    flag: "https://flagcdn.com/w1280/in.png",
  },
  {
    code: "US",
    name: "United States",
    flag: "https://flagcdn.com/w1280/us.png",
  },
]

export default function CountrySwitcher() {
  const [open, setOpen] = useState(false)
  const country = useCountry()
  const router = useRouter()
  const t = useTranslations("CountrySwitcher")

  const selectedCountry = useMemo(() => {
    return [...recentCountries, ...countries].find(
      (item) => item.code === country
    )
  }, [country])

  const handleSelect = (selectedCountry: {
    code: string
    name: string
    flag: string
  }) => {
    setCountryCookie(selectedCountry.code)
    setOpen(false)
    router.refresh()
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <IconButton
          variant="iconButton"
          role="combobox"
          aria-expanded={open}
          aria-label={t("selectCountry")}
          className="w-9 text-xs lg:w-auto"
          icon={<Globe className="size-4" />}
          endContent={<ChevronDown className="size-4 opacity-50" />}
        >
          {selectedCountry?.name ?? t("selectCountry")}
        </IconButton>
      </PopoverTrigger>

      <PopoverContent sideOffset={8} className="w-[320px] p-0">
        <Command>
          <CommandInput placeholder={t("searchCountry")} />

          <CommandList>
            <CommandEmpty>{t("noCountryFound")}</CommandEmpty>

            <CommandGroup heading={t("recent")}>
              {recentCountries.map((item) => (
                <CommandItem
                  key={item.code}
                  value={item.name}
                  onSelect={() => handleSelect(item)}
                  className="flex w-full items-center"
                >
                  <Image
                    width={16}
                    height={12}
                    src={item.flag}
                    alt={`${item.name} flag`}
                    className="mr-2 h-4 w-6 object-cover"
                  />

                  <span className="flex-1 truncate">{item.name}</span>

                  {country === item.code ? (
                    <Check className="size-4" />
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.code}
                    </span>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading={t("allCountries")}>
              {countries.map((item) => (
                <CommandItem
                  key={item.code}
                  value={item.name}
                  onSelect={() => handleSelect(item)}
                  className="flex w-full items-center"
                >
                  <Image
                    width={16}
                    height={12}
                    src={item.flag}
                    alt={`${item.name} flag`}
                    className="mr-2 h-4 w-6 object-cover"
                  />

                  <span className="flex-1 truncate">{item.name}</span>

                  {country === item.code ? (
                    <Check className="size-4" />
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.code}
                    </span>
                  )}
                </CommandItem>
              ))}

              <CommandItem
                className="mt-1"
                value="view-all-countries"
                onSelect={() => {
                  setOpen(false)
                  router.push("/countries")
                }}
              >
                <Globe className="size-5" />
                <span>{t("viewAllCountries")}</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
          <Separator />
          <div className="flex items-center justify-between p-3">
            <Link href="/countries" className="flex items-center gap-2">
              <Settings className="size-5" />

              <div className="flex flex-col gap-1 text-sm">
                <span>{t("manageCountries")}</span>

                <span className="text-muted-foreground">
                  {t("manageCountriesDescription")}
                </span>
              </div>
            </Link>

            <ChevronRight />
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
