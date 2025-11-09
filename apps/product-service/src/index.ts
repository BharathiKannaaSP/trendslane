import express, { Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import { shouldBeUser } from './middleware/authMiddleware.js';

const app = express();

app.use(clerkMiddleware());

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
    serviceName: 'Product service works!!',
  });
});

app.get('/test', shouldBeUser, (req: Request, res: Response) => {
  res.json({
    message: 'Product service is authenticated!',
    userId: req.userId,
  });
});

app.listen(process.env.PRODUCT_SERVICE_PORT, () => {
  console.log(
    `Product service is running on PORT - ${process.env.PRODUCT_SERVICE_PORT}`,
  );
});
