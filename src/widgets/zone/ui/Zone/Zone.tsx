import {ZoneWrapper} from '@/features/zone'
import {Title} from '@/shared/Text/Title/Title'
import styles from './styles.module.scss'

export const Zone = () => {
	return (
		<section className={styles.section}>
			<Title>Big Saving Zone</Title>
			<ZoneWrapper />
		</section>
	)
}
