import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Title} from '@/shared/ui/Text'
import {Billing} from '@/widgets/billing'
import {OrderSummary} from '@/widgets/order'
import styles from './CheckoutPage.module.scss'

export const CheckoutPage = () => {
	const breadcrumbs = useBreadcrumbs({
		items: [
			{
				name: 'Home',
				href: '/',
			},
			{
				name: 'My Account',
				href: '/account',
			},
		],
		endPage: 'Check Out',
	})
	return (
		<div className={styles.container}>
			<Breadcrumbs {...breadcrumbs} />
			<Title marginBottom='10' marginTop='52'>
				Check Out
			</Title>
			<div className={styles.content}>
				<div className={styles.orderSection}>
					<OrderSummary />
				</div>
				<div className={styles.billingSection}>
					<Billing />
				</div>
			</div>
		</div>
	)
}
