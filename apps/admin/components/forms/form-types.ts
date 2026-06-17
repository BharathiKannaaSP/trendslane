import { LucideIcon } from "lucide-react"

export type FieldType =
  | "text"
  | "textarea"
  | "select"
  | "switch"
  | "multiselect"
  | "email"
  | "password"
  | "radio-group"
  | "phone-number-select"

export interface SelectOption {
  label: string
  value: string
  description?: string
  icon?: LucideIcon
}

export interface OptionGroup {
  label: string
  options: SelectOption[]
}

export interface RegionOptionGroup {
  region: string
  options: SelectOption[]
}

export type SelectFieldOptions =
  | SelectOption[]
  | OptionGroup[]
  | RegionOptionGroup[]

export interface FieldConfig {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  description?: string
  required?: boolean
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any
  colSpan?: 1 | 2
  options?: SelectFieldOptions
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export interface FormSection {
  title: string
  description?: string
  fields: string[]
  isLastField?: boolean
  icon?: React.ComponentType
}

export interface EntityFormConfig {
  title: string
  description?: string
  submitLabel?: string
  updateLabel?: string
  sections: FormSection[]
  fields: FieldConfig[]
  backLinks: {
    text: string
    href: string
  }[]
}
