import {OrderHeading} from '@/entitles/order'
import {OrderTabs} from '@/features/order'
import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'
import styles from './OrdersPage.module.scss'

export const OrdersPage = () => {
	useBreadcrumbsAccount()

	return (
		<div className={styles.container}>
			<OrderHeading />
			<OrderTabs />
		</div>
	)
}
