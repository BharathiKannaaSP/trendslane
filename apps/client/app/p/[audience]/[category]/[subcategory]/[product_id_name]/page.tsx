'use client'
import BagToaster from '@/components/BagToaster'
import ProductNotifyMailPopup from '@/components/ProductNotifyMailPopup'
import ProductRecommendations from '@/components/ProductRecommendations'
import ProductReviews from '@/components/ProductReviews'
import SingleProductExtraInfo from '@/components/SingleProductExtraInfo'
import SingleProductVideo from '@/components/SingleProductVideo'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { customToast } from '@/components/ui/sonner'
import { Typography } from '@/components/ui/typography'
import { ChevronDown, Heart, Mail } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'sonner'

const product = {
	id: 'product_123',
	slug: 'fine-rib-knit-cardigan', // ✅ for SEO & dynamic routes (Next.js [slug])
	title: 'Fine rib knit cardigan',
	subtitle: 'Wool-blend fine knit with button fastening', // ✅ optional
	desc: 'Crafted from a wool-blend fabric, this cardigan features a fine-knit design with ribbing. Its tailored style is complemented by a round neckline and long sleeves. The front button fastening adds functionality',
	refId: 'REF. 17055804',
	audience: 'women',
	category: 'coats',
	subCategory: 'coats',
	url: '/p/women/coats/coats/reversible-fur-coat_17067907',
	tags: ['women', 'knit', 'cardigan', 'wool-blend', 'ribbed'],
	brand: 'MANGO',

	colors: [
		{
			id: 'color_1',
			colorName: 'Ecru',
			colorCode: '#F5F5DC', // ✅ hex code for UI color swatches
			colorImg:
				'https://shop.mango.com/assets/rcs/pics/static/T1/colv3/17055804_05_C.png',
			images: [
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/outfit/S/17055804_05-99999999_01.jpg',
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17055804_05_R.jpg',
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17055804_05_D1.jpg',
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17055804_05.jpg',
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17055804_05_D8.jpg',
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17055804_05_B.jpg',
				'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17055804_05_D0.jpg'
			],
			video: [
				'https://shop.mango.com/assets/rcs/pics/static/T1/videos/S6/A1/17067907_92.mp4?ts=1759397364539'
			],
			sizes: [
				{
					id: 'size1',
					size: 'S',
					available: true,
					availableCountries: ['IN', 'US', 'FR'],
					price: 4990,
					discountPrice: 3990, // ✅ for sale or discount display
					currency: 'INR', // ✅ currency standardization
					stock: 4,
					sku: 'SKU-17055804-ECRU-S' // ✅ for inventory tracking
				},
				{
					id: 'size2',
					size: 'L',
					available: false,
					price: 5990,
					currency: 'INR',
					stock: 0,
					sku: 'SKU-17055804-ECRU-L'
				}
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size1',
				// 	size: 'S',
				// 	available: true,
				// 	availableCountries: ['IN', 'US', 'FR'],
				// 	price: 4990,
				// 	discountPrice: 3990, // ✅ for sale or discount display
				// 	currency: 'INR', // ✅ currency standardization
				// 	stock: 4,
				// 	sku: 'SKU-17055804-ECRU-S' // ✅ for inventory tracking
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size1',
				// 	size: 'S',
				// 	available: true,
				// 	availableCountries: ['IN', 'US', 'FR'],
				// 	price: 4990,
				// 	discountPrice: 3990, // ✅ for sale or discount display
				// 	currency: 'INR', // ✅ currency standardization
				// 	stock: 4,
				// 	sku: 'SKU-17055804-ECRU-S' // ✅ for inventory tracking
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size1',
				// 	size: 'S',
				// 	available: true,
				// 	availableCountries: ['IN', 'US', 'FR'],
				// 	price: 4990,
				// 	discountPrice: 3990, // ✅ for sale or discount display
				// 	currency: 'INR', // ✅ currency standardization
				// 	stock: 4,
				// 	sku: 'SKU-17055804-ECRU-S' // ✅ for inventory tracking
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size1',
				// 	size: 'S',
				// 	available: true,
				// 	availableCountries: ['IN', 'US', 'FR'],
				// 	price: 4990,
				// 	discountPrice: 3990, // ✅ for sale or discount display
				// 	currency: 'INR', // ✅ currency standardization
				// 	stock: 4,
				// 	sku: 'SKU-17055804-ECRU-S' // ✅ for inventory tracking
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// },
				// {
				// 	id: 'size2',
				// 	size: 'L',
				// 	available: false,
				// 	price: 5990,
				// 	currency: 'INR',
				// 	stock: 0,
				// 	sku: 'SKU-17055804-ECRU-L'
				// }
			],
			modelDetails: [{ id: 'model_1', wearingSize: 'S', height: '173cm' }]
		}
	],

	composition: [
		{ id: 'composition', name: 'polyester', percent: 34 },
		{ id: 'composition2', name: 'wool', percent: 66 } // ✅ more materials if any
	],

	origin: ['Designed in Barcelona', 'Manufacture: China'],

	care: [
		{ id: 'care_1', icon: '', desc: 'Hand washing max 30°C / 85°F' },
		{ id: 'care_2', icon: '', desc: 'Do not bleach' },
		{ id: 'care_3', icon: '', desc: 'Ironing max 110°C / 230°F' },
		{ id: 'care_4', icon: '', desc: 'Do not dry clean' },
		{ id: 'care_5', icon: '', desc: 'Do not tumble dry' }
	],

	deliveryDetails: [
		{
			id: 'delivery_1',
			name: 'Home Delivery',
			workingDays: '0 to 8 working days',
			deliveryFee: 800,
			freeOver: 7000
		}
	],

	returns: [
		{
			desc: 'You have 30 days (14 days for items from the CAPSULE collection) to return your order by any of the following methods:'
		}
	],

	pickup: [
		{
			homePickUpAvailable: true,
			homePickupCharge: 'free',
			desc: [
				'For reasons of hygiene, sealed products such as lingerie, underwear, swimwear products and earrings that do not have the label or protective seal attached cannot be returned.',
				'Items containing flammable substances (such as perfumes, body mist, etc.) can only be returned with the hazardous goods label and in the original packaging.'
			]
		}
	],

	reviews: [
		{
			id: 'review_1',
			userId: 'user_123',
			userName: 'Aaradhya',
			rating: 5,
			desc: 'Excellent quality and comfortable to wear.',
			images: [],
			videos: [],
			createdAt: '2025-10-10T08:00:00Z', // ✅ for sorting and analytics
			verifiedPurchase: true // ✅ trust indicator
		}
	],

	relatedProducts: ['product_234', 'product_543'], // ✅ for recommendation section
	similarSearchVector: [
		/* embedding for vector search */
	], // ✅ if you use AI recommendations

	ratingSummary: { average: 4.8, count: 231 }, // ✅ aggregated rating info
	inStock: true, // ✅ top-level flag
	isFeatured: false, // ✅ for home/landing page
	season: 'Autumn/Winter 2025', // ✅ for collection grouping
	newArrival: true, // ✅ for “New In” filtering

	helpLink: 'https://shop.trendslane.com/in/en/help/returns',
	createdAt: '2025-09-30T10:00:00Z',
	updatedAt: '2025-10-10T14:00:00Z'
}

