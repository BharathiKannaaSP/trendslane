import { AppSidebar } from "@/src/components/layout/app-sidebar"
import Navbar from "@/src/components/layout/header"
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
