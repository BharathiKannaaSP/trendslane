import Image from 'next/image'
import { Button } from './ui/button'
import NavLink from './ui/nav-link'
import { Typography } from './ui/typography'
import { toast } from 'sonner'
import { X } from 'lucide-react'

const BagToaster = () => {
	return (
		<div className='bg-background border-2 border-primary w-80 lg:w-140 h-80 fixed right-4 top-0 lg:top-30 p-4 z-99'>
			<div className='flex flex-col'>
				<div className='flex justify-between items-center'>
					<Typography>Added to your shopping bag</Typography>
					<Button variant='ghost' onClick={() => toast.dismiss()}>
						<X />
					</Button>
				</div>
				<div className='mt-4 flex items-end gap-2'>
					<Image
						src='https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17011240_32_B.jpg'
						alt='cart_1'
						width={140}
						height={140}
					/>
					<div className='flex flex-col gap-2'>
						<Typography className='w-40 truncate font-normal normal-case'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
							soluta sit accusamus debitis reprehenderit nisi atque optio
							dolorem, quod, asperiores recusandae itaque inventore adipisci.
							Consequatur fugit cumque numquam laborum consequuntur!
						</Typography>
						<Typography className='w-40 truncate font-normal normal-case'>
							Rs. 4000.00
						</Typography>
						<Typography className='w-40 truncate font-normal normal-case'>
							L Chocolate
						</Typography>
					</div>
				</div>
				<div className='flex gap-2 w-full mt-2'>
					<Button className='w-full' asChild>
						<NavLink linkClass='w-full' label='Checkout' href='/checkout' />
					</Button>
					<Button asChild variant='outline' className='w-full'>
						<NavLink linkClass='w-full' label='View bag' href='/cart' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default BagToaster
