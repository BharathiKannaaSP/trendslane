import { Card, CardContent } from "@workspace/ui/components/card"

interface SettingsCardProps {
  children: React.ReactNode
}

export function SettingsCard({ children }: SettingsCardProps) {
  return (
    <Card>
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  )
}
