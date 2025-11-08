import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001'],
		credentials: true
	})
)

app.get('/health', (req: Request, res: Response) => {
	res
		.status(200)
		.json({
			status: 'ok',
			uptime: process.uptime(),
			timestamp: Date.now(),
			serviceName: 'Payment service works!'
		})
})

app.listen(process.env.PAYMENT_SERVICE_PORT, () => {
	console.log(
		`Payment service is running on PORT - ${process.env.PAYMENT_SERVICE_PORT}`
	)
})
