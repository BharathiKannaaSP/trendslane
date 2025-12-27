import express, { Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import bannerRouter from './routes/banner-image-routes.js';
import { authorize, authorizeCountryAccess } from './middleware/authMiddleware.js';
import { errorHandler } from './utils/prisma/error-handler.js';

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use(
  cors({
    origin: [process.env.CORS_CLIENT_PORT!, process.env.CORS_ADMIN_PORT!],
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

app.get(
  '/test',
  authorize(['superAdmin', 'admin']),
  authorizeCountryAccess(),
  (req: Request, res: Response) => {
    res.json({
      message: 'Product service is authenticated',
      userId: req.userId,
    });
  },
);

app.use('/api/products/banners', bannerRouter);

app.use(errorHandler);

app.listen(process.env.PRODUCT_SERVICE_PORT, () => {
  console.log(`Product service is running on PORT - ${process.env.PRODUCT_SERVICE_PORT}`);
});
