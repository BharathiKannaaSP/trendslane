import { LucideIcon } from "lucide-react"

interface SettingsCardHeaderProps {
  icon: LucideIcon
  title: string
  description?: string
}

export function SettingsCardHeader({
  icon: Icon,
  title,
  description,
}: SettingsCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 border-b p-4">
      <div className="hidden size-10 items-center justify-center rounded-full bg-primary/10 text-primary md:flex">
        <Icon className="size-5" />
      </div>

      <div>
        <h2 className="font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}
