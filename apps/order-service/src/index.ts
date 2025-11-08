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
		.json({ status: 'ok', uptime: process.uptime(), timestamp: Date.now() })
})

app.listen(process.env.ORDER_SERVICE_PORT, () => {
	console.log(
		`Order service is running on PORT - ${process.env.ORDER_SERVICE_PORT}`
	)
})
