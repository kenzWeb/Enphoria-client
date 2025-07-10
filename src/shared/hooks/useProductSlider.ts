import {SliderNavigation, SliderState} from '@/shared/types/slider'
import {useEffect, useRef, useState} from 'react'
import {Swiper as SwiperType} from 'swiper'

export const useProductSlider = (): SliderState &
	SliderNavigation & {
		thumbsSwiper: SwiperType | null
		mainSwiperRef: React.MutableRefObject<SwiperType | null>
		setThumbsSwiper: (swiper: SwiperType | null) => void
		handleSlideChange: (swiper: SwiperType) => void
	} => {
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

	const nextSlide = () => {
		if (mainSwiperRef.current) {
			mainSwiperRef.current.slideNext()
		}
	}

	const prevSlide = () => {
		if (mainSwiperRef.current) {
			mainSwiperRef.current.slidePrev()
		}
	}

	return {
		activeIndex,
		isMobile,
		isLoading,
		thumbsSwiper,
		mainSwiperRef,
		setThumbsSwiper,
		handleSlideChange,
		goToSlide,
		nextSlide,
		prevSlide,
	}
}
