import {
	BackButton,
	OrderDetailNotification,
	OrderItems,
	OrderProgress,
	OrderUpdateNotification,
} from '@/features/order'
import {useGetMyOrder} from '@/shared/hooks/queries/order/useGetMyOrder'
import {IOrder} from '@/shared/types/order.interface'
import {useParams} from 'react-router-dom'
import styles from './OrderDetailInfo.module.scss'

export const OrderDetailInfo = () => {
	const {id} = useParams<{id: string}>()
	const {orders} = useGetMyOrder()

	const order = orders.find((order: IOrder) => order.id === id)

	if (!order) {
		return (
			<div className={styles.container}>
				<BackButton />
				<div className={styles.notFound}>Order not found</div>
			</div>
		)
	}

	const getOrderStatus = (
		status: string,
	): 'pending' | 'inprogress' | 'shipped' | 'delivered' => {
		switch (status.toLowerCase()) {
			case 'pending':
				return 'pending'
			case 'processing':
			case 'confirmed':
				return 'inprogress'
			case 'shipped':
				return 'shipped'
			case 'delivered':
			case 'completed':
				return 'delivered'
			default:
				return 'pending'
		}
	}

	const currentStatus = getOrderStatus(order.status)

	return (
		<div className={styles.container}>
			<BackButton />

			<OrderDetailNotification order={order} />

			<OrderProgress currentStatus={currentStatus} />

			<OrderUpdateNotification
				date={new Date(order.createdAt).toLocaleDateString()}
				message='Your order has been successfully verified.'
			/>
			<OrderItems />
		</div>
	)
}
