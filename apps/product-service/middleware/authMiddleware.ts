import { getAuth } from '@clerk/express'
import { NextFunction, Request, Response } from 'express'

declare global {
	namespace Express {
		interface Request {
			userId: string
		}
	}
}

export const shouldBeUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const auth = getAuth(req)
	const userId = auth.userId
	console.log(auth, 'Auth')
	if (!userId) {
		return res.json({ message: 'You are not logged in!' })
	}
	req.userId = auth.userId
	next()
}
