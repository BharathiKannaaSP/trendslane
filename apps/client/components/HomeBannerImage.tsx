'use client'

import Image from 'next/image'
import React from 'react'
import FadeContent from './FadeContent'
import { Typography } from './ui/typography'
import Link from 'next/link'

const HomeBannerImage = () => {
	return (
		<div className='relative w-full h-[calc(100vh-56px)] overflow-hidden'>
			{/* Banner Image */}
			<Link href={'/c/women/office-looks'}>
				<Image
					key={'hbi1'}
					className='absolute top-0 left-0 object-cover transition-opacity duration-500'
					fill
					src={
						'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltb85ee156840d405a/68d64040f9f5c316e56007df/17036361-09-01009_copia.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(2197.5,942)'
					}
					alt={'hbi1'}
				/>

				{/* Overlay Content */}
				<div className='z-10 absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-full pl-8 pr-8'>
					<FadeContent
						className='flex flex-col gap-4'
						blur={true}
						duration={1000}
						easing='ease-out'
						initialOpacity={0}>
						<div className='items-center  flex flex-col gap-2'>
							<Typography className='text-3xl md:text-6xl xl:text-7xl  whitespace-nowrap text-center'>
								Office Looks
							</Typography>
							<Typography>Discover more</Typography>
						</div>
					</FadeContent>
				</div>
			</Link>
		</div>
	)
}

export default HomeBannerImage
