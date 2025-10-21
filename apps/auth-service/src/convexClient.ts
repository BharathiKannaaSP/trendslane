import { ConvexHttpClient } from 'convex/browser'

export const convex = new ConvexHttpClient(process.env.AUTH_CONVEX_URL!)
