// Get Date - 10-Jun-2026, Time - 21:15
export function getCurrentTimestamp() {
  const now = new Date()

  const date = now
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-")

  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return `Date - ${date}, Time - ${time}`
}
