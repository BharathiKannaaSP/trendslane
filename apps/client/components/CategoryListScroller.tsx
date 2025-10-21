import React from 'react'
import { Typography } from './ui/typography'
import NavLink from './ui/nav-link'

const categoryWomenScrollerList = [
	{ id: 1, label: 'New Now', link: '/c/women/new-now' },
	{ id: 2, label: 'Coats', link: '/i/women/coats' },
	{
		id: 3,
		label: 'Dresses and jumpsuits',
		link: '/e/women/dresses-and-jumpsuits/3'
	},
	{
		id: 4,
		label: 'Sweaters and cardigans',
		link: '/c/women/sweaters-and-cardigans'
	},
	{ id: 5, label: 'Jackets', link: '/i/women/jackets' },
	{ id: 6, label: 'Trousers', link: '/e/women/trousers/6' },
	{ id: 7, label: 'Jeans', link: '/c/women/jeans' },
	{ id: 8, label: 'Blazers', link: '/i/women/blazers' },
	{
		id: 9,
		label: 'Trench coats and parkas',
		link: '/e/women/trench-coats-and-parkas/9'
	},
	{ id: 10, label: 'Shirts & Blouses', link: '/c/women/shirts-and-blouses' },
	{ id: 11, label: 'Skirts', link: '/i/women/skirts' },
	{ id: 12, label: 'Tops', link: '/e/women/tops/12' },
	{ id: 13, label: 'T-shirts', link: '/c/women/t-shirts' },
	{ id: 14, label: 'Leather', link: '/i/women/leather' },
	{ id: 15, label: 'Gilets', link: '/e/women/gilets/15' },
	{ id: 16, label: 'Pyjamas', link: '/c/women/pyjamas' },
	{
		id: 17,
		label: 'Bikinis and swimsuits',
		link: '/i/women/bikinis-and-swimsuits'
	},
	{ id: 18, label: 'Shoes', link: '/e/women/shoes/18' },
	{ id: 19, label: 'Bags', link: '/c/women/bags' },
	{ id: 20, label: 'Jewellery', link: '/i/women/jewellery' },
	{ id: 21, label: 'Belts', link: '/e/women/belts/21' },
	{ id: 22, label: 'Wallets and cases', link: '/c/women/wallets-and-cases' },
	{
		id: 23,
		label: 'Scarves and foulards',
		link: '/i/women/scarves-and-foulards'
	},
	{ id: 24, label: 'Caps and gloves', link: '/e/women/caps-and-gloves/24' },
	{ id: 25, label: 'Sunglasses', link: '/c/women/sunglasses' },
	{ id: 26, label: 'More accessories', link: '/i/women/more-accessories' },
	{ id: 27, label: 'Leather', link: '/e/women/leather/27' },
	{ id: 28, label: 'Selection', link: '/c/women/selection' },
	{ id: 29, label: 'Office looks', link: '/i/women/office-looks' },
	{ id: 30, label: 'Party and events', link: '/e/women/party-and-events/30' },
	{ id: 31, label: 'Two pieces sets', link: '/c/women/two-pieces-sets' },
	{ id: 32, label: 'Knitwear', link: '/i/women/knitwear' },
	{ id: 33, label: 'Linen', link: '/e/women/linen/33' },
	{ id: 34, label: 'CAPSULE', link: '/c/women/capsule' },
	{ id: 35, label: 'Maternity wear', link: '/i/women/maternity-wear' },
	{ id: 36, label: 'Butter Yellow', link: '/e/women/butter-yellow/36' },
	{ id: 37, label: 'Knitwear', link: '/c/women/knitwear' },
	{ id: 38, label: 'Holidays', link: '/i/women/holidays' },
	{ id: 39, label: 'Best sellers', link: '/e/women/best-sellers/39' },
	{ id: 40, label: 'Boho', link: '/c/women/boho' },
	{ id: 41, label: 'Leopard', link: '/i/women/leopard' },
	{ id: 42, label: 'Chocolate', link: '/e/women/chocolate/42' },
	{ id: 43, label: 'Burgundy', link: '/c/women/burgundy' },
	{ id: 44, label: 'Casual', link: '/i/women/casual' }
]

const CategoryListScroller = () => {
	return (
		<div className='p-4 md:p-8'>
			<div className='flex flex-col gap-4'>
				<Typography>Women</Typography>
				<div className='flex items-center gap-2'>
					<ul className='flex overflow-x-auto whitespace-nowrap gap-6 snap-x  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
						{categoryWomenScrollerList.map((item) => (
							<li key={item.id}>
								<NavLink href={item.link} label={item.label} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CategoryListScroller
