import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { TIMEZONES } from "../../../constants/time-zones"

const TimezoneSwitcher = () => {
  return (
    <Select>
      <SelectTrigger className="w-full" aria-label="Select timezone">
        <SelectValue
          placeholder="Select a timezone"
          aria-label="Selected timezone"
        />
      </SelectTrigger>

      <SelectContent>
        {TIMEZONES.map((timezone) => (
          <SelectGroup key={timezone.value}>
            <SelectLabel>{timezone.country}</SelectLabel>

            <SelectItem value={timezone.value}>{timezone.label}</SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TimezoneSwitcher
