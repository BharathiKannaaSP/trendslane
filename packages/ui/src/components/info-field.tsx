import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

type InfoFieldProps = {
  label: string
  value?: string | null
  icon?: React.ReactNode
  endContent?: React.ReactNode
}

export function InfoField({ label, value, icon, endContent }: InfoFieldProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <div
        className={cn(
          "flex h-12 items-center justify-between",
          "rounded-lg border bg-muted/20 px-4"
        )}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-muted-foreground">{icon}</div>}

          <span className="font-medium">{value || "-"}</span>
        </div>

        {endContent}
      </div>
    </div>
  )
}
