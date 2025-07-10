import {SliderMain, SliderNavigation, SliderThumbs} from '@/features/product'
import {useProductSlider} from '@/shared/hooks/useProductSlider'
import {ProductSliderProps} from '@/shared/types/slider'
import styles from './ProductSlider.module.scss'

export const ProductSlider = ({images}: ProductSliderProps) => {
	const {
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
	} = useProductSlider()

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
				<SliderMain
					images={images}
					thumbsSwiper={thumbsSwiper}
					isMobile={isMobile}
					onSlideChange={handleSlideChange}
					onSwiper={(swiper) => {
						mainSwiperRef.current = swiper
					}}
				/>

				{isMobile && (
					<SliderNavigation
						onPrev={prevSlide}
						onNext={nextSlide}
						imagesLength={images.length}
					/>
				)}
			</div>

			{images.length > 1 && (
				<div className={styles.thumbsContainer}>
					<SliderThumbs
						images={images}
						activeIndex={activeIndex}
						onThumbClick={goToSlide}
						onSwiper={setThumbsSwiper}
						isMobile={isMobile}
						thumbsSwiper={thumbsSwiper}
					/>
				</div>
			)}
		</div>
	)
}
