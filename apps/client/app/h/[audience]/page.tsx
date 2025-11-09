import React from 'react'
import HomeBannerImage from '@/components/HomeBannerImage'
import CategoryListScroller from '@/components/CategoryListScroller'
import HomeBannerVideo from '@/components/HomeBannerVideo'
import HomeGrids from '@/components/HomeGrids'

const HomeAudiencePage = () => {
	return (
		<div>
			<HomeBannerVideo />
			<HomeGrids />
			<HomeBannerImage />
			<HomeBannerImage />
			<HomeBannerImage />
			<HomeBannerImage />
			<HomeBannerVideo />
			<CategoryListScroller />
		</div>
	)
}

export default HomeAudiencePage
