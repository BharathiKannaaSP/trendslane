import { v } from 'convex/values'
import { mutation, query } from '../_generated/server.js'

export const createOrUpdateUser = mutation({
	args: {
		userId: v.string(),
		name: v.string(),
		email: v.string()
	},
	handler: async (ctx, { userId, name, email }) => {
		const existingUser = await ctx.db
			.query('users')
			.withIndex('by_user_id', (q) => q.eq('userId', userId))
			.first()
		if (existingUser) {
			await ctx.db.patch(existingUser._id, {
				name,
				email
			})

			return existingUser
		}

		const newUser = await ctx.db.insert('users', {
			userId,
			name,
			email
		})
		return newUser
	}
})

export const getAllUsers = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query('users').collect()
	}
})
