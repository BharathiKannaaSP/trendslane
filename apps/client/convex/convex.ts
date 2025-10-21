import { ConvexReactClient } from 'convex/react'
import { api } from '../../auth-service/convex/_generated/api'

export const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
export { api }
