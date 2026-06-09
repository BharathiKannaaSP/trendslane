import { getCurrentCountry } from "../lib/country-server"
import { CountryProvider } from "./country-provider"

export default async function CountryProviderServer({
  children,
}: {
  children: React.ReactNode
}) {
  const country = await getCurrentCountry()

  return <CountryProvider initialCountry={country}>{children}</CountryProvider>
}
