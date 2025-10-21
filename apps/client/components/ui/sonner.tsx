'use client'

import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'
import { toast as sonnerToast } from 'sonner'
import { Typography } from './typography'
import React, { JSX } from 'react'

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			icons={{
				success: <CircleCheckIcon className='size-4' />,
				info: <InfoIcon className='size-4' />,
				warning: <TriangleAlertIcon className='size-4' />,
				error: <OctagonXIcon className='size-4' />,
				loading: <Loader2Icon className='size-4 animate-spin' />
			}}
			style={
				{
					'--normal-bg': 'var(--popover)',
					'--normal-text': 'var(--popover-foreground)',
					'--normal-border': 'var(--border)',
					'--border-radius': 'var(--radius)'
				} as React.CSSProperties
			}
			{...props}
		/>
	)
}

export function customToast(toast: Omit<ToastProps, 'id'>) {
	return sonnerToast.custom((id) => (
		<CustomToast
			id={id}
			title={toast.title}
			description={toast.description}
			button={toast.button}
			component={toast.component}
		/>
	))
}

export function CustomToast({
	title,
	description,
	button,
	id,
	component
}: ToastProps) {
	if (component) {
		return (
			<div>
				{component}
			</div>
		)
	}

	return (
		<div className='flex border-2 border-primary bg-white shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4 rounded-lg'>
			<div className='flex flex-1 items-center'>
				<div className='w-full'>
					<Typography>{title}</Typography>
					{description && (
						<p className='mt-1 text-sm text-gray-500'>{description}</p>
					)}
				</div>
			</div>

			{button && (
				<div className='ml-5 shrink-0'>
					<button
						className='rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100'
						onClick={() => {
							button.onClick()
							sonnerToast.dismiss(id)
						}}>
						{button.label}
					</button>
				</div>
			)}
		</div>
	)
}

interface ToastProps {
	id: string | number
	title?: string
	description?: string
	button?: {
		label: string
		onClick: () => void
	}
	component?: JSX.Element
}

export { Toaster }
