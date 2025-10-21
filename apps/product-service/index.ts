import express from 'express'
import cors from 'cors'
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from './middleware/authMiddleware.js'

const app = express()
app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001']
	})
)
app.use(clerkMiddleware())
app.get('/', shouldBeUser, (req, res) => {
	res.json({ message: 'Product service authenticated', userId: req.userId })
})

app.listen(process.env.PORT, () => {
	console.log(`Product service is running in ${process.env.PORT}`)
})
