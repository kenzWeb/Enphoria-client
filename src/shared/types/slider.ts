export interface ProductSliderProps {
	images: string[]
}

export interface SliderState {
	activeIndex: number
	isMobile: boolean
	isLoading: boolean
}

export interface SliderNavigation {
	goToSlide: (index: number) => void
	nextSlide: () => void
	prevSlide: () => void
}
