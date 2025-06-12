import {IOrderItem} from '@/shared/types/order.interface'

export type OrderStatusType = 'pending' | 'inprogress' | 'shipped' | 'delivered'

export interface OrderProgressProps {
	currentStatus: OrderStatusType
}

export interface OrderProgressStep {
	key: OrderStatusType
	label: string
}

export interface OrderUpdateNotificationProps {
	date: string
	message: string
}

export interface OrderItemCardProps {
	item: IOrderItem
}
