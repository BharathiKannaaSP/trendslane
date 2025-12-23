import { Prisma, prisma } from "@workspace/product-db";
import { AUDIENCE_ORDER } from "@workspace/types";
import { Request, Response } from "express";

export const createBannerImage = async (req: Request, res: Response) => {
  const input: Prisma.BannerImageCreateInput = req.body;

  const createBannerImage = await prisma.bannerImage.create({
    data: {
      ...input,
      sortIndex: AUDIENCE_ORDER.indexOf(input.audience),
    },
  });
  res
    .status(201)
    .json({ message: "Banner created successfully", createBannerImage });
};
