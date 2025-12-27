import { Audience, Country, Language } from '@workspace/types';
import React from 'react';
import ViewSingleBanner from './ViewSingleBanner';
import { Prisma } from '@workspace/product-db';

export type SingleBannerImageParams = {
  country: Country;
  lang: Language;
  audience: Audience;
  'banner-image-id': string;
};

type GetSingleBannerResponse = {
  bannerList: Prisma.BannerImageModel;
  message: string;
};

const getSingleBannerData = async ({ params }: { params: Promise<SingleBannerImageParams> }) => {
  const paramsResolved = await params;
  const { country, lang, audience, 'banner-image-id': bannerImageId } = paramsResolved;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/banners/getBannerImageById/${bannerImageId}?country=${country}&lang=${lang}&audience=${audience}`,
  );

  const data: GetSingleBannerResponse = await res.json();
  return data;
};

const SingleBannerImage = async ({ params }: { params: Promise<SingleBannerImageParams> }) => {
  const data = await getSingleBannerData({ params });

  if (!data.bannerList) return 'No data found';

  return (
    <div>
      <ViewSingleBanner data={data.bannerList} />
    </div>
  );
};

export default SingleBannerImage;
