import React from 'react'
import { cn } from '@workspace/ui/lib/utils'

type TypographyProps = {
	children: React.ReactNode
	className?: string
}

export const Typography = ({ children, className }: TypographyProps) => {
	return (
		<span
			className={cn(
				'font-semibold uppercase text-sm tracking-normal',
				className
			)}>
			{children}
		</span>
	)
}
