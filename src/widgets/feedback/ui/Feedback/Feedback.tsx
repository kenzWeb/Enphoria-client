import {FeedbackWrapper} from '@/entitles/feedback'
import {Title} from '@/shared/ui/Text'
import styles from './styles.module.scss'

export const Feedback = () => {
	return (
		<section className={styles.section}>
			<Title>Feedback</Title>
			<FeedbackWrapper />
		</section>
	)
}
