import React from 'react';
import { Country, Language } from '@workspace/types';
import { Prisma } from '@workspace/product-db';
import BannerImage from '@/components/BannerImage/banner-image';

const getBannerData = async (
  country: Country,
  lang: Language,
): Promise<Prisma.BannerImageModel[]> => {
  try {
    const results = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/banners/listBanner?country=${country}&lang=${lang}`,
    );

    const data = await results.json();

    if (!results.ok) {
      throw new Error(data.error);
    }

    return data.bannerList;
  } catch (error) {
    console.error('Failed to fetch banners', error);
    return [];
  }
};

const BannerImagePage = async ({
  params,
}: {
  params: Promise<{ country: Country; lang: Language }>;
}) => {
  const { country, lang } = await params;
  const data = await getBannerData(country, lang);

  return (
    <div>
      <BannerImage data={data} />
    </div>
  );
};

export default BannerImagePage;
