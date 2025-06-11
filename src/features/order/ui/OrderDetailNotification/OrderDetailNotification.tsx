import {useGetMyOrder} from '@/shared/hooks/queries/order/useGetMyOrder'
import {IOrder} from '@/shared/types/order.interface'
import styles from './OrderDetailNotification.module.scss'

export const OrderDetailNotification = () => {
	const {orders} = useGetMyOrder()

	return (
		<div>
			{orders.map((order: IOrder) => (
				<div key={order.id} className={styles.orderItem}>
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
			))}
		</div>
	)
}
