import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@workspace/ui/globals.css';
import AppSidebar from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@workspace/ui/components/sidebar';
import { Toaster } from '@workspace/ui/components/sonner';
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import QueryProvider from '@/components/providers/QueryClientProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Trendslane - Admin',
  description: 'Admin dashboard for Trendslane',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <ThemeProvider>
          <QueryProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main className='w-full'>
                <Navbar />
                <div className='px-4'>{children}</div>
              </main>
            </SidebarProvider>
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
