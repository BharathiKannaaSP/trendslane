import { Prisma, prisma } from '@workspace/product-db';
import { Audience, AUDIENCE_ORDER, Country } from '@workspace/types';
import { Request, Response } from 'express';

export const createBannerImage = async (req: Request, res: Response) => {
  const input: Prisma.BannerImageCreateInput = req.body;

  if (!input.country || (Array.isArray(input.country) && input.country.length === 0)) {
    return res.status(400).json({ error: 'Country is required' });
  }

  if (!input.audience) return res.status(400).json({ error: 'Audience is required' });

  const audience = input.audience as Audience;
  const country = input.country as Country[];

  const existing = await prisma.bannerImage.findMany({
    where: {
      audience,
      country: {
        hasSome: country,
      },
    },
    select: {
      country: true,
    },
  });

  const conflictingCountries = new Set<Country>();

  existing.forEach((banner) => {
    banner.country.forEach((c) => {
      if (country.includes(c)) {
        conflictingCountries.add(c);
      }
    });
  });

  const allowedCountries = country.filter((c) => !conflictingCountries.has(c));

  if (allowedCountries.length === 0) {
    return res.status(200).json({
      message: `Banner already exists for audience "${input.audience}" in selected countries`,
      skippedCountries: Array.from(conflictingCountries),
      created: false,
    });
  }

  const banner = await prisma.bannerImage.create({
    data: {
      ...input,
      country: allowedCountries,
      altText: input.title,
      sortIndex: AUDIENCE_ORDER.indexOf(input.audience),
    },
  });
  return res.status(201).json({
    message: `Banner created successfully`,
    createdFor: allowedCountries,
    skippedCountries: Array.from(conflictingCountries),
    banner,
  });
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

// DELETE BANNER BY ID
export const deleteBannerImageById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const country = req.query.country as string | undefined;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  if (!country) {
    return res.status(400).json({
      error: 'Country query param is required',
    });
  }

  const banner = await prisma.bannerImage.findUnique({
    where: { id: Number(id) },
  });

  if (!banner) {
    return res.status(404).json({ error: 'Banner not found' });
  }

  // Ensure country exists in banner
  if (!banner.country.includes(country as Country)) {
    return res.status(400).json({
      error: `Country ${country} does not exist in this banner`,
    });
  }

  // Remove country from array
  const updatedCountries = banner.country.filter((c) => c !== country);

  // If no countries left → delete banner
  if (updatedCountries.length === 0) {
    await prisma.bannerImage.delete({
      where: { id: Number(id) },
    });

    return res.json({
      message: 'Last country removed, banner deleted completely',
    });
  }

  // Otherwise update banner with remaining countries
  const updated = await prisma.bannerImage.update({
    where: { id: Number(id) },
    data: {
      country: updatedCountries,
    },
  });

  return res.json({
    message: `Country ${country} removed from banner`,
    banner: updated,
  });
};
