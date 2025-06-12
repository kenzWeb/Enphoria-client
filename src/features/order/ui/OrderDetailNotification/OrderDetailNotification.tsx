import {IOrder} from '@/shared/types/order.interface'
import styles from './OrderDetailNotification.module.scss'

interface OrderDetailNotificationProps {
	order: IOrder
}

export const OrderDetailNotification = ({
	order,
}: OrderDetailNotificationProps) => {
	return (
		<div className={styles.orderItem}>
			<div className={styles.orderDetails}>
				<h2 className={styles.orderTitle}>Order no: #{order.id}</h2>
				<h3 className={styles.orderStatus}>
					Placed On {new Date(order.createdAt).toLocaleDateString()}
				</h3>
			</div>
			<div>
				<h2 className={styles.total}>
					Total: <span>${order.total}.00</span>
				</h2>
			</div>
		</div>
	)
}
