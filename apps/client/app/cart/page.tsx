import ProductRecommendations from '@/components/ProductRecommendations'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'
import { Check, Heart, Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartPage = () => {
	return (
		<>
			<div className='flex flex-col w-full gap-2 items-start justify-between md:flex-row'>
				{/* Left */}
				<div className='p-0 md:pt-8 w-full basis-[50%] flex-auto'>
					<Typography className='text-sm mx-8'>Shopping Bag (7)</Typography>
					<section>
						<ul className='m-2 flex flex-wrap gap-1'>
							{Array.from({ length: 4 }).map((i, index) => (
								<li
									className='w-[calc(100%-1px)] md:w-[calc(33%-1px)]'
									key={index}>
									<div className='flex flex-row md:flex-col gap-4 flex-nowrap h-full overflow-hidden p-0 w-full'>
										<div className='relative'>
											<div className='w-40 md:w-full'>
												<Link
													href='/product_id'
													className='[aspect-ratio:calc(5/7)] block h-max relative'>
													<Image
														fill
														src={
															'https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17911506_01.jpg'
														}
														alt='cart_1'
													/>
												</Link>
												<div className='absolute top-0 right-0'>
													<Button>
														<X />
													</Button>
												</div>
											</div>
										</div>
										<div className='flex flex-col mt-2 mb-8 w-full'>
											<div className='flex items-center justify-between mr-4'>
												<Typography className='w-30 lg:w-60 truncate font-normal normal-case'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Dolores accusamus inventore dolorem molestias
													sed autem voluptate, doloribus quibusdam optio odit
													iusto nesciunt mollitia magnam nam delectus sunt,
													sequi in dolorum!
												</Typography>
												<Button variant='ghost'>
													<Heart />
												</Button>
											</div>
											<div>
												<Typography className='font-normal normal-case'>
													Rs. 1800.00
												</Typography>
											</div>
											<div>
												<Typography className='font-normal normal-case text-xs'>
													M - Chocolate
												</Typography>
											</div>
											<div className='ml-1 flex items-center gap-4'>
												<Button variant='ghost'>
													<Minus />
												</Button>
												<Typography className='mt-1'>10</Typography>
												<Button variant='ghost'>
													<Plus />
												</Button>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</section>
				</div>
				{/* Right */}
				<div className='w-full md:basis-[30%] flex flex-col pb-0 pl-6 pr-8 pt-4 h-full sticky top-[7rem]'>
					<div className='flex flex-col gap-2 w-full'>
						<div className='flex items-center justify-between'>
							<Typography className='text-sm font-normal normal-case'>
								Subtotal
							</Typography>
							<Typography className='text-sm font-normal normal-case'>
								Rs. 1800.00
							</Typography>
						</div>
						<div className='flex items-center justify-between'>
							<Typography className='text-sm font-normal normal-case'>
								Delivery
							</Typography>
							<Typography className='text-sm font-normal normal-case'>
								Free
							</Typography>
						</div>
						<div className='flex items-center justify-between'>
							<Typography className='text-sm'>
								<p>TOTAL</p>
								<span className='text-xs font-normal text-muted-foreground normal-case'>
									Taxes included
								</span>
							</Typography>
							<Typography className='text-sm tracking-wider'>
								Rs. {4 * 1800.0}
							</Typography>
						</div>
						<Button>Checkout</Button>
					</div>
					<div className='mt-4'>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-1'>
								<AccordionTrigger>
									Do you have a promotional code?
								</AccordionTrigger>
								<AccordionContent className='flex flex-col gap-4 text-balance'>
									<div className='flex flex-col gap-1'>
										<Label htmlFor='promo_code' className='text-xs'>
											Promotional code
										</Label>
										<Input id='promo_code' />
									</div>
									<Button variant='outline'>Apply</Button>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<div className='flex flex-col gap-4'>
							<div className='flex items-center gap-2'>
								<Check strokeWidth={0.75} />
								<Typography className='font-normal normal-case'>
									Free home delivery for orders over Rs. 6,500
								</Typography>
							</div>
							<div className='flex items-center gap-2'>
								<Check strokeWidth={0.75} />
								<Typography className='font-normal normal-case'>
									Free returns in 30 days
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ProductRecommendations title='May interest you' />
		</>
	)
}

export default CartPage
