"use client"
import React, { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Check, ChevronDown, Globe } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const countries = [
  { code: "ALL", name: "All Countries" },
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "FR", name: "France" },
]

const CountrySwitcher = () => {
  const [open, setOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  if (!countries) return null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-8 justify-between"
          aria-label="Select country"
        >
          <div className="flex items-center gap-2 text-xs">
            <Globe className="size-4" />
            <span className="hidden lg:flex">{selectedCountry?.name}</span>
          </div>

          <ChevronDown className="size-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent sideOffset={8} align="end" className="w-[320px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />

          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>

            <CommandGroup heading="Countries">
              {countries.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.name}
                  onSelect={() => {
                    setSelectedCountry(country)
                    setOpen(false)

                    // TODO:
                    // update zustand store
                    // update URL params
                    // invalidate react-query
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedCountry?.code === country.code
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />

                  {country.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default CountrySwitcher
