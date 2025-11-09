'use client'
import React from 'react'
import FilterAndOrder from '@/components/FilterAndOrder'
import NavLink from '@/components/ui/nav-link'
import { Typography } from '@/components/ui/typography'
import { useParams } from 'next/navigation'
import { Sheet, SheetTrigger } from '../../../../components/ui/sheet'
import { Button } from '../../../../components/ui/button'
import { Label } from '../../../../components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'
import ProductGrid from '@/components/ProductGrid'

const womenSubCategories = [
	{ id: 1, label: 'All', link: '' },
	{ id: 2, label: 'Sweaters', link: 'sweaters' },
	{ id: 3, label: 'Cardigans', link: 'cardigans' },
	{ id: 4, label: 'Sweatshirts', link: 'sweatshirts' },
	{ id: 5, label: 'Turtleneck', link: 'turtleneck' },
	{ id: 6, label: '100% cashmere', link: '100-cashmere' },
	{ id: 7, label: 'Wool', link: 'wool' },
	{ id: 8, label: 'Party', link: 'party' },
	{ id: 9, label: 'Striped', link: 'striped' },
	{ id: 10, label: 'Plus sizes', link: 'plus-sizes' }
]

const CategoryPage = () => {
	const { audience, category } = useParams()
	return (
		<>
			<div className='flex flex-col gap-2 pt-6 px-8'>
				<Typography>
					{audience}
					&apos; {category}{' '}
				</Typography>
				<ul className='flex gap-4 overflow-auto whitespace-nowrap'>
					{womenSubCategories.map((item) => (
						<li key={item.id}>
							<NavLink
								labelSize='sm'
								label={item.label}
								href={`/c/${audience}/${category}/${item.link}`}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className='sticky top-[56px] z-20 isolate min-h-15 flex justify-between items-center w-full px-8 py-4 bg-background'>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							className='font-semibold shadow-none cursor-pointer p-0'
							variant='ghost'>
							FILTER AND ORDER
						</Button>
					</SheetTrigger>
					<FilterAndOrder />
				</Sheet>
				<RadioGroup defaultValue='comfortable' className='flex gap-4'>
					<div className='flex items-center gap-3'>
						<RadioGroupItem value='comfortable' id='r1' className='sr-only ' />
						<Label htmlFor='r1' className='cursor-pointer '>
							<Image
								src='/productList/singleGrid.svg'
								alt='Show few items'
								width={24}
								height={24}
								title='Show few items'
							/>
						</Label>
					</div>

					<div className='flex items-center gap-3'>
						<RadioGroupItem value='default' id='r2' className='sr-only ' />
						<Label htmlFor='r2' className='cursor-pointer '>
							<Image
								src='/productList/twoGrid.svg'
								alt='Show more items'
								width={24}
								height={24}
								title='Show more items'
							/>
						</Label>
					</div>

					<div className='flex items-center gap-3'>
						<RadioGroupItem value='compact' id='r3' className='sr-only ' />
						<Label htmlFor='r3' className='cursor-pointer '>
							<Image
								src='/productList/moreGrid.svg'
								alt='Show maximum items'
								width={24}
								height={24}
								title='Show maximum items'
							/>
						</Label>
					</div>
				</RadioGroup>
			</div>
			<ProductGrid />
		</>
	)
}

export default CategoryPage
