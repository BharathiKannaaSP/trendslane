'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import FadeContent from './fade-content'
import { Button } from '@workspace/ui/components/button'

// interface BannerImageProps {
// 	bannerImageData: Banner[]
// }

const BannerImage = () => {
	const [activeImage, setActiveImage] = useState(0)

	const bannerImageData = [
		{
			id: '1',
			country: ['in', 'us'],
			audience: 'women',
			imageUrl:
				'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt061f5666c1ac421a/6941131c2971fd572da5e003/W_Horizontal.jpg',
			altText: "Latest women's fashion collection",
			title: 'New Season Styles for Women',
			active: true,
			sortIndex: 1,
			createdAt: '2025-01-01T10:00:00.000Z',
			updatedAt: '2025-01-01T10:00:00.000Z'
		},
		{
			id: '2',
			country: ['fr'],
			audience: 'men',
			imageUrl:
				'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltd679737849efd035/694113a9c8d1e809f5fafcde/M_Horizontal.jpg',
			altText: "Premium men's wear collection",
			title: 'Classic & Modern Menswear',
			active: true,
			sortIndex: 2,
			createdAt: '2025-01-02T12:30:00.000Z',
			updatedAt: '2025-01-02T12:30:00.000Z'
		}
	]

	return (
		<div className='relative w-full h-[calc(100vh-56px)] overflow-hidden'>
			{/* Banner Image */}
			<Image
				key={bannerImageData?.[activeImage]?.id}
				className='absolute top-0 left-0 object-cover transition-opacity duration-500'
				fill
				src={bannerImageData?.[activeImage]?.imageUrl || ''}
				alt={bannerImageData?.[activeImage]?.audience || ''}
			/>

			{/* Overlay Content */}
			<div className='z-10 absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-full pl-8 pr-8'>
				<FadeContent
					className='flex flex-col gap-4'
					blur={true}
					duration={1000}
					easing='ease-out'
					initialOpacity={0}>
					<h2 className='text-3xl md:text-6xl lg-text-8xl xl:text-7xl  whitespace-nowrap text-center flex flex-col gap-2'>
						<div className='flex gap-2 items-center'>
							<span>Designed in</span>
							<span className='italic'>Barcelona</span>
						</div>
						<span className=''>since 1964</span>
					</h2>
					<div className='flex items-center justify-center'>
						<div className='flex items-center gap-5 '>
							{bannerImageData.map((item, index) => (
								<Button
									key={item.id}
									tabIndex={-1}
									variant='link'
									className='text-white uppercase'
									onMouseEnter={() => setActiveImage(index)}>
									<Link href={`/h/${item.audience}`}>{item.audience}</Link>
								</Button>
							))}
						</div>
					</div>
				</FadeContent>
			</div>
		</div>
	)
}

export default BannerImage
