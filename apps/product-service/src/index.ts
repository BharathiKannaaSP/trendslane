import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import { shouldBeUser } from './middleware/authMiddleware.js';
import bannerRouter from './routes/bannerImage.routes.js';
const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);

app.use(clerkMiddleware());
app.use(express.json());

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

app.use('/products', bannerRouter);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(process.env.PRODUCT_SERVICE_PORT, () => {
  console.log(`Product service is running on PORT - ${process.env.PRODUCT_SERVICE_PORT}`);
});
