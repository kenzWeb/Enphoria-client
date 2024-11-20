import {ArrivalSliderButtons} from '@/entitles/arrival'
import {ArrivalSlider} from '@/features/arrival'
import {Title} from '@/shared/ui/Text'
import styles from './styles.module.scss'

export const Arrival = () => {
	return (
		<section className={styles.section}>
			<Title>New Arrival</Title>
			<ArrivalSlider />
			<ArrivalSliderButtons />
		</section>
	)
}
