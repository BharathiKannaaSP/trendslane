// fonts.ts (or wherever you want to keep fonts config)
import localFont from 'next/font/local'

export const poppins = localFont({
	src: [
		{
			path: './Poppins-Regular.ttf',
			weight: '400',
			style: 'normal'
		}
	],
	variable: '--font-poppins'
})

export const trendslaneFont = localFont({
	src: [
		{
			path: './MangoNew-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './MangoNew-SemiBold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: './MangoNew-Black.woff2',
			weight: '900',
			style: 'normal'
		}
	],
	variable: '--font-mango'
})
