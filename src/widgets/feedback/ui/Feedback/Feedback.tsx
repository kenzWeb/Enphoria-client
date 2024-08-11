import {FeedbackWrapper} from '@/entitles/feedback'
import {Title} from '@/shared/Text'
import styles from './styles.module.scss'

export const Feedback = () => {
	return (
		<section className={styles.section}>
			<Title>Feedback</Title>
			<FeedbackWrapper />
		</section>
	)
}
