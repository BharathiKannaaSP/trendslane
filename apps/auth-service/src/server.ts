import express, { Request, Response } from 'express'
import cors from 'cors'
import { convex } from './convexClient.js'
import { api } from '../convex/_generated/api.js'

const app = express()
app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001']
	})
)
app.use(express.json())

app.post('/users', async (req: Request, res: Response) => {
	const { userId, email, name } = req.body
	await convex.mutation(api.functions.user.createOrUpdateUser, {
		userId,
		email,
		name
	})
	res.status(200).json({ message: 'User created successfully!' })
})

app.get('/users', async (req: Request, res: Response) => {
	const allUsers = await convex.query(api.functions.user.getAllUsers)
	res.status(200).json(allUsers)
})

app.listen(process.env.PORT, () => {
	console.log(`Auth service is running in PORT- ${process.env.PORT}!`)
})
