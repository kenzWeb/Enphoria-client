import {Subtitle, Title} from '@/shared/ui/Text'
import styles from './Billing.module.scss'

export const Billing = () => {
	return (
		<section className={styles.section}>
			<Title className={styles.text} marginBottom='10' marginTop='52'>
				Check Out
			</Title>
			<Subtitle>Billing Details</Subtitle>
		</section>
	)
}
