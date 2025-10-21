import React from 'react'
import {
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle
} from './ui/sheet'
import { Button } from './ui/button'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from './ui/accordion'
import { Typography } from './ui/typography'
import { ScrollArea } from './ui/scroll-area'

const FilterAndOrder = () => {
	return (
		<SheetContent className='w-full sm:w-[540px] sm:max-w-[540px]'>
			<ScrollArea className='h-[100vh]'>
				<SheetHeader>
					<SheetTitle className='uppercase'>Filter and order</SheetTitle>
				</SheetHeader>
				<Accordion
					type='multiple'
					className='w-full p-4 mb-30'
					defaultValue={['item-1']}>
					<AccordionItem value='item-1'>
						<AccordionTrigger>
							<Typography>Color</Typography>
						</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-4 text-balance'>
							<p>
								Our flagship product combines cutting-edge technology with sleek
								design. Built with premium materials, it offers unparalleled
								performance and reliability.
							</p>
							<p>
								Key features include advanced processing capabilities, and an
								intuitive user interface designed for both beginners and
								experts.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>
							<Typography>Size</Typography>
						</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-4 text-balance'>
							<p>
								We offer worldwide shipping through trusted courier partners.
								Standard delivery takes 3-5 business days, while express
								shipping ensures delivery within 1-2 business days.
							</p>
							<p>
								All orders are carefully packaged and fully insured. Track your
								shipment in real-time through our dedicated tracking portal.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger>
							<Typography>Price</Typography>
						</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-4 text-balance'>
							<p>
								We stand behind our products with a comprehensive 30-day return
								policy. If you&apos;re not completely satisfied, simply return
								the item in its original condition.
							</p>
							<p>
								Our hassle-free return process includes free return shipping and
								full refunds processed within 48 hours of receiving the returned
								item.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-4'>
						<AccordionTrigger>
							<Typography>Sort by</Typography>
						</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-4 text-balance'>
							<p>
								We stand behind our products with a comprehensive 30-day return
								policy. If you&apos;re not completely satisfied, simply return
								the item in its original condition.
							</p>
							<p>
								Our hassle-free return process includes free return shipping and
								full refunds processed within 48 hours of receiving the returned
								item.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<SheetFooter className='absolute bottom-0 w-full bg-background'>
					<SheetClose asChild>
						<Button type='submit'>Apply filters</Button>
					</SheetClose>
					<SheetClose asChild>
						<Button variant='outline'>Clear filters</Button>
					</SheetClose>
				</SheetFooter>
			</ScrollArea>
		</SheetContent>
	)
}

export default FilterAndOrder
