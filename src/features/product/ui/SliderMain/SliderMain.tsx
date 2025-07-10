import {SERVER_URL} from '@/shared/config/private.config'
import * as m from 'motion/react-m'
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {EffectFade, Navigation, Thumbs} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './SliderMain.module.scss'

interface SliderMainProps {
	images: string[]
	thumbsSwiper: SwiperType | null
	isMobile: boolean
	onSlideChange: (swiper: SwiperType) => void
	onSwiper: (swiper: SwiperType) => void
}

export const SliderMain = ({
	images,
	thumbsSwiper,
	isMobile,
	onSlideChange,
	onSwiper,
}: SliderMainProps) => {
	return (
		<Swiper
			onSwiper={onSwiper}
			onSlideChange={onSlideChange}
			thumbs={{
				swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
			}}
			modules={[Thumbs, Navigation, EffectFade]}
			className={styles.mainSwiper}
			navigation={
				isMobile
					? {
							nextEl: '.swiper-button-next-custom',
							prevEl: '.swiper-button-prev-custom',
					}
					: false
			}
			spaceBetween={0}
			slidesPerView={1}
			speed={500}
			loop={images.length > 1}
			effect='fade'
			fadeEffect={{
				crossFade: true,
			}}
		>
			{images.map((img, index) => (
				<SwiperSlide key={index}>
					<m.div
						className={styles.imageWrapper}
						initial={{opacity: 0, scale: 0.95}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5, ease: 'easeOut'}}
					>
						<img
							src={`${SERVER_URL}${img}`}
							alt={`Product image ${index + 1}`}
							className={styles.mainImage}
							loading={index === 0 ? 'eager' : 'lazy'}
						/>
					</m.div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
