'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import Image from 'next/image'

function Avatar({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
	return (
		<AvatarPrimitive.Root
			data-slot='avatar'
			className={cn(
				'relative flex size-8 shrink-0 overflow-hidden rounded-full',
				className
			)}
			{...props}
		/>
	)
}

function AvatarImage({
	className,
	src,
	alt,
	width = 32,
	height = 32,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image> & {
	width?: number
	height?: number
}) {
	return (
		<Image
			src={`${src}?auto=compress&cs=tinysrgb&w=${width}&h=${height}`}
			alt={alt || 'Avatar'}
			width={width}
			height={height}
			className={cn('object-cover rounded-full', className)}
			loading='lazy'
			sizes='32px'
			{...props}
		/>
	)
}

function AvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
	return (
		<AvatarPrimitive.Fallback
			data-slot='avatar-fallback'
			className={cn(
				'bg-muted flex size-full items-center justify-center rounded-full',
				className
			)}
			{...props}
		/>
	)
}

export { Avatar, AvatarImage, AvatarFallback }
