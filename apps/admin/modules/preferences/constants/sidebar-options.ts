import { PanelLeft, PanelLeftClose } from "lucide-react"

export const SIDEBAR_OPTIONS = [
  {
    value: "default",
    label: "Default",
    icon: PanelLeft,
  },
  {
    value: "icon",
    label: "Icon",
    icon: PanelLeftClose,
  },
] as const
