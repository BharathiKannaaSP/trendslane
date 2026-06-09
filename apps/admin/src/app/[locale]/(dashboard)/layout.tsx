import { AppSidebar } from "@/src/modules/layout/components/app-sidebar"
import Navbar from "@/src/modules/layout/components/header"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
