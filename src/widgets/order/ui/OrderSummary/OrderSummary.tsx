import {OrderSummaryItems} from '@/features/order'
import {OrderSummaryShip} from '@/features/order/ui/OrderSummaryShip/OrderSummaryShip'
import {Title} from '@/shared/ui/Text'
import styles from './OrderSummary.module.scss'

export const OrderSummary = () => {
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title} marginBottom='15' favorite={false}>
				Order Summary
			</Title>

			<OrderSummaryItems />
			<OrderSummaryShip />
		</div>
	)
}
