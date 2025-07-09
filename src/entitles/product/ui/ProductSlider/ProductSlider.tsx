import {SERVER_URL} from '@/shared/config/private.config'
import {Button} from '@/shared/shad-cn/ui/Button'
import * as m from 'motion/react-m'
import {ChevronDown, ChevronLeft, ChevronRight, ChevronUp} from 'lucide-react'
import {useEffect, useRef, useState} from 'react'
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {EffectFade, Navigation, Thumbs} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './ProductSlider.module.scss'

interface SliderProps {
	images: string[]
}

export const ProductSlider = ({images}: SliderProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const mainSwiperRef = useRef<SwiperType | null>(null)
	const [isMobile, setIsMobile] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)

		const timer = setTimeout(() => setIsLoading(false), 500)

		return () => {
			window.removeEventListener('resize', checkMobile)
			clearTimeout(timer)
		}
	}, [])

	const handleSlideChange = (swiper: SwiperType) => {
		setActiveIndex(swiper.activeIndex)
	}

	const goToSlide = (index: number) => {
		if (mainSwiperRef.current) {
			mainSwiperRef.current.slideTo(index)
		}
	}

	if (!images || images.length === 0) {
		return <div className={styles.placeholder}>No images available</div>
	}

	if (isLoading) {
		return (
			<div className={styles.sliderContainer}>
				<div className={styles.mainSliderWrapper}>
					<div className={styles.placeholder}>Loading...</div>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.mainSliderWrapper}>
				<Swiper
					onSwiper={(swiper: SwiperType) => {
						mainSwiperRef.current = swiper
					}}
					onSlideChange={handleSlideChange}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
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
							<motion.div
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
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Mobile Navigation */}
				{isMobile && images.length > 1 && (
					<>
						<Button
							variant='elevated'
							size='icon'
							className={`${styles.navButton} ${styles.navPrev} swiper-button-prev-custom`}
							asChild
						>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<ChevronLeft size={24} />
							</motion.div>
						</Button>
						<Button
							variant='elevated'
							size='icon'
							className={`${styles.navButton} ${styles.navNext} swiper-button-next-custom`}
							asChild
						>
							<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
								<ChevronRight size={24} />
							</motion.div>
						</Button>
					</>
				)}
			</div>

			{images.length > 1 && (
				<div className={styles.thumbsContainer}>
					{isMobile ? (
						<motion.div
							className={styles.thumbsGrid}
							initial={{opacity: 0, y: 20}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.2}}
						>
							{images.slice(0, 6).map((img, index) => (
								<motion.div
									key={index}
									className={`${styles.thumbWrapper} ${
										activeIndex === index ? styles.active : ''
									}`}
									onClick={() => goToSlide(index)}
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
								</motion.div>
							))}
							{images.length > 6 && (
								<motion.div
									className={styles.moreIndicator}
									initial={{opacity: 0, scale: 0.8}}
									animate={{opacity: 1, scale: 1}}
									transition={{duration: 0.3, delay: 0.6}}
								>
									+{images.length - 6}
								</motion.div>
							)}
						</motion.div>
					) : (
						<motion.div
							initial={{opacity: 0, x: -20}}
							animate={{opacity: 1, x: 0}}
							transition={{duration: 0.5, delay: 0.3}}
						>
							<Swiper
								onSwiper={setThumbsSwiper}
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
										<motion.div
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
										</motion.div>
									</SwiperSlide>
								))}
							</Swiper>

							{images.length > 4 && (
								<motion.div
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
										<motion.div
											whileHover={{scale: 1.15, y: -2}}
											whileTap={{scale: 0.9}}
										>
											<ChevronUp size={18} />
										</motion.div>
									</Button>
									<Button
										variant='elevated'
										size='iconSm'
										className={styles.desktopNavButton}
										onClick={() => thumbsSwiper?.slideNext()}
										asChild
									>
										<motion.div
											whileHover={{scale: 1.15, y: 2}}
											whileTap={{scale: 0.9}}
										>
											<ChevronDown size={18} />
										</motion.div>
									</Button>
								</motion.div>
							)}
						</motion.div>
					)}
				</div>
			)}
		</div>
	)
}
