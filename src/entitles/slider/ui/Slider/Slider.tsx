import {SERVER_URL} from '@/shared/config/private.config'
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import {SliderDotButton, useDotButton} from '../SliderDotButton/SliderDotButton'

type PropType = {
	images: string[]
	options?: EmblaOptionsType
}

export const Slider: React.FC<PropType> = (props) => {
	const {images, options} = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)

	return (
		<section className='embla' dir='rtl'>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{images.map((imageUrl, index) => (
						<div className='embla__slide' key={index}>
							<img
								src={`${SERVER_URL}${imageUrl}`}
								alt={`Slide ${index + 1}`}
							/>
						</div>
					))}
				</div>
			</div>

			<div className='embla__controls'>
				<div className='embla__dots'>
					{scrollSnaps.map((_, index) => (
						<SliderDotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex ? ' embla__dot--selected' : '',
							)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
