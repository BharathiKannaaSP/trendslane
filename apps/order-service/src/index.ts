import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
    serviceName: 'Order service works!!',
  });
});

app.listen(process.env.ORDER_SERVICE_PORT, () => {
  console.log(`Order service is running on PORT - ${process.env.ORDER_SERVICE_PORT}`);
});
