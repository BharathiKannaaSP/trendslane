import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Trendslane',
	description:
		'Trendslane is your go-to online marketplace in India, US, UK, France and Canada, offering a wide range of products across multiple categories with seamless shopping, tracking, and customer support.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ClerkProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<main className='w-full'>
							<Navbar />
							{children}
							<Subscribe />
							<Footer />
						</main>
					</ThemeProvider>
					<Toaster duration={3000} position='top-right' />
				</ClerkProvider>
			</body>
		</html>
	)
}
