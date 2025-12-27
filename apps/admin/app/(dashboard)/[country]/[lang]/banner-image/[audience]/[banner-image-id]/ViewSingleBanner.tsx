import { Prisma } from '@workspace/product-db';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@workspace/ui/components/breadcrumb';
import Image from 'next/image';
import React from 'react';
import EditSingleBanner from './EditSingleBanner';

const ViewSingleBanner = ({ data }: { data: Prisma.BannerImageModel }) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/banner-image'>Banner List</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='mt-2 py-2 relative h-[400px]'>
        <Image
          fill
          src={data.imageUrl}
          alt={data.altText || data.title}
          className='object-cover rounded-sm'
        />
      </div>
      <EditSingleBanner data={data} />
    </>
  );
};

export default ViewSingleBanner;