const SingleProductDetailsPage = () => {
	const [selectedSize, setSelectedSize] = useState<string | null>(null)
	const [zoomImage, setZoomImage] = useState<string>(
		'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17035981_39.jpg'
	)
	const handleSelectSize = (
		size:
			| {
					id: string
					size: string
					available: boolean
					availableCountries: string[]
					price: number
					discountPrice: number // ✅ for sale or discount display
					currency: string // ✅ currency standardization
					stock: number
					sku: string // ✅ for inventory tracking
			  }
			| {
					id: string
					size: string
					available: boolean
					price: number
					currency: string
					stock: number
					sku: string
					availableCountries?: undefined
					discountPrice?: undefined
			  }
	) => {
		if (size.available) {
			setSelectedSize(size.size)
		}
	}

	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-[60%_40%]  gap-4 pb-10 items-start'>
				{/* Left */}
				<div className='relative'>
					<ul className='grid grid-cols-12 gap-1 m-0 p-0'>
						<li className='relative flex col-span-6'>
							<div className='relative flex w-full h-[400px] md:h-[600px] lg:h-[800px]'>
								<SingleProductVideo />
							</div>
						</li>

						{product?.colors?.[0]?.images.map((img, index) => (
							<li
								className={`relative flex ${
									index < 7 ? 'col-span-6' : 'col-span-4'
								}`}
								key={img}>
								<Sheet>
									<SheetTrigger asChild>
										<button className='relative w-full'>
											<div className='relative flex w-full h-[400px] md:h-[600px] lg:h-[800px]'>
												<Image
													fill
													src={img}
													alt={img}
													className='object-cover'
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												/>
											</div>
										</button>
									</SheetTrigger>

									<SheetContent className='w-full sm:max-w-full h-full p-0'>
										<ScrollArea className='h-screen'>
											<SheetHeader className='relative'>
												<SheetTitle>
													Lorem ipsum, dolor sit amet consectetur
												</SheetTitle>
											</SheetHeader>

											<div className='w-full relative'>
												<div className='relative w-full aspect-3/7 md:aspect-4/7'>
													<Image
														fill
														src={zoomImage}
														alt={'zoomImage'}
														className='object-cover rounded-md -z-1'
													/>
												</div>
												<div className=' h-full'>
													<div className='fixed top-20 left-10 flex flex-col gap-2 '>
														<div className='w-16 h-20 relative'>
															<Image
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																fill
																alt='thm'
																className='object-cover'
																onMouseEnter={() =>
																	setZoomImage(
																		'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																	)
																}
															/>
														</div>
														<div className='w-16 h-20 relative'>
															<Image
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																fill
																alt='thm'
																className='object-cover'
															/>
														</div>
														<div className='w-16 h-20 relative'>
															<Image
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																fill
																alt='thm'
																className='object-cover'
															/>
														</div>
														<div className='w-16 h-20 relative'>
															<Image
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																fill
																alt='thm'
																className='object-cover'
															/>
														</div>
														<div className='w-16 h-20 relative'>
															<Image
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																fill
																alt='thm'
																className='object-cover'
															/>
														</div>
														<div className='w-16 h-20 relative'>
															<Image
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17027139_32.jpg?imwidth=2048&imdensity=1&ts=1760105109586'
																fill
																alt='thm'
																className='object-cover'
															/>
														</div>
													</div>
												</div>
											</div>
										</ScrollArea>
									</SheetContent>
								</Sheet>
							</li>
						))}
					</ul>
				</div>

				{/* Right */}
				<div className='sticky top-14 self-start flex flex-col w-full gap-x-2 gap-y-6 py-14 px-0  mx-auto  max-w-[calc(100%-122px)]  min-w-[298px]'>
					<div className='flex flex-col'>
						<Typography className='text-md'>{product.title}</Typography>
						<Typography className='normal-case leading-8 tracking-wide font-normal'>
							Rs. {product?.colors?.[0]?.sizes[0]?.price}.00
						</Typography>
					</div>
					<div className='flex gap-4'>
						<Image
							src={product?.colors?.[0]?.colorImg || ''}
							alt='img'
							width={16}
							height={16}
						/>
						<Image
							src={product?.colors?.[0]?.colorImg || ''}
							alt='img'
							width={16}
							height={16}
						/>
					</div>
					<Typography className='normal-case tracking-wide font-normal'>
						The model is wearing size{' '}
						{product?.colors?.[0]?.modelDetails?.[0]?.wearingSize} and is{' '}
						{product?.colors?.[0]?.modelDetails?.[0]?.height} tall.
					</Typography>
					<Separator />
					<ScrollArea
						className={`w-full transition-all duration-1000 ${
							selectedSize ? 'max-h-10' : 'max-h-40'
						}`}>
						<ul className='flex gap-2 p-0 m-0 flex-col'>
							{selectedSize ?
								<Button
									variant='ghost'
									onClick={() => setSelectedSize(null)}
									className='flex items-center justify-between w-full'>
									<Typography>{selectedSize}</Typography>
									<ChevronDown />
								</Button>
							:	<>
									{product?.colors[0]?.sizes.map((size) => (
										<li key={size.id}>
											{size.available ?
												<Button
													variant='ghost'
													key={size.size}
													onClick={() => handleSelectSize(size)}
													className='flex items-center justify-between w-full'>
													<Typography>{size.size}</Typography>
												</Button>
											:	<Dialog>
													<DialogTrigger asChild>
														<Button
															variant='ghost'
															className='flex items-center text-primary/80 justify-between w-full cursor-pointer'>
															{size.size}
															<div className='flex items-center gap-2'>
																<Typography className='mt-1 font-normal normal-case'>
																	Not available, I want it!
																</Typography>{' '}
																<Mail />
															</div>
														</Button>
													</DialogTrigger>
													<ProductNotifyMailPopup />
												</Dialog>
											}
										</li>
									))}
								</>
							}
						</ul>
					</ScrollArea>
					<Separator />

					<Button variant='link' className='p-0 w-max'>
						<Typography>Size Guide</Typography>
					</Button>
					<div className='flex flex-col gap-4'>
						<div className='flex gap-1 items-center justify-between'>
							<Button
								className='w-[calc(100%-40px)] p-6'
								onClick={() =>
									customToast({
										component: <BagToaster />
									})
								}>
								<Typography className='text-sm'>ADD</Typography>
							</Button>
							<Button className='py-6'>
								<Typography className='text-sm'>
									<Heart aria-label='Add to wishlist' />
								</Typography>
							</Button>
						</div>
						<Button variant='outline' className='w-[calc(100%+15px)]  p-6'>
							<Typography className='text-sm'>Get the Look</Typography>
						</Button>
					</div>

					<div className='flex flex-col gap-2'>
						<Typography>Description</Typography>
						<Typography className='normal-case font-normal'>
							{product.desc}
						</Typography>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='link' className='w-max p-0'>
									<Typography>See details</Typography>
								</Button>
							</SheetTrigger>
							<SingleProductExtraInfo />
						</Sheet>
					</div>
				</div>
			</div>
			{/* Bottom */}

			<ProductReviews />
			<ProductRecommendations title='In same the style' />
			<ProductRecommendations title='Combined Perfectly' />
			<ProductRecommendations title='Popular right now' />
			<ProductRecommendations title='You also viewed' />
			<Breadcrumb className='p-10'>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>
							<Typography>Home</Typography>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<div className='h-4 -mt-1 w-px rotate-20 bg-primary' />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink href='/components'>
							<Typography>New now</Typography>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<div className='h-4 -mt-1 w-px rotate-20 bg-primary' />
					</BreadcrumbSeparator>

					<BreadcrumbItem>
						<BreadcrumbLink href='/components'>
							<Typography>Coats</Typography>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<div className='h-4 -mt-1 w-px rotate-20 bg-primary' />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbPage>
							<Typography>Coats</Typography>
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</>
	)
}

export default SingleProductDetailsPage
