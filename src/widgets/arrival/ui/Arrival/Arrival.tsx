import {ArrivalHeader, ArrivalSliderButtons} from '@/entitles/arrival'
import {ArrivalSlider} from '@/features/arrival'
import styles from './styles.module.scss'

export const Arrival = () => {
	return (
		<section className={styles.section}>
			<ArrivalHeader />
			<ArrivalSlider />
			<ArrivalSliderButtons />
		</section>
	)
}
