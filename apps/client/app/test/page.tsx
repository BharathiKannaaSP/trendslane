'use client'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/convex'

const TestPage = () => {
	const users = useQuery(api.functions.user.getAllUsers)
	return (
		<div>
			{users?.map((user: any) => (
				<li key={user._id}>
					{user.name} - {user.email} - {user._id}
				</li>
			))}
		</div>
	)
}

export default TestPage
