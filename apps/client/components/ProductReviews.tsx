import React from 'react'
import { Typography } from './ui/typography'
import { Progress } from './ui/progress'
import Image from 'next/image'
import { Button } from './ui/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Badge } from './ui/badge'
import { BadgeCheckIcon, ChevronDown, EllipsisVertical, ThumbsDown, ThumbsUp } from 'lucide-react'

const ProductReviews = () => {
	const total = 5207
	const ratings = {
		5: 3365,
		4: 1218,
		3: 270,
		2: 90,
		1: 264
	}

	const totalScore = Object.entries(ratings).reduce(
		(acc, [star, count]) => acc + Number(star) * count,
		0
	)
	const average = (totalScore / total).toFixed(1)
	return (
		<div className='w-full p-10'>
			<Typography>Rating & Reviews</Typography>
			<div className='pt-8 lg:p-14 flex flex-col lg:flex-row gap-10'>
				<div className='flex flex-col gap-2 whitespace-nowrap'>
					<Typography className='text-6xl font-normal text-center'>
						{average} ★
					</Typography>
					<Typography className='text-muted-foreground normal-case text-xl text-center'>
						5,207 Ratings & <br /> 427 Reviews
					</Typography>
				</div>
				<div>
					<ul className='flex flex-col gap-2 font-light w-full'>
						<li className='flex items-center gap-4'>
							<Typography className='whitespace-nowrap'>5 ★</Typography>
							<Progress
								aria-label='Progress bar of 5'
								value={(3365 / 5207) * 100}
								className='w-[200px] '
							/>
							<Typography className='font-normal mt-1'>3300</Typography>
						</li>
						<li className='flex items-center gap-4'>
							<Typography className='whitespace-nowrap'>4 ★</Typography>
							<Progress
								aria-label='Progress bar of 4'
								value={(1218 / 5207) * 100}
								className='w-[200px] '
							/>
							<Typography className='font-normal mt-1'>230</Typography>
						</li>
						<li className='flex items-center gap-4'>
							<Typography className='whitespace-nowrap'>3 ★</Typography>
							<Progress
								aria-label='Progress bar of 3'
								value={(270 / 5207) * 100}
								className='w-[200px] '
							/>
							<Typography className='font-normal mt-1'>130</Typography>
						</li>
						<li className='flex items-center gap-4'>
							<Typography className='whitespace-nowrap'>2 ★</Typography>
							<Progress
								aria-label='Progress bar of 2'
								value={(90 / 5207) * 100}
								className='w-[200px] '
							/>
							<Typography className='font-normal mt-1'>30</Typography>
						</li>
						<li className='flex items-center gap-4'>
							<Typography className='whitespace-nowrap'>1 ★</Typography>
							<Progress
								aria-label='Progress bar of 1'
								value={(264 / 5207) * 100}
								className='w-[200px] '
							/>
							<Typography className='font-normal mt-1'>530</Typography>
						</li>
					</ul>
				</div>
			</div>

			{/* <ProductReviewImages /> */}

			<div className='relative flex items-center mt-4 w-full'>
				<div className='relative w-32 h-32'>
					<Image
						className='object-cover'
						src={
							'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg'
						}
						fill
						alt='review-img-1'
					/>
				</div>
				<div className='relative w-32 h-32'>
					<Image
						className='object-cover'
						src={
							'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg'
						}
						fill
						alt='review-img-1'
					/>
				</div>
				<div className='relative w-32 h-32'>
					<Image
						className='object-cover'
						src={
							'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg'
						}
						fill
						alt='review-img-1'
					/>
				</div>
				<div className='relative w-32 h-32'>
					<Image
						className='object-cover'
						src={
							'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg'
						}
						fill
						alt='review-img-1'
					/>
				</div>

				{true && (
					<div className='w-32 h-32 relative '>
						<Button className='w-full h-full' aria-label='More image (1000+)'>
							<Typography className='absolute top-1/2 left-1/2 transform -translate-1/2 text-[10px] md:text-sm  text-background font-normal'>
								 1000+
							</Typography>
						</Button>
					</div>
				)}
			</div>

			{/* {ProductReview} */}

			{Array.from({ length: 5 }).map((card, index) => (
				<Card
					key={index}
					className='w-full max-w-full lg:max-w-1/2 mt-4 rounded-none'>
					<CardHeader>
						<CardTitle className='flex gap-2 items-center'>
							<Badge className='w-10 h-10'>5 </Badge>
							<div>Terrific purchase</div>
						</CardTitle>
						<CardDescription>
							Camera is superb ❤️❤️❤️ <br />
							Battery 🔋 is osm 🎈🎈🎈 <br />
							At very low cost
						</CardDescription>
						<CardAction>
							<Button variant='link' aria-label='Edit or delete this review'><EllipsisVertical /></Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<div>
							<div className='relative flex gap-2 items-center'>
								<Image
									src={
										'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg'
									}
									width={60}
									height={60}
									alt='review-1'
								/>
								<Image
									src={
										'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg'
									}
									width={60}
									height={60}
									alt='review-1'
								/>
							</div>
							<div className='mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
								<div className='flex gap-2 items-center'>
									<Typography className='mt-1 text-muted-foreground normal-case text-xs whitespace-nowrap'>
										Aaron paul
									</Typography>
									<BadgeCheckIcon className='text-green-900' />
									<Typography className='mt-1 text-muted-foreground normal-case text-xs'>
										Certified buyer, Presidency Division 29 days ago
									</Typography>
								</div>
								<div className='flex gap-4 items-center'>
									<div className='flex gap-2 items-center'>
										<Button
											aria-label='91 people found this review is helpful'
											variant='ghost'>
											<ThumbsUp /> 91
										</Button>{' '}
									</div>
									<div className='flex gap-2 items-center'>
										<Button
											aria-label='30 people found this review is not-helpful'
											variant='ghost'>
											<ThumbsDown /> 30
										</Button>{' '}
									</div>
									<div className='flex gap-2 items-center'>
										<Button
											aria-label='Report this review dropdown-collapsed'
											variant='ghost'>
											<ChevronDown />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default ProductReviews
