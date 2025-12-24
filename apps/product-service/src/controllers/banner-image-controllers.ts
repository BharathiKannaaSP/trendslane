import { Prisma, prisma } from '@workspace/product-db';
import { Audience, AUDIENCE_ORDER, Country } from '@workspace/types';
import { Request, Response } from 'express';

export const createBannerImage = async (req: Request, res: Response) => {
  const input: Prisma.BannerImageCreateInput = req.body;
  const createBannerImage = await prisma.bannerImage.create({
    data: {
      ...input,
      sortIndex: AUDIENCE_ORDER.indexOf(input.audience),
    },
  });
  res.status(201).json({ message: 'Banner created successfully', createBannerImage });
};

export const getListBanner = async (req: Request, res: Response) => {
  const { country } = req.query as { country: Country };
  const { audience } = req.query as { audience: Audience }; // unwanted filter
  const active = req.query.active !== undefined ? req.query.active === 'true' : undefined;
  const bannerList = await prisma.bannerImage.findMany({
    where: {
      ...(country && { country: { has: country } }),
      ...(audience && { audience }),
      ...(active !== undefined && { active }),
    },
    orderBy: { sortIndex: 'asc' },
  });

  res.status(200).json({ bannerList });
};

// UPDATE BANNER BY ID
export const updateBannerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'ID is required to update!' });
  const data: Prisma.BannerImageUpdateInput = { ...req.body };
  const updatedBanner = await prisma.bannerImage.update({
    where: { id: Number(id) },
    data,
  });

  return res.json({
    message: 'Banner updated successfully',
    banner: updatedBanner,
  });
};

// DELETE BANNER BY ID - two types hard -> Delete permanently & soft -> change active to false
export const deleteBannerImageById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: 'ID is required to delete!' });

  const hard = req.query.hard === 'true';

  if (hard) {
    const deleted = await prisma.bannerImage.delete({
      where: { id: Number(id) },
    });

    return res.json({
      message: 'Banner permanently deleted',
      banner: deleted,
    });
  }

  // SOFT DELETE -------------------------
  const updated = await prisma.bannerImage.update({
    where: { id: Number(id) },
    data: { active: false },
  });

  return res.json({
    message: 'Banner deactivated (soft deleted)',
    banner: updated,
  });
};
