import {WomanWrapper} from '@/features/woman'
import {Title} from '@/shared/Text'
import styles from './styles.module.scss'

export const Woman = () => {
	return (
		<section className={styles.section}>
			<Title>Categories For Women</Title>
			<WomanWrapper />
		</section>
	)
}
