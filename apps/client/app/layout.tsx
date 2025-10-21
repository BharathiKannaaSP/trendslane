import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { poppins, trendslaneFont } from './font/font-configs'
import Footer from '@/components/Footer'
import Subscribe from '@/components/Subscribe'
import { Toaster } from '@/components/ui/sonner'
import { ClerkProvider } from '@clerk/nextjs'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ConvexClientProvider } from '@/components/ConvexClientProvider'

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
				className={`${trendslaneFont.className} ${poppins.variable} antialiased`}>
				<ConvexClientProvider>
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
				</ConvexClientProvider>
			</body>
		</html>
	)
}
