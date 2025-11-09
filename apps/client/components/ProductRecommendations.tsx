import React from 'react'
import { Typography } from './ui/typography'
import Image from 'next/image'
import NavLink from './ui/nav-link'
import Link from 'next/link'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from './ui/carousel'
import { Heart } from 'lucide-react'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'

const ProductRecommendations = ({ title }: { title: string }) => {
	return (
		<div className='w-full p-10 overflow-hidden'>
			<Typography>{title}</Typography>
			<Carousel
				className='w-full pt-8'
				opts={{
					slidesToScroll: 5,
					breakpoints: {
						'(max-width: 640px)' : {
							slidesToScroll: 2
						}
					}
				}}>
				<CarouselContent>
					{Array.from({ length: 100 }).map((_, index) => (
						<CarouselItem
							key={index}
							className='flex-none w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
							<div className='p-0.5'>
								<div className='relative w-full h-fit aspect-5/7'>
									<div className='flex flex-col justify-between'>
										<form action='' className='flex justify-between flex-col'>
											<div>
												<fieldset className='relative group overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
													<Link href='/'>
														<div className='[aspect-ratio:calc(5/7)]'>
															<Image
																className='absolute inset-0 w-full h-full'
																src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17046739_09_D1.jpg?ts=1757932581566&im=SmartCrop,width=480,height=672&imdensity=1'
																alt='s'
																fill
															/>
														</div>
													</Link>
													<div className='absolute bottom-0 h-max bg-background w-full z-0 opacity-0 translate-y-10 transition-all duration-600 group-hover:opacity-100 group-hover:translate-y-0  group-focus-within:opacity-100 group-focus-within:translate-y-0'>
														<ScrollArea className='h-16 lg:h-max'>
															<div className='flex flex-wrap items-center justify-center gap-4 p-2'>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
																<Button variant='outline' className='border-0'>
																	<Typography className='text-sm'>S</Typography>
																</Button>
															</div>
														</ScrollArea>
													</div>
												</fieldset>
											</div>

											<div className='mt-4 mb-4 h-max'>
												<div className='flex justify-between'>
													<div className='ml-2 lg:ml-4  flex flex-col gap-2'>
														<Badge variant='outline'>Plus Available</Badge>
														<Typography className='normal-case font-normal text-sm truncate w-25 lg:w-40'>
															Lorem ipsum dolor, sit amet consectetur
															adipisicing elit. Labore excepturi rerum facilis
															nesciunt assumenda corrupti, veritatis perferendis
															doloremque, soluta reprehenderit et, voluptates
															dolorum est mollitia ipsa quibusdam! Dolore, hic.
															Quis?
														</Typography>
														<Typography className='normal-case text-sm tracking-wider'>
															Rs. 5190.00
														</Typography>
														<div className='flex gap-4'>
															<Image
																alt='color'
																width={16}
																height={16}
																src='https://shop.mango.com/assets/rcs/pics/static/T1/colv3/17007786_56_C.png?imwidth=40&imdensity=1&ts=1755605118674'
															/>
															<Image
																alt='color'
																width={16}
																height={16}
																src='https://shop.mango.com/assets/rcs/pics/static/T1/colv3/17007786_56_C.png?imwidth=40&imdensity=1&ts=1755605118674'
															/>
															<Image
																alt='color'
																width={16}
																height={16}
																src='https://shop.mango.com/assets/rcs/pics/static/T1/colv3/17007786_56_C.png?imwidth=40&imdensity=1&ts=1755605118674'
															/>
															<Image
																alt='color'
																width={16}
																height={16}
																src='https://shop.mango.com/assets/rcs/pics/static/T1/colv3/17007786_56_C.png?imwidth=40&imdensity=1&ts=1755605118674'
															/>
														</div>
													</div>
													<Heart size={16} className='mr-4 -mt-0' />
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='absolute top-0 right-8'>
					<CarouselNext />
					<CarouselPrevious />
				</div>
			</Carousel>
		</div>
	)
}

export default ProductRecommendations
