import { LucideIcon } from "lucide-react"

interface SettingsFieldProps {
  label: string
  description?: string
  children: React.ReactNode
  icon?: LucideIcon
}

export function SettingsField({
  icon: Icon,
  label,
  description,
  children,
}: SettingsFieldProps) {
  return (
    <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-start gap-2">
        {Icon && (
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full">
            <Icon className="size-5" />
          </div>
        )}

        <div className="space-y-1">
          <p className="font-medium">{label}</p>

          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      <div className="w-full p-2 lg:w-80 lg:p-0">{children}</div>
    </div>
  )
}
