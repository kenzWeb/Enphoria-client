import {SERVER_URL} from '@/shared/config/private.config'
import {Button} from '@/shared/shad-cn/ui/Button'
import {ChevronDown, ChevronUp} from 'lucide-react'
import * as m from 'motion/react-m'
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css'
import 'swiper/css/thumbs'
import {Thumbs} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './SliderThumbs.module.scss'

interface SliderThumbsProps {
	images: string[]
	activeIndex: number
	onThumbClick: (index: number) => void
	onSwiper?: (swiper: SwiperType) => void
	isMobile: boolean
	thumbsSwiper?: SwiperType | null
}

export const SliderThumbs = ({
	images,
	activeIndex,
	onThumbClick,
	onSwiper,
	isMobile,
	thumbsSwiper,
}: SliderThumbsProps) => {
	if (isMobile) {
		return (
			<m.div
				className={styles.thumbsGrid}
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.5, delay: 0.2}}
			>
				{images.slice(0, 6).map((img, index) => (
					<m.div
						key={index}
						className={`${styles.thumbWrapper} ${
							activeIndex === index ? styles.active : ''
						}`}
						onClick={() => onThumbClick(index)}
						whileHover={{scale: 1.05, y: -2}}
						whileTap={{scale: 0.95}}
						initial={{opacity: 0, scale: 0.8}}
						animate={{opacity: 1, scale: 1}}
						transition={{
							duration: 0.3,
							delay: index * 0.1,
							type: 'spring',
							stiffness: 300,
						}}
					>
						<img
							src={`${SERVER_URL}${img}`}
							alt={`Thumbnail ${index + 1}`}
							className={styles.thumbImage}
						/>
					</m.div>
				))}
				{images.length > 6 && (
					<m.div
						className={styles.moreIndicator}
						initial={{opacity: 0, scale: 0.8}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.3, delay: 0.6}}
					>
						+{images.length - 6}
					</m.div>
				)}
			</m.div>
		)
	}

	return (
		<m.div
			initial={{opacity: 0, x: -20}}
			animate={{opacity: 1, x: 0}}
			transition={{duration: 0.5, delay: 0.3}}
		>
			<Swiper
				onSwiper={onSwiper}
				direction='vertical'
				spaceBetween={16}
				slidesPerView={4}
				modules={[Thumbs]}
				className={styles.thumbsSwiper}
				watchSlidesProgress={true}
				speed={400}
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<m.div
							className={`${styles.thumbWrapper} ${
								activeIndex === index ? styles.active : ''
							}`}
							whileHover={{scale: 1.05, x: 4}}
							initial={{opacity: 0, x: -10}}
							animate={{opacity: 1, x: 0}}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
								type: 'spring',
								stiffness: 300,
							}}
						>
							<img
								src={`${SERVER_URL}${img}`}
								alt={`Thumbnail ${index + 1}`}
								className={styles.thumbImage}
							/>
						</m.div>
					</SwiperSlide>
				))}
			</Swiper>

			{images.length > 4 && (
				<m.div
					className={styles.navigation}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 0.3, delay: 0.5}}
				>
					<Button
						variant='elevated'
						size='iconSm'
						className={styles.desktopNavButton}
						onClick={() => thumbsSwiper?.slidePrev()}
						asChild
					>
						<m.div whileHover={{scale: 1.15, y: -2}} whileTap={{scale: 0.9}}>
							<ChevronUp size={18} />
						</m.div>
					</Button>
					<Button
						variant='elevated'
						size='iconSm'
						className={styles.desktopNavButton}
						onClick={() => thumbsSwiper?.slideNext()}
						asChild
					>
						<m.div whileHover={{scale: 1.15, y: 2}} whileTap={{scale: 0.9}}>
							<ChevronDown size={18} />
						</m.div>
					</Button>
				</m.div>
			)}
		</m.div>
	)
}
