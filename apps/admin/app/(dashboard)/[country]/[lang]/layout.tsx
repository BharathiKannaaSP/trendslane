import AppSidebar from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@workspace/ui/components/sidebar';
import { Toaster } from '@workspace/ui/components/sonner';
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import QueryProvider from '@/components/providers/QueryClientProvider';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <div className='flex'>
      <ThemeProvider>
        <QueryProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className='w-full'>
              <Navbar />
              <div className='px-4'>{children}</div>
            </main>
          </SidebarProvider>
          <Toaster position='bottom-left' duration={4000} />
        </QueryProvider>
      </ThemeProvider>
    </div>
  );
}
