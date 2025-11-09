'use client'

import { createContext, useContext, ReactNode } from 'react'

interface LocationContextType {
	country: string
	language: string
}

const LocationContext = createContext<LocationContextType | null>(null)

export const LocationProvider = ({
	children,
	country,
	language
}: {
	children: ReactNode
	country: string
	language: string
}) => {
	return (
		<LocationContext.Provider value={{ country, language }}>
			{children}
		</LocationContext.Provider>
	)
}

export const useLocation = () => {
	const ctx = useContext(LocationContext)
	if (!ctx)
		throw new Error('useLocation does not have context or invalid context')
	return ctx
}
