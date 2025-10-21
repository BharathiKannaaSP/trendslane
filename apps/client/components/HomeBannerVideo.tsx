'use client'

import React, { useRef, useState } from 'react'
import FadeContent from './FadeContent'
import { Typography } from './ui/typography'
import Link from 'next/link'
import { Button } from './ui/button'
import { Pause, Play } from 'lucide-react'

const HomeBannerVideo = () => {
	const [play, setPlay] = useState(true)
	const videoRef = useRef<HTMLVideoElement>(null)

	const handlePlayPause = () => {
		if (!videoRef.current) return

		if (play) {
			videoRef.current.pause()
			setPlay(false)
		} else {
			videoRef.current.play()
			setPlay(true)
		}
	}

	return (
		<div className='relative w-full h-[calc(100vh-56px)] overflow-hidden'>
			<Link href='/c/women/new-now'>
				{/* Banner Video */}
				<video
					autoPlay
					ref={videoRef}
					loop
					muted
					className='w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-500'
					src={
						'https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blteefbd7ab5fe16010/68da88b649afc218b38e028a/NN_Modern_Feminity_16x9_6SEG_4MGB_NO_MUSIC.mp4'
					}
				/>

				{/* Overlay Content */}
				<div className='z-10 absolute text-white top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-full pl-8 pr-8'>
					<FadeContent
						className='flex flex-col gap-4'
						blur={true}
						duration={800}
						easing='ease-out'
						initialOpacity={0.5}>
						<h2 className='whitespace-nowrap text-center flex flex-col gap-2'>
							<div className='flex flex-col gap-4 items-center'>
								<Typography className='text-4xl xl:text-7xl  '>
									New Now
								</Typography>
								<Typography className='hover:underline hover:underline-offset-4'>
									Discover more
								</Typography>
							</div>
						</h2>
					</FadeContent>
				</div>
				<div className='z-10 absolute right-10 bottom-10'>
					<Button
						variant='outline'
						className='w-10 h-10 border-4 border-white bg-transparent hover:bg-transparent text-white hover:text-white'
						onClick={(e) => {
							e.preventDefault()
							handlePlayPause()
						}}>
						{play ? (
							<Pause aria-label='Pause' className='h-[2rem] w-[2rem] ' />
						) : (
							<Play aria-label='Play' className='h-[2rem] w-[2rem] ' />
						)}
					</Button>
				</div>
			</Link>
		</div>
	)
}

export default HomeBannerVideo
