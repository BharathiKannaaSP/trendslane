import { Request, Response } from 'express';
import { prisma, Prisma } from '@repo/product-db';
import redisClient from '../redis/redisClient';

const CACHE_KEY = 'bannerImages';

export const createBannerImage = async (req: Request, res: Response) => {
  const data: Prisma.BannerImageCreateInput = req.body;
  const bannerImage = await prisma.bannerImage.create({ data });

  await redisClient.del(CACHE_KEY);

  res.status(201).json(bannerImage);
};

// export const updateBannerImage = async (req: Request, res: Response) => {};
// export const getBannerImage = async (req: Request, res: Response) => {};

export const getAllBannerImage = async (req: Request, res: Response) => {
  const cached = await redisClient.get(CACHE_KEY);
  if (cached) {
    console.log('Serving from Redis cache');
    return res.status(200).json(JSON.parse(cached));
  }

  console.log('Fetching from DB...');
  const data = await prisma.bannerImage.findMany();

  // 🧠 Store in cache for 5 minutes
  await redisClient.setEx(CACHE_KEY, 300, JSON.stringify(data));
  res.status(200).json(data);
};
// export const deleteBannerImage = async (req: Request, res: Response) => {};
