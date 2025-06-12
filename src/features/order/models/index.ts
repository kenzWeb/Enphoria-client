import {EnumOrderStatus} from '@/shared/types/order.interface'
export * from './orderProgress'

export const orderModels = [
	{
		name: 'Active',
		status: EnumOrderStatus.PENDING,
	},
	{
		name: 'Cancelled',
		status: EnumOrderStatus.CANCELLED,
	},

	{
		name: 'Completed',
		status: EnumOrderStatus.PAYED,
	},
] as const
