import {IUser} from './user.interface'

interface IAmount {
	value: string
	currency: string
}

interface IRecipient {
	account_id: string
	gateway_id: string
}

interface IPaymentMethod {
	type: string
	id: string
	saved: boolean
}

interface IConfirmation {
	type: string
	return_url: string
	confirmation_url: string
}

export interface IPaymentResponse {
	id: string
	status: string
	amount: IAmount
	recipient: IRecipient
	payment_method: IPaymentMethod
	created_at: Date
	confirmation: IConfirmation
}

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	CANCELLED = 'CANCELLED',
}

export interface IOrderItem {
	id: string
	quantity: number
	price: number
	createdAt: string
	updatedAt: string
	productId: string
	orderId: string
	product: {
		id: string
		name: string
		brand: string
		price: number
		description: string
		images: string[]
		gender: string
		type: string
		createdAt: string
		updatedAt: string
		categoryId: string
		styleId: string
		userId: string | null
	}
}

export interface IOrder {
	id: string
	createdAt: string
	items: IOrderItem[]
	status: EnumOrderStatus
	user: IUser
	total: number
}

export type TypePaymentData = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		price: number
		productId: string
	}[]
}
