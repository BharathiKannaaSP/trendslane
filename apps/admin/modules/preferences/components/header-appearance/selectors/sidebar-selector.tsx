import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { SidebarMode } from "../types"
import { SIDEBAR_OPTIONS } from "@/modules/preferences/constants/sidebar-options"

interface SidebarSelectorProps {
  value: SidebarMode
  onChange: (value: SidebarMode) => void
}

export function SidebarSelector({ value, onChange }: SidebarSelectorProps) {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={0}
      value={value}
      onValueChange={(value) => {
        if (value) {
          onChange(value as SidebarMode)
        }
      }}
      className="w-full"
    >
      {SIDEBAR_OPTIONS.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          className="flex-1 gap-2 text-xs"
        >
          <option.icon className="size-4" />
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
