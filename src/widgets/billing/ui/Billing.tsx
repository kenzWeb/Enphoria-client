import {BillingForm} from '@/features/billing'
import {Subtitle} from '@/shared/ui/Text'
import styles from './Billing.module.scss'

export const Billing = () => {
	return (
		<section className={styles.section}>
			<Subtitle>Billing Details</Subtitle>
			<BillingForm />
		</section>
	)
}
