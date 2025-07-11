import { Button } from '@/shared/shad-cn/ui/Button'

export const ArrivalSliderButtons = () => {
	return (
		<>
			<Button
				variant='elevated'
				size='icon'
				className='arrow-prev'
				aria-label='Previous slide'
			/>
			<Button
				variant='elevated'
				size='icon'
				className='arrow-next'
				aria-label='Next slide'
			/>
		</>
	)
}
