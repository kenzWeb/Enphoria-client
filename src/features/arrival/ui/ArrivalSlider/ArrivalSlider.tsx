import {ArrivalSlide} from '@/entitles/arrival'
import {SERVER_URL} from '@/shared/config/private.config'
import {breakpoints} from '@/shared/constants/breakpoints'
import {useGetAllArrival} from '@/shared/hooks/queries/arrival/useGetArrival'

import {Skeleton} from '@mui/material'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import {Autoplay, EffectFade, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './styles.module.scss'

export const ArrivalSlider = () => {
	const {arrival, isLoading} = useGetAllArrival()

	if (isLoading) {
		return (
			<div className={styles.skeletonContainer}>
				{Array.from({length: 4}).map((_, index) => (
					<div className={styles.skeletonItem} key={index}>
						<Skeleton variant='rectangular' className={styles.skeletonImage} />
						<Skeleton variant='text' className={styles.skeletonText} />
					</div>
				))}
			</div>
		)
	}

	return (
		<Swiper
			slidesPerView={4}
			spaceBetween={40}
			speed={800}
			breakpoints={breakpoints}
			navigation={{
				nextEl: '.arrow-next',
				prevEl: '.arrow-prev',
			}}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			modules={[Navigation, Autoplay, EffectFade]}
			className={`mySwiper ${styles.slider}`}
		>
			{arrival?.map((item) => (
				<SwiperSlide key={item.id} className={styles.slide}>
					<ArrivalSlide title={item.title} img={`${SERVER_URL}${item.img}`} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
