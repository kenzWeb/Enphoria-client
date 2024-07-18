import { ArrivalSliderButtons} from '@/entitles/arrival'
import {ArrivalSlider} from '@/features/arrival'
import styles from './styles.module.scss'
import { Title } from '@/shared/Text/Title/Title'

export const Arrival = () => {
	return (
		<section className={styles.section}>
			<Title>New Arrival</Title>
			<ArrivalSlider />
			<ArrivalSliderButtons />
		</section>
	)
}
