import { Request, Response } from 'express';
import { Audience, Country, prisma, Prisma } from '@repo/product-db';
import { AUDIENCE_ORDER } from '../utils/audienceOrder';

// CREATE
export const createBannerImage = async (req: Request, res: Response) => {
  const input: Prisma.BannerImageCreateInput = req.body;

  const { country, audience, imageUrl } = req.body;
  if (!country || !audience || !imageUrl) {
    return res.status(400).json({
      error: 'Country, audience and imageUrl are required!',
    });
  }

  const bannerImage = await prisma.bannerImage.create({
    data: {
      country: input.country,
      audience: input.audience,
      imageUrl: input.imageUrl,
      altText: input.altText ?? '',
      title: input.title ?? '',
      priority: input.priority ?? 1,
      active: true,
      sortIndex: AUDIENCE_ORDER.indexOf(input.audience),
    },
  });

  res.status(201).json({ message: 'Banner created successfully', bannerImage });
};

// LIST BANNER
export const getListBanner = async (req: Request, res: Response) => {
  const { country } = req.query as { country: Country };
  const { audience } = req.query as { audience: Audience };
  const active = req.query.active !== undefined ? req.query.active === 'true' : undefined;
  const take = req.query.take ? Number(req.query.take) : 50;
  const skip = req.query.skip ? Number(req.query.skip) : 0;

  const banners = await prisma.bannerImage.findMany({
    where: {
      ...(country && { country }),
      ...(audience && { audience }),
      ...(active !== undefined && { active }),
    },
    orderBy: {
      sortIndex: 'asc', // women → men → teen → kids
    },
    take,
    skip,
  });
  return res.status(200).json(banners);
};

// UPDATE BANNER BY ID
export const updateBannerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'ID is required to update!' });
  const data: Prisma.BannerImageUpdateInput = { ...req.body };
  const updatedBanner = await prisma.bannerImage.update({
    where: { id },
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
      where: { id },
    });

    return res.json({
      message: 'Banner permanently deleted',
      banner: deleted,
    });
  }

  // SOFT DELETE =========================================
  const updated = await prisma.bannerImage.update({
    where: { id },
    data: { active: false },
  });

  return res.json({
    message: 'Banner deactivated (soft deleted)',
    banner: updated,
  });
};

// GET BANNER BY COUNTRY ONLY -> /api/banners/getBannerByCountry?country=de
// export const getBannerByCountry = async (req: Request, res: Response) => {
//   const { country } = req.query as { country: Country };

//   if (!country) {
//     return res.status(400).json({
//       error: 'Country is required',
//     });
//   }

//   const banner = await prisma.bannerImage.findMany({
//     where: {
//       country,
//       active: true,
//     },
//     orderBy: { sortIndex: 'asc' },
//   });

//   if (!banner) {
//     return res.json(null);
//   }

//   return res.json(banner);
// };

// GET BY COUNTRY AND AUDIENCE ->  /api/banners/getBannerByCountry?country=de&audience=women
// export const getBannerByCountryAndAudience = async (req: Request, res: Response) => {
//   console.log('Fetching from DB...');

//   const { country, audience } = req.query as { country: Country; audience: Audience };

//   if (!country || !audience) {
//     return res.status(400).json({
//       error: 'country and audience are required',
//     });
//   }

//   const banner = await prisma.bannerImage.findUnique({
//     where: {
//       country_audience: {
//         country: country,
//         audience: audience,
//       },
//     },
//   });

//   if (!banner || !banner.active) {
//     return res.json(null);
//   }

//   return res.json(banner);
// };
