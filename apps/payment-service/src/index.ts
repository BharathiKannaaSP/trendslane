import express, { Request, Response } from 'express'
import cors from 'cors'
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from './middleware/authMiddleware.js'

const app = express()

app.use(clerkMiddleware())

app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001'],
		credentials: true
	})
)

app.get('/health', (req: Request, res: Response) => {
	res.status(200).json({
		status: 'ok',
		uptime: process.uptime(),
		timestamp: Date.now(),
		serviceName: 'Payment service works!'
	})
})

app.get('/test', shouldBeUser, (req: Request, res: Response) => {
	const auth = getAuth(req)
	res.json({ message: 'Payment service is authenticated!', userId: req.userId })
})

app.listen(process.env.PAYMENT_SERVICE_PORT, () => {
	console.log(
		`Payment service is running on PORT - ${process.env.PAYMENT_SERVICE_PORT}`
	)
})
