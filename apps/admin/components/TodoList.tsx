'use client'
import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'

const TodoList = () => {
	const [date, setDate] = useState<Date | undefined>(new Date())
	const [open, setOpen] = useState(false)

	return (
		<div>
			<h1 className='font-medium text-lg mb-6'>Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className='w-full'>
						<CalendarIcon />
						{date ? date.toDateString() : 'Select Date'}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='p-0 w-auto'>
					<Calendar
						mode='single'
						selected={date}
						onSelect={(date) => {
							setDate(date)
							setOpen(false)
						}}
						captionLayout='dropdown'
					/>
				</PopoverContent>
			</Popover>
			<ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
				<div className='flex flex-col gap-2'>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms1' />
							<Label
								htmlFor='terms1'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms2' checked />
							<Label
								htmlFor='terms2'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms3' />
							<Label
								htmlFor='terms3'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms4' />
							<Label
								htmlFor='terms4'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms5' checked />
							<Label
								htmlFor='terms5'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms6' />
							<Label
								htmlFor='terms6'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms7' />
							<Label
								htmlFor='terms7'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms8' />
							<Label
								htmlFor='terms8'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms9' />
							<Label
								htmlFor='terms9'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='terms10' />
							<Label
								htmlFor='terms10'
								className='font-medium text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
							</Label>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	)
}

export default TodoList
