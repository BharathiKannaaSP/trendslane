import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Typography } from './ui/typography'
import { Heart } from 'lucide-react'
import { Badge } from './ui/badge'
import { useParams } from 'next/navigation'

const ProductGrid = () => {
	const { audience, category } = useParams()

	return (
		<div
			className='grid 
		 [grid-template-columns:repeat(auto-fill,minmax(calc(50%-1px),1fr))]
		 lg:[grid-template-columns:repeat(auto-fill,minmax(calc(25%-1px),1fr))] 
		 grid-flow-dense my-0 mx-auto pb-4 p-0'>
			<div className='col-span-2'>
				<div className='flex flex-col justify-between'>
					<form
						onSubmit={(e) => {
							e.preventDefault()
							console.log('Add to cart')
						}}
						className='relative flex justify-between flex-col'>
						<div>
							<fieldset className='relative group overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(7/4.9)]'>
								<Link
									href={`/p/${audience}/${category}/subcategory/product_name`}>
									<div className='[aspect-ratio:calc(7/4.89)]'>
										<Image
											className='absolute inset-0 w-full h-full object-cover'
											src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/outfit/S6/A2/17067907_92-99999999_01.jpg'
											alt='s'
											fill
										/>
									</div>
								</Link>
								<div className='absolute bottom-0 h-max bg-background w-full z-0 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
									<ScrollArea className='h-16 lg:h-max'>
										<div className='flex flex-wrap items-center justify-center gap-4 p-2'>
											<Button variant='outline' disabled className='border-0'>
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
						<div className='mt-4 h-20'>
							<div className='flex justify-between '>
								<div className='ml-2 lg:ml-4 flex flex-col gap-2'>
									<Typography className='normal-case font-normal text-sm'>
										Lori tapered-fit jeans
									</Typography>
									<Typography className='normal-case text-sm tracking-wider'>
										Rs. 5190.00
									</Typography>
								</div>
								<Heart className='mr-2 -mt-2' />
							</div>
						</div>
					</form>
				</div>
			</div>

			<div className='flex flex-col justify-between'>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative group overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17046739_09_D1.jpg?ts=1757932581566&im=SmartCrop,width=480,height=672&imdensity=1'
										alt='s'
										fill
									/>
								</div>
							</Link>
							<div className='absolute bottom-0 h-max bg-background w-full z-0 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
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
								<Typography className='normal-case font-normal text-sm truncate w-40'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Labore excepturi rerum facilis nesciunt assumenda corrupti,
									veritatis perferendis doloremque, soluta reprehenderit et,
									voluptates dolorum est mollitia ipsa quibusdam! Dolore, hic.
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
							<Heart className='mr-2 -mt-2' />
						</div>
					</div>
				</form>
			</div>
			<div className='flex flex-col justify-between'>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative group overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17046739_09_D1.jpg?ts=1757932581566&im=SmartCrop,width=480,height=672&imdensity=1'
										alt='s'
										fill
									/>
								</div>
							</Link>
							<div className='absolute bottom-0 h-max bg-background w-full z-0 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
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

					<div className='mt-4 h-20'>
						<div className='flex justify-between items-start'>
							<div className='ml-2 lg:ml-4 flex flex-col gap-2'>
								<Typography className='normal-case font-normal text-sm truncate w-30'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Labore excepturi rerum facilis nesciunt assumenda corrupti,
									veritatis perferendis doloremque, soluta reprehenderit et,
									voluptates dolorum est mollitia ipsa quibusdam! Dolore, hic.
									Quis?
								</Typography>
								<Typography className='normal-case text-sm tracking-wider'>
									Rs. 5190.00
								</Typography>
							</div>
							<Heart className='mr-2 -mt-2 size-4 lg:size-6' />
						</div>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17046739_09_D1.jpg?ts=1757932581566&im=SmartCrop,width=480,height=672&imdensity=1'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full object-cover'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17077909_76_D6.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17046739_09_D1.jpg?ts=1757932581566&im=SmartCrop,width=480,height=672&imdensity=1'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>

			{/* <div className='col-span-2'> */}
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className='[aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full object-cover'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17067907_92.jpg'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
			{/* </div> */}
			<div>
				<form action='' className='flex justify-between flex-col'>
					<div>
						<fieldset className='relative overflow-hidden border-0 p-0 m-0 [aspect-ratio:calc(5/7)]'>
							<Link href='/'>
								<div className=' [aspect-ratio:calc(5/7)]'>
									<Image
										className='absolute inset-0 w-full h-full'
										src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17046739_09_D1.jpg?ts=1757932581566&im=SmartCrop,width=480,height=672&imdensity=1'
										alt='s'
										fill
									/>
								</div>
							</Link>
						</fieldset>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ProductGrid
