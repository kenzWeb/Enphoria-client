import {Button} from '@/shared/shad-cn/ui/Button'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import * as m from 'motion/react-m'
import styles from './SliderNavigation.module.scss'

interface SliderNavigationProps {
	onPrev: () => void
	onNext: () => void
	imagesLength: number
}

export const SliderNavigation = ({
	onPrev,
	onNext,
	imagesLength,
}: SliderNavigationProps) => {
	if (imagesLength <= 1) return null

	return (
		<>
			<Button
				variant='elevated'
				size='icon'
				className={`${styles.navButton} ${styles.navPrev} swiper-button-prev-custom`}
				asChild
			>
				<m.div
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
					onClick={onPrev}
				>
					<ChevronLeft size={24} />
				</m.div>
			</Button>
			<Button
				variant='elevated'
				size='icon'
				className={`${styles.navButton} ${styles.navNext} swiper-button-next-custom`}
				asChild
			>
				<m.div
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
					onClick={onNext}
				>
					<ChevronRight size={24} />
				</m.div>
			</Button>
		</>
	)
}
