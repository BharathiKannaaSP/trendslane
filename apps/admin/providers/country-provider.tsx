"use client"

import { createContext, useContext } from "react"

type CountryContextType = {
  country: string
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

export function CountryProvider({
  children,
  initialCountry,
}: {
  children: React.ReactNode
  initialCountry: string
}) {
  return (
    <CountryContext.Provider
      value={{
        country: initialCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  const context = useContext(CountryContext)

  if (!context) {
    throw new Error("useCountry must be used inside CountryProvider")
  }

  return context.country
}
