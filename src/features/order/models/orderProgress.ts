import {OrderProgressStep, OrderStatusType} from '../types'

export const orderProgressSteps: OrderProgressStep[] = [
	{key: 'pending', label: 'Order Placed'},
	{key: 'inprogress', label: 'In Progress'},
	{key: 'shipped', label: 'Shipped'},
	{key: 'delivered', label: 'Delivered'},
]

export const getOrderStatusIndex = (status: OrderStatusType): number => {
	return orderProgressSteps.findIndex((step) => step.key === status)
}

export const mapOrderStatus = (status: string): OrderStatusType => {
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
