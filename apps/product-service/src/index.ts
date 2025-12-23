import express, { Request, Response } from "express";
import { clerkMiddleware } from "@clerk/express";
import { shouldBeUser } from "./middleware/authMiddleware";
import { errorHandler } from "./utils/prisma/error-handler";
import bannerRouter from "./routes/banner-image-routes";
const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
    serviceName: "Product service works!!",
  });
});

app.get("/test", shouldBeUser, (req: Request, res: Response) => {
  res.json({
    message: "Product service is authenticated!",
    userId: req.userId,
  });
});

app.use("/api/products/banners", bannerRouter);

app.use(errorHandler);

app.listen(process.env.PRODUCT_SERVICE_PORT, () => {
  console.log(
    `Product service is running on PORT - ${process.env.PRODUCT_SERVICE_PORT}`,
  );
});
