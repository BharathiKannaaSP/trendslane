import React from 'react'
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from './ui/dialog'
import { Typography } from './ui/typography'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import NavLink from './ui/nav-link'

const ProductNotifyMailPopup = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// ✅ If valid
		alert('We’ll notify you when the product is available!')
	}

	return (
		<DialogContent className='sm:max-w-[500px]  flex gap-6 flex-col'>
			<form onSubmit={(e) => handleSubmit(e)} className='gap-4 flex flex-col'>
				<DialogHeader>
					<DialogTitle>
						<Typography className='uppercase text-sm'>
							Reversible fur coat
						</Typography>
					</DialogTitle>
					<DialogDescription>
						We will notify you immediately if the item becomes available again
					</DialogDescription>
				</DialogHeader>

				<div className='flex items-center gap-2'>
					<div className='grid flex-1 gap-2'>
						<Label htmlFor='email'>E-mail</Label>
						<Input
							required
							type='email'
							id='email'
							name='email'
							// defaultValue='spbharathikannaa@gmail.com'
						/>
					</div>
				</div>

				<DialogFooter className='sm:justify-start'>
					<Button type='submit'>Receive notification</Button>
					<DialogClose asChild>
						<Button type='button' variant='secondary'>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</form>
			<Typography className='font-normal  normal-case'>
				By requesting an availability notification, you confirm that you have
				read the
				<Button
					className='text-muted-foreground p-0 ml-1 underline'
					variant='link' asChild>
					<NavLink className='font-normal normal-case' href='/privacy-policy' label='Privacy Policy.' />
				</Button>
			</Typography>
		</DialogContent>
	)
}

export default ProductNotifyMailPopup
