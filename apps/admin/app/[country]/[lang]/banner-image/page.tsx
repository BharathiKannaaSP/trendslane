import React from 'react';
import { BannerImageDataTable } from './data-table';
import { Prisma } from '@workspace/product-db';
import { columns } from './columns';
import { Country, Language } from '@workspace/types';

const getData = async (country: Country, lang: Language): Promise<Prisma.BannerImageModel[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/banners/listBanner?country=${country}&lang=${lang}`,
    );
    const data = await res.json();
    return data.bannerList;
  } catch {
    console.error('Failed to fetch banner images');
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
