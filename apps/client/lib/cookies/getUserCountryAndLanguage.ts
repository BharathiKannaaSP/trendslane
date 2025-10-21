import { cookies } from 'next/headers'

export const getUserCountryAndLanguage = async () => {
	const cookieStore = await cookies()

	const country = cookieStore.get('country')?.value || 'in'
	const language = cookieStore.get('language')?.value || 'en'

	return { country, language }
}
