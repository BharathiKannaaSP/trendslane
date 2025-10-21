'use client'
import React, { useRef, useState } from 'react'
import { Button } from './ui/button'
import { Pause, Play } from 'lucide-react'

const SingleProductVideo = () => {
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
		<>
			<video
				ref={videoRef}
				className='w-full h-full object-cover'
				src='https://shop.mango.com/assets/rcs/pics/static/T1/videos/S6/A1/17067907_92.mp4?ts=1759397364539'
				loop
				autoPlay
				muted
			/>
			<div className='absolute bottom-10 right-4'>
				<Button
					className='w-10 h-10 bg-transparent border-4 hover:bg-transparent text-white hover:text-white'
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
		</>
	)
}

export default SingleProductVideo
