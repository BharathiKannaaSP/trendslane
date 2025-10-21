import { NextRequest, NextResponse } from 'next/server'

const setCookie = (response: NextResponse, name: string, value: string) => {
	const cookieOptions = {
		path: '/',
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true,
		secure: true,
		sameSite: 'lax' as const
	}
	response.cookies.set(name, value, cookieOptions)
}

export const middleware = async (req: NextRequest) => {
	const countryCookie = req.cookies.get('country')
	const languageCookie = req.cookies.get('lang')
	const response = NextResponse.next()
	if (!countryCookie) {
		try {
			// const res = await fetch('https://ipinfo.io/json?token=fe20492b7a927a')
			// const data = await res.json()
			// const country = data.country.toLowerCase()
			// setCookie(response, 'country', country)
		} catch (err) {
			setCookie(response, 'country', 'US')
		}
	}

	// Set language if missing
	if (!languageCookie) {
		setCookie(response, 'language', 'en')
	}
	return response
}

export const config = { matcher: '/' }
