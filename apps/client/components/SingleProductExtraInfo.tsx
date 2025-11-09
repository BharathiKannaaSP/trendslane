import React from 'react'
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Typography } from './ui/typography'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Separator } from './ui/separator'
import NavLink from './ui/nav-link'

const SingleProductExtraInfo = () => {
	return (
		<SheetContent className='w-full sm:w-[600px] sm:max-w-[600px] max-h-[100vh] overflow-y-auto'>
			<SheetHeader>
				<SheetTitle>Product Information</SheetTitle>
			</SheetHeader>
			<div className='p-2'>
				<Tabs defaultValue='description'>
					<ScrollArea>
						<TabsList className='flex gap-4'>
							<TabsTrigger value='description' asChild>
								<Button variant='ghost' className='p-2'>
									<Typography>Description</Typography>
								</Button>
							</TabsTrigger>
							<TabsTrigger value='composition' asChild>
								<Button variant='ghost' className='p-2'>
									<Typography>Composition and care</Typography>
								</Button>
							</TabsTrigger>
							<TabsTrigger value='delivery' asChild>
								<Button variant='ghost' className='p-2'>
									<Typography>Deliveries and returns </Typography>
								</Button>
							</TabsTrigger>
						</TabsList>
						<ScrollBar orientation='horizontal' />
					</ScrollArea>
					<TabsContent value='description' className='p-2 '>
						<Typography className='font-normal normal-case  break-words'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem iusto, itaque ipsam magni recusandae quaerat optio unde
							pariatur aut aliquam numquam sequi nihil quas perspiciatis. Magni
							quaerat omnis optio sed!
						</Typography>
						<div className='mt-4'>
							<Typography>REF. 132jd#</Typography>
						</div>
					</TabsContent>
					<TabsContent value='composition' className='pt-4 pl-3'>
						<div className='flex flex-col '>
							<div className='flex flex-col'>
								<Typography>Composition</Typography>
								<ul className='list-disc p-4'>
									<li>Composition: 100% sheep leather with fur</li>
								</ul>
							</div>
							<div className='flex flex-col'>
								<Typography>Origin</Typography>
								<ul className='list-disc p-4 flex flex-col gap-2'>
									<li>Designed in Barcelona</li>
									<li> Manufacture: Türkiye </li>
									<li> Dye/printing: Türkiye</li>
									<li> Weave: Türkiye</li>
								</ul>
							</div>
							<div className='flex flex-col'>
								<Typography>Care</Typography>
								<ul className='pt-2'>
									<li className='flex items-center gap-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											width='36'
											height='36'>
											<title>Do not bleach</title>
											<path
												fill='currentColor'
												d='m19.732 7.129-5 3.498 2.135 4.447 2.918 2.03-.334.405-2.127-1.486 1.248 2.602H5.775l1.257-2.602-2.136 1.486-.28-.404 2.847-1.987 2.153-4.491-5-3.498.28-.396 4.94 3.437 2.338-4.878 2.347 4.887 4.93-3.446zm-5.405 3.788-1.714 1.195 3.437 2.39zm2.18 4.535-4.333-3.032-4.333 3.032-1.283 2.68H17.79zm-8.236-.905 3.481-2.426-1.732-1.204zm1.97-4.087 1.95 1.353 1.925-1.344-1.942-4.043-1.934 4.034Z'></path>
										</svg>
										Do not bleach
									</li>
									<li className='flex items-center gap-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='inherit'
											viewBox='0 0 24 24'
											width='36'
											height='36'>
											<title>No washing</title>
											<path
												fill='currentColor'
												d='m19.277 6.946-3.19 2.233q.264.087.571.088.369 0 .615-.097a7 7 0 0 0 .493-.211q.246-.123.518-.229.282-.114.695-.14l.369-1.74.474.096-1.88 9.01 1.388.975-.334.395-1.169-.817-.237 1.116H5.848l-.229-1.116-1.169.817-.281-.395 1.336-.94-1.89-9.045.484-.096.369 1.749q.43.026.694.14t.501.229q.194.114.413.21.23.09.598.089.378 0 .659-.106L4.169 6.946l.281-.395 3.41 2.373q.255-.132.563-.237a2.5 2.5 0 0 1 .782-.106q.519 0 .826.123.308.114.571.246.211.114.458.202.22.088.562.088h.07q.378 0 .624-.088a6 6 0 0 0 .475-.202q.273-.132.589-.246.325-.114.861-.114.5.009.8.114t.536.237l3.42-2.39zm-3.665 2.567-3.445 2.417 5.335 3.718 1.371-6.557q-.387.053-.888.307a5 5 0 0 1-.57.247q-.274.105-.695.105h-.07q-.563 0-1.038-.237m1.776 6.688-5.67-3.964-5.66 3.964.194.932h10.942zm-11.444-.518 5.353-3.745-3.49-2.443q-.228.105-.492.185-.246.07-.57.07h-.071q-.466 0-.738-.105a5 5 0 0 1-.51-.247q-.175-.088-.37-.175-.193-.088-.483-.123zm2.373-6.434 3.42 2.382 3.383-2.373a2.1 2.1 0 0 0-.888-.176q-.448 0-.72.097a6 6 0 0 0-.501.21q-.264.133-.554.238t-.765.105h-.07q-.43 0-.703-.105a6 6 0 0 1-.545-.246 8 8 0 0 0-.483-.202q-.255-.106-.686-.106-.457 0-.888.176'></path>
										</svg>
										No washing
									</li>
									<li className='flex items-center gap-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											width='36'
											height='36'>
											<title>Do not iron</title>
											<path
												fill='currentColor'
												d='m12.308 12-.15.105 7.11 4.957L18.206 12zm-1.178 0q-1.213 0-2.505.07t-2.338.598q-.923.492-1.538 1.53-.606 1.036-.642 2.935h.08l-.018-.027 7.128-4.992zm-6.152 5.133H18.46l-6.741-4.72zm14.3-10.01-1.39.966 1.996 9.536H3.615v-.246q0-2.19.686-3.384.686-1.195 1.766-1.758a5.6 5.6 0 0 1 2.101-.606 23 23 0 0 1 2.268-.114L4.168 7.122l.272-.395 6.874 4.79h.834l5.195-3.64-.15-.737H6.05v-.484h11.54l.193.914 1.213-.843.281.395Zm-1.82 1.273-4.447 3.12 5.097-.008z'></path>
										</svg>
										Do not iron
									</li>
									<li className='flex items-center gap-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											width='36'
											height='36'>
											<title>Do not dry clean</title>
											<path
												fill='currentColor'
												d='M19.724 7.612 17.632 9.08a6.2 6.2 0 0 1 .879 3.19v.273a6.3 6.3 0 0 1-1.134 3.375l2.408 1.679-.334.404-2.39-1.679q-1.9 2.303-4.87 2.303-.009 0-.008-.009-2.989 0-4.887-2.302L4.896 18l-.28-.404 2.39-1.67a6.17 6.17 0 0 1-1.152-3.375 6.1 6.1 0 0 1 .87-3.454L4.616 7.612l.281-.395 2.101 1.468q.94-1.345 2.32-2.022a6.56 6.56 0 0 1 2.866-.685h.017q1.46 0 2.84.676t2.328 2.022l2.083-1.46zM17.227 9.37l-4.614 3.226 4.36 3.04a5.7 5.7 0 0 0 1.037-3.093q.009-.123.009-.255 0-1.556-.791-2.918Zm-.57 6.671-4.483-3.138-4.474 3.13q1.74 2.1 4.474 2.1 0 .009.009.009 2.715 0 4.473-2.101ZM7.4 15.645l4.342-3.032L7.13 9.38a5.7 5.7 0 0 0-.774 3.173 5.7 5.7 0 0 0 1.046 3.094Zm0-6.688 4.782 3.349 4.78-3.358q-.878-1.239-2.153-1.854a5.9 5.9 0 0 0-2.627-.624q-1.363 0-2.637.624-1.274.623-2.145 1.863'></path>
										</svg>
										Do not dry clean
									</li>
									<li className='flex items-center gap-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											width='36'
											height='36'>
											<title>Do not tumble dry</title>
											<path
												fill='currentColor'
												d='M18.3 5.426V6.91l1.151-.8.281.405-1.432.993v7.954l1.485 1.028-.334.404-1.151-.808v1.538H6.1v-1.573l-1.204.843-.28-.404L6.1 15.454V7.553L4.615 6.516l.281-.405 1.205.835v-1.52zm-.484 2.426-1.459 1.02a4.86 4.86 0 0 1 .774 2.627v.018q0 1.415-.747 2.601l1.432 1.002zM16.041 9.09l-3.428 2.408 3.463 2.408a4.46 4.46 0 0 0 .668-2.373V11.5a4.5 4.5 0 0 0-.703-2.408Zm1.775 6.653-1.722-1.204q-1.485 1.907-3.885 1.907h-.026q-2.418-.009-3.894-1.933l-1.696 1.195v1.424h11.223zm-2.039-1.415-3.603-2.522-3.569 2.487q1.354 1.767 3.578 1.775h.017q2.216 0 3.577-1.74m-9.184.782 1.424-.993a4.77 4.77 0 0 1-.747-2.593q0-.008.008-.017 0-1.407.756-2.602l-1.441-1.01zm1.731-1.213 3.42-2.39L8.35 9.126a4.45 4.45 0 0 0-.695 2.382v.035q0 1.275.668 2.355ZM6.593 7.29l1.722 1.213q1.478-1.89 3.876-1.898h.01q2.381 0 3.875 1.872l1.74-1.213V5.918H6.593v1.371Zm2.039 1.433 3.56 2.478 3.568-2.505q-1.362-1.704-3.551-1.705h-.018Q9.995 7 8.631 8.723Z'></path>
										</svg>
										Do not tumble dry
									</li>
								</ul>
							</div>
						</div>
					</TabsContent>
					<TabsContent value='delivery' className='pt-4 pl-3'>
						<div className='flex flex-col gap-6 mb-4'>
							<Typography>Deliveries</Typography>
							<div className='flex items-center justify-between pl-0 pr-4'>
								<Typography className='normal-case font-normal'>
									Home delivery
								</Typography>
								<Typography className='normal-case font-normal'>
									0 to 8 working days
								</Typography>
								<div className='flex flex-col gap-0 text-end'>
									<Typography className='normal-case'>Rs. 790.00</Typography>
									<Typography className='normal-case font-extralight'>
										Free on orders over Rs. 6,500
									</Typography>
								</div>
							</div>
						</div>
						<Separator />
						<div className='flex flex-col gap-6 mt-4 mb-4'>
							<Typography>Returns</Typography>
							<Typography className='normal-case font-normal'>
								You have <b className='font-semibold'>30 days</b> (14 days for
								items from the CAPSULE collection) to return your order by any
								of the following methods:
							</Typography>
							<div className='flex items-center justify-between mr-4'>
								<Typography className='normal-case'>Home pick-up</Typography>
								<Typography className='normal-case'>Free</Typography>
							</div>
						</div>
						<Separator />
						<div className='flex flex-col gap-4 mt-4'>
							<Typography className='normal-case font-normal'>
								For reasons of hygiene, sealed products such as lingerie,
								underwear, swimwear products and earrings that do not have the
								label or protective seal attached cannot be returned.
							</Typography>
							<Typography className='normal-case font-normal'>
								Items containing flammable substances (such as perfumes, body
								mist, etc.) can only be returned with the hazardous goods label
								and in the original packaging.
							</Typography>
							<Typography className='normal-case font-normal'>
								See
								<Button variant='link' asChild className='p-0 font-semibold'>
									<NavLink
										className='normal-case p-1'
										href='/help'
										label='Help'
									/>
								</Button>
								for more information.
							</Typography>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</SheetContent>
	)
}

export default SingleProductExtraInfo
