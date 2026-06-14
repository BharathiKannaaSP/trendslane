import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "../../../modules/layout/components/app-sidebar"
import Header from "@/modules/layout/components/header"
import { authGate } from "@/modules/auth/server/auth-gate"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await authGate()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex-1 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
