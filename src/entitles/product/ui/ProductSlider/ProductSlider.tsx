import {SERVER_URL} from '@/shared/config/private.config'
import {motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {Thumbs} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './ProductSlider.module.scss'

interface SliderProps {
	images: string[]
}

export const ProductSlider = ({images}: SliderProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const mainSwiperRef = useRef<SwiperType | null>(null)

	useEffect(() => {
		if (mainSwiperRef.current) {
			setIsBeginning(mainSwiperRef.current.isBeginning)
			setIsEnd(mainSwiperRef.current.isEnd)
		}
	}, [])

	const handlePrev = () => {
		if (mainSwiperRef.current && mainSwiperRef.current.slidePrev) {
			mainSwiperRef.current.slidePrev()
			setIsBeginning(mainSwiperRef.current.isBeginning)
			setIsEnd(mainSwiperRef.current.isEnd)
		} else {
			console.log(
				'mainSwiperRef.current is not initialized or slidePrev is not a function',
			)
		}
	}

	const handleNext = () => {
		if (mainSwiperRef.current && mainSwiperRef.current.slideNext) {
			mainSwiperRef.current.slideNext()
			setIsBeginning(mainSwiperRef.current.isBeginning)
			setIsEnd(mainSwiperRef.current.isEnd)
		} else {
			console.log(
				'mainSwiperRef.current is not initialized or slideNext is not a function',
			)
		}
	}

	const handleSlideChange = () => {
		if (mainSwiperRef.current) {
			setIsBeginning(mainSwiperRef.current.isBeginning)
			setIsEnd(mainSwiperRef.current.isEnd)
		}
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.thumbsContainer}>
				<Swiper
					onSwiper={setThumbsSwiper}
					direction='vertical'
					spaceBetween={10}
					slidesPerView={4}
					modules={[Thumbs]}
					className={styles.thumbsSwiper}
					allowTouchMove={true}
				>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							<motion.img
								whileHover={{scale: 1.02}}
								transition={{duration: 0.3, ease: 'easeInOut'}}
								src={`${SERVER_URL}${img}`}
								alt={`thumb-${index}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.navigation}>
					<motion.button
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.98}}
						transition={{duration: 0.2}}
						className={styles.navButton}
						onClick={handlePrev}
						disabled={isBeginning}
					>
						<MdOutlineKeyboardArrowDown
							className='rotate-180'
							color='3C4242'
							size={20}
						/>
					</motion.button>
					<motion.button
						whileHover={{scale: 1.1}}
						whileTap={{scale: 0.95}}
						className={styles.navButton}
						onClick={handleNext}
						disabled={isEnd}
					>
						<MdOutlineKeyboardArrowDown color='FFFFFF' size={20} />
					</motion.button>
				</div>
			</div>
			<Swiper
				onSwiper={(swiper: SwiperType) => {
					mainSwiperRef.current = swiper
				}}
				direction='vertical'
				onSlideChange={handleSlideChange}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				modules={[Thumbs]}
				className={styles.mainSwiper}
				observer={true}
				observeParents={true}
				speed={500}
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={`${SERVER_URL}${img}`} alt={`slide-${index}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
