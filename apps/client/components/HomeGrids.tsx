import Image from 'next/image'
import React from 'react'
import { Typography } from './ui/typography'
import Link from 'next/link'

const HomeGrids = () => {
	return (
		<div className='relative grid grid-cols-2 w-full h-full'>
			<Link
				href='/c/women/skirts'
				className='relative h-[40vh] md:h-[70vh] lg:h-[100vh]'>
				<Image
					src='https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt894b16c73ec12a96/68d64045edc7797ec4a55417/17077911-76-01001.jpg'
					alt='Stylish black jeans'
					className='object-cover'
					style={{ objectPosition: 'top' }}
					fill
				/>
				<div className='h-[30vh] md:h-[60vh] lg:h-[90vh] w-full' />
				<div className='sticky bottom-0 z-40  p-4 flex justify-between items-center text-white'>
					<Typography className='text-xs md:text-sm'>Skirts</Typography>
					<Typography className='text-xs md:text-sm'>See all</Typography>
				</div>
			</Link>
			<Link
				href='/c/women/skirts'
				className='relative h-[40vh] md:h-[70vh] lg:h-[100vh]'>
				<Image
					src='https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt573ece3440d165fe/68d64044531ecdda97be0ef8/17017770-99-01001.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=2048,regionOfInterest=(1296,1268.75)'
					alt='grid-2'
					fill
					className='object-cover'
					style={{ objectPosition: 'top' }}
				/>
				<div className='h-[30vh] md:h-[60vh] lg:h-[90vh] w-full' />
				<div className='sticky bottom-0 z-40  p-4 flex justify-between items-center text-white'>
					<Typography className='text-xs md:text-sm'>Coats</Typography>
					<Typography className='text-xs md:text-sm'>See all</Typography>
				</div>
			</Link>
			<Link
				href='/c/women/skirts'
				className='relative h-[40vh] md:h-[70vh] lg:h-[100vh]'>
				<Image
					src='https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt7403679a62651c0d/68d64046cc29fb6d25f032d3/17037139-81-01001.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=2048,regionOfInterest=(1296,2175)'
					alt='grid-3'
					fill
					className='object-cover'
					style={{ objectPosition: 'top' }}
				/>
				<div className='h-[30vh] md:h-[60vh] lg:h-[90vh] w-full' />
				<div className='sticky bottom-0 z-40  p-4 flex justify-between items-center text-white'>
					<Typography className='text-xs md:text-sm'>Dresses</Typography>
					<Typography className='text-xs md:text-sm'>See all</Typography>
				</div>
			</Link>
			<Link
				href='/c/women/skirts'
				className='relative h-[40vh] md:h-[70vh] lg:h-[100vh]'>
				<Image
					src='https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltea2ae4a3b0635ae9/68d640480139443e62089644/17077762-78-01016.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=2048,regionOfInterest=(1296,2175)'
					alt='grid-4'
					fill
					className='object-cover'
					style={{ objectPosition: 'top' }}
				/>
				<div className='h-[30vh] md:h-[60vh] lg:h-[90vh] w-full' />
				<div className='sticky bottom-0 z-40  p-4 flex justify-between items-center text-white'>
					<Typography className='text-xs md:text-sm'>Shoes</Typography>
					<Typography className='text-xs md:text-sm'>See all</Typography>
				</div>
			</Link>
		</div>
	)
}

export default HomeGrids
