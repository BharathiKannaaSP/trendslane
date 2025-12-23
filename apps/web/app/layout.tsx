import { Geist, Geist_Mono } from 'next/font/google'
import '@workspace/ui/globals.css'
import { Providers } from '@/components/providers'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/Navbar/navbar'
import { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = Geist({
	subsets: ['latin'],
	variable: '--font-sans'
})

const fontMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-mono'
})

export const metadata: Metadata = {
	title: 'Trendslane',
	description:
		'Trendslane is your go-to online marketplace in India, US, and France offering a wide range of products across multiple categories with seamless shopping, tracking, and customer support.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body
					className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
					<Providers>
						<Navbar />
						{children}
						<SpeedInsights />
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	)
}
