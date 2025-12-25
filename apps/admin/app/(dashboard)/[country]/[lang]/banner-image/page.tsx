import React from 'react';
import { BannerImageDataTable } from './data-table';
import { Prisma } from '@workspace/product-db';
import { columns } from './columns';
import { Country, Language } from '@workspace/types';
import { auth } from '@clerk/nextjs/server';

export type ListBannerResponse = {
  bannerList: Prisma.BannerImageModel[];
};

const getData = async (country: Country, lang: Language): Promise<Prisma.BannerImageModel[]> => {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/banners/listBanner?country=${country}&lang=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error);
    }
    return data.bannerList;
  } catch (error) {
    console.error('Failed to fetch banners', error);
    return [];
  }
};

const BannerImage = async ({
  params,
}: {
  params: Promise<{ country: Country; lang: Language }>;
}) => {
  const { country, lang } = await params;
  const data = await getData(country, lang);
  if (!data) return <>Will implement 404</>;

  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'>{country.toLocaleUpperCase()} - Banner Image</h1>
      </div>

      <BannerImageDataTable columns={columns} data={data} />
    </div>
  );
};

export default BannerImage;
