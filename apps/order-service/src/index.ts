import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.ORDER_SERVICE_PORT || 8001;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
    serviceName: 'Order service works!!',
  });
});

app.listen(PORT, () => {
  console.log(`Order service is running on PORT - ${PORT}`);
});
