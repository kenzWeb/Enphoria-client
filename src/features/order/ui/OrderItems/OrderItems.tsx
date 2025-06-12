import {useGetMyOrder} from '@/shared/hooks/queries/order/useGetMyOrder'
import {IOrder} from '@/shared/types/order.interface'
import {useParams} from 'react-router-dom'
import {OrderItemCard} from '../OrderItemCard/OrderItemCard'
import styles from './OrderItems.module.scss'

export const OrderItems = () => {
	const {id} = useParams<{id: string}>()
	const {orders} = useGetMyOrder()

	// Найти конкретный заказ по ID
	const order = orders.find((order: IOrder) => order.id === id)

	if (!order) {
		return <div className={styles.noOrder}>Order not found</div>
	}

	return (
		<div className={styles.container}>
			<div className={styles.itemsList}>
				{order.items?.length ? (
					order.items.map((item) => <OrderItemCard key={item.id} item={item} />)
				) : (
					<div className={styles.noItems}>No items in this order</div>
				)}
			</div>
		</div>
	)
}
