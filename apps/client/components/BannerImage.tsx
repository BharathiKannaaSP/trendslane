'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import FadeContent from './FadeContent';
import { Button } from './ui/button';
import Link from 'next/link';

const homeBannerImage = [
  {
    id: 1,
    audience: 'women',
    image:
      'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt72432c2e7196608c/68bfd156e27cfd1fc2afc663/Home_mm_w_(1).jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(1424.1100000000001,619.2)',
  },
  {
    id: 2,
    audience: 'men',
    image:
      'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt3c15978215101465/681b1e14f1a1b040ec601bb5/multimarca_selection.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(1343.5,309.6)',
  },
  {
    id: 3,
    audience: 'teen',
    image:
      'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltecf7ddfa73b100ad/681b2e630c47c3772dd62ead/87077706_02-99999999_01.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(1812.5,0)',
  },
  {
    id: 4,
    audience: 'kids',
    image:
      'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt69adfb01a4d0e96d/68a2d5e0b4d6bea91789034b/WM_Modal_10_(3).jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(512,0)',
  },
];

const BannerImage = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="relative w-full h-[calc(100vh-56px)] overflow-hidden">
      {/* Banner Image */}
      <Image
        key={homeBannerImage?.[activeImage]?.id}
        className="absolute top-0 left-0 object-cover transition-opacity duration-500"
        fill
        src={homeBannerImage?.[activeImage]?.image || ''}
        alt={homeBannerImage?.[activeImage]?.audience || ''}
        priority={homeBannerImage?.[activeImage]?.id === 1}
      />

      {/* Overlay Content */}
      <div className="z-10 absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-full pl-8 pr-8">
        <FadeContent
          className="flex flex-col gap-4"
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <h2 className="text-3xl md:text-6xl lg-text-8xl xl:text-7xl  whitespace-nowrap text-center flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span>Designed in</span>
              <span className="italic">Barcelona</span>
            </div>
            <span className="">since 1964</span>
          </h2>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-5 ">
              {homeBannerImage.map((item, index) => (
                <Button
                  asChild
                  key={item.id}
                  tabIndex={-1}
                  variant="link"
                  className="text-white uppercase"
                  onMouseEnter={() => setActiveImage(index)}
                >
                  <Link href={`/h/${item.audience}`}>{item.audience}</Link>
                </Button>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

export default BannerImage;
